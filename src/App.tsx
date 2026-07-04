/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar.js";
import { ChatSection } from "./components/ChatSection.js";
import { ExplorerSection } from "./components/ExplorerSection.js";
import { SymbolsSection } from "./components/SymbolsSection.js";
import { HomeSection } from "./components/HomeSection.js";
import { Message } from "./types.js";

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("home");
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const stored = localStorage.getItem("nepal_constitution_chat_history");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          return parsed.map((m: any) => ({
            ...m,
            timestamp: m.timestamp ? new Date(m.timestamp) : new Date()
          }));
        }
      }
    } catch (err) {
      console.error("Failed to load chat history:", err);
    }
    return [];
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [engineStatus, setEngineStatus] = useState<{ groq: boolean } | null>(null);

  // Sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem("nepal_constitution_chat_history", JSON.stringify(messages));
    } catch (err) {
      console.error("Failed to save chat history:", err);
    }
  }, [messages]);

  const handleClearChat = () => {
    setMessages([]);
    try {
      localStorage.removeItem("nepal_constitution_chat_history");
      localStorage.setItem("nepal_constitution_chat_history", "[]");
    } catch (err) {
      console.error("Failed to clear chat from local storage:", err);
    }
  };

  // Check backend health and active LLM configuration on mount
  useEffect(() => {
    async function checkHealth() {
      try {
        const response = await fetch("/api/health");
        if (response.ok) {
          const data = await response.json();
          setEngineStatus(data.engines);
        }
      } catch (err) {
        console.error("Health check call failed:", err);
        // Fallback assuming at least one engine is resolving
        setEngineStatus({ groq: false });
      }
    }
    checkHealth();
  }, []);

  // Send query message to our backend RAG endpoint
  const handleSendMessage = async (content: string) => {
    if (!content.trim() || loading) return;

    // 1. Append User Message
    const userMessage: Message = {
      id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      role: "user",
      content,
      timestamp: new Date()
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      // 2. Prepare payload history (max last 10 messages for token context buffer efficiency)
      const payloadHistory = updatedMessages.slice(-10).map(m => ({
        role: m.role,
        content: m.content
      }));

      // 3. Post to backend
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ messages: payloadHistory })
      });

      if (!response.ok) {
        throw new Error(`Chat API error: status ${response.status}`);
      }

      const data = await response.json();

      // 4. Append Assistant Message with grounding details
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.content,
        timestamp: new Date(),
        citations: data.citations || [],
        engineUsed: data.engineUsed || "Groq (Llama-3.3-70b)",
        searchedQuery: data.searchedQuery || content
      };

      setMessages(prev => [...prev, assistantMessage]);

    } catch (err: any) {
      console.error("Failed to fetch response:", err);
      
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        role: "assistant",
        content: "Oops! I encountered an error connecting to the AI engine. Please check that your network is connected and that your GROQ_API_KEY is configured in your env file.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`bg-[#0A0A0B] text-slate-100 flex flex-col selection:bg-[#DC143C]/30 selection:text-white ${
      currentTab === "chat" ? "h-screen overflow-hidden" : "min-h-screen justify-between"
    }`}>
      {/* Header / Navigation Hub */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        engineStatus={engineStatus}
      />

      {/* Primary Tab Viewport */}
      <main className={`flex-1 w-full ${
        currentTab === "chat" 
          ? "overflow-hidden flex flex-col" 
          : "max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8"
      }`}>
        {currentTab === "home" && (
          <HomeSection
            onStartChatting={() => setCurrentTab("chat")}
            messages={messages}
            onClearChat={handleClearChat}
          />
        )}

        {currentTab === "chat" && (
          <ChatSection
            messages={messages}
            loading={loading}
            onSendMessage={handleSendMessage}
            onClearChat={handleClearChat}
          />
        )}

        {currentTab === "explorer" && (
          <ExplorerSection />
        )}

        {currentTab === "symbols" && (
          <SymbolsSection />
        )}
      </main>

      {/* Footer Specification */}
      {currentTab !== "chat" && (
        <footer className="border-t border-[#222] bg-[#0A0A0B] py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-2">
            <span className="text-center text-[9px] text-slate-500 font-mono tracking-widest uppercase">
              Samvidhan Co-Pilot • Grounded Retrieval System • Promulgated Ashwin 3, 2072 B.S.
            </span>
            <span className="text-center text-[11px] text-slate-400 font-mono uppercase tracking-widest font-semibold">
              Made by Ankit Khatri KC
            </span>
          </div>
        </footer>
      )}
    </div>
  );
}

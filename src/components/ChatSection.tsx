/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { 
  Send, Sparkles, Terminal, Shield, HelpCircle, Trash2, 
  Copy, Check, Volume2, VolumeX, Scale, BookOpen, Landmark, 
  AlertTriangle, ChevronRight, CheckCircle2, FileText, Info
} from "lucide-react";
import Markdown from "react-markdown";
import { Message } from "../types.js";

interface ChatSectionProps {
  messages: Message[];
  loading: boolean;
  onSendMessage: (content: string) => void;
  onClearChat: () => void;
}

interface CategoryPrompt {
  title: string;
  desc: string;
  icon: React.ReactNode;
  tag: string;
  prompts: string[];
}

export function ChatSection({ messages, loading, onSendMessage, onClearChat }: ChatSectionProps) {
  const [inputValue, setInputValue] = useState("");
  const [activeDebugId, setActiveDebugId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [showConfirmClear, setShowConfirmClear] = useState(false);
  const clearTimerRef = useRef<NodeJS.Timeout | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Expanded citation per message
  const [selectedCitation, setSelectedCitation] = useState<Record<string, number | null>>({});

  const categories: CategoryPrompt[] = [
    {
      title: "Fundamental Rights",
      desc: "Articles 16 to 48. Human dignity, freedom, equality, justice, and liberty.",
      icon: <Scale className="w-5 h-5 text-emerald-400" />,
      tag: "Part 3",
      prompts: [
        "What are my fundamental rights under Article 18?",
        "Is the death penalty allowed in Nepal?",
        "What are the rights regarding labor and environment?"
      ]
    },
    {
      title: "State Powers & Executive",
      desc: "Articles 74 to 114. Appointment of Prime Minister, President, and legislative authorities.",
      icon: <Landmark className="w-5 h-5 text-amber-400" />,
      tag: "Part 7 & 8",
      prompts: [
        "How is the Prime Minister of Nepal appointed?",
        "What are the executive powers of the President?",
        "How does the federal parliament pass a new law?"
      ]
    },
    {
      title: "Judiciary & Courts",
      desc: "Articles 126 to 156. Powers of Supreme Court, High Courts, and dispute resolution.",
      icon: <BookOpen className="w-5 h-5 text-sky-400" />,
      tag: "Part 11",
      prompts: [
        "What is the hierarchy of courts in Nepal?",
        "How are Supreme Court justices selected?",
        "Can a High Court issue writs like Habeas Corpus?"
      ]
    },
    {
      title: "Emergency Provisions",
      desc: "Article 273. Declaration of State of Emergency, suspension of rights, and safeguards.",
      icon: <AlertTriangle className="w-5 h-5 text-rose-400" />,
      tag: "Part 31",
      prompts: [
        "What happens during a State of Emergency in Nepal?",
        "Which fundamental rights cannot be suspended during an Emergency?",
        "Who can declare a national State of Emergency?"
      ]
    }
  ];

  // Auto-scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || loading) return;
    onSendMessage(inputValue);
    setInputValue("");
  };

  const handleCopy = (text: string, messageId: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopiedId(messageId);
          setTimeout(() => setCopiedId(null), 2000);
        })
        .catch((err) => {
          console.error("Clipboard API failed, using fallback:", err);
          fallbackCopyText(text, messageId);
        });
    } else {
      fallbackCopyText(text, messageId);
    }
  };

  const fallbackCopyText = (text: string, messageId: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        setCopiedId(messageId);
        setTimeout(() => setCopiedId(null), 2000);
      } else {
        console.error("Fallback copy command was unsuccessful");
      }
    } catch (err) {
      console.error("Fallback copy failed:", err);
    }
    document.body.removeChild(textArea);
  };

  const handleSpeak = (text: string, messageId: string) => {
    if (speakingId === messageId) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }
    window.speechSynthesis.cancel();
    
    // Strip Markdown symbols for a cleaner voice output
    const cleanText = text
      .replace(/[*#`_\-]/g, "")
      .replace(/\[\d+\]/g, "") // remove markdown citation bracket notes
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);
    setSpeakingId(messageId);
    window.speechSynthesis.speak(utterance);
  };

  // Stop talking when unmounting
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
      if (clearTimerRef.current) clearTimeout(clearTimerRef.current);
    };
  }, []);

  return (
    <div className="flex-1 w-full min-h-0 flex flex-col bg-[#050508] relative overflow-hidden animate-fade-in">
      {/* Premium Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#DC143C]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/3 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
      
      {/* Top Premium Minimalist Toolbar */}
      <div className="shrink-0 bg-[#08080C]/90 backdrop-blur-xl border-b border-white/[0.04] px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 z-10">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="relative shrink-0">
            <span className="absolute -inset-1 rounded-full bg-red-500/20 blur-sm animate-pulse"></span>
            <span className="relative block w-2 h-2 bg-[#DC143C] rounded-full"></span>
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
              <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.05em] sm:tracking-[0.15em] text-slate-200 uppercase leading-none">
                Nepal Ko Samvidhan
              </span>
              <span className="text-[8px] sm:text-[9px] bg-red-950/40 border border-[#DC143C]/20 text-[#DC143C] font-mono px-1.5 sm:px-2 py-0.5 rounded-full font-bold uppercase tracking-wider leading-none shrink-0">
                Grounded RAG
              </span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-slate-500 font-sans mt-1 leading-tight hidden sm:block">
              Deep context verification against 308 legal Articles
            </p>
          </div>
        </div>

        {/* Responsive layout for subtitle and Clear button */}
        <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
          <p className="text-[9px] sm:hidden text-slate-500 font-sans leading-tight pr-2">
            Deep context verification against 308 legal Articles
          </p>

          <button
            onClick={() => {
              if (messages.length === 0) return;
              if (!showConfirmClear) {
                setShowConfirmClear(true);
                if (clearTimerRef.current) clearTimeout(clearTimerRef.current);
                clearTimerRef.current = setTimeout(() => {
                  setShowConfirmClear(false);
                }, 4000);
              } else {
                if (clearTimerRef.current) clearTimeout(clearTimerRef.current);
                onClearChat();
                window.speechSynthesis.cancel();
                setSpeakingId(null);
                setShowConfirmClear(false);
              }
            }}
            disabled={messages.length === 0}
            className={`px-3 py-1.5 border rounded-xl font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer select-none shrink-0 ${
              messages.length > 0
                ? showConfirmClear
                  ? "bg-red-700 hover:bg-red-800 text-white border-red-500 shadow-[0_0_12px_rgba(220,20,60,0.4)] animate-pulse"
                  : "bg-white/[0.02] hover:bg-red-950/20 border-white/[0.04] hover:border-[#DC143C]/40 text-slate-400 hover:text-white"
                : "bg-transparent border-white/[0.02] text-slate-600 cursor-not-allowed opacity-50"
            }`}
            title="Clear current thread"
          >
            <Trash2 className={`w-3.5 h-3.5 shrink-0 ${messages.length > 0 ? (showConfirmClear ? "text-white" : "text-[#DC143C]") : "text-slate-600"}`} />
            <span className="whitespace-nowrap">
              {showConfirmClear ? "Confirm?" : "Clear Conversation"}
            </span>
          </button>
        </div>
      </div>

      {/* Scrollable Message Thread Area */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-6 md:px-8 py-4 sm:py-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent bg-transparent flex flex-col">
        <div className="flex-1 max-w-3xl mx-auto w-full flex flex-col">
          {messages.length === 0 ? (
            /* Premium Custom Onboarding Interface */
            <div className="my-auto py-6 sm:py-8 text-center space-y-8 sm:space-y-10 animate-fade-in">
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex p-3.5 sm:p-4 bg-[#DC143C]/5 border border-[#DC143C]/15 rounded-2xl shadow-xl relative">
                  <span className="absolute -inset-1.5 bg-gradient-to-r from-[#DC143C]/10 to-amber-500/5 rounded-2xl blur-md"></span>
                  <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-[#DC143C] relative z-10" />
                </div>
                
                <div className="space-y-1.5 sm:space-y-2 px-2">
                  <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-white italic">
                    Namaste • नमस्ते
                  </h2>
                  <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
                    Your dynamic constitutional research partner. Grounded directly in the official text of the <span className="text-slate-100 font-semibold underline decoration-[#DC143C]/60 underline-offset-4">Constitution of Nepal 2072</span>.
                  </p>
                </div>
              </div>

              {/* Exploration Bento Category Cards */}
              <div className="space-y-4 pt-6 max-w-3xl mx-auto w-full">
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#DC143C]" /> EXPLORE CONSTITUTIONAL CATEGORIES:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  {categories.map((cat, idx) => {
                    const isExpanded = selectedCategory === idx;
                    return (
                      <div 
                        key={idx}
                        className={`border rounded-2xl p-5 transition-all duration-300 relative overflow-hidden bg-zinc-900/20 ${
                          isExpanded 
                            ? "border-[#DC143C]/40 ring-1 ring-[#DC143C]/25 bg-zinc-900/40" 
                            : "border-white/[0.04] hover:border-white/[0.1] hover:bg-zinc-900/30"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="p-2 bg-white/[0.02] border border-white/[0.04] rounded-xl">
                            {cat.icon}
                          </div>
                          <span className="text-[9px] font-mono font-bold tracking-widest text-slate-500 uppercase px-2 py-0.5 bg-white/[0.02] border border-white/[0.04] rounded-full">
                            {cat.tag}
                          </span>
                        </div>
                        
                        <div className="mt-4 space-y-1.5">
                          <h3 className="text-sm font-semibold text-white tracking-wide">{cat.title}</h3>
                          <p className="text-xs text-slate-400 leading-relaxed font-sans">{cat.desc}</p>
                        </div>

                        <button 
                          onClick={() => setSelectedCategory(isExpanded ? null : idx)}
                          className="mt-4 text-[11px] font-semibold text-slate-300 hover:text-white flex items-center gap-1 font-mono transition-colors cursor-pointer group"
                        >
                          {isExpanded ? "Hide Prompts" : "Explore Queries"}
                          <ChevronRight className={`w-3.5 h-3.5 text-[#DC143C] transition-transform ${isExpanded ? "rotate-90" : "group-hover:translate-x-0.5"}`} />
                        </button>

                        {/* Interactive prompt selections inside Category */}
                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-white/[0.04] space-y-2 animate-slide-up">
                            {cat.prompts.map((p, pIdx) => (
                              <button
                                key={pIdx}
                                onClick={() => onSendMessage(p)}
                                className="w-full text-left p-3 bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.03] hover:border-white/[0.08] rounded-xl text-xs text-slate-300 hover:text-white transition-all cursor-pointer flex items-center justify-between gap-3 font-serif italic"
                              >
                                <span>"{p}"</span>
                                <Send className="w-3 h-3 text-[#DC143C] shrink-0 opacity-40 group-hover:opacity-100" />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            /* Premium Conversation Thread */
            <div className="space-y-5 sm:space-y-6 pb-10 sm:pb-14 w-full">
              {messages.map((m) => {
                const isUser = m.role === "user";
                const isSpeaking = speakingId === m.id;
                return (
                  <div key={m.id} className={`flex gap-3 sm:gap-5 items-start ${isUser ? "justify-end" : "justify-start"} animate-slide-up`}>
                    
                    {/* Modern Clean AI Avatar */}
                    {!isUser && (
                      <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-[#DC143C]/20 to-red-950/40 border border-[#DC143C]/30 rounded-xl flex items-center justify-center shrink-0 shadow-lg relative">
                        <span className="absolute inset-0 bg-red-500/10 rounded-xl blur-sm"></span>
                        <Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DC143C] relative z-10" />
                      </div>
                    )}

                    <div className={`flex flex-col gap-1.5 ${isUser ? "max-w-[88%] sm:max-w-[78%] items-end" : "max-w-[calc(100%-44px)] sm:max-w-[78%] items-start"} min-w-0`}>
                      {/* Name and Timestamp Indicator */}
                      <div className="flex items-center gap-2 px-1 text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                        <span className={isUser ? "text-slate-400 font-semibold" : "text-[#DC143C] font-semibold"}>
                          {isUser ? "You" : "Samvidhan Guide"}
                        </span>
                        <span>•</span>
                        <span>{new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>

                      {/* Message Bubble Frame */}
                      <div className={`rounded-2xl relative leading-relaxed text-sm transition-all min-w-0 break-words ${
                        isUser
                          ? "p-3.5 sm:p-4.5 bg-gradient-to-r from-zinc-900 to-[#121216] border border-white/[0.04] text-slate-100 shadow-md rounded-tr-none"
                          : "p-4 sm:p-5.5 bg-white/[0.015] border border-white/[0.03] text-slate-200 shadow-xl rounded-tl-none border-l-2 border-l-[#DC143C]"
                      }`}>
                        
                        {/* Copy / TTS Action Controls inside bubble */}
                        <div className="absolute top-3 right-3 flex items-center gap-1 opacity-0 hover:opacity-100 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                          {/* We use hover properties or show them subtly on the bottom-right for desktop and responsive devices */}
                        </div>

                        {/* Text Content */}
                        <div className="text-[14px] leading-relaxed font-sans text-slate-200 select-text markdown-container break-words overflow-x-hidden">
                          <Markdown
                            components={{
                              p: ({ children }) => <p className="mb-4 last:mb-0 leading-relaxed font-sans text-slate-200 break-words">{children}</p>,
                              strong: ({ children }) => <strong className="font-bold text-white bg-red-950/20 px-1.5 py-0.5 rounded text-[#DC143C] break-words">{children}</strong>,
                              em: ({ children }) => <em className="italic text-slate-300 break-words">{children}</em>,
                              ul: ({ children }) => <ul className="list-disc pl-5 mb-4 space-y-2 text-slate-300 break-words">{children}</ul>,
                              ol: ({ children }) => <ol className="list-decimal pl-5 mb-4 space-y-2 text-slate-300 break-words">{children}</ol>,
                              li: ({ children }) => <li className="text-[14px] leading-relaxed break-words">{children}</li>,
                              h1: ({ children }) => <h1 className="text-base font-black text-white mt-6 mb-3 tracking-wide border-b border-white/[0.04] pb-1.5 uppercase font-mono break-words">{children}</h1>,
                              h2: ({ children }) => <h2 className="text-sm font-bold text-white mt-5 mb-2.5 tracking-wide uppercase font-mono text-[#DC143C] break-words">{children}</h2>,
                              h3: ({ children }) => <h3 className="text-[14px] font-bold text-white mt-4 mb-2 break-words">{children}</h3>,
                              code: ({ children }) => <code className="bg-white/[0.03] px-1.5 py-0.5 rounded text-xs font-mono text-[#DC143C] border border-white/[0.05] whitespace-pre-wrap break-all">{children}</code>
                            }}
                          >
                            {m.content}
                          </Markdown>
                        </div>

                        {/* Grounding Citations Drawer */}
                        {!isUser && m.citations && m.citations.length > 0 && (
                          <div className="mt-6 border-t border-white/[0.04] pt-4.5 space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              {/* Source Anchor Badges */}
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="text-[9px] text-slate-500 font-mono tracking-widest mr-1 uppercase font-bold flex items-center gap-1">
                                  <Shield className="w-3.5 h-3.5 text-[#DC143C]" /> Verified Sources:
                                </span>
                                {m.citations.map((cit, idx) => {
                                  const isExpanded = selectedCitation[m.id] === cit.number;
                                  return (
                                    <button
                                      key={idx}
                                      onClick={() => setSelectedCitation(prev => ({
                                        ...prev,
                                        [m.id]: isExpanded ? null : cit.number
                                      }))}
                                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono border transition-all cursor-pointer ${
                                        isExpanded
                                          ? "bg-[#DC143C] text-white border-[#DC143C] font-semibold shadow-md shadow-[#DC143C]/20"
                                          : "bg-white/[0.02] text-slate-400 border-white/[0.04] hover:border-[#DC143C]/40 hover:text-white"
                                      }`}
                                    >
                                      Article {cit.number}
                                    </button>
                                  );
                                })}
                              </div>

                              {/* Interactive Utilities: Voice synthesis + Copy + Trace pipeline */}
                              <div className="flex items-center gap-2 self-end sm:self-auto">
                                <button
                                  onClick={() => handleSpeak(m.content, m.id)}
                                  className={`p-2 rounded-lg border transition-all cursor-pointer flex items-center justify-center ${
                                    isSpeaking 
                                      ? "bg-[#DC143C]/10 border-[#DC143C]/40 text-[#DC143C]" 
                                      : "bg-white/[0.02] border-white/[0.04] text-slate-400 hover:text-white hover:border-white/[0.1]"
                                  }`}
                                  title={isSpeaking ? "Mute explanation" : "Listen aloud"}
                                >
                                  {isSpeaking ? <VolumeX className="w-3.5 h-3.5 animate-pulse" /> : <Volume2 className="w-3.5 h-3.5" />}
                                </button>

                                <button
                                  onClick={() => handleCopy(m.content, m.id)}
                                  className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-slate-400 hover:text-white hover:border-white/[0.1] transition-all cursor-pointer flex items-center justify-center"
                                  title="Copy text to clipboard"
                                >
                                  {copiedId === m.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                </button>

                                <button
                                  onClick={() => setActiveDebugId(activeDebugId === m.id ? null : m.id)}
                                  className="text-[9px] font-mono text-slate-500 hover:text-white flex items-center gap-1.5 border border-white/[0.04] px-2.5 py-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer"
                                >
                                  <Terminal className="w-3.5 h-3.5 text-[#DC143C]" />
                                  {activeDebugId === m.id ? "Close Logs" : "Trace RAG"}
                                </button>
                              </div>
                            </div>

                             {/* Detailed Article Anchor Disclosure Box */}
                             {m.citations.map((cit) => {
                               const isExpanded = selectedCitation[m.id] === cit.number;
                               if (!isExpanded) return null;
                               return (
                                 <div key={`expanded-${cit.number}`} className="mt-3 p-4 sm:p-5 bg-[#08080C] border border-white/[0.03] rounded-2xl relative animate-slide-up text-left shadow-inner overflow-hidden min-w-0 break-words">
                                   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-white/[0.04] pb-2.5 mb-3">
                                     <div className="font-mono text-[10px] text-[#DC143C] uppercase tracking-wider flex items-start gap-2 font-bold break-words min-w-0">
                                       <Shield className="w-4 h-4 text-[#DC143C] shrink-0 mt-0.5" />
                                       <span className="break-words">Article {cit.number}: {cit.title}</span>
                                     </div>
                                     <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest bg-white/[0.02] px-2.5 py-0.5 rounded border border-white/[0.04] self-start sm:self-auto shrink-0">
                                       Part {cit.part} • {cit.partTitle}
                                     </span>
                                   </div>
                                   <p className="text-xs sm:text-[13px] leading-relaxed text-[#BBB] font-serif italic whitespace-pre-wrap select-text break-words">
                                     {cit.content}
                                   </p>
                                 </div>
                               );
                             })}
 
                             {/* Enterprise-grade Trace RAG pipeline dashboard */}
                             {activeDebugId === m.id && (
                               <div className="bg-[#040407] border border-white/[0.03] rounded-2xl p-4 sm:p-5 font-mono text-[10px] text-slate-400 leading-normal animate-slide-up space-y-4 overflow-hidden min-w-0 break-words">
                                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.04] pb-2 text-[#DC143C] font-bold uppercase tracking-wider">
                                   <div className="flex items-center gap-2 min-w-0">
                                     <Terminal className="w-4 h-4 shrink-0" /> 
                                     <span className="truncate">Verification Trace logs</span>
                                   </div>
                                   <span className="text-[8px] text-slate-600 shrink-0">Engine Response Status: 200 OK</span>
                                 </div>
 
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                                   <div className="space-y-1.5 p-3 bg-white/[0.01] border border-white/[0.03] rounded-xl overflow-hidden break-words min-w-0">
                                     <p className="text-[9px] text-slate-500 uppercase font-black">SEARCH EMBEDDING</p>
                                     <p className="text-slate-300 font-sans italic break-words">"{m.searchedQuery || inputValue || "Constitutional analysis query"}"</p>
                                   </div>
                                   <div className="space-y-1.5 p-3 bg-white/[0.01] border border-white/[0.03] rounded-xl overflow-hidden break-words min-w-0">
                                     <p className="text-[9px] text-slate-500 uppercase font-black">ACTIVE AGENT MODEL</p>
                                     <p className="text-slate-300 break-words">{m.engineUsed || "Groq (Llama-3.3-70b)"}</p>
                                   </div>
                                 </div>
 
                                 <div className="space-y-3 min-w-0">
                                   <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-1.5">
                                     <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Grounded Context Ingestion Pipeline:
                                   </p>
                                   <div className="space-y-2.5 pl-3 border-l-2 border-[#DC143C]/20 min-w-0 break-words">
                                     {m.citations.map((cit, idx) => (
                                       <div key={idx} className="text-xs break-words min-w-0">
                                         <p className="text-slate-300 font-serif italic break-words">
                                           Article {cit.number} ({cit.title})
                                         </p>
                                        <p className="text-slate-500 text-[11px] font-sans mt-0.5">{cit.summary}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Loader indicator styled like legal search analysis */}
              {loading && (
                <div className="flex justify-start gap-5 animate-pulse">
                  <div className="w-9 h-9 rounded-xl border border-[#DC143C]/20 bg-white/[0.01] flex items-center justify-center shrink-0 shadow-md">
                    <Terminal className="w-4 h-4 text-[#DC143C] animate-spin" style={{ animationDuration: "2.5s" }} />
                  </div>
                  <div className="flex flex-col gap-2 max-w-[80%]">
                    <span className="text-[9px] font-mono text-slate-500 tracking-wider">Legal Database Probe Active</span>
                    <div className="bg-[#08080C] border border-white/[0.03] border-l-2 border-l-[#DC143C] rounded-2xl rounded-tl-none p-4.5 text-slate-400 font-mono text-[10px] uppercase tracking-wider flex items-center gap-3 shadow-lg">
                      <span className="w-2 h-2 bg-[#DC143C] rounded-full animate-ping"></span>
                      <span>Traversing constitutional registers & verifying compliance...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
          )}
        </div>
      </div>

      {/* Floating Modern Console Input Panel */}
      <div className="shrink-0 bg-gradient-to-t from-[#050508] via-[#050508]/95 to-transparent pt-4 sm:pt-6 pb-4 sm:pb-6 px-3 sm:px-4 relative z-20 border-t border-white/[0.03]">
        <div className="max-w-3xl mx-auto w-full">
          <form onSubmit={handleSubmit} className="relative flex items-center">
            <div className="w-full bg-[#08080C] border border-white/[0.04] focus-within:border-[#DC143C]/60 focus-within:ring-2 focus-within:ring-[#DC143C]/5 rounded-2xl flex items-center pl-4 sm:pl-5 pr-12 sm:pr-14 py-1.5 sm:py-2 shadow-2xl transition-all">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={loading}
                className="bg-transparent flex-1 py-2.5 sm:py-3.5 outline-none text-[13px] sm:text-[14px] text-white placeholder:text-slate-600 font-sans pr-3 sm:pr-4"
                placeholder="Ex: What are the directive principles? / Ask about Article 18..."
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || loading}
                className="absolute right-2 sm:right-3 p-2.5 sm:p-3 bg-[#DC143C] hover:bg-[#C00F31] disabled:opacity-30 disabled:hover:bg-[#DC143C] text-white rounded-xl transition-all cursor-pointer disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-[#DC143C]/20 hover:scale-[1.02] active:scale-95 duration-200"
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </form>
          
          <div className="flex items-center justify-center gap-1.5 text-[8px] sm:text-[9px] text-slate-600 font-mono mt-2.5 uppercase tracking-widest text-center">
            <Info className="w-3 h-3 text-slate-500 shrink-0" />
            <span className="truncate">Encrypted Retrieval Network • English/Nepali Query Parsing</span>
          </div>
        </div>
      </div>
    </div>
  );
}

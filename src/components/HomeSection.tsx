/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { Flag, ArrowRight, Shield, BookOpen, MessageSquare, Trash2, Clock, Calendar, Database, FileText } from "lucide-react";
import { Message } from "../types.js";

interface HomeSectionProps {
  onStartChatting: () => void;
  messages: Message[];
  onClearChat: () => void;
}

export function HomeSection({ onStartChatting, messages, onClearChat }: HomeSectionProps) {
  const hasHistory = messages.length > 0;
  const [showConfirmClear, setShowConfirmClear] = useState(false);
  const clearTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (clearTimerRef.current) clearTimeout(clearTimerRef.current);
    };
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-12 animate-fade-in relative">
      {/* Dynamic Grid Background overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(#DC143C 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

      {/* Hero Showcase Block */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F0F12] to-[#14141A] border border-[#222] p-8 sm:p-12 text-center space-y-6 z-10 shadow-2xl">
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#DC143C]/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-blue-500/10 rounded-full blur-3xl"></div>

        {/* Nepal Emblem Stylized Motif */}
        <div className="mx-auto inline-flex items-center justify-center w-16 h-16 bg-[#DC143C]/10 border border-[#DC143C]/30 text-[#DC143C] mb-2 animate-pulse" style={{ animationDuration: "4s" }}>
          <Flag className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#DC143C] uppercase font-bold">
            Federal Democratic Republic of Nepal
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight select-none">
            NEPAL KO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC143C] to-[#E3425F]">SAMVIDHAN</span>
          </h1>
          <p className="font-serif text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Unveil the Supreme Law of Nepal with a highly precise, AI-powered Retrieval-Augmented Generation (RAG) assistant. Grounded natively in the 308 Articles of the official 2072 Constitution.
          </p>
        </div>

        {/* CTA Actions Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <button
            onClick={onStartChatting}
            className="w-full sm:w-auto px-8 py-4 bg-[#DC143C] hover:bg-[#C00F31] text-white font-mono text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2.5 group shadow-lg hover:shadow-[#DC143C]/20 cursor-pointer"
          >
            {hasHistory ? "Resume Consultation" : "Start Chatting"}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {hasHistory && (
            <button
              onClick={() => {
                if (!showConfirmClear) {
                  setShowConfirmClear(true);
                  if (clearTimerRef.current) clearTimeout(clearTimerRef.current);
                  clearTimerRef.current = setTimeout(() => {
                    setShowConfirmClear(false);
                  }, 4000);
                } else {
                  if (clearTimerRef.current) clearTimeout(clearTimerRef.current);
                  onClearChat();
                  setShowConfirmClear(false);
                }
              }}
              className={`w-full sm:w-auto px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                showConfirmClear
                  ? "bg-red-700 hover:bg-red-800 text-white border-red-500 shadow-[0_0_15px_rgba(220,20,60,0.3)] animate-pulse"
                  : "bg-[#1A1A1E] border border-[#333] hover:border-[#DC143C]/50 text-slate-400 hover:text-white"
              }`}
            >
              <Trash2 className={`w-4 h-4 ${showConfirmClear ? "text-white" : "text-[#DC143C]"}`} />
              {showConfirmClear ? "Confirm Clear?" : "Delete Chat"}
            </button>
          )}
        </div>

        {/* Local History Stats Indicator */}
        <div className="pt-4 flex items-center justify-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          <span>
            {hasHistory
              ? `Local Session Active: ${messages.length} messages preserved`
              : "No persistent local sessions found • Ready for new conversation"}
          </span>
        </div>
      </section>

      {/* Quick Access Metadata Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Parts of Constitution", value: "35", description: "From federal executive structure to transient provisions." },
          { label: "Constitutional Articles", value: "308", description: "Extensively parsed and mapped into the local vector space." },
          { label: "Schedules annexed", value: "9", description: "Provincial boundaries, state emblems, lists of federal powers." }
        ].map((stat, idx) => (
          <div key={idx} className="bg-[#111] border border-[#222] p-6 hover:border-[#333] transition-all text-left">
            <p className="text-[#DC143C] text-3xl font-serif font-black">{stat.value}</p>
            <p className="text-xs font-mono font-bold uppercase text-white mt-2 tracking-wider">{stat.label}</p>
            <p className="text-[11px] text-slate-400 mt-1 font-serif leading-relaxed">{stat.description}</p>
          </div>
        ))}
      </section>

      {/* Core Highlights & Guidance Grid */}
      <section className="space-y-6">
        <div className="border-b border-[#222] pb-3 text-left">
          <h2 className="text-xs font-mono tracking-[0.2em] text-[#888] uppercase font-bold flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#DC143C]" /> PILLARS OF THE CONSTITUTION
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Item 1 */}
          <div className="space-y-2 bg-[#0F0F12] border border-slate-900/60 p-5 rounded-sm">
            <div className="flex items-center gap-2 text-white font-serif font-bold text-sm">
              <span className="w-5 h-5 rounded-full bg-[#DC143C]/10 border border-[#DC143C]/30 text-[#DC143C] flex items-center justify-center text-[10px] font-mono">1</span>
              Fundamental Rights
            </div>
            <p className="text-xs text-slate-400 font-serif leading-relaxed">
              Articles 16 through 48 guarantee critical civil liberties, including freedom of expression, right to equality, gender justice, and constitutional remedies.
            </p>
          </div>

          {/* Item 2 */}
          <div className="space-y-2 bg-[#0F0F12] border border-slate-900/60 p-5 rounded-sm">
            <div className="flex items-center gap-2 text-white font-serif font-bold text-sm">
              <span className="w-5 h-5 rounded-full bg-[#DC143C]/10 border border-[#DC143C]/30 text-[#DC143C] flex items-center justify-center text-[10px] font-mono">2</span>
              Three-Tier Federation
            </div>
            <p className="text-xs text-slate-400 font-serif leading-relaxed">
              Established three structural components of state authority: Federal, Provincial, and Local, distributing resources and administrative powers equitably.
            </p>
          </div>

          {/* Item 3 */}
          <div className="space-y-2 bg-[#0F0F12] border border-slate-900/60 p-5 rounded-sm">
            <div className="flex items-center gap-2 text-white font-serif font-bold text-sm">
              <span className="w-5 h-5 rounded-full bg-[#DC143C]/10 border border-[#DC143C]/30 text-[#DC143C] flex items-center justify-center text-[10px] font-mono">3</span>
              Sovereignty & Authority
            </div>
            <p className="text-xs text-slate-400 font-serif leading-relaxed">
              Vests absolute state authority and sovereignty solely in the Nepali people, replacing monarchy with an inclusive republican framework.
            </p>
          </div>
        </div>
      </section>

      {/* RAG Verification & Compliance Section */}
      <section className="bg-[#0A0A0B] border border-[#222] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-left">
        <div className="space-y-3">
          <h3 className="font-serif text-xl font-bold text-white tracking-tight">
            Advanced Verification Protocol
          </h3>
          <p className="text-xs text-slate-400 font-serif leading-relaxed">
            To ensure maximum legal accuracy, Nepal Ko Samvidhan uses a proprietary vector chunking pipeline. Every prompt undergoes semantic vector evaluation, matching with official legal passages, and generating grounded responses with direct article-level citations.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-[#1A1A1E] border border-[#222] text-[9px] font-mono text-slate-400">
              <Database className="w-3 h-3 text-[#DC143C]" /> Vector Search RAG
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-[#1A1A1E] border border-[#222] text-[9px] font-mono text-slate-400">
              <FileText className="w-3 h-3 text-[#DC143C]" /> Strict Fact Verification
            </span>
          </div>
        </div>

        <div className="p-4 bg-[#0F0F12] border border-slate-900 space-y-4">
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
            Sample Inquiries of High Interest:
          </p>
          <div className="space-y-2 text-xs">
            {[
              "What qualifies an individual for Nepali citizenship?",
              "What is the procedure to amend the Constitution?",
              "What are the emergency provisions of Article 273?"
            ].map((q, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onStartChatting();
                  // Pre-fill query or send immediately using setTimeout to allow render
                  setTimeout(() => {
                    const inputElement = document.querySelector('input[placeholder*="Ask about"]') as HTMLInputElement;
                    if (inputElement) {
                      inputElement.value = q;
                      // Trigger focus
                      inputElement.focus();
                    }
                  }, 100);
                }}
                className="w-full text-left p-2.5 bg-[#141418] hover:bg-[#1A1A22] border border-[#222] hover:border-[#DC143C]/30 text-slate-300 font-serif italic transition-all block cursor-pointer"
              >
                "{q}"
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

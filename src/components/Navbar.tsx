/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Flag, Clock, Cpu, Sparkles } from "lucide-react";

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  engineStatus: { groq: boolean } | null;
}

export function Navbar({ currentTab, setCurrentTab, engineStatus }: NavbarProps) {
  const [nstTime, setNstTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      // Calculate NST (Nepal Standard Time: UTC + 5:45)
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const nstOffset = 5.75 * 3600000; // 5 hours and 45 minutes
      const nstDate = new Date(utc + nstOffset);
      
      const timeStr = nstDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      });
      setNstTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="h-auto md:h-20 border-b border-[#DC143C]/30 bg-[#0F0F12] sticky top-0 z-40 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 shrink-0 w-full flex items-center justify-between">
        {/* Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="leading-none">
            <h1 className="text-lg sm:text-xl font-serif font-black tracking-tighter text-white">
              SAMVIDHAN <span className="text-[#DC143C]">AI</span>
            </h1>
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#888] font-mono mt-0.5">
              The Constitution of Nepal 2072
            </p>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden md:flex gap-6 items-center text-xs font-bold tracking-widest uppercase">
          {["home", "chat", "explorer", "symbols"].map((tab) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`pb-1 cursor-pointer transition-all border-b-2 font-mono ${
                currentTab === tab
                  ? "text-[#DC143C] border-[#DC143C] font-black"
                  : "text-[#666] border-transparent hover:text-white"
              }`}
            >
              {tab === "home" ? "Home" : tab === "chat" ? "Knowledge Base" : tab === "explorer" ? "Explorer" : "Schedules"}
            </button>
          ))}
        </nav>

        {/* Live Status Indicators */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Nepal Time Badge */}
          <div className="flex items-center gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 bg-[#1A1A1E] border border-[#333] text-slate-300 font-mono text-[9px] sm:text-[10px] tracking-wider">
            <Clock className="w-3 h-3 text-[#DC143C] shrink-0" />
            <span className="hidden md:inline text-[#888]">NST:</span>
            <span className="text-white font-bold">{nstTime}</span>
          </div>

          {/* Active AI Engine Indicator */}
          <div className="px-2 sm:px-3 py-0.5 sm:py-1 border border-[#333] bg-[#0F0F12] rounded-full flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono tracking-widest">
            <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${engineStatus?.groq ? "bg-green-500 animate-pulse" : "bg-red-500"}`}></div>
            <span className="text-[#888] font-bold uppercase">
              <span className="hidden sm:inline">{engineStatus?.groq ? "GROQ ACTIVE" : "GROQ OFFLINE"}</span>
              <span className="sm:hidden">GROQ</span>
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Tabs (Shown under Header) */}
      <div className="md:hidden flex bg-[#0A0A0B] border-t border-[#222] p-1.5 justify-around w-full shrink-0">
        {["home", "chat", "explorer", "symbols"].map((tab) => (
          <button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`flex-1 text-center py-2 text-[10px] font-mono font-bold uppercase tracking-wider transition-all ${
              currentTab === tab
                ? "text-[#DC143C] border-b-2 border-[#DC143C] font-black"
                : "text-slate-500"
            }`}
          >
            {tab === "home" ? "Home" : tab === "chat" ? "Knowledge" : tab === "explorer" ? "Explorer" : "Schedules"}
          </button>
        ))}
      </div>
    </header>
  );
}

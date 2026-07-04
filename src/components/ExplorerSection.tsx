/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { Book, Search, ChevronRight, Copy, Check, Info, Shield, Sliders } from "lucide-react";
import { CONSTITUTION_PARTS, CONSTITUTION_ARTICLES, ConstitutionArticle } from "../data/nepal_constitution.js";
import { searchConstitution } from "../data/rag_engine.js";

export function ExplorerSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPart, setSelectedPart] = useState<number | null>(null);
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Perform search scoring or list filtering
  const filteredArticles = useMemo(() => {
    if (searchQuery.trim().length > 0) {
      const scoredResults = searchConstitution(searchQuery);
      return scoredResults.map(r => r.article);
    }

    if (selectedPart !== null) {
      return CONSTITUTION_ARTICLES.filter(a => a.part === selectedPart);
    }

    // Default: Show first 15 articles
    return CONSTITUTION_ARTICLES.slice(0, 15);
  }, [searchQuery, selectedPart]);

  const handleCopy = (article: ConstitutionArticle) => {
    const textToCopy = `Constitution of Nepal, Part ${article.part}, Article ${article.number}: ${article.title}\n\n[Text]: ${article.content}\n[Summary]: ${article.summary}`;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          setCopiedId(article.number);
          setTimeout(() => setCopiedId(null), 2000);
        })
        .catch((err) => {
          console.error("Clipboard API failed, using fallback:", err);
          fallbackCopyText(textToCopy, article.number);
        });
    } else {
      fallbackCopyText(textToCopy, article.number);
    }
  };

  const fallbackCopyText = (text: string, articleNumber: number) => {
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
        setCopiedId(articleNumber);
        setTimeout(() => setCopiedId(null), 2000);
      } else {
        console.error("Fallback copy command was unsuccessful");
      }
    } catch (err) {
      console.error("Fallback copy failed:", err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="font-serif text-3xl sm:text-4xl font-black italic tracking-tight text-white uppercase">
          Samvidhan Explorer
        </h2>
        <p className="mt-2 text-[10px] text-slate-400 font-mono uppercase tracking-[0.2em]">
          All 35 Parts and 308 Articles Indexed for High-Precision Querying
        </p>
      </div>

      {/* Modern Search Hub */}
      <div className="max-w-3xl mx-auto mb-10 relative">
        <div className="h-14 bg-[#1A1A1E] border border-[#333] flex items-center px-4 gap-4">
          <Search className="h-4 w-4 text-[#888] shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedPart(null); // Clear selected part when searching
            }}
            className="bg-transparent flex-1 outline-none text-sm text-white placeholder-[#555] font-mono"
            placeholder="Search by keywords (e.g. equality, citizenship, language, Article 18...)"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-[10px] font-mono uppercase tracking-widest text-[#888] hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Bento Parts Navigator */}
        <div className="lg:col-span-4 bg-[#0C0C0E] border border-[#222] p-5 max-h-[640px] overflow-y-auto">
          <div className="flex items-center justify-between border-b border-[#222] pb-3 mb-4">
            <h3 className="font-mono text-[10px] font-bold text-[#DC143C] flex items-center gap-1.5 uppercase tracking-widest">
              <Sliders className="w-3.5 h-3.5" /> BROWSE PARTS
            </h3>
            {selectedPart !== null && (
              <button
                onClick={() => setSelectedPart(null)}
                className="text-[9px] text-[#DC143C] hover:underline font-mono uppercase tracking-widest"
              >
                Show All
              </button>
            )}
          </div>
          
          <div className="space-y-1">
            {CONSTITUTION_PARTS.map((part) => {
              const isSelected = selectedPart === part.number;
              return (
                <button
                  key={part.number}
                  onClick={() => {
                    setSelectedPart(part.number);
                    setSearchQuery(""); // Clear search when selecting part
                  }}
                  className={`w-full transition-all text-left flex items-center justify-between py-2.5 px-2 ${
                    isSelected
                      ? "text-[#DC143C] bg-[#DC143C]/5 border-l-2 border-[#DC143C] font-semibold italic text-sm"
                      : "text-[#888] hover:text-white hover:bg-white/5 font-serif italic text-sm"
                  }`}
                >
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-[9px] text-slate-600 not-italic uppercase">
                      P{part.number}
                    </span>
                    <span className="font-serif leading-tight">{part.title}</span>
                  </div>
                  {isSelected && (
                    <span className="not-italic font-mono text-[8px] tracking-widest bg-[#DC143C]/10 text-[#DC143C] px-1 py-0.5 uppercase font-bold">
                      Active
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Articles Display Container */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-mono text-[10px] font-bold text-[#DC143C] flex items-center gap-1.5 uppercase tracking-widest">
              <Book className="w-3.5 h-3.5" />
              {searchQuery ? `SEARCH: "${searchQuery.toUpperCase()}"` : selectedPart ? `ARTICLES IN PART ${selectedPart}` : "FEATURED ARTICLES"}
            </h3>
            <span className="text-[9px] font-mono text-slate-500 bg-[#111] px-2.5 py-1 border border-[#222]">
              Showing {filteredArticles.length} of {CONSTITUTION_ARTICLES.length} Articles
            </span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-[#0F0F12] border border-[#222]">
              <Info className="w-8 h-8 text-[#DC143C] mx-auto mb-3 animate-pulse" />
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">No matching articles discovered.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedPart(null);
                }}
                className="mt-4 px-4 py-2 bg-[#DC143C] text-white font-mono text-[10px] tracking-widest uppercase hover:bg-opacity-95"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredArticles.map((article) => (
                <div
                  key={article.number}
                  className="bg-[#0F0F12] border-b border-[#222] p-6 hover:bg-[#131317] transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono bg-[#DC143C] text-white font-bold uppercase tracking-wider px-2 py-0.5">
                          Article {article.number}
                        </span>
                        <span className="text-[9px] text-[#666] font-mono uppercase tracking-wider">
                          Part {article.part} • {article.partTitle}
                        </span>
                      </div>
                      <h4 className="font-serif text-lg font-bold text-white mt-2 leading-snug">
                        {article.title}
                      </h4>
                    </div>
                    
                    <button
                      onClick={() => handleCopy(article)}
                      className="p-2 hover:bg-[#1A1A1E] text-slate-400 hover:text-white transition-colors"
                      title="Copy legal citation"
                    >
                      {copiedId === article.number ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Summary Segment */}
                  <p className="text-sm text-[#BBB] font-sans leading-relaxed my-3">
                    {article.summary}
                  </p>

                  {/* Full Text Toggle Container */}
                  <div className="border-t border-[#222] pt-3 mt-2">
                    <button
                      onClick={() => setExpandedArticle(expandedArticle === article.number ? null : article.number)}
                      className="text-[10px] font-mono uppercase tracking-widest text-[#DC143C] hover:underline flex items-center gap-1.5"
                    >
                      {expandedArticle === article.number ? "Hide Full Legal Text" : "View Full Legal Text"}
                    </button>

                    {expandedArticle === article.number && (
                      <div className="mt-4 p-5 bg-[#0C0C0E] border-l-2 border-[#DC143C] relative animate-slide-up">
                        <p className="font-mono text-[9px] text-[#DC143C] uppercase tracking-widest mb-2 flex items-center gap-1">
                          <Shield className="w-3.5 h-3.5 text-nepal-gold" /> CONSTITUTIONAL LAW TEXT
                        </p>
                        <p className="text-xs sm:text-sm leading-relaxed text-[#BBB] font-serif italic whitespace-pre-wrap select-all">
                          {article.content}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Tag List */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#222]">
                    {article.keywords.map((kw, idx) => (
                      <span
                        key={idx}
                        className="text-[8px] font-mono text-[#555] bg-[#0A0A0B] px-2 py-0.5 border border-[#222] uppercase tracking-widest"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

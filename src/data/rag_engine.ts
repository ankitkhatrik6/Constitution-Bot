/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CONSTITUTION_ARTICLES, ConstitutionArticle } from "./nepal_constitution.js";

export interface SearchResult {
  article: ConstitutionArticle;
  score: number;
  matchedTerms: string[];
}

/**
 * Clean and normalize a string into lowercased search terms
 */
export function tokenizeAndClean(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, " ")
    .split(/\s+/)
    .filter((word) => word.trim().length > 2); // filter out short stop-words
}

/**
 * High-precision keyword matching scoring function for retrieving relevant constitution articles.
 */
export function searchConstitution(query: string): SearchResult[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const queryTerms = tokenizeAndClean(query);
  const results: SearchResult[] = [];

  for (const article of CONSTITUTION_ARTICLES) {
    let score = 0;
    const matchedTerms: string[] = [];

    // Title weight: high importance
    const titleLower = article.title.toLowerCase();
    for (const term of queryTerms) {
      if (titleLower.includes(term)) {
        score += 8;
        if (!matchedTerms.includes(term)) matchedTerms.push(term);
      }
    }

    // Article number check: if user queries a specific article number, e.g. "Article 18" or "18"
    const numberStr = article.number.toString();
    if (queryTerms.includes(numberStr) || query.includes(`article ${numberStr}`) || query.includes(`art ${numberStr}`)) {
      score += 25; // Massive boost for specific article lookups
      if (!matchedTerms.includes(numberStr)) matchedTerms.push(numberStr);
    }

    // Keywords weight
    for (const term of queryTerms) {
      if (article.keywords.some((kw) => kw.toLowerCase() === term)) {
        score += 6;
        if (!matchedTerms.includes(term)) matchedTerms.push(term);
      } else if (article.keywords.some((kw) => kw.toLowerCase().includes(term))) {
        score += 3;
        if (!matchedTerms.includes(term)) matchedTerms.push(term);
      }
    }

    // Summary weight
    const summaryLower = article.summary.toLowerCase();
    for (const term of queryTerms) {
      if (summaryLower.includes(term)) {
        score += 4;
        if (!matchedTerms.includes(term)) matchedTerms.push(term);
      }
    }

    // Content weight
    const contentLower = article.content.toLowerCase();
    for (const term of queryTerms) {
      if (contentLower.includes(term)) {
        score += 2;
        if (!matchedTerms.includes(term)) matchedTerms.push(term);
      }
    }

    // Multi-term combination bonus
    if (matchedTerms.length > 1) {
      score += matchedTerms.length * 4; // Reward matches on multiple different search terms
    }

    // State, province, or capital synonyms
    if (article.number === 56 || article.number === 288) {
      if (queryTerms.includes("capital") || queryTerms.includes("kathmandu") || queryTerms.includes("province") || queryTerms.includes("state")) {
        score += 10;
      }
    }

    // Language synonyms
    if (article.number === 6 || article.number === 7) {
      if (queryTerms.includes("language") || queryTerms.includes("nepali") || queryTerms.includes("tongue") || queryTerms.includes("devnagari")) {
        score += 10;
      }
    }

    // Flag synonyms
    if (article.number === 8) {
      if (queryTerms.includes("flag") || queryTerms.includes("triangular") || queryTerms.includes("crescent") || queryTerms.includes("crimson")) {
        score += 10;
      }
    }

    // National anthem/symbols synonyms
    if (article.number === 9) {
      if (queryTerms.includes("anthem") || queryTerms.includes("danphe") || queryTerms.includes("rhododendron") || queryTerms.includes("flower") || queryTerms.includes("cow") || queryTerms.includes("animal")) {
        score += 10;
      }
    }

    if (score > 0) {
      results.push({
        article,
        score,
        matchedTerms
      });
    }
  }

  // Sort by descending score
  return results.sort((a, b) => b.score - a.score);
}

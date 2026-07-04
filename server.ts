/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import dotenv from "dotenv";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { searchConstitution } from "./src/data/rag_engine.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Basic inappropriate content filter (local pre-moderation)
const INAPPROPRIATE_WORDS = [
  "fuck", "shit", "bitch", "bastard", "asshole", "dick", "pussy",
  "mula", "khate", "randi", "lado", "chikne", "gandu", "saka"
];

function containsInappropriateContent(text: string): boolean {
  const normalized = text.toLowerCase();
  return INAPPROPRIATE_WORDS.some(word => normalized.includes(word));
}

// API Health Check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    engines: {
      groq: !!process.env.GROQ_API_KEY
    }
  });
});

// User Feedback Endpoint
app.post("/api/feedback", async (req, res) => {
  try {
    const { messageId, rating, feedback, comment, userQuery, assistantResponse } = req.body;
    if (!messageId) {
      return res.status(400).json({ error: "Missing messageId" });
    }

    const feedbackItem = {
      id: `fb-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      messageId,
      rating: rating !== undefined ? Number(rating) : null,
      feedback: feedback || null,
      comment: comment || "",
      userQuery: userQuery || "",
      assistantResponse: assistantResponse || "",
      timestamp: new Date().toISOString()
    };

    const filePath = path.join(process.cwd(), "feedback.json");
    let existingFeedback = [];

    if (fs.existsSync(filePath)) {
      try {
        const fileData = fs.readFileSync(filePath, "utf-8");
        existingFeedback = JSON.parse(fileData);
        if (!Array.isArray(existingFeedback)) {
          existingFeedback = [];
        }
      } catch (parseError) {
        console.error("Error parsing existing feedback, resetting file:", parseError);
      }
    }

    existingFeedback.push(feedbackItem);
    fs.writeFileSync(filePath, JSON.stringify(existingFeedback, null, 2), "utf-8");
    console.log(`Saved user feedback for message ${messageId} to feedback.json`);

    res.json({ success: true, message: "Feedback saved successfully", data: feedbackItem });
  } catch (error: any) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ error: error.message || "Failed to save feedback" });
  }
});

// Main Chat Endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Invalid messages body" });
    }

    const lastMessage = messages[messages.length - 1];
    const userQuery = lastMessage.content || "";

    // 1. Moderate Input
    if (containsInappropriateContent(userQuery)) {
      return res.json({
        content: "Thank you for reaching out. I am committed to maintaining a polite, respectful, and professional discussion about the Constitution of Nepal. Please rephrase your question using respectful language, and I will gladly provide you with the correct constitutional information.",
        citations: [],
        engineUsed: "local-moderation",
        searchedQuery: userQuery
      });
    }

    // 2. Intercept Developer/Creator Queries
    const lowerQuery = userQuery.toLowerCase().trim();
    const isCreatorQuery = [
      "who made you", "who created you", "who built you", "who developed you",
      "who is your creator", "who is your developer", "who is the creator of",
      "who is the developer of", "who are you made by", "who designed you",
      "kasle banayeko", "kasle banako", "कसले बनाएको", "कसले बनायो", "कसले बनाएका हुन्",
      "who is your maker", "your maker", "made you", "created you", "your developer",
      "maker of this app", "creator of this app", "developer of this app", "maker", "creator", "developer"
    ].some(keyword => {
      if (keyword.split(" ").length > 1) {
        return lowerQuery.includes(keyword);
      } else {
        return new RegExp(`\\b${keyword}\\b`).test(lowerQuery);
      }
    }) || (lowerQuery.includes("who") && (lowerQuery.includes("made") || lowerQuery.includes("created") || lowerQuery.includes("developed")) && lowerQuery.includes("you"));

    if (isCreatorQuery) {
      return res.json({
        content: "This Constitutional AI Companion of Nepal was developed by **Ankit Khatri KC**.\n\nयो नेपालको संविधान साथी एआई सहायक **Ankit Khatri KC** द्वारा विकास गरिएको हो।",
        citations: [],
        engineUsed: "local-interception",
        searchedQuery: userQuery
      });
    }

    // 3. Perform RAG - Retrieve top matches
    const retrievedResults = searchConstitution(userQuery);
    const topMatches = retrievedResults.slice(0, 5);

    // Format context for prompt
    let context = "";
    if (topMatches.length > 0) {
      context = topMatches.map(m => {
        return `[Part ${m.article.part}: ${m.article.partTitle}] Article ${m.article.number} - ${m.article.title}:\n${m.article.content}\n(Summary: ${m.article.summary})`;
      }).join("\n\n");
    } else {
      context = "No specific direct articles found for this exact phrasing. Use general preliminary principles (Sovereignty, State of Nepal, Fundamental Rights).";
    }

    // 4. Construct System Prompt with strict boundary instructions
    const systemPrompt = `You are the "Constitutional Companion of Nepal" (नेपालको संविधान साथी), a highly professional, polite, and completely non-partisan AI legal advisor for the Constitution of Nepal 2072 (2015).

STRICT RESPONSE LIMITATION POLICY:
1. You are strictly allowed to answer ONLY questions directly related to the Constitution of Nepal (such as parts, chapters, articles, clauses, amendment processes, governmental structure, fundamental rights, etc.) and friendly greetings (e.g., "hello", "namaste", "how are you", "good morning").
2. If the user query is NOT directly related to the Constitution of Nepal (for example: "who is the prime minister", "who is the president", general knowledge, coding, math, recipes, translation of unrelated texts, general chat, writing creative content, or news), you MUST politely decline to answer.
3. If someone asks "who is the prime minister", "who is the current prime minister of Nepal", or other current affair/public figure questions, do NOT state any person's name. Instead, decline the answer politely and guide them back to how the office is appointed under the constitution.
   - Example Decline Response: "I am sorry, but I can only assist you with queries related to the Constitution of Nepal and general greetings. I cannot provide information on current public figures (such as the current Prime Minister), but I can explain the constitutional process of how the Prime Minister is appointed in Nepal under Article 76."
4. If asked "who made you", "who created you", or similar creator/developer questions, you MUST respond: "This Constitutional AI Companion was developed by **Ankit Khatri KC**." (or in Nepali: "यो नेपालको संविधान साथी एआई सहायक **Ankit Khatri KC** द्वारा विकास गरिएको हो।").

Core Guidelines:
1. Ground your answers strictly in the retrieved constitutional articles provided below. Do not make up articles or invent clauses.
2. Mention the related Part, Chapter, Article, or Clause explicitly (e.g., "According to Part 3, Article 18 (Right to Equality)...") to back up your claims.
3. Automatically reply in the same language the user uses (e.g., respond in fluent Nepali if the query is in Nepali, in English if in English, or in Maithili/other languages if queried).
4. If a user asks about controversial, current political topics, or ongoing debates, remain strictly objective and neutral. Connect the topic back to the relevant formal rules of the Constitution of Nepal in a sensible way (e.g., explaining how Prime Ministers are appointed under Article 76 or how the courts function under Article 126/128). Do not express any political opinion or choose sides.
5. If the user is impolite, aggressive, or uses provocative language, maintain absolute professionalism. Respond politely, and direct them back to civil learning.
6. Provide clear, elegant, scannable formatting using markdown bullets and structured sections.
7. CITATIONS REQUIREMENT: You MUST include direct references to specific articles and sections of the Constitution. ALWAYS conclude your response with a dedicated section titled "**Direct Citations & References**" (or in Nepali: "**प्रत्यक्ष उद्धरण र सन्दर्भहरू**" if responding in Nepali) where you list the specific Article numbers, titles, and parts referenced in your response, with a brief 1-sentence note of what specific provision from that article supports the answer. This ensures users can easily verify the facts.

Retrieved Constitution Articles Context:
${context}`;

    let replyText = "";
    let engineUsed = "";

    // 4. Call Groq
    if (!process.env.GROQ_API_KEY) {
      replyText = "Error: Groq API key is not configured. Please set the GROQ_API_KEY environment variable.";
      engineUsed = "none";
    } else {
      engineUsed = "Groq (Llama-3.3-70b)";
      try {
        const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              { role: "system", content: systemPrompt },
              ...messages.map((m: any) => ({ role: m.role, content: m.content }))
            ],
            temperature: 0.3,
            max_tokens: 1500
          })
        });

        if (groqResponse.ok) {
          const data = await groqResponse.json();
          replyText = data.choices?.[0]?.message?.content || "";
        } else {
          const errText = await groqResponse.text();
          console.error("Groq API error response:", errText);
          throw new Error(`Groq API returned status ${groqResponse.status}`);
        }
      } catch (groqError: any) {
        console.error("Groq call failed:", groqError);
        replyText = `Error calling Groq API: ${groqError.message || groqError}`;
      }
    }

    // 5. Respond to client with metadata
    res.json({
      content: replyText,
      citations: topMatches.map(m => m.article),
      engineUsed,
      searchedQuery: userQuery
    });

  } catch (error: any) {
    console.error("Error in /api/chat route:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
});

// Configure Vite or Static Asset Serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // Development mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development middleware mounted.");
  } else {
    // Production mode
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log("Production static files mounted from dist/ directory.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

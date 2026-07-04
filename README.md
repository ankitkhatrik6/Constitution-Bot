# Samvidhan AI - Constitution of Nepal Guide

A RAG (Retrieval-Augmented Generation) application to guide users through the Constitution of Nepal, powered exclusively by Groq AI and Llama-3.3-70b.

## Run Locally

### Prerequisites
- Node.js (v18+)
- Groq API Key

### Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables**:
   Create a `.env` file in the root directory (you can copy `.env.example` as a template):
   ```bash
   cp .env.example .env
   ```
   Open the `.env` file and set your `GROQ_API_KEY`:
   ```env
   GROQ_API_KEY="your-groq-api-key-here"
   ```

3. **Start the application**:
   ```bash
   npm run dev
   ```

4. **Access the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack
- **Frontend**: React, TailwindCSS, Lucide Icons
- **Backend**: Node.js, Express, tsx
- **LLM/RAG Integration**: Groq API (using Llama-3.3-70b-versatile) with custom TF-IDF semantic document grounding.

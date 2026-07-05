# 🇳🇵 Samvidhan AI

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Groq](https://img.shields.io/badge/Groq-f55036?style=for-the-badge&logo=groq&logoColor=white)

Welcome to **Samvidhan AI**! I built this project to make it easier for people to explore and understand the Constitution of Nepal. 

Instead of reading through hundreds of pages of legal text, you can just ask questions! It uses a RAG (Retrieval-Augmented Generation) system powered by Groq and LLaMA-3.3-70b to find the most relevant articles and summarize them for you in plain language.

## ✨ Features
- 💬 **Interactive Chat:** Ask any question about the constitution and get grounded, cited answers.
- 📖 **Document Explorer:** Browse the constitution by parts, chapters, and schedules if you prefer reading the source.
- 🎨 **State Symbols:** Learn about the national flag, anthem, and emblems of Nepal.
- ⚡ **Lightning Fast:** Powered by Groq's incredibly fast inference engine.

## 🚀 Getting Started

If you want to run this project locally, here is what you need to do:

### Prerequisites
Make sure you have Node.js installed on your machine (version 18 or higher is recommended) and a free API key from [Groq](https://console.groq.com/keys).

### Installation

1. **Clone the repository and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up your environment variables:**
   Create a `.env` file in the root folder and add your Groq API key.
   ```env
   GROQ_API_KEY="your-groq-api-key-here"
   APP_URL="http://localhost:3000"
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open it up:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser, and you're good to go!

## 🛠️ Tech Stack
I built this using:
- **Frontend:** React, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express (running via tsx)
- **AI Integration:** Groq API (LLaMA-3.3-70b-versatile)
- **Search:** Custom TF-IDF semantic document grounding

---
*Made with ❤️ by Ankit Khatri KC*

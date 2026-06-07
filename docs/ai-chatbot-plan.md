# AI Chatbot — Build Plan & Progress

Step-by-step **plan** for building the "Ask my Portfolio" chatbot, with progress tracked as each step is completed.

**How to use:** follow the steps in order. Each completed step records what was done, why, and key learnings. The checklist near the bottom shows what's left.

---

## 🎯 Goal
Floating "Ask my Portfolio" chatbot → visitor asks about me → AI answers ONLY from my real
profile data. Later: voice (speak + listen).

## ▶️ How to run locally
1. Open terminal in project root.
2. `vercel dev`  (NOT `npm run dev` — plain Vite can't run `/api/*` functions)
3. Open http://localhost:3000
4. Keys live in `.env` (gitignored). Changed `.env`? → **restart `vercel dev`** (env loads at startup only).

---

## ✅ Progress log

### Step 1 — Vercel CLI setup
- **Did:** `npm i -g vercel`, `vercel login` (personal Gmail, NOT company account), `vercel dev`.
- **Why:** need a backend to hold the API key. `vercel dev` runs frontend + `/api/*` functions locally.
- **Learned:** `-g` = global install (location doesn't matter). Vercel login is separate from GitHub/git.
- **Gotcha:** the red "failed to link GitHub" during `vercel dev` is harmless (company GitHub) — ignore.
- **Status:** ✅

### Step 2 — First test function
- **Did:** created `api/hello.js` returning JSON. Visited `localhost:3000/api/hello` → saw JSON.
- **Why:** prove the serverless layer runs locally before building the real thing.
- **Learned:** a file in `api/` = a server-side function (`export default handler(req,res)`).
  Frontend (React) runs in the BROWSER (public); functions run on the SERVER (hidden, safe for secrets).
- **Status:** ✅

### Step 3 — Secrets / environment
- **Did:** put API key in an env file; added `.env`, `.env.*`, `.vercel` to `.gitignore`.
- **Why:** API keys must NEVER be in frontend/browser or committed to git.
- **Learned (important gotcha):** on my setup `vercel dev` reads **`.env`**, NOT `.env.local`.
  → Keep keys in **`.env`**. After editing it, **restart `vercel dev`**.
- **Status:** ✅

### Step 4 — Real chat function (the AI call)
- **Did:** built `api/chat.js`. Takes `{message}`, injects my PROFILE into a system prompt,
  calls the LLM, returns `{reply}`. Tested from browser console → got a real answer. 🎉
- **Why:** this is the core — server-side AI call grounded in my data.
- **Learned:**
  - **System prompt = the magic.** It forces the AI to answer ONLY from my profile.
  - **Context injection** (whole profile in the prompt) — no RAG/vector DB needed for small data.
  - **Provider is swappable** because it's behind the proxy: started with Gemini, swapped to Groq
    by changing ONLY the function (not the frontend). That's the value of the backend proxy.
- **Gotchas hit (and fixed):**
  - `{error: GEMINI_API_KEY not set}` → forgot to restart `vercel dev` after adding key.
  - `429 Too Many Requests` → free-tier rate limit; **retrying instantly makes it worse** (resets cooldown). Send ONE request, wait.
  - Gemini free quota too stingy (kept 429 even after 1h) → **switched provider to Groq** (free, no card, generous).
  - `404 model not found` → `gemini-1.5-flash` is retired; valid model returns 429 not 404.
  - Key wasn't loading → it was in `.env.local` but `vercel dev` reads `.env`. Copied it over.
- **Final setup:** Groq API (`llama-3.3-70b-versatile`), key in `.env` as `GROQ_API_KEY`.
- **Status:** ✅ WORKING

### Step 5 — Chat UI widget
- **Did:** built `src/components/Chat/ChatWidget.jsx` — floating button → chat panel → input,
  message bubbles, typing indicator, error handling, suggestion chips. Added `<ChatWidget />` to `App.jsx`.
- **Why:** turn the backend into something visitors actually use (no more browser console).
- **Learned:** the frontend just `fetch`es `/api/chat`; UI = React state (messages array, input, loading).
  The widget NEVER sees the API key — it only talks to my function, which holds the secret.
- **Status:** ✅ (test: open site → blue button bottom-right → ask a question)

---

## 🧠 Core mental model
```
Browser (chat UI)  →  POST /api/chat {message}
  → api/chat.js (SERVER, holds GROQ_API_KEY hidden)
  → builds [system = rules+PROFILE, user = question]
  → calls Groq (Llama) → gets answer
  → returns {reply} → UI shows it
```
Golden rules:
- API keys live in the **backend function + `.env`**, never the browser.
- The **system prompt** controls what the bot knows/does.
- Edit `.env` → **restart `vercel dev`**.
- Don't spam requests → free-tier rate limits.

---

## ⏭️ Next features (checklist)
- [x] **Step 5 — Chat UI widget**: floating button → chat panel → input → reply bubbles, loading + error states.
- [ ] **Step 6 — Streaming**: show the reply word-by-word (typing effect).
- [ ] **Step 7 — Rate limit** the `/api/chat` endpoint (protect free quota from abuse).
- [ ] **Step 8 — Voice input (STT)**: Web Speech API `SpeechRecognition`.
- [ ] **Step 9 — Voice output (TTS)**: Web Speech API `speechSynthesis`.
- [ ] **Step 10 — Deploy**: set `GROQ_API_KEY` in Vercel dashboard env, `vercel --prod`.
- [ ] **Step 11 (optional)** — upgrade voice quality (Whisper / ElevenLabs), polish.

## How I keep this updated
After each step: add a new "### Step N" block with Did / Why / Learned / Gotcha / Status,
tick the checklist, and commit. This file = my learning trail.

---

## 💡 Why no RAG / vector DB?
My profile is tiny (skills, projects, experience). **Context injection** (put the whole
profile in the system prompt) is simpler, cheaper, and accurate. RAG/embeddings are only
worth it for LARGE knowledge bases (100s of docs) — learn that later on a bigger project.

## 📚 Learning resources (in order)
1. Provider docs — Groq (console.groq.com/docs) / Gemini / OpenAI quickstarts
2. Prompt engineering basics — system vs user messages, grounding to context
3. Vercel Functions docs (`/api/*`, `vercel dev`)
4. MDN Web Speech API (for the voice phase)
5. RAG tutorial — LATER, only for big knowledge bases

## 💰 Cost / safety
- Groq free tier: generous (no credit card). Each visitor message = 1 call on my key.
- Key in `.env` locally; on deploy → set `GROQ_API_KEY` in Vercel dashboard env.
- Add a rate-limit on `/api/chat` (Step 7) so abuse can't drain the free quota.
- Don't spam requests → per-minute rate limits.

## 🗒️ Deferred (separate from chatbot)
- Light/dark theme toggle = big color refactor (token-based). Not now.
- Provider note: started Gemini → switched to Groq (free quota). Provider is swappable
  because the call is behind the `/api/chat` proxy.

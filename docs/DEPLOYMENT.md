# Deployment Guide (Vercel) — by a senior, for future-me

Everything about deploying this portfolio (and any future project) to Vercel.
Goal: next time, deploy with zero confusion. Read the cheat sheet, follow the steps, avoid the gotchas.

---

## ⚡ TL;DR — redeploy this project
```bash
# from the project root, with code committed:
vercel --prod
```
That's it for an update. The longer guide below is for setup, new projects, and fixing issues.

---

## 🧠 Mental model (read once)
- **Frontend (React/Vite)** = static files, run in the browser. Public.
- **`api/*` functions** = serverless functions, run on Vercel's servers. Private (safe for secrets).
- **`vercel dev`** = run BOTH locally on `localhost:3000`.
- **`vercel --prod`** = upload + build on Vercel → live URL.
- **Secrets** live in `.env` locally AND in Vercel's "Environment Variables" for production. The `.env` file is gitignored and NEVER uploaded.

---

## PART 1 — One-time setup (per computer)
```bash
npm i -g vercel      # install the Vercel CLI globally
vercel login         # log in (use PERSONAL email, not company) → browser auth
```
Notes:
- Use a **personal account** for personal projects (company accounts can be revoked).
- `vercel --version` confirms install.

## PART 2 — One-time per project (link + secrets)
```bash
vercel dev           # first run: links the folder to a Vercel project (answer prompts)
```
First-run prompts: Set up & develop → Y · scope → your account · link existing → N ·
project name → enter · directory → ./ · override settings → N. (Vite auto-detected.)

Add production secrets (do this BEFORE `vercel --prod`):
```bash
vercel env add GROQ_API_KEY production
# "Is the value a sensitive secret?" → y   (API keys are secrets)
# "What's the value?" → paste the key
```
- `.env` (local) is NOT uploaded → the live function needs the key set here separately.
- Repeat for `preview` / `development` if you want those environments to work too.
- Or do it in the dashboard: Project → Settings → Environment Variables.

## PART 3 — Deploy
```bash
vercel            # PREVIEW deploy (a test URL)
vercel --prod     # PRODUCTION deploy (your real URL)
```
- The CLI uploads local files, builds on Vercel, prints the URL.
- No GitHub connection required — CLI deploys directly.
- After it succeeds, open the URL → site + chatbot live.

## PART 4 — Local development
```bash
vercel dev        # site + /api functions on localhost:3000  ← use this for the chatbot
# (plain `npm run dev` = Vite only on 5173, NO /api → chat won't work locally)
```
Rule: working on anything that uses `/api/*` → use `vercel dev` + localhost:3000.

---

## 🔑 PART 5 — Environment variables (the #1 source of bugs)
| Where | File / place | Used by | Committed? |
|---|---|---|---|
| Local | `.env` (project root) | `vercel dev` | NO (gitignored) |
| Production | Vercel → Settings → Env Vars | `vercel --prod` | n/a (stored in Vercel) |

GOTCHAS:
- **`vercel dev` reads `.env`** on this setup (NOT `.env.local`). Keep keys in `.env`.
- **Changed `.env`? → restart `vercel dev`.** Env loads only at startup.
- **Forgot to set the var in Vercel?** → live site shows "GROQ_API_KEY not set". Fix: add it in Vercel + redeploy.
- Never commit secrets. `.gitignore` has `.env`, `.env.*`, `.vercel`.

---

## 🐞 PART 6 — Issues we actually hit (and the fixes)
1. **`{error: GEMINI/GROQ_API_KEY not set}`**
   → Cause: `vercel dev` not restarted after adding the key, OR key was in `.env.local` but vercel reads `.env`.
   → Fix: put key in `.env`, restart `vercel dev`.
2. **`429 Too Many Requests`**
   → Cause: free-tier rate limit; retrying instantly makes it worse.
   → Fix: wait ~60s, send ONE request. (Per-day limit → wait till next day.)
3. **`404 model not found`** (Gemini)
   → Cause: retired model name (`gemini-1.5-flash`). Valid model returns 429, not 404.
   → Fix: use a current model (we switched provider to Groq `llama-3.3-70b-versatile`).
4. **`404 DEPLOYMENT_NOT_FOUND` on the live URL**
   → Cause: project linked but never actually deployed to prod (`vercel dev` ≠ deploy).
   → Fix: run `vercel --prod`.
5. **Vercel build fails: `Cannot find module 'tailwindcss'`** (but local build works)
   → Cause: `tailwindcss`/`postcss`/`autoprefixer` were in local `node_modules` but NOT in `package.json`.
   → Fix: add them to `devDependencies`, run `npm install` (updates lockfile), commit, redeploy.
   → LESSON: always `npm install <pkg>` (saves to package.json). Never rely on un-declared local modules.

---

## 🆕 PART 7 — Deploy a NEW / different project in future
```bash
cd path/to/new-project
vercel              # first run links a new Vercel project (preview deploy)
vercel env add MY_KEY production   # add any secrets
vercel --prod       # production deploy
```
Each folder = its own Vercel project. Same flow every time.

---

## 🔗 PART 8 — Git auto-deploy (optional, advanced)
Connect a GitHub repo so every `git push` auto-builds:
- Vercel dashboard → Project → Settings → Git → Connect Repository.
CAVEAT (our case): the repo is on a **company GitHub** account; orgs often block third-party apps
(Vercel) without admin approval → connection can fail. CLI deploy (`vercel --prod`) avoids this entirely.
Recommendation: stick with **CLI deploy** unless you move the repo to a personal GitHub.

---

## ✅ PART 9 — Gotchas / best practices / drawbacks
- **CLI vs Git deploy:** CLI = manual (`vercel --prod` each time), full control, no GitHub needed.
  Git = auto on push, but needs repo↔Vercel connection.
- **Always commit before/after deploying** so the repo matches what's live.
- **Free tier (Hobby) limits:** Fast Data Transfer 100GB/mo, function execution caps, etc.
  Fine for a portfolio. Don't put heavy/abusable endpoints on it.
- **Rate-limit public API routes** (we added 10 req/min/IP on `/api/chat`) so nobody drains your AI quota.
- **In-memory rate limit resets** when the function instance recycles — basic protection only; use Redis (Upstash) for serious needs.
- **Big assets cost transfer:** the `skills_bg.png` (~1.5MB) is the heaviest file — consider compressing to WebP.
- **Custom domain:** Vercel → Domains → add your domain (e.g. asfakshahrier.com) when ready.

---

## 📋 PART 10 — Command cheat sheet
```bash
npm i -g vercel                      # install CLI (once per machine)
vercel login                         # log in (once)
vercel dev                           # local: site + /api on :3000
vercel env add NAME production       # add a secret for production
vercel env ls                        # list env vars
vercel                               # preview deploy
vercel --prod                        # production deploy
vercel logs <url>                    # view function/runtime logs
vercel ls                            # list deployments
```

## This project's facts
- Vercel account: personal (shahrierasfak27@gmail.com), Hobby plan.
- Project name: `protfolio`. Deploy via CLI (`vercel --prod`).
- Secret: `GROQ_API_KEY` (set in Vercel env + local `.env`).
- Backend: `api/chat.js` (Groq Llama), `api/hello.js` (test).
- Repo: github.com/asfakT/asfak_portfolio (company GitHub — not connected to Vercel; deploy by CLI).

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend, FiMic, FiVolume2, FiVolumeX } from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

const SpeechRec =
  typeof window !== 'undefined'
    ? window.SpeechRecognition || window.webkitSpeechRecognition
    : null;

const mdComponents = {
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-sand underline underline-offset-2 transition-colors hover:text-peach">
      {children}
    </a>
  ),
};

const GREETING = {
  role: 'bot',
  text: "Hi! I'm Asfak's portfolio assistant. Ask me about his skills, projects, experience, or research.",
};

const SUGGESTIONS = [
  'What are his top skills?',
  'Tell me about his best project',
  'How do I contact him?',
];

function BotAvatar() {
  return (
    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-copper/40 bg-copper/[0.12] text-copper">
      <FaRobot size={15} />
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [voiceOn, setVoiceOn] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);

  // Text-to-speech: read a reply aloud (strip markdown first)
  function speak(text) {
    if (!voiceOn || typeof window === 'undefined' || !window.speechSynthesis) return;
    const clean = text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links -> text
      .replace(/[*_`#>-]/g, '')
      .trim();
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(clean);
    u.rate = 1;
    u.pitch = 1;
    window.speechSynthesis.speak(u);
  }

  // Speech-to-text: listen, then send the transcript
  function startListening() {
    if (!SpeechRec || listening) return;
    const rec = new SpeechRec();
    rec.lang = 'en-US';
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    rec.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setListening(false);
      send(transcript);
    };
    rec.onerror = (e) => {
      setListening(false);
      const msg =
        e.error === 'not-allowed' || e.error === 'service-not-allowed'
          ? 'Microphone is blocked. Allow mic permission in your browser (address-bar icon), then try again.'
          : e.error === 'no-speech'
          ? "I didn't catch that — tap the mic and speak again."
          : 'Voice input failed. You can type your question instead.';
      setMessages((m) => [...m, { role: 'bot', text: msg }]);
    };
    rec.onend = () => setListening(false);
    recognitionRef.current = rec;
    setListening(true);
    try {
      rec.start();
    } catch {
      setListening(false);
    }
  }

  function toggleVoice() {
    if (voiceOn && window.speechSynthesis) window.speechSynthesis.cancel();
    setVoiceOn((v) => !v);
  }

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200);
  }, [open]);

  async function send(text) {
    const q = (text ?? input).trim();
    if (!q || loading) return;
    // recent turns for context (maps bot->assistant); excludes the message we're sending now
    const history = messages
      .filter((m) => m.role === 'user' || m.role === 'bot')
      .slice(-6)
      .map((m) => ({ role: m.role === 'bot' ? 'assistant' : 'user', content: m.text }));
    setMessages((m) => [...m, { role: 'user', text: q }]);
    setInput('');
    setLoading(true);
    try {
      const r = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: q, history }),
      });
      const data = await r.json();
      const reply = r.ok ? data.reply : (data.error || 'Something went wrong.');
      setMessages((m) => [...m, { role: 'bot', text: reply }]);
      speak(reply);
    } catch {
      setMessages((m) => [...m, { role: 'bot', text: 'Network error — please try again.' }]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      {/* Floating toggle button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="fixed bottom-3 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-cream/30 bg-[#0d0d0d] text-cream shadow-[0_8px_28px_rgba(0,0,0,0.6)] transition-[color,border-color,box-shadow] duration-200 hover:border-peach/70 hover:text-peach hover:shadow-[0_8px_28px_rgba(0,0,0,0.6),0_0_22px_rgba(242,166,126,0.25)]"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <FiX size={24} />
            </motion.span>
          ) : (
            <motion.span key="c" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <FiMessageCircle size={24} />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && <span aria-hidden="true" className="absolute right-[3px] top-[3px] h-[11px] w-[11px] rounded-full border-2 border-ink bg-copper" />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            className="fixed bottom-[76px] right-4 z-[60] flex w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-[14px] border border-cream/[0.14] font-dm"
            style={{
              background: '#0b0a09',
              boxShadow: '0 24px 70px rgba(0,0,0,0.7)',
              maxHeight: 'min(560px, calc(100vh - 8rem))',
            }}
          >
            {/* Header */}
            <div
              className="flex flex-shrink-0 items-center justify-between gap-3 border-b border-cream/10 px-[18px] py-4"
            >
              <div className="flex items-center gap-3 min-w-0">
                <BotAvatar />
                <div className="min-w-0">
                  <p className="font-serif text-[22px] leading-[1.1] tracking-[-0.01em] text-cream">Asfak's Assistant</p>
                  <p className="mt-[3px] flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[1.2px] text-stone">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online · AI powered
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                <button
                  onClick={toggleVoice}
                  aria-label={voiceOn ? 'Mute voice' : 'Enable voice'}
                  title={voiceOn ? 'Voice on — replies read aloud' : 'Voice off'}
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-peach/10 hover:text-peach ${
                    voiceOn ? 'text-copper' : 'text-stone'
                  }`}
                >
                  {voiceOn ? <FiVolume2 size={17} /> : <FiVolumeX size={17} />}
                </button>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-stone transition-colors hover:bg-peach/10 hover:text-peach"
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={listRef} className="chat-scroll flex-1 space-y-3.5 overflow-y-auto p-[18px]">
              {messages.map((m, i) => (
                <div key={i} className={`flex items-end gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {m.role === 'bot' && <BotAvatar />}
                  <div
                    className={`max-w-[78%] px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                      m.role === 'user'
                        ? 'rounded-[14px] rounded-tr-[4px] border border-copper/35 bg-copper/[0.14] text-cream'
                        : 'rounded-[14px] rounded-tl-[4px] border border-cream/10 bg-cream/5 text-cream'
                    }`}
                  >
                    {m.role === 'bot' ? (
                      <div className="chat-md">
                        <ReactMarkdown components={mdComponents}>{m.text}</ReactMarkdown>
                      </div>
                    ) : (
                      m.text
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex items-end gap-2 justify-start">
                  <BotAvatar />
                  <div className="flex gap-1 rounded-[14px] rounded-tl-[4px] border border-cream/10 bg-cream/5 px-3.5 py-3">
                    {[0, 1, 2].map((d) => (
                      <motion.span key={d} className="h-1.5 w-1.5 rounded-full bg-stone" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }} />
                    ))}
                  </div>
                </div>
              )}

              {messages.length === 1 && !loading && (
                <div className="flex flex-wrap gap-2 pt-1 pl-9">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full border border-cream/20 px-3.5 py-[7px] text-[13px] text-cream-2 transition-colors hover:border-peach/60 hover:bg-peach/[0.06] hover:text-peach"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex-shrink-0 border-t border-cream/10 p-3">
              <div
                className="flex items-end gap-2 rounded-xl border border-cream/[0.18] px-3 py-2 transition-colors focus-within:border-copper"
              >
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  rows={1}
                  placeholder={listening ? 'Listening… speak now' : 'Ask about Asfak...'}
                  className="chat-scroll max-h-24 flex-1 resize-none bg-transparent py-1 text-sm text-cream outline-none placeholder:text-[#9E978E]"
                />
                {SpeechRec && (
                  <button
                    onClick={startListening}
                    disabled={loading}
                    aria-label="Speak"
                    title="Speak your question"
                    className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      listening ? 'text-white bg-red-500 animate-pulse' : 'text-stone hover:bg-peach/10 hover:text-peach'
                    }`}
                  >
                    <FiMic size={15} />
                  </button>
                )}
                <button
                  onClick={() => send()}
                  disabled={!input.trim() || loading}
                  aria-label="Send"
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[9px] bg-cream text-ink transition-colors hover:bg-peach disabled:opacity-40 disabled:hover:bg-cream"
                >
                  <FiSend size={15} />
                </button>
              </div>
              <p className="mt-2 text-center text-[11px] text-[#9E978E]">
                AI assistant · answers may occasionally be inaccurate
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

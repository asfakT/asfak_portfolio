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
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">
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
    <div
      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white"
      style={{ background: 'linear-gradient(135deg, #3B82F6, #2563EB)' }}
    >
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
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full flex items-center justify-center text-white"
        style={{ background: 'linear-gradient(135deg, #3B82F6, #2563EB)', boxShadow: '0 8px 30px rgba(59,130,246,0.45)' }}
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
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            className="fixed bottom-24 right-6 z-[60] w-[min(380px,calc(100vw-2rem))] rounded-2xl overflow-hidden flex flex-col border"
            style={{
              background: '#0d0e14',
              borderColor: 'rgba(255,255,255,0.1)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
              maxHeight: 'min(560px, calc(100vh - 8rem))',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between gap-3 px-4 py-3 border-b flex-shrink-0"
              style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(59,130,246,0.08)' }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <BotAvatar />
                <div className="min-w-0">
                  <p className="text-white font-bold text-sm leading-tight">Asfak's Assistant</p>
                  <p className="text-emerald-400 text-[11px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online · AI powered
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                <button
                  onClick={toggleVoice}
                  aria-label={voiceOn ? 'Mute voice' : 'Enable voice'}
                  title={voiceOn ? 'Voice on — replies read aloud' : 'Voice off'}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    voiceOn ? 'text-blue-400 hover:bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {voiceOn ? <FiVolume2 size={17} /> : <FiVolumeX size={17} />}
                </button>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={listRef} className="chat-scroll flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex items-end gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {m.role === 'bot' && <BotAvatar />}
                  <div
                    className={`max-w-[78%] px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                      m.role === 'user' ? 'text-white rounded-2xl rounded-br-md' : 'text-gray-200 rounded-2xl rounded-bl-md'
                    }`}
                    style={{
                      background: m.role === 'user' ? '#2563EB' : 'rgba(255,255,255,0.06)',
                      border: m.role === 'bot' ? '1px solid rgba(255,255,255,0.08)' : 'none',
                    }}
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
                  <div className="px-3.5 py-3 rounded-2xl rounded-bl-md flex gap-1" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    {[0, 1, 2].map((d) => (
                      <motion.span key={d} className="w-1.5 h-1.5 rounded-full bg-gray-400" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }} />
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
                      className="text-xs px-3 py-1.5 rounded-full border text-blue-300 transition-colors hover:bg-blue-500/15"
                      style={{ borderColor: 'rgba(59,130,246,0.35)', background: 'rgba(59,130,246,0.08)' }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t flex-shrink-0" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <div
                className="flex items-end gap-2 rounded-2xl px-3 py-2"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  rows={1}
                  placeholder={listening ? 'Listening… speak now' : 'Ask about Asfak...'}
                  className="chat-scroll flex-1 bg-transparent text-sm text-gray-200 placeholder-gray-500 outline-none resize-none max-h-24 py-1"
                />
                {SpeechRec && (
                  <button
                    onClick={startListening}
                    disabled={loading}
                    aria-label="Speak"
                    title="Speak your question"
                    className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      listening ? 'text-white bg-red-500 animate-pulse' : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <FiMic size={15} />
                  </button>
                )}
                <button
                  onClick={() => send()}
                  disabled={!input.trim() || loading}
                  aria-label="Send"
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-white flex-shrink-0 transition-opacity disabled:opacity-40"
                  style={{ background: 'linear-gradient(135deg, #3B82F6, #2563EB)' }}
                >
                  <FiSend size={15} />
                </button>
              </div>
              <p className="text-center text-[10px] text-gray-600 mt-2">
                AI assistant · answers may occasionally be inaccurate
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

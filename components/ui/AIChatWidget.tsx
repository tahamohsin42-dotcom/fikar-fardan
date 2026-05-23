"use client";
import { useState, useRef, useEffect, useCallback } from "react";

interface Message { role: "user" | "assistant"; content: string; }

const QUICK_QS = [
  "What does Fikar e Fardan do?",
  "Where does donation go?",
  "How can I join courses?",
  "Is my donation safe?",
  "How can I volunteer?",
];

const WELCOME = "Asalaam o Alaikum! 👋 I'm Fikar Assistant. Ask me anything about our mission, courses, donations, or how to volunteer. How can I help?";

export default function AIChatWidget() {
  const [open, setOpen]       = useState(false);
  const [msgs, setMsgs]       = useState<Message[]>([{ role: "assistant", content: WELCOME }]);
  const [input, setInput]     = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef             = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs]);

  const send = useCallback(async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || loading) return;
    const userMsg: Message = { role: "user", content };
    const nextMsgs = [...msgs, userMsg];
    setMsgs(nextMsgs);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMsgs }),
      });
      const data = await res.json();
      setMsgs(m => [...m, { role: "assistant", content: data.reply }]);
    } catch {
      setMsgs(m => [...m, { role: "assistant", content: "JazakAllah for reaching out! Please email info@fikarfardan.org for direct help." }]);
    }
    setLoading(false);
  }, [input, loading, msgs]);

  return (
    <>
      {/* Chat Panel */}
      {open && (
        <div style={{
          position: "fixed", bottom: 90, right: 24, width: 340,
          background: "white", borderRadius: 20,
          boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
          zIndex: 999, overflow: "hidden",
          border: "1px solid rgba(107,45,143,0.14)",
          display: "flex", flexDirection: "column", maxHeight: 520,
        }}>
          {/* Header */}
          <div style={{ background: "linear-gradient(135deg,#6B2D8F,#3a0f52)", padding: "1rem 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.14)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🤖</div>
              <div>
                <div style={{ color: "white", fontWeight: 700, fontSize: 14 }}>Fikar Assistant</div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 11, display: "flex", alignItems: "center", gap: 5 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />Online
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.65)", cursor: "pointer", fontSize: 22, lineHeight: 1, padding: 4 }}>×</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "1rem", display: "flex", flexDirection: "column", gap: 10, minHeight: 0 }}>
            {msgs.map((m, i) => (
              <div key={i} className="chat-msg-in" style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "86%", padding: "10px 14px", fontSize: 13, lineHeight: 1.72,
                  borderRadius: m.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                  background: m.role === "user" ? "linear-gradient(135deg,#6B2D8F,#8B4DB8)" : "#F8F6FB",
                  color: m.role === "user" ? "white" : "#333",
                  border: m.role === "assistant" ? "1px solid rgba(107,45,143,0.1)" : "none",
                }}>{m.content}</div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", gap: 5, padding: "10px 14px" }}>
                {[0,1,2].map(i => (
                  <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "#6B2D8F", animation: `float ${0.6+i*0.2}s ease-in-out infinite`, animationDelay: i*0.2+"s" }} />
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick questions */}
          {msgs.length <= 2 && (
            <div style={{ padding: "0 1rem", display: "flex", flexWrap: "wrap", gap: 6, flexShrink: 0 }}>
              {QUICK_QS.map(q => (
                <button key={q} onClick={() => send(q)} style={{
                  fontSize: 11, padding: "5px 10px", borderRadius: 50,
                  border: "1px solid rgba(107,45,143,0.22)",
                  background: "rgba(107,45,143,0.05)", color: "#6B2D8F",
                  cursor: "pointer", fontFamily: "'Outfit',sans-serif",
                }}>{q}</button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{ padding: "0.75rem 1rem 1rem", display: "flex", gap: 8, borderTop: "1px solid #f0eef8", marginTop: 6, flexShrink: 0 }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder="Ask anything..."
              style={{
                flex: 1, padding: "9px 14px", borderRadius: 10,
                border: "1.5px solid #e8e4f0", fontSize: 13,
                fontFamily: "'Outfit',sans-serif", color: "#333", background: "#fafaf8",
                outline: "none",
              }}
            />
            <button onClick={() => send()} disabled={loading} style={{
              width: 40, height: 40, borderRadius: 10, flexShrink: 0,
              background: "linear-gradient(135deg,#6B2D8F,#8B4DB8)",
              border: "none", color: "white", cursor: "pointer",
              fontSize: 16, opacity: loading ? 0.6 : 1,
            }}>→</button>
          </div>
        </div>
      )}

      {/* FAB */}
      <button onClick={() => setOpen(!open)} style={{
        position: "fixed", bottom: 24, right: 24,
        width: 58, height: 58, borderRadius: "50%",
        background: "linear-gradient(135deg,#6B2D8F,#8B4DB8)",
        border: "none", cursor: "pointer", color: "white",
        fontSize: 24, boxShadow: "0 8px 30px rgba(107,45,143,0.5)",
        zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center",
        transition: "transform 0.25s ease",
      }}
        onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)")}
        onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.transform = "scale(1)")}
      >
        {open ? "×" : "🤖"}
        {!open && <div className="pulse-ring-anim" style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid rgba(107,45,143,0.6)" }} />}
      </button>
    </>
  );
}

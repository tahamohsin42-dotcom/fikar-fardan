"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { BRAND } from "@/data/content";

interface Message { role: "user" | "assistant"; content: string; }

const WELCOME = `Asalaam o Alaikum! 👋 I'm Fikar Assistant.\n\nAsk me about:\n• Free courses (23 available!)\n• Startup Fund programs\n• How to donate\n• Volunteer opportunities\n• Impact & projects`;

const QUICK_QS = [
  "What free courses do you offer?",
  "How can I donate?",
  "Tell me about the Startup Fund",
  "How do I enroll?",
  "Where does donation go?",
];

export default function AIChatWidget() {
  const [open, setOpen]       = useState(false);
  const [msgs, setMsgs]       = useState<Message[]>([{ role:"assistant", content:WELCOME }]);
  const [input, setInput]     = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread]   = useState(1);
  const bottomRef             = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior:"smooth" });
    if (open) setUnread(0);
  }, [msgs, open]);

  const send = useCallback(async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || loading) return;
    const userMsg: Message = { role:"user", content };
    const next = [...msgs, userMsg];
    setMsgs(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMsgs(m => [...m, { role:"assistant", content:data.reply }]);
      if (!open) setUnread(u => u+1);
    } catch {
      setMsgs(m => [...m, { role:"assistant", content:`JazakAllah for reaching out! Please contact us directly:\n📧 ${BRAND.email}\n📞 ${BRAND.phone}` }]);
    }
    setLoading(false);
  }, [input, loading, msgs, open]);

  return (
    <>
      {/* CHAT PANEL */}
      {open && (
        <div style={{ position:"fixed", bottom:88, right:20, width:340, background:"white", borderRadius:20, boxShadow:"0 20px 60px rgba(0,0,0,.22)", zIndex:999, overflow:"hidden", border:"1px solid rgba(107,45,143,.15)", display:"flex", flexDirection:"column", maxHeight:540 }}>

          {/* Header */}
          <div style={{ background:"linear-gradient(135deg,#6B2D8F,#3a0f52)", padding:".9rem 1.1rem", display:"flex", alignItems:"center", justifyContent:"space-between", flexShrink:0 }}>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <div style={{ width:38, height:38, borderRadius:"50%", background:"white", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", flexShrink:0, padding:2, overflow:"hidden" }}>
                <Image src="/logo-icon.jpg" alt="Fikr Fardan" fill style={{ objectFit:"contain" }} />
              </div>
              <div>
                <div style={{ color:"white", fontWeight:700, fontSize:14 }}>Fikar Assistant</div>
                <div style={{ color:"rgba(255,255,255,.55)", fontSize:11, display:"flex", alignItems:"center", gap:5 }}>
                  <span style={{ width:7, height:7, borderRadius:"50%", background:"#4ade80", display:"inline-block" }} />
                  Online · Fikr Fardan Foundation
                </div>
              </div>
            </div>
            <button onClick={()=>setOpen(false)} style={{ background:"none", border:"none", color:"rgba(255,255,255,.65)", cursor:"pointer", fontSize:22, lineHeight:1, padding:4 }}>×</button>
          </div>

          {/* Messages */}
          <div style={{ flex:1, overflowY:"auto", padding:"1rem", display:"flex", flexDirection:"column", gap:10, minHeight:0 }}>
            {msgs.map((m, i) => (
              <div key={i} className="chat-msg-in" style={{ display:"flex", justifyContent:m.role==="user"?"flex-end":"flex-start" }}>
                {m.role==="assistant" && (
                  <div style={{ width:26, height:26, borderRadius:"50%", background:"white", border:"1px solid rgba(107,45,143,.2)", flexShrink:0, position:"relative", overflow:"hidden", marginRight:7, marginTop:2 }}>
                    <Image src="/logo-icon.jpg" alt="" fill style={{ objectFit:"contain" }} />
                  </div>
                )}
                <div style={{ maxWidth:"82%", padding:"9px 13px", fontSize:13, lineHeight:1.72, whiteSpace:"pre-line", borderRadius:m.role==="user"?"14px 14px 4px 14px":"14px 14px 14px 4px", background:m.role==="user"?"linear-gradient(135deg,#6B2D8F,#8B4DB8)":"#F8F6FB", color:m.role==="user"?"white":"#333", border:m.role==="assistant"?"1px solid rgba(107,45,143,.1)":"none" }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display:"flex", gap:5, padding:"10px 14px" }}>
                {[0,1,2].map(i=>(
                  <div key={i} style={{ width:8, height:8, borderRadius:"50%", background:"#6B2D8F", animation:`float ${.6+i*.2}s ease-in-out infinite`, animationDelay:i*.2+"s" }} />
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick questions */}
          {msgs.length <= 2 && (
            <div style={{ padding:"0 1rem", display:"flex", flexWrap:"wrap", gap:5, flexShrink:0 }}>
              {QUICK_QS.map(q=>(
                <button key={q} onClick={()=>send(q)}
                  style={{ fontSize:11, padding:"5px 10px", borderRadius:50, border:"1px solid rgba(107,45,143,.22)", background:"rgba(107,45,143,.05)", color:"#6B2D8F", cursor:"pointer", fontFamily:"'Outfit',sans-serif" }}>
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{ padding:".7rem 1rem 1rem", display:"flex", gap:8, borderTop:"1px solid #f0eef8", marginTop:6, flexShrink:0 }}>
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()}
              placeholder="Ask about courses, donations, startup fund..."
              style={{ flex:1, padding:"9px 13px", borderRadius:10, border:"1.5px solid #e8e4f0", fontSize:13, fontFamily:"'Outfit',sans-serif", color:"#333", background:"#fafaf8", outline:"none" }} />
            <button onClick={()=>send()} disabled={loading}
              style={{ width:38, height:38, borderRadius:10, flexShrink:0, background:"linear-gradient(135deg,#6B2D8F,#8B4DB8)", border:"none", color:"white", cursor:"pointer", fontSize:16, opacity:loading?.6:1 }}>→</button>
          </div>
        </div>
      )}

      {/* FAB */}
      <button onClick={()=>{ setOpen(!open); setUnread(0); }}
        style={{ position:"fixed", bottom:22, right:20, width:56, height:56, borderRadius:"50%", background:"linear-gradient(135deg,#6B2D8F,#8B4DB8)", border:"none", cursor:"pointer", color:"white", boxShadow:"0 8px 30px rgba(107,45,143,.55)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", padding:6, overflow:"hidden", transition:"transform .25s" }}
        onMouseEnter={e=>((e.currentTarget as HTMLButtonElement).style.transform="scale(1.08)")}
        onMouseLeave={e=>((e.currentTarget as HTMLButtonElement).style.transform="scale(1)")}>
        {open ? (
          <span style={{ fontSize:22 }}>×</span>
        ) : (
          <div style={{ position:"relative", width:"100%", height:"100%", borderRadius:"50%", overflow:"hidden" }}>
            <Image src="/logo-icon.jpg" alt="Chat" fill style={{ objectFit:"contain", padding:2 }} />
          </div>
        )}
        {!open && unread > 0 && (
          <div style={{ position:"absolute", top:3, right:3, width:18, height:18, borderRadius:"50%", background:"#D4A017", fontSize:10, fontWeight:800, display:"flex", alignItems:"center", justifyContent:"center", border:"2px solid white" }}>{unread}</div>
        )}
        {!open && <div className="pulse-ring-anim" style={{ position:"absolute", inset:0, borderRadius:"50%", border:"2px solid rgba(107,45,143,.6)" }} />}
      </button>
    </>
  );
}

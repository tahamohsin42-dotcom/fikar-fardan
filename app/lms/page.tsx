"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import FadeSection from "@/components/ui/FadeSection";
import { LMS_COURSES, BRAND } from "@/data/content";

type Course = typeof LMS_COURSES[number];
type Lesson = Course["lessons"][number];

function ProgressBar({ value }: { value: number }) {
  return (
    <div style={{ background: "rgba(107,45,143,0.12)", borderRadius: 50, height: 6, overflow: "hidden" }}>
      <div style={{ height: "100%", width: `${value}%`, background: "linear-gradient(90deg,#6B2D8F,#D4A017)", borderRadius: 50, transition: "width 0.8s ease" }} />
    </div>
  );
}

function LessonPlayer({ lesson, onClose }: { lesson: Lesson; onClose: () => void }) {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 2000, background: "rgba(13,5,32,0.96)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
      <div style={{ background: "white", borderRadius: 20, overflow: "hidden", width: "100%", maxWidth: 820, boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}>
        <div style={{ background: "linear-gradient(135deg,#0D0520,#1a0533)", padding: "1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ color: "white", fontWeight: 600, fontSize: 15 }}>{lesson.title}</div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>⏱ {lesson.duration}</div>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "white", width: 36, height: 36, borderRadius: "50%", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
        </div>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src={`https://www.youtube.com/embed/${lesson.videoId}?autoplay=1&rel=0`}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            allow="autoplay; fullscreen" allowFullScreen title={lesson.title}
          />
        </div>
        <div style={{ padding: "1rem 1.5rem", background: "#F8F6FB", display: "flex", justifyContent: "flex-end" }}>
          <button onClick={onClose} style={{ padding: "9px 24px", borderRadius: 9, background: "linear-gradient(135deg,#6B2D8F,#8B4DB8)", color: "white", border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: "'Outfit',sans-serif" }}>
            Mark Complete ✓
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LMSPage() {
  const [studentName, setStudentName] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    const saved = localStorage.getItem("fikr_student");
    if (saved) setStudentName(saved);
    const comp = localStorage.getItem("fikr_completed");
    if (comp) setCompleted(new Set(JSON.parse(comp)));
  }, []);

  function login() {
    if (!nameInput.trim()) return;
    localStorage.setItem("fikr_student", nameInput.trim());
    setStudentName(nameInput.trim());
  }

  function markComplete(key: string) {
    const next = new Set([...completed, key]);
    setCompleted(next);
    localStorage.setItem("fikr_completed", JSON.stringify([...next]));
    setActiveLesson(null);
  }

  function getCourseProgress(course: Course) {
    const done = course.lessons.filter(l => completed.has(`${course.id}-${l.id}`)).length;
    return Math.round((done / course.lessons.length) * 100);
  }

  const S = { // styles
    badge: (color: string): React.CSSProperties => ({ display: "inline-block", background: color + "18", color, padding: "3px 10px", borderRadius: 50, fontSize: 11, fontWeight: 700, letterSpacing: "0.5px" }),
  };

  if (!studentName) {
    return (
      <>
        <Navbar />
        <section style={{ minHeight: "100vh", background: "linear-gradient(135deg,#0D0520,#1a0533)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", paddingTop: 80 }}>
          <div style={{ background: "white", borderRadius: 24, padding: "3rem", width: "100%", maxWidth: 440, textAlign: "center", boxShadow: "0 30px 80px rgba(107,45,143,0.3)" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎓</div>
            <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 700, color: "#1a0533", marginBottom: ".5rem" }}>Student Portal</h1>
            <p style={{ color: "#888", fontSize: 14, marginBottom: "2rem", lineHeight: 1.7 }}>{BRAND.name} Learning Management System — Track your progress across all free courses.</p>
            <input value={nameInput} onChange={e => setNameInput(e.target.value)} onKeyDown={e => e.key === "Enter" && login()}
              placeholder="Enter your full name to continue" autoFocus
              style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1.5px solid #e0daea", fontSize: 14, fontFamily: "'Outfit',sans-serif", marginBottom: "1rem", outline: "none", color: "#333" }} />
            <button onClick={login} style={{ width: "100%", padding: 14, borderRadius: 10, background: "linear-gradient(135deg,#6B2D8F,#8B4DB8)", color: "white", border: "none", cursor: "pointer", fontSize: 15, fontWeight: 700, fontFamily: "'Outfit',sans-serif" }}>
              Enter Dashboard →
            </button>
            <p style={{ marginTop: "1rem", fontSize: 12, color: "#aaa" }}>No registration needed. Your progress saves automatically.</p>
          </div>
        </section>
      </>
    );
  }

  if (activeCourse) {
    const progress = getCourseProgress(activeCourse);
    return (
      <>
        {activeLesson && (
          <LessonPlayer lesson={activeLesson} onClose={() => { markComplete(`${activeCourse.id}-${activeLesson.id}`); }} />
        )}
        <Navbar />
        <div style={{ background: "#F8F6FB", minHeight: "100vh", paddingTop: 68 }}>
          <div style={{ background: "linear-gradient(135deg,#0D0520,#1a0533)", padding: "2.5rem 1.5rem" }}>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <button onClick={() => setActiveCourse(null)} style={{ color: "rgba(255,255,255,0.6)", background: "none", border: "none", cursor: "pointer", fontSize: 13, fontFamily: "'Outfit',sans-serif", marginBottom: "1rem", display: "flex", alignItems: "center", gap: 6 }}>
                ← Back to Courses
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                <img src={activeCourse.thumbnail} alt={activeCourse.title} style={{ width: 90, height: 70, objectFit: "cover", borderRadius: 12 }} />
                <div>
                  <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.5rem,3.5vw,2.2rem)", fontWeight: 700, color: "white", marginBottom: "0.4rem" }}>{activeCourse.title}</h1>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>by {activeCourse.instructor} · {activeCourse.lessons.length} lessons</p>
                </div>
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>Your Progress</span>
                  <span style={{ color: "#D4A017", fontSize: 12, fontWeight: 700 }}>{progress}%</span>
                </div>
                <ProgressBar value={progress} />
              </div>
            </div>
          </div>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1.5rem" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 700, color: "#1a0533", marginBottom: "1.5rem" }}>Course Lessons</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {activeCourse.lessons.map((lesson, i) => {
                const key = `${activeCourse.id}-${lesson.id}`;
                const done = completed.has(key);
                return (
                  <div key={lesson.id} onClick={() => setActiveLesson(lesson)}
                    style={{ background: "white", borderRadius: 14, padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer", border: `1.5px solid ${done ? "#0d9e6a30" : "rgba(107,45,143,0.1)"}`, transition: "all 0.2s", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "translateX(4px)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "translateX(0)")}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: done ? "#0d9e6a" : "linear-gradient(135deg,#6B2D8F,#8B4DB8)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 16, flexShrink: 0 }}>
                      {done ? "✓" : `▶`}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, color: "#1a0533", fontSize: 14, marginBottom: 3 }}>
                        Lesson {i + 1}: {lesson.title}
                      </div>
                      <div style={{ fontSize: 12, color: "#888" }}>⏱ {lesson.duration}</div>
                    </div>
                    <div style={S.badge(done ? "#0d9e6a" : "#6B2D8F")}>{done ? "Completed" : "Watch"}</div>
                  </div>
                );
              })}
            </div>
            {progress === 100 && (
              <div style={{ marginTop: "2rem", background: "linear-gradient(135deg,#0d9e6a,#06825a)", borderRadius: 16, padding: "2rem", textAlign: "center", color: "white" }}>
                <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🏆</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem" }}>Course Completed! Alhamdulillah!</h3>
                <p style={{ opacity: 0.85, fontSize: 14 }}>Your certificate of completion is being prepared. JazakAllah Khair for your dedication.</p>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const totalCompleted = LMS_COURSES.filter(c => getCourseProgress(c) === 100).length;
  const overallProgress = Math.round(LMS_COURSES.reduce((sum, c) => sum + getCourseProgress(c), 0) / LMS_COURSES.length);

  return (
    <>
      <Navbar />
      <PageHero badge="Learning Portal" title={`Welcome back,`} highlight={studentName.split(" ")[0]} subtitle="Continue your skill journey. Every lesson brings you closer to your goals." />
      <section style={{ background: "#F8F6FB", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Stats Bar */}
          <FadeSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "1rem", marginBottom: "3rem" }}>
              {[
                { label: "Courses Enrolled", value: LMS_COURSES.length, icon: "📚" },
                { label: "Completed", value: totalCompleted, icon: "🏆" },
                { label: "Overall Progress", value: `${overallProgress}%`, icon: "📈" },
                { label: "Streak", value: "7 days 🔥", icon: "⚡" },
              ].map(s => (
                <div key={s.label} style={{ background: "white", borderRadius: 14, padding: "1.25rem", border: "1px solid rgba(107,45,143,0.1)", textAlign: "center" }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: 6 }}>{s.icon}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", fontWeight: 700, color: "#6B2D8F", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </FadeSection>

          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", fontWeight: 700, color: "#1a0533", marginBottom: "1.5rem" }}>Your Courses</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1.5rem" }}>
            {LMS_COURSES.map((course, i) => {
              const prog = getCourseProgress(course);
              const done = course.lessons.filter(l => completed.has(`${course.id}-${l.id}`)).length;
              return (
                <FadeSection key={course.id} delay={i * 0.08}>
                  <div className="card-hover" onClick={() => setActiveCourse(course)} style={{ background: "white", borderRadius: 18, overflow: "hidden", border: "1px solid rgba(107,45,143,0.1)", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                    <div style={{ position: "relative", height: 170 }}>
                      <img src={course.thumbnail} alt={course.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,5,32,0.8), transparent)" }} />
                      {prog === 100 && (
                        <div style={{ position: "absolute", top: 12, right: 12, background: "#0d9e6a", color: "white", fontSize: 11, padding: "4px 12px", borderRadius: 50, fontWeight: 800 }}>✓ DONE</div>
                      )}
                      <div style={{ position: "absolute", bottom: 12, left: 12, right: 12 }}>
                        <ProgressBar value={prog} />
                      </div>
                    </div>
                    <div style={{ padding: "1.25rem" }}>
                      <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a0533", marginBottom: "0.4rem", lineHeight: 1.3 }}>{course.title}</h3>
                      <p style={{ fontSize: 12, color: "#888", marginBottom: "1rem" }}>by {course.instructor} · {course.lessons.length} lessons</p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 12, color: "#6B2D8F", fontWeight: 600 }}>{done}/{course.lessons.length} completed</span>
                        <span style={S.badge("#6B2D8F")}>{prog === 0 ? "Start" : prog === 100 ? "Review" : "Continue →"}</span>
                      </div>
                    </div>
                  </div>
                </FadeSection>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
      <style>{`@media(max-width:768px){.prog-row{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}

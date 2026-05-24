import { ReactNode } from "react";
interface Props { children: ReactNode; bg?: string; id?: string; py?: string; }
export default function SectionWrapper({ children, bg = "white", id, py = "5rem" }: Props) {
  return (
    <section id={id} style={{ background: bg, padding: `${py} 1.5rem` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

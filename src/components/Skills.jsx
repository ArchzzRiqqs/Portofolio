import { SKILL_GROUPS } from "../content/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Skills() {
  return (
    <section id="keahlian" className="section container" aria-labelledby="keahlian-title">
      <SectionHead index="02" id="keahlian-title" title="Keahlian" aside="Teknologi yang saya gunakan" />
      <div className="skills">
        {SKILL_GROUPS.map((g, i) => (
          <Reveal key={g.title} as="section" index={i} className="skills__group" aria-label={g.title}>
            <h3 className="mono skills__title">{g.title}</h3>
            <ul>
              {g.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

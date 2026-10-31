import { EDUCATION, PROFILE } from "../content/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function About() {
  const current = EDUCATION[0];
  const facts = [
    ["Peran", PROFILE.role],
    ["Lokasi", PROFILE.location],
    ["Fokus", PROFILE.focus.join(", ")],
    ["Studi", `${current.title}, ${current.org}`],
  ];
  return (
    <section id="tentang" className="section container" aria-labelledby="tentang-title">
      <SectionHead index="01" id="tentang-title" title="Tentang" />
      <div className="about">
        <Reveal as="p" className="about__bio">{PROFILE.bio}</Reveal>
        <Reveal as="dl" index={1} className="facts">
          {facts.map(([k, v]) => (
            <div key={k} className="facts__row">
              <dt className="mono dim">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

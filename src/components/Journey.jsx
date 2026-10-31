import { EDUCATION, EXPERIENCE } from "../content/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

function Ledger({ title, items, index = 0 }) {
  return (
    <Reveal as="section" index={index} className="ledger" aria-label={title}>
      <h3 className="mono ledger__title">{title}</h3>
      <ol>
        {items.map((e) => (
          <li key={`${e.period}-${e.title}`} className="ledger__item">
            <p className="mono ledger__period">{e.period}</p>
            <div>
              <h4 className="ledger__role">{e.title}</h4>
              <p className="ledger__org">{e.org}</p>
              <p className="ledger__desc dim">{e.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

export default function Journey() {
  return (
    <section id="perjalanan" className="section container" aria-labelledby="perjalanan-title">
      <SectionHead index="04" id="perjalanan-title" title="Perjalanan" aside="Pengalaman dan pendidikan" />
      <div className="journey">
        <Ledger title="Pengalaman" items={EXPERIENCE} />
        <Ledger title="Pendidikan" items={EDUCATION} index={1} />
      </div>
    </section>
  );
}

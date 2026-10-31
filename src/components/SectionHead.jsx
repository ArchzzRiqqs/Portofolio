import Reveal from "./Reveal";

export default function SectionHead({ index, id, title, aside }) {
  return (
    <Reveal as="div" className="section-head">
      <p className="mono section-head__index" aria-hidden="true">{index}</p>
      <h2 id={id} className="section-head__title">{title}</h2>
      {aside ? <p className="mono dim section-head__aside">{aside}</p> : null}
      <span className="rule" aria-hidden="true" />
    </Reveal>
  );
}

import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../content/data";
import Reveal from "./Reveal";
import ReelPlayer from "./ReelPlayer";
import SectionHead from "./SectionHead";

function ProjectItem({ project, featured, index }) {
  const { id, title, kind, desc, tags, image, imageSize, link } = project;
  return (
    <Reveal as="article" index={index} className={`project${featured ? " project--featured" : ""}`} aria-labelledby={`project-${id}`}>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project__media" tabIndex={-1} aria-hidden="true">
        <img src={image} alt="" width={imageSize.width} height={imageSize.height} loading="lazy" decoding="async" />
      </a>
      <div className="project__body">
        <p className="mono project__meta"><span className="project__id">{id}</span> {kind}</p>
        <h3 id={`project-${id}`} className="project__title">
          <a href={link} target="_blank" rel="noopener noreferrer" className="project__link">
            {title}
            <ArrowUpRight size={22} aria-hidden="true" />
            <span className="visually-hidden"> (kode sumber di GitHub, tab baru)</span>
          </a>
        </h3>
        <p className="project__desc">{desc}</p>
        <ul className="tags mono" aria-label={`Teknologi ${title}`}>
          {tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const [first, ...rest] = PROJECTS;
  return (
    <section id="proyek" className="section container" aria-labelledby="proyek-title">
      <SectionHead index="03" id="proyek-title" title="Proyek pilihan" aside={`${String(PROJECTS.length).padStart(2, "0")} proyek`} />
      <div className="projects">
        <ProjectItem project={first} featured index={0} />
        <div className="projects__pair">
          {rest.map((p, i) => <ProjectItem key={p.id} project={p} index={i} />)}
        </div>
      </div>
      <Reveal className="projects__reel">
        <p className="mono dim projects__reel-caption">Cuplikan ketiga proyek</p>
        <ReelPlayer />
      </Reveal>
    </section>
  );
}

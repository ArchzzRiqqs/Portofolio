import { Mail } from "lucide-react";
import { PROFILE } from "../content/data";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  return (
    <section id="kontak" className="section contact container" aria-labelledby="kontak-title">
      <Reveal className="contact__inner">
        <p className="mono dim contact__eyebrow">05 — Kontak</p>
        <h2 id="kontak-title" className="contact__title">Mari berkolaborasi.</h2>
        <p className="contact__text">
          Terbuka untuk peluang kerja maupun proyek kolaborasi. Cara tercepat menghubungi saya adalah lewat email.
        </p>
        <a href={`mailto:${PROFILE.email}`} className="contact__mail">{PROFILE.email}</a>
        <ul className="contact__links">
          <li>
            <a href={`mailto:${PROFILE.email}`} className="link-inline"><Mail size={18} aria-hidden="true" /> Email</a>
          </li>
          <li>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="link-inline">
              <GithubIcon /> GitHub<span className="visually-hidden"> (tab baru)</span>
            </a>
          </li>
          <li>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="link-inline">
              <LinkedinIcon /> LinkedIn<span className="visually-hidden"> (tab baru)</span>
            </a>
          </li>
        </ul>
      </Reveal>
    </section>
  );
}

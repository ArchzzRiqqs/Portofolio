import { ArrowDownRight } from "lucide-react";
import { PROFILE } from "../content/data";

export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title" id="top">
      <div className="hero__text">
        <p className="mono hero__meta intro" style={{ "--i": 0 }}>
          {PROFILE.role} <span aria-hidden="true">/</span> {PROFILE.location}
        </p>
        <h1 id="hero-title" className="hero__name intro" style={{ "--i": 1 }}>
          Toriq Habil <em>Fadhila</em>
        </h1>
        <p className="hero__lead intro" style={{ "--i": 2 }}>{PROFILE.tagline}</p>

        <ol className="hero__approach mono intro" style={{ "--i": 3 }} aria-label="Cara saya bekerja">
          {PROFILE.approach.map((step) => <li key={step}>{step}</li>)}
        </ol>

        <div className="hero__actions intro" style={{ "--i": 4 }}>
          <a href="#proyek" className="btn btn--primary">
            Lihat proyek <ArrowDownRight size={18} aria-hidden="true" />
          </a>
          <a href="#kontak" className="btn btn--ghost">Hubungi saya</a>
        </div>
      </div>

      <figure className="hero__figure intro" style={{ "--i": 2 }}>
        <img src={PROFILE.photo} alt={`Potret ${PROFILE.name}`} width={PROFILE.photoSize.width} height={PROFILE.photoSize.height} fetchPriority="high" decoding="async" />
        <figcaption className="mono">
          <span className="status-dot" aria-hidden="true" />
          {PROFILE.status}
        </figcaption>
      </figure>
    </section>
  );
}

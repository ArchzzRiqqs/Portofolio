import { useEffect, useState } from "react";
import {
  AbsoluteFill, Easing, Img, Sequence, continueRender, delayRender, interpolate, staticFile, useCurrentFrame,
} from "remotion";
import projects from "../../src/content/projects.json";

export const FPS = 30;
export const SCENE_FRAMES = 105; // 3.5s per project -> loop of 10.5s

// Same tokens as src/styles/tokens.css (dark theme) so the reel matches the site.
const C = { bg: "#12141a", text: "#ECE8DF", dim: "#9A9BA3", line: "#2a2d36", accent: "#E8A33D" };
const ease = Easing.bezier(0.16, 1, 0.3, 1); // = --ease-out in the site
const rise = (frame, start, dur = 18) =>
  interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease,
  });

// Load the same display font as the site, deterministically (render waits for it).
const useDisplayFont = () => {
  const [handle] = useState(() => delayRender("font"));
  useEffect(() => {
    const face = new FontFace("Instrument Serif", `url(${staticFile("instrument-serif.woff2")})`);
    face.load().then(() => { document.fonts.add(face); continueRender(handle); })
      .catch(() => continueRender(handle));
  }, [handle]);
};

const Scene = ({ project, index }) => {
  const f = useCurrentFrame();
  const exit = interpolate(f, [SCENE_FRAMES - 12, SCENE_FRAMES], [1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const img = rise(f, 6, 28);
  return (
    <AbsoluteFill style={{ background: C.bg, color: C.text, opacity: exit, fontFamily: "Inter, sans-serif" }}>
      <div style={{ position: "absolute", left: 64, top: 64, right: 64, display: "flex", justifyContent: "space-between",
        fontFamily: "monospace", fontSize: 18, color: C.dim, letterSpacing: 1 }}>
        <span>toriqq.fme / proyek</span>
        <span style={{ color: C.accent }}>{project.id} / {String(projects.length).padStart(2, "0")}</span>
      </div>
      <div style={{ position: "absolute", left: 64, bottom: 80, width: 470 }}>
        <div style={{ opacity: rise(f, 0), transform: `translateY(${(1 - rise(f, 0)) * 14}px)`,
          fontFamily: "monospace", fontSize: 18, color: C.accent, marginBottom: 14 }}>{project.kind}</div>
        <div style={{ opacity: rise(f, 4), transform: `translateY(${(1 - rise(f, 4)) * 14}px)`,
          fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 92, lineHeight: 1, marginBottom: 28, whiteSpace: "nowrap" }}>
          {project.title}
        </div>
        <div style={{ opacity: rise(f, 12), display: "flex", flexWrap: "wrap", gap: "8px 16px",
          fontFamily: "monospace", fontSize: 18, color: C.dim }}>
          {project.tags.map((t) => <span key={t}>{t}</span>)}
        </div>
      </div>
      <div style={{ position: "absolute", right: 64, top: 150, width: 560, height: 280, overflow: "hidden",
        border: `1px solid ${C.line}`, clipPath: `inset(0 ${(1 - img) * 100}% 0 0)` }}>
        <Img src={staticFile(`${project.title}.webp`)} style={{ width: "100%", height: "100%", objectFit: "cover",
          transform: `scale(${1.06 - 0.06 * img + f * 0.0004})` }} />
      </div>
      <div style={{ position: "absolute", left: 0, bottom: 0, height: 3, background: C.accent,
        width: `${(f / SCENE_FRAMES) * 100}%` }} />
    </AbsoluteFill>
  );
};

export const ProjectsReel = () => {
  useDisplayFont();
  return (
  <AbsoluteFill style={{ background: C.bg }}>
    {projects.map((p, i) => (
      <Sequence key={p.slug} from={i * SCENE_FRAMES} durationInFrames={SCENE_FRAMES}>
        <Scene project={p} index={i} />
      </Sequence>
    ))}
  </AbsoluteFill>);
};

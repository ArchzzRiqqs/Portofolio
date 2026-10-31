import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { REEL } from "../content/data";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function ReelPlayer() {
  const videoRef = useRef(null);
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);
  const shouldPlay = visible && !paused && !reduced && !failed;

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (shouldPlay) el.play().catch(() => setFailed(true));
    else el.pause();
  }, [shouldPlay]);

  return (
    <figure className="reel">
      <video ref={videoRef} className="reel__video" src={REEL.src} poster={REEL.poster} width={REEL.size.width} height={REEL.size.height} muted loop playsInline preload="none" aria-label="Cuplikan bergerak ketiga proyek: KelanaCoffe, LifeOS, dan Akademia" onError={() => setFailed(true)} />
      {!reduced && !failed ? (
        <button type="button" className="icon-btn reel__toggle" aria-pressed={paused} aria-label={paused ? "Putar cuplikan" : "Jeda cuplikan"} onClick={() => setPaused((p) => !p)}>
          {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
        </button>
      ) : null}
    </figure>
  );
}

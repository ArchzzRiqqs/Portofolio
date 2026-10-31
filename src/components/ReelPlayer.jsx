import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { REEL } from "../content/data";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function ReelPlayer() {
  const videoRef = useRef(null);
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === "undefined");
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || failed) return;

    if (!visible || paused || reduced) {
      video.pause();
      return;
    }

    video.muted = true;
    video.play().catch((error) => {
      if (error.name === "NotAllowedError") setPaused(true);
      else if (error.name !== "AbortError") setFailed(true);
    });
  }, [visible, paused, reduced, failed]);

  return (
    <figure className="reel">
      <video ref={videoRef} className="reel__video" src={REEL.src} poster={REEL.poster} width={REEL.size.width} height={REEL.size.height} muted loop playsInline preload="metadata" aria-label="Cuplikan bergerak proyek-proyek pilihan" onError={() => setFailed(true)} />
      {failed ? (
        <p className="reel__error mono" role="status">Cuplikan tidak dapat dimuat.</p>
      ) : !reduced ? (
        <button type="button" className="icon-btn reel__toggle" aria-pressed={paused} aria-label={paused ? "Putar cuplikan" : "Jeda cuplikan"} onClick={() => setPaused((p) => !p)}>
          {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
        </button>
      ) : null}
    </figure>
  );
}
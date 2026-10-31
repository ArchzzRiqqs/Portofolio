
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { REEL } from "../content/data";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function ReelPlayer() {
  const videoRef = useRef(null);
  const reduced = useReducedMotion();

  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && !("IntersectionObserver" in window)
  );
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Hormati preferensi reduced motion.
    if (reduced) {
      video.pause();
      return;
    }

    if (!("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [reduced]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || failed) return;

    if (visible && !paused && !reduced) {
      video.play().catch((error) => {
        console.warn("Video autoplay gagal:", error);
      });
    } else {
      video.pause();
    }
  }, [visible, paused, reduced, failed]);

  return (
    <figure className="reel">
      <video ref={videoRef} className="reel__video" poster={REEL.poster} width={REEL.size.width} height={REEL.size.height} muted loop playsInline preload="metadata" aria-label="Cuplikan bergerak ketiga proyek: KelanaCoffe, LifeOS, dan Akademia" onError={() => {console.error("Video gagal dimuat:", videoRef.current?.error); setFailed(true);}}>
        <source src={REEL.src} type="video/webm" />
        Browser tidak mendukung pemutaran video ini.
      </video>

      {!reduced && !failed && (
        <button type="button" className="icon-btn reel__toggle" aria-pressed={paused} aria-label={paused ? "Putar cuplikan" : "Jeda cuplikan"} onClick={() => setPaused((previous) => !previous)}>
          {paused ? (
            <Play size={16} aria-hidden="true" />
          ) : (
            <Pause size={16} aria-hidden="true" />
          )}
        </button>
      )}
    </figure>
  );
}

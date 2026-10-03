'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { receptionData } from '../../config/reception';

export default function AudioPlayer({ onToast }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      if (onToast) onToast('Audio paused');
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          if (onToast) onToast('Playing reception music');
        })
        .catch(() => {
          if (onToast) onToast('Tap to enable sound');
        });
    }
  }, [isPlaying, onToast]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => setIsReady(true);
    const handleEnded = () => {
      // Loop music smoothly
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('ended', handleEnded);

    // Listen for custom trigger from IntroOverlay
    const handleStartAudio = () => {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay blocked by browser policy until next interaction
        });
    };

    window.addEventListener('start-reception-audio', handleStartAudio);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('ended', handleEnded);
      window.removeEventListener('start-reception-audio', handleStartAudio);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={receptionData.assets.audioTrack}
        preload="auto"
        loop
      />

      <div
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 70,
        }}
      >
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause Reception Audio' : 'Play Reception Audio'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            padding: '0.65rem 1.1rem',
            backgroundColor: 'rgba(16, 12, 18, 0.78)',
            border: isPlaying
              ? '1px solid rgba(243, 199, 124, 0.65)'
              : '1px solid rgba(207, 168, 110, 0.3)',
            borderRadius: '9999px',
            color: '#f5edd8',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            cursor: 'pointer',
            boxShadow: isPlaying
              ? '0 0 20px rgba(243, 199, 124, 0.25), 0 4px 15px rgba(0,0,0,0.6)'
              : '0 4px 15px rgba(0, 0, 0, 0.4)',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Animated sound bars */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.5px',
              height: '14px',
            }}
          >
            {[1, 2, 3, 4].map((bar) => (
              <span
                key={bar}
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: isPlaying ? '100%' : '4px',
                  backgroundColor: isPlaying ? '#f3c77c' : 'rgba(238, 225, 206, 0.45)',
                  borderRadius: '1px',
                  animation: isPlaying ? `soundWave 1.${bar * 2}s ease-in-out infinite alternate` : 'none',
                }}
              />
            ))}
          </div>

          <span style={{ fontWeight: 500 }}>
            {isPlaying ? 'Music Playing' : 'Play Music'}
          </span>
        </button>

        <style jsx>{`
          @keyframes soundWave {
            0% {
              height: 3px;
            }
            50% {
              height: 14px;
            }
            100% {
              height: 6px;
            }
          }
        `}</style>
      </div>
    </>
  );
}

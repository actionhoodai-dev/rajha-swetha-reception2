'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { receptionData } from '../../config/reception';

export default function IntroOverlay({ onDismiss }) {
  const videoRef = useRef(null);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  const isDismissedRef = useRef(false);

  const handleDismiss = useCallback(() => {
    if (isDismissedRef.current) return;
    isDismissedRef.current = true;
    setIsDismissed(true);

    // Smoothly fade out and unmount video
    setTimeout(() => {
      if (videoRef.current) {
        try {
          videoRef.current.pause();
        } catch (e) {}
      }
      setIsMounted(false);
    }, 950);
  }, [onDismiss]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration && !isNaN(video.duration) && video.currentTime >= video.duration - 0.3) {
        handleDismiss();
      }
    };

    const handleEnded = () => {
      handleDismiss();
    };

    const handlePlaying = () => {
      setHasStartedPlaying(true);
    };

    let durationTimeout = null;
    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration) && video.duration > 0) {
        durationTimeout = setTimeout(handleDismiss, (video.duration + 0.8) * 1000);
      }
    };

    // Long fallback in case video never triggers ended (e.g. 60s)
    const fallbackTimeout = setTimeout(handleDismiss, 60000);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Initial play attempt
    video.play().catch(() => {});

    return () => {
      if (durationTimeout) clearTimeout(durationTimeout);
      clearTimeout(fallbackTimeout);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [handleDismiss]);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#060507] transition-all duration-1000 ease-out ${
        isDismissed ? 'opacity-0 pointer-events-none scale-105 filter blur-sm' : 'opacity-100'
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100dvh',
        zIndex: 9999,
        backgroundColor: '#050406',
        overflow: 'hidden',
      }}
    >
      {/* Blurred Ambient Backdrop Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 filter blur-3xl scale-110"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(229,157,72,0.18) 0%, rgba(120,28,48,0.15) 50%, rgba(5,4,6,0.95) 100%)',
        }}
      />

      {/* Cinematic Fullscreen / Portrait Video Stage */}
      <div
        style={{
          position: 'relative',
          width: '100vw',
          height: '100dvh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <video
          ref={videoRef}
          src={receptionData.assets.introVideo}
          autoPlay
          playsInline
          muted
          preload="auto"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            maxHeight: '100dvh',
            maxWidth: '100vw',
          }}
        />
      </div>

      {/* Luxury Enter Celebration Button — Centered at bottom with safe-area padding for mobile */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleDismiss();
        }}
        onTouchEnd={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleDismiss();
        }}
        style={{
          position: 'fixed',
          bottom: 'calc(env(safe-area-inset-bottom, 0px) + 24px)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.65rem',
          padding: '0.85rem 1.85rem',
          backgroundColor: 'rgba(14, 10, 16, 0.88)',
          border: '1px solid rgba(243, 199, 124, 0.65)',
          borderRadius: '9999px',
          color: '#f5edd8',
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(0.72rem, 2.5vw, 0.8rem)',
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(243, 199, 124, 0.3)',
          transition: 'all 0.35s ease',
        }}
      >
        <span>Enter Celebration</span>
        <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.75rem', color: '#f3c77c' }}></i>
      </button>
    </div>
  );
}

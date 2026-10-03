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

    // Broadcast audio start event for music player
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('start-reception-audio'));
    }

    if (onDismiss) onDismiss();

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
      if (video.duration && !isNaN(video.duration) && video.currentTime >= video.duration - 0.4) {
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
        durationTimeout = setTimeout(handleDismiss, (video.duration + 0.5) * 1000);
      }
    };

    const fallbackTimeout = setTimeout(handleDismiss, 16000);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Initial play attempt
    video.play().catch(() => {
      // Browser autoplay policy handler
      const unlockGesture = () => {
        if (video) video.play().catch(() => {});
        window.removeEventListener('touchstart', unlockGesture);
        window.removeEventListener('click', unlockGesture);
      };
      window.addEventListener('touchstart', unlockGesture, { once: true });
      window.addEventListener('click', unlockGesture, { once: true });
    });

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
        height: '100vh',
        zIndex: 9999,
        backgroundColor: '#050406',
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
          height: '100vh',
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
            maxHeight: '100vh',
            maxWidth: '100vw',
          }}
        />

        {/* Tap anywhere to enter immediately */}
        <div
          onClick={handleDismiss}
          onTouchEnd={handleDismiss}
          style={{
            position: 'absolute',
            inset: 0,
            cursor: 'pointer',
            zIndex: 10,
          }}
          title="Click to enter the celebration"
        />
      </div>

      {/* Luxury Skip Intro Button */}
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
          position: 'absolute',
          bottom: '2.5rem',
          right: '2.5rem',
          zIndex: 30,
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          padding: '0.75rem 1.6rem',
          backgroundColor: 'rgba(12, 10, 14, 0.7)',
          border: '1px solid rgba(243, 199, 124, 0.35)',
          borderRadius: '4px',
          color: '#f5edd8',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          cursor: 'pointer',
          transition: 'all 0.35s ease',
          boxShadow: '0 4px 25px rgba(0, 0, 0, 0.6)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(243, 199, 124, 0.8)';
          e.currentTarget.style.boxShadow = '0 0 25px rgba(243, 199, 124, 0.3)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(243, 199, 124, 0.35)';
          e.currentTarget.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.6)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <span>Enter Celebration</span>
        <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.75rem', color: '#f3c77c' }}></i>
      </button>

      {/* Subtle Bottom Ambient Note */}
      <div
        style={{
          position: 'absolute',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          fontFamily: 'var(--font-editorial)',
          fontSize: '0.7rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'rgba(238, 225, 206, 0.4)',
          pointerEvents: 'none',
        }}
      >
        {receptionData.couple.groomShort} &amp; {receptionData.couple.brideShort}
      </div>
    </div>
  );
}

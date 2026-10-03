'use client';

import { useState, useCallback } from 'react';
import SmoothScroll from './components/SmoothScroll';
import IntroOverlay from './components/IntroOverlay';
import AmbientLightingCanvas from './components/AmbientLightingCanvas';
import Navigation from './components/Navigation';
import CinematicExperience from './components/CinematicExperience';
import AudioPlayer from './components/AudioPlayer';

export default function ReceptionPage() {
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const triggerToast = useCallback((msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2800);
  }, []);

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el, { offset: 0, duration: 1.4 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <SmoothScroll>
      <div className="reception-experience-app" style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#070608' }}>
        {/* Full-screen Opening Intro Video */}
        <IntroOverlay />

        {/* Cinematic Film Texture & Vignette */}
        <div className="cinematic-film-grain" />
        <div className="cinematic-vignette" />

        {/* Ambient Evening Candle & Filament Bokeh Simulation */}
        <AmbientLightingCanvas />

        {/* Minimal Floating Navigation Monogram & Drawer */}
        <Navigation onNavigate={handleNavigate} />

        {/* Main Continuous Cinematic Reception Story */}
        <main>
          <CinematicExperience onToast={triggerToast} />
        </main>

        {/* Minimal Luxury Toast */}
        <div
          style={{
            position: 'fixed',
            bottom: '5.5rem',
            right: '2rem',
            zIndex: 90,
            padding: '0.65rem 1.2rem',
            backgroundColor: 'rgba(12, 10, 14, 0.92)',
            border: '1px solid rgba(243, 199, 124, 0.4)',
            borderRadius: '4px',
            color: '#faf5ed',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            opacity: showToast ? 1 : 0,
            transform: showToast ? 'translateY(0)' : 'translateY(8px)',
            pointerEvents: 'none',
            transition: 'all 0.35s ease',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.8)',
          }}
        >
          {toastMessage}
        </div>
      </div>
    </SmoothScroll>
  );
}

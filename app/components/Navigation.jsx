'use client';

import { useState } from 'react';
import { receptionData } from '../../config/reception';

export default function Navigation({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'scene-evening', label: 'The Evening Begins', num: '01' },
    { id: 'scene-lights', label: 'The Sacred Bond', num: '02' },
    { id: 'scene-couple', label: 'The Couple', num: '03' },
    { id: 'scene-story', label: 'Our Story', num: '04' },
    { id: 'scene-info', label: 'Reception Details', num: '05' },
    { id: 'scene-celebration', label: 'The Celebration', num: '06' },
    { id: 'scene-venue', label: 'Venue & Schedule', num: '07' },
  ];

  const handleSelect = (id) => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top Floating Luxury Monogram Bar */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 60,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.4rem 2rem',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            background: 'rgba(10, 8, 12, 0.55)',
            padding: '0.55rem 1.2rem',
            borderRadius: '9999px',
            border: '1px solid rgba(243, 199, 124, 0.22)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '0.95rem',
              letterSpacing: '0.2em',
              color: '#f5edd8',
              fontWeight: 600,
            }}
          >
            R &amp; S
          </span>
          <span
            style={{
              width: '1px',
              height: '14px',
              backgroundColor: 'rgba(243, 199, 124, 0.35)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.68rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(238, 225, 206, 0.8)',
            }}
          >
            13 Nov 2026
          </span>
        </div>

        {/* Minimal Menu Trigger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close Menu' : 'Open Navigation Menu'}
          style={{
            pointerEvents: 'auto',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: 'rgba(12, 9, 14, 0.72)',
            border: '1px solid rgba(243, 199, 124, 0.35)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            cursor: 'pointer',
            transition: 'all 0.35s ease',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '18px',
              height: '1.5px',
              backgroundColor: '#f3c77c',
              transition: 'all 0.3s ease',
              transform: isOpen ? 'rotate(45deg) translate(2.5px, 2.5px)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '14px',
              height: '1.5px',
              backgroundColor: '#f3c77c',
              transition: 'all 0.3s ease',
              transform: isOpen ? 'rotate(-45deg) translate(2.5px, -2.5px)' : 'none',
            }}
          />
        </button>
      </header>

      {/* Cinematic Fullscreen Menu Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 90,
          backgroundColor: 'rgba(6, 4, 7, 0.94)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transform: isOpen ? 'scale(1)' : 'scale(0.97)',
        }}
      >
        {/* Close Button Inside Menu */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          style={{
            position: 'absolute',
            top: '2rem',
            right: '2rem',
            background: 'none',
            border: 'none',
            color: '#eee1ce',
            fontSize: '1.6rem',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
          aria-label="Close Navigation"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
              color: '#f3c77c',
              marginBottom: '0.2rem',
            }}
          >
            The Reception
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#faf5ed',
            }}
          >
            {receptionData.couple.groom} &amp; {receptionData.couple.bride}
          </h2>
        </div>

        {/* Menu Navigation Links */}
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            maxWidth: '480px',
            width: '100%',
          }}
        >
          {menuItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelect(item.id)}
              style={{
                background: 'none',
                border: 'none',
                display: 'flex',
                alignItems: 'baseline',
                gap: '1.2rem',
                cursor: 'pointer',
                padding: '0.4rem 1rem',
                transition: 'transform 0.25s ease, color 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.2em',
                  color: '#df9d54',
                  fontWeight: 500,
                }}
              >
                {item.num}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
                  letterSpacing: '0.12em',
                  color: '#faf5ed',
                  textTransform: 'uppercase',
                }}
              >
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Quick Location & Directions */}
        <div
          style={{
            marginTop: '3rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <a
            href={receptionData.event.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury"
            style={{ fontSize: '0.72rem', padding: '0.7rem 1.6rem' }}
          >
            <i className="fa-solid fa-location-dot" style={{ color: '#f3c77c' }}></i>
            <span>Google Maps</span>
          </a>
        </div>
      </div>
    </>
  );
}

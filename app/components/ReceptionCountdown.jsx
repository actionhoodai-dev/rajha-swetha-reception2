'use client';

import { useState, useEffect } from 'react';

export default function ReceptionCountdown({ onToast }) {
  // Target: 13 November 2026, 6:00 PM IST (18:00:00 GMT+0530)
  const targetDate = new Date('2026-11-13T18:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const handleShare = async () => {
    const shareData = {
      title: 'Rajha Mukilan & Swetha — Wedding Reception',
      text: 'You are cordially invited to celebrate the Wedding Reception of Rajha Mukilan & Swetha on 13 November 2026 at Sri Mahal, Namakkal.',
      url: typeof window !== 'undefined' ? window.location.href : '',
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        if (onToast) onToast('Invitation shared');
      } catch (err) {
        // User dismissed share dialog
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        if (onToast) onToast('Invitation link copied to clipboard');
      } catch (err) {
        if (onToast) onToast('Link ready to share');
      }
    }
  };

  return (
    <div style={{ width: '100%', marginTop: '2rem' }}>
      {/* =========================================================
          LIVE COUNTDOWN TIMER
          ========================================================= */}
      <div style={{ marginBottom: '2.5rem' }}>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.68rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#df9d54',
            display: 'block',
            marginBottom: '1.2rem',
            fontWeight: 500,
          }}
        >
          Countdown to the Celebration
        </span>

        {/* 4 Gold Pill Cards */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(8px, 2.5vw, 16px)',
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Mins', value: timeLeft.minutes },
            { label: 'Secs', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'clamp(64px, 19vw, 84px)',
                height: 'clamp(72px, 21vw, 92px)',
                backgroundColor: 'rgba(25, 18, 26, 0.85)',
                border: '1px solid rgba(243, 199, 124, 0.35)',
                borderRadius: '6px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(1.6rem, 5.5vw, 2.2rem)',
                  fontWeight: 400,
                  color: '#ffffff',
                  lineHeight: 1,
                  textShadow: '0 0 15px rgba(243, 199, 124, 0.5)',
                }}
              >
                {String(item.value).padStart(2, '0')}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.55rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#df9d54',
                  marginTop: '0.35rem',
                  fontWeight: 600,
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================
          INTERACTIVE ACTION BUTTONS
          - Get Directions (Google Maps Navigation)
          - Share Invitation (Native Mobile Share / Copy Link)
          ========================================================= */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <a
          href="https://maps.google.com/?q=Sri+Mahal+Trichy+Road+Flyover+Namakkal"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-luxury btn-luxury-primary"
          style={{ padding: '0.85rem 1.8rem' }}
        >
          <i className="fa-solid fa-diamond-turn-right" style={{ color: '#f3c77c' }}></i>
          <span>Get Directions</span>
        </a>

        <button
          type="button"
          onClick={handleShare}
          className="btn-luxury"
          style={{ padding: '0.85rem 1.8rem' }}
        >
          <i className="fa-solid fa-share-nodes" style={{ color: '#f3c77c' }}></i>
          <span>Share Invitation</span>
        </button>
      </div>
    </div>
  );
}

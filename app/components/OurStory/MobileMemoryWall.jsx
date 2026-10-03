'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ourStoryData } from '../../../config/ourStory';

/**
 * MobileMemoryWall
 * Engineered specifically for mobile screens:
 * - Compact snippet-sized polaroids (~125-140px, approx 3cm)
 * - 2 photos per row to eliminate endless scrolling
 * - Physical wires with realistic glowing fairy light bulbs
 * - Clothespin clips physically clamped right onto the wire & top of photo
 * - Clear separation ensuring zero text overlap
 */
export default function MobileMemoryWall() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section
      id="scene-story"
      style={{
        position: 'relative',
        backgroundColor: '#070508',
        overflow: 'hidden',
        padding: '5rem 1rem 6rem 1rem',
      }}
    >
      {/* Warm Ambient Wall Glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 15%, rgba(120, 28, 48, 0.25) 0%, rgba(229, 157, 72, 0.12) 45%, rgba(7, 5, 8, 0.98) 85%)',
          pointerEvents: 'none',
        }}
      />

      {/* Chapter Title */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '500px',
          margin: '0 auto 3.5rem auto',
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.68rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#df9d54',
            display: 'inline-block',
            marginBottom: '0.8rem',
            padding: '0.3rem 1.1rem',
            border: '1px solid rgba(223, 157, 84, 0.35)',
            borderRadius: '9999px',
            backgroundColor: 'rgba(14, 10, 16, 0.7)',
          }}
        >
          {ourStoryData.badge}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-editorial)',
            fontSize: 'clamp(2.4rem, 8vw, 3.4rem)',
            fontWeight: 400,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#faf5ed',
            lineHeight: 1.15,
            textShadow: '0 4px 25px rgba(0, 0, 0, 0.8)',
          }}
        >
          {ourStoryData.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.85 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.05rem',
            fontStyle: 'italic',
            color: '#eee1ce',
            marginTop: '0.6rem',
            letterSpacing: '0.02em',
          }}
        >
          {ourStoryData.subtitle}
        </motion.p>
      </div>

      {/* Memory Wall Flow Container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '480px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '4.5rem',
          zIndex: 10,
        }}
      >
        {/* =========================================================================
            PART 1: The Beginning & Friendship
            ========================================================================= */}
        <div style={{ position: 'relative', width: '100%' }}>
          {/* Isolated Story Text Block (Zero overlap) */}
          <div
            style={{
              textAlign: 'center',
              padding: '0 0.5rem 1.8rem 0.5rem',
              position: 'relative',
              zIndex: 15,
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.18rem',
                lineHeight: 1.5,
                color: '#faf5ed',
                textShadow: '0 2px 15px rgba(0,0,0,0.9)',
              }}
            >
              &ldquo;{ourStoryData.paragraphs[0].text}&rdquo;
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.85 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: '0.92rem',
                fontStyle: 'italic',
                color: '#df9d54',
                marginTop: '0.6rem',
              }}
            >
              {ourStoryData.paragraphs[0].sub}
            </motion.p>
          </div>

          {/* Realistic Fairy Light Wire with Hanging Polaroids */}
          <WirePhotoStage
            photos={[ourStoryData.memories[0], ourStoryData.memories[1]]}
            wireId="wire-1"
            sag={14}
            onSelect={setSelectedPhoto}
          />
        </div>

        {/* =========================================================================
            PART 2: Countless Moments & Blossoming Love
            ========================================================================= */}
        <div style={{ position: 'relative', width: '100%' }}>
          {/* Isolated Story Text Block */}
          <div
            style={{
              textAlign: 'center',
              padding: '0 0.5rem 1.8rem 0.5rem',
              position: 'relative',
              zIndex: 15,
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.18rem',
                lineHeight: 1.5,
                color: '#faf5ed',
                textShadow: '0 2px 15px rgba(0,0,0,0.9)',
              }}
            >
              &ldquo;{ourStoryData.paragraphs[1].text}&rdquo;
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.85 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: '0.92rem',
                fontStyle: 'italic',
                color: '#df9d54',
                marginTop: '0.6rem',
              }}
            >
              {ourStoryData.paragraphs[1].sub}
            </motion.p>
          </div>

          {/* Wire 2 with Photos 3 & 4 */}
          <WirePhotoStage
            photos={[ourStoryData.memories[2], ourStoryData.memories[3]]}
            wireId="wire-2"
            sag={16}
            onSelect={setSelectedPhoto}
          />
        </div>

        {/* =========================================================================
            PART 3: Friends to Soulmates, and Now Husband & Wife
            ========================================================================= */}
        <div style={{ position: 'relative', width: '100%' }}>
          {/* Isolated Story Text Block */}
          <div
            style={{
              textAlign: 'center',
              padding: '0 0.5rem 1.8rem 0.5rem',
              position: 'relative',
              zIndex: 15,
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                lineHeight: 1.5,
                color: '#faf5ed',
                textShadow: '0 2px 15px rgba(0,0,0,0.9)',
              }}
            >
              &ldquo;{ourStoryData.paragraphs[2].text}&rdquo;
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              style={{
                margin: '1.2rem auto 0 auto',
                padding: '0.9rem 1.4rem',
                border: '1px solid rgba(243, 199, 124, 0.35)',
                borderRadius: '4px',
                backgroundColor: 'rgba(16, 11, 18, 0.75)',
                display: 'inline-block',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  color: '#f3c77c',
                  letterSpacing: '0.04em',
                  margin: 0,
                }}
              >
                {ourStoryData.paragraphs[2].sub}
              </p>
            </motion.div>
          </div>

          {/* Wire 3 with Photo 5 & Photo 6 side-by-side */}
          <WirePhotoStage
            photos={[ourStoryData.memories[4], ourStoryData.memories[5]]}
            wireId="wire-3"
            sag={15}
            onSelect={setSelectedPhoto}
          />
        </div>
      </div>

      {/* =========================================================================
          HIGH-RES LIGHTBOX MODAL
          ========================================================================= */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              backgroundColor: 'rgba(5, 3, 6, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '1.2rem',
            }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhoto(null);
              }}
              aria-label="Close photo preview"
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(25, 20, 28, 0.85)',
                border: '1px solid rgba(243, 199, 124, 0.4)',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#faf5ed',
                fontSize: '1.2rem',
                cursor: 'pointer',
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: '#faf7f2',
                padding: '12px 12px 38px 12px',
                borderRadius: '3px',
                maxWidth: '380px',
                width: '100%',
                boxShadow: '0 25px 70px rgba(0,0,0,0.95), 0 0 35px rgba(243, 199, 124, 0.25)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 5',
                  maxHeight: '62vh',
                  overflow: 'hidden',
                  backgroundColor: '#1a161b',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.caption}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    display: 'block',
                  }}
                />
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '14px',
                  right: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-script)',
                    fontSize: '1.45rem',
                    color: '#34251c',
                  }}
                >
                  {selectedPhoto.caption}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#8c7662',
                  }}
                >
                  {selectedPhoto.date}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/**
 * WirePhotoStage
 * Renders the physical sagging wire with wound copper cable,
 * realistic glowing fairy light bulbs, and attached 3cm Polaroid snippets
 */
function WirePhotoStage({ photos = [], wireId, sag = 15, singleCentered = false, onSelect }) {
  // Bulb positions along the wire width
  const bulbPositions = [8, 22, 36, 50, 64, 78, 92];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: '28px',
        paddingBottom: '10px',
      }}
    >
      {/* =========================================================
          PHYSICAL WIRE & FAIRY LIGHT BULBS
          Positioned at top: 22px so the clips at top: -14px latch onto it
          ========================================================= */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '60px',
          pointerEvents: 'none',
          zIndex: 8,
        }}
      >
        <svg
          viewBox="0 0 400 60"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%', overflow: 'visible' }}
        >
          <defs>
            {/* Wire Gradient */}
            <linearGradient id={`cableGrad-${wireId}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4a3b2c" />
              <stop offset="50%" stopColor="#9a8169" />
              <stop offset="100%" stopColor="#4a3b2c" />
            </linearGradient>

            {/* Glowing Bulb Amber Halo Filter */}
            <radialGradient id={`bulbHalo-${wireId}`}>
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="25%" stopColor="#ffea9f" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#ffb338" stopOpacity="0.5" />
              <stop offset="90%" stopColor="#e57e25" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Wall Anchors */}
          <circle cx="2" cy="18" r="4.5" fill="#2d2218" />
          <circle cx="2" cy="18" r="2.8" fill="#d4a35b" />
          <circle cx="398" cy="18" r="4.5" fill="#2d2218" />
          <circle cx="398" cy="18" r="2.8" fill="#d4a35b" />

          {/* 1. Wire Shadow on Wall */}
          <path
            d={`M 0 22 Q 200 ${18 + sag + 4} 400 22`}
            fill="none"
            stroke="rgba(0, 0, 0, 0.65)"
            strokeWidth="2.2"
            filter="blur(2px)"
          />

          {/* 2. Main Cable */}
          <path
            d={`M 0 18 Q 200 ${18 + sag} 400 18`}
            fill="none"
            stroke={`url(#cableGrad-${wireId})`}
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* 3. Wound Copper Fairy Light Wire (Helix wave) */}
          <path
            d={`M 0 18 Q 50 15 100 ${18 + sag * 0.5} Q 150 ${21 + sag * 0.8} 200 ${18 + sag} Q 250 ${21 + sag * 0.8} 300 ${18 + sag * 0.5} Q 350 15 400 18`}
            fill="none"
            stroke="#d49448"
            strokeWidth="1.1"
            opacity="0.8"
          />

          {/* 4. Realistic Fairy Light Bulbs with Glowing Filaments */}
          {bulbPositions.map((xPercent, idx) => {
            const x = (xPercent / 100) * 400;
            const t = xPercent / 100;
            // Bezier y = (1-t)^2 * 18 + 2*(1-t)*t * (18+sag) + t^2 * 18
            const y = (1 - t) * (1 - t) * 18 + 2 * (1 - t) * t * (18 + sag) + t * t * 18;

            return (
              <g
                key={idx}
                transform={`translate(${x}, ${y})`}
                style={{
                  animation: `fairyFlickerSoft ${2.4 + (idx % 3) * 0.6}s ease-in-out ${idx * 0.3}s infinite alternate`,
                }}
              >
                {/* Luminous Warm Light Bloom Halo */}
                <circle cx="0" cy="4" r="14" fill={`url(#bulbHalo-${wireId})`} />

                {/* Copper socket collar */}
                <rect x="-1.8" y="-1.5" width="3.6" height="3" fill="#805128" rx="0.6" />

                {/* Glass teardrop bulb */}
                <ellipse cx="0" cy="4.5" rx="3.2" ry="4.8" fill="#fffbe8" opacity="0.95" />

                {/* Glowing hot filament core */}
                <line x1="-0.8" y1="3" x2="0.8" y2="3" stroke="#ff8f24" strokeWidth="0.8" />
                <circle cx="0" cy="4" r="1.6" fill="#ffffff" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* =========================================================
          THE POLAROID SNIPPET CARDS (Clamped onto the wire)
          ========================================================= */}
      <div
        style={{
          display: 'flex',
          justifyContent: singleCentered ? 'center' : 'space-between',
          alignItems: 'flex-start',
          maxWidth: singleCentered ? '200px' : '330px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 12,
        }}
      >
        {photos.map((photo, i) => (
          <div
            key={photo.id}
            onClick={() => onSelect && onSelect(photo)}
            style={{
              position: 'relative',
              width: 'clamp(126px, 38vw, 142px)', // Compact ~3cm snippet
              cursor: 'pointer',
              transform: `rotate(${photo.rotation}deg)`,
              transformOrigin: 'top center',
              transition: 'transform 0.25s ease',
            }}
          >
            {/* Clothespin Clip (Visually touching wire at top and clamping photo) */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '14px',
                height: '32px',
                zIndex: 20,
                pointerEvents: 'none',
              }}
            >
              <svg width="14" height="32" viewBox="0 0 14 32" fill="none">
                {/* Left Wood Prong */}
                <rect x="1" y="0" width="5.2" height="30" rx="1.2" fill="#b08352" />
                {/* Right Wood Prong */}
                <rect x="7.8" y="0" width="5.2" height="30" rx="1.2" fill="#8f6539" />
                {/* Wire Groove Notch (Wire runs right through here!) */}
                <ellipse cx="7" cy="10" rx="3.5" ry="2" fill="#2b1f15" opacity="0.9" />
                {/* Metal Spring Coil */}
                <rect x="0.8" y="12" width="12.4" height="5.5" rx="1.2" fill="#4d4640" />
                <path d="M 1 14 Q 7 12 13 14" stroke="#877d73" strokeWidth="1.4" />
                {/* Bottom Clamp Contact Shadow */}
                <rect x="1" y="27" width="12" height="2.5" fill="#1f150e" opacity="0.85" rx="0.5" />
              </svg>
            </div>

            {/* The Instant-Film Card Body */}
            <div
              style={{
                backgroundColor: '#faf7f2',
                padding: '7px 7px 22px 7px',
                borderRadius: '2px',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.75), 0 3px 8px rgba(0, 0, 0, 0.35)',
                border: '1px solid rgba(225, 215, 200, 0.45)',
                position: 'relative',
              }}
            >
              {/* Photo Area */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '4 / 4.8',
                  overflow: 'hidden',
                  backgroundColor: '#1a161b',
                  position: 'relative',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.image}
                  alt={photo.caption}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    display: 'block',
                  }}
                  loading="lazy"
                />
              </div>

              {/* Caption */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '4px',
                  left: '6px',
                  right: '6px',
                  textAlign: 'center',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-script)',
                    fontSize: '0.95rem',
                    color: '#34261d',
                    lineHeight: 1,
                  }}
                >
                  {photo.caption}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fairyFlickerSoft {
          0% {
            opacity: 0.85;
            transform: scale(0.97);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 0.9;
            transform: scale(0.98);
          }
        }
      `}</style>
    </div>
  );
}

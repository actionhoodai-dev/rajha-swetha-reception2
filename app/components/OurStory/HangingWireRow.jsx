'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * HangingWireRow creates a unified physical wire assembly:
 * - Left and right brass wall anchor pins
 * - Main suspension cable with cast wall shadow
 * - Spiral copper wire wound around the cable in a natural helix
 * - Realistic micro-LED diode droplets with warm golden-amber filaments
 * - Authentic wooden clothespins physically clamped to the wire and photos
 * - Polaroid instant-film photos with genuine paper texture, borders, and captions
 */
export default function HangingWireRow({
  rowId,
  yStart = 50,
  yEnd = 60,
  sag = 45,
  photos = [],
  storyParagraph,
  isMobile = false,
  onSelectPhoto,
}) {
  const [hoveredPhotoId, setHoveredPhotoId] = useState(null);

  // Wire curve calculation
  const wirePoints = useMemo(() => {
    // Width normalized to 1000 viewBox units
    const midY = (yStart + yEnd) / 2 + sag;
    const wirePath = `M 0 ${yStart} Q 500 ${yStart + yEnd + sag * 2} 1000 ${yEnd}`;
    const wireShadowPath = `M 0 ${yStart + 8} Q 500 ${yStart + yEnd + sag * 2 + 8} 1000 ${yEnd + 8}`;

    // Spiral copper micro-wire wound around the main cable
    let spiralPath = `M 0 ${yStart}`;
    const steps = 80;
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      const x = t * 1000;
      const yBase = (1 - t) * (1 - t) * yStart + 2 * (1 - t) * t * midY + t * t * yEnd;
      // Winding helix oscillation
      const wave = Math.sin(t * Math.PI * 32) * 3.5;
      spiralPath += ` L ${x.toFixed(1)} ${(yBase + wave).toFixed(1)}`;
    }

    // Micro-LED fairy lights placed along the spiral wire
    const ledCount = isMobile ? 14 : 26;
    const leds = [];
    for (let i = 0; i <= ledCount; i++) {
      const t = (i + 0.5) / (ledCount + 1);
      const x = t * 1000;
      const yBase = (1 - t) * (1 - t) * yStart + 2 * (1 - t) * t * midY + t * t * yEnd;
      const wave = Math.sin(t * Math.PI * 32) * 3.5;
      // LED diode tilt angle
      const angle = Math.cos(t * Math.PI * 32) * 45;
      leds.push({
        id: `led-${rowId}-${i}`,
        x,
        y: yBase + wave,
        angle,
        delay: (i * 0.23) % 3,
        duration: 2.4 + (i % 4) * 0.5,
      });
    }

    return { wirePath, wireShadowPath, spiralPath, leds };
  }, [yStart, yEnd, sag, isMobile, rowId]);

  // Compute exact wire Y position at a given percentage X (0 to 100)
  const getWireYAtPercent = (percentX) => {
    const t = Math.max(0, Math.min(100, percentX)) / 100;
    const midY = (yStart + yEnd) / 2 + sag;
    // Quadratic Bezier value
    return (1 - t) * (1 - t) * yStart + 2 * (1 - t) * t * midY + t * t * yEnd;
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: isMobile ? '560px' : '520px',
        margin: '0 auto',
      }}
    >
      {/* Story narrative text placed above the wire row */}
      {storyParagraph && (
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto 3rem auto',
            textAlign: 'center',
            padding: '0 1rem',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              lineHeight: 1.6,
              color: '#faf5ed',
              letterSpacing: '0.02em',
              textShadow: '0 2px 20px rgba(0,0,0,0.9)',
            }}
          >
            &ldquo;{storyParagraph.text}&rdquo;
          </motion.p>
          {storyParagraph.sub && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 0.85, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)',
                fontStyle: 'italic',
                color: '#df9d54',
                marginTop: '1rem',
                letterSpacing: '0.04em',
              }}
            >
              {storyParagraph.sub}
            </motion.p>
          )}
        </div>
      )}

      {/* SVG Canvas for the Wire, Spiral Copper Cable, LED lights, and Wall Anchors */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '180px',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      >
        <svg
          viewBox="0 0 1000 180"
          preserveAspectRatio="none"
          style={{
            width: '100%',
            height: '100%',
            overflow: 'visible',
          }}
        >
          <defs>
            {/* Metallic Cable Gradient */}
            <linearGradient id={`wireGrad-${rowId}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3d332a" />
              <stop offset="30%" stopColor="#87715a" />
              <stop offset="50%" stopColor="#bfab93" />
              <stop offset="70%" stopColor="#87715a" />
              <stop offset="100%" stopColor="#3d332a" />
            </linearGradient>

            {/* Micro-LED Bulb Filament Glow */}
            <radialGradient id={`ledGlow-${rowId}`}>
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="25%" stopColor="#ffe4a0" stopOpacity="0.95" />
              <stop offset="55%" stopColor="#ffab36" stopOpacity="0.45" />
              <stop offset="85%" stopColor="#e57e25" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Wall Anchors (Left and Right Brass Mounting Pins) */}
          <g>
            {/* Left Bracket */}
            <circle cx="2" cy={yStart} r="5.5" fill="#2d2218" />
            <circle cx="2" cy={yStart} r="3.5" fill="#c49a5b" />
            {/* Right Bracket */}
            <circle cx="998" cy={yEnd} r="5.5" fill="#2d2218" />
            <circle cx="998" cy={yEnd} r="3.5" fill="#c49a5b" />
          </g>

          {/* 1. Wire Shadow on Wall */}
          <path
            d={wirePoints.wireShadowPath}
            fill="none"
            stroke="rgba(0, 0, 0, 0.65)"
            strokeWidth="3"
            filter="blur(3px)"
          />

          {/* 2. Main High-Tensile Suspension Cable */}
          <path
            d={wirePoints.wirePath}
            fill="none"
            stroke={`url(#wireGrad-${rowId})`}
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* 3. Spiral Copper Fairy Light String wrapped around the main wire */}
          <path
            d={wirePoints.spiralPath}
            fill="none"
            stroke="#d49448"
            strokeWidth="1.2"
            opacity="0.85"
            strokeLinecap="round"
          />

          {/* 4. Realistic Micro-LED Bulbs */}
          {wirePoints.leds.map((led) => (
            <g
              key={led.id}
              transform={`translate(${led.x}, ${led.y}) rotate(${led.angle})`}
              style={{
                animation: `ledOrganicFlicker ${led.duration}s ease-in-out ${led.delay}s infinite alternate`,
              }}
            >
              {/* Outer Warm Amber Illumination Radius */}
              <circle cx="0" cy="0" r="14" fill={`url(#ledGlow-${rowId})`} />

              {/* Tiny Copper Diode Solder Bracket */}
              <rect x="-1" y="-1.5" width="2" height="3" fill="#8c5825" rx="0.5" />

              {/* Realistic Epoxy Resin Teardrop Bulb */}
              <ellipse cx="0" cy="2" rx="2.2" ry="3.5" fill="#fff9eb" />
              <circle cx="0" cy="1.8" r="1.2" fill="#ffffff" />
            </g>
          ))}
        </svg>
      </div>

      {/* Hanging Polaroid Photos attached physically to this wire */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: isMobile ? 'center' : 'space-around',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: isMobile ? '3.5rem' : '4rem',
          paddingTop: '20px',
          zIndex: 10,
        }}
      >
        {photos.map((photo, index) => {
          const rotation = isMobile ? photo.mobileRotation : photo.rotation;
          const isHovered = hoveredPhotoId === photo.id;

          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 25, rotate: rotation * 1.4 }}
              whileInView={{ opacity: 1, y: 0, rotate: rotation }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                scale: 1.03,
                rotate: rotation * 0.4,
                zIndex: 35,
              }}
              onHoverStart={() => setHoveredPhotoId(photo.id)}
              onHoverEnd={() => setHoveredPhotoId(null)}
              onClick={() => onSelectPhoto && onSelectPhoto(photo)}
              style={{
                position: 'relative',
                display: 'inline-block',
                cursor: 'pointer',
                transformOrigin: 'top center',
                zIndex: isHovered ? 35 : 15 + index,
                marginTop: '10px',
              }}
            >
              {/* =========================================================
                  PHYSICAL CLOTHESPIN CLIP (CLAMPS BOTH WIRE AND PHOTO)
                  Positioned precisely so the wire passes right through
                  the top clamp slot and the lower jaw grips the photo frame
                  ========================================================= */}
              <div
                style={{
                  position: 'absolute',
                  top: '-26px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '18px',
                  height: '42px',
                  zIndex: 25,
                  pointerEvents: 'none',
                }}
              >
                {/* 3D Clothespin Clip Drawing */}
                <svg
                  width="18"
                  height="42"
                  viewBox="0 0 18 42"
                  fill="none"
                  style={{
                    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.75))',
                  }}
                >
                  {/* Left Wooden Prongs */}
                  <rect
                    x="2"
                    y="0"
                    width="6.5"
                    height="40"
                    rx="1.5"
                    fill="url(#woodGrainLeft)"
                  />
                  {/* Right Wooden Prongs */}
                  <rect
                    x="9.5"
                    y="0"
                    width="6.5"
                    height="40"
                    rx="1.5"
                    fill="url(#woodGrainRight)"
                  />

                  {/* Wire Pass-Through Slot Groove (Around y=12 to 14) */}
                  <ellipse cx="9" cy="13" rx="4" ry="2.2" fill="#2b1f15" opacity="0.85" />

                  {/* Metal Torsion Spring Clip Coil in Center */}
                  <rect x="1.5" y="16" width="15" height="7" rx="2" fill="#silver" />
                  <path
                    d="M 2 18 Q 9 15 16 18 Q 9 21 2 24"
                    stroke="#59524c"
                    strokeWidth="2.2"
                    fill="none"
                  />
                  <circle cx="9" cy="19.5" r="2.2" fill="#38332f" />

                  {/* Contact Pinch Point at bottom jaws holding the photo */}
                  <rect x="3" y="36" width="12" height="3" fill="#261b12" opacity="0.8" rx="0.5" />

                  <defs>
                    <linearGradient id="woodGrainLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a37648" />
                      <stop offset="60%" stopColor="#c99763" />
                      <stop offset="100%" stopColor="#875f36" />
                    </linearGradient>
                    <linearGradient id="woodGrainRight" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#875f36" />
                      <stop offset="40%" stopColor="#c99763" />
                      <stop offset="100%" stopColor="#a37648" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* =========================================================
                  AUTHENTIC POLAROID / INSTANT FILM CARD
                  ========================================================= */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#fbf9f4',
                  padding: '12px 12px 38px 12px',
                  borderRadius: '2px',
                  boxShadow:
                    '0 18px 45px rgba(0, 0, 0, 0.75), 0 4px 12px rgba(0, 0, 0, 0.4), inset 0 0 1px rgba(255, 255, 255, 0.9)',
                  width: isMobile ? 'clamp(260px, 80vw, 300px)' : 'clamp(250px, 26vw, 310px)',
                  border: '1px solid rgba(225, 215, 200, 0.5)',
                  transition: 'box-shadow 0.35s ease',
                }}
              >
                {/* Paper texture overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.25) 0%, rgba(240,230,215,0.3) 100%)',
                    pointerEvents: 'none',
                    borderRadius: '2px',
                  }}
                />

                {/* The Real Photograph (Preserving authentic faces & colors) */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: photo.aspectRatio === '16/9' ? '16 / 10' : '4 / 4.7',
                    overflow: 'hidden',
                    backgroundColor: '#161318',
                    boxShadow: 'inset 0 0 8px rgba(0,0,0,0.2)',
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
                      filter: 'contrast(1.02) saturate(1.02)',
                    }}
                    loading="lazy"
                  />

                  {/* Soft instant-film sheen */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 40%)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>

                {/* Handwritten Script Caption at Polaroid Base */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '12px',
                    right: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-script)',
                      fontSize: '1.25rem',
                      color: '#34261d',
                      letterSpacing: '0.02em',
                      lineHeight: 1,
                    }}
                  >
                    {photo.caption}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.55rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#94806e',
                      fontWeight: 500,
                    }}
                  >
                    {photo.date}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes ledOrganicFlicker {
          0% {
            opacity: 0.85;
            transform: scale(0.97);
          }
          40% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            opacity: 0.9;
            transform: scale(0.98);
          }
          100% {
            opacity: 0.98;
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  );
}

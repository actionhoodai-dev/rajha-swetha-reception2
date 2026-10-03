'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PolaroidPhoto({
  memory,
  index,
  isMobile = false,
  onSelect,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const rotation = isMobile ? memory.mobileRotation : memory.rotation;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotation * 1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.03, rotate: rotation * 0.5, zIndex: 40 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onSelect && onSelect(memory)}
      style={{
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
        transformOrigin: 'top center',
        zIndex: isHovered ? 40 : 15 + index,
      }}
    >
      {/* =========================================================
          PHYSICAL MINI WOODEN / BRASS CLASP (Touching wire & photo)
          ========================================================= */}
      <div
        style={{
          position: 'absolute',
          top: '-18px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '16px',
          height: '32px',
          zIndex: 30,
          pointerEvents: 'none',
        }}
      >
        {/* Clip Body (Wooden or Brass finish) */}
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: memory.clipType === 'brass' ? '#bfa063' : '#a87a4c',
            background:
              memory.clipType === 'brass'
                ? 'linear-gradient(135deg, #d4b579 0%, #a38241 100%)'
                : 'linear-gradient(135deg, #bd8e5c 0%, #875e36 100%)',
            borderRadius: '2px',
            boxShadow: '0 3px 8px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Spring Ring / Wire Indentation */}
          <div
            style={{
              width: '12px',
              height: '3px',
              backgroundColor: '#403429',
              borderRadius: '1px',
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)',
            }}
          />
        </div>
      </div>

      {/* =========================================================
          POLAROID INSTANT FILM PAPER BODY
          ========================================================= */}
      <div
        style={{
          position: 'relative',
          backgroundColor: '#faf7f2',
          padding: '12px 12px 38px 12px',
          borderRadius: '2px',
          boxShadow:
            '0 20px 45px rgba(0, 0, 0, 0.7), 0 4px 12px rgba(0, 0, 0, 0.4), inset 0 0 1px rgba(255, 255, 255, 0.8)',
          width: 'clamp(250px, 28vw, 320px)',
          transition: 'box-shadow 0.35s ease',
          border: '1px solid rgba(220, 210, 195, 0.4)',
        }}
      >
        {/* Paper subtle grain overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, rgba(240,230,215,0.3) 100%)',
            pointerEvents: 'none',
            borderRadius: '2px',
          }}
        />

        {/* The Original Photograph */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '4 / 4.7',
            overflow: 'hidden',
            backgroundColor: '#1a161b',
            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={memory.image}
            alt={memory.caption}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 20%',
              display: 'block',
              filter: 'contrast(1.02) saturate(1.03)',
            }}
            loading="lazy"
          />

          {/* Very subtle authentic film gloss highlight */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 45%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Handwritten Style Caption at Bottom Margin */}
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '12px',
            right: '12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '1.25rem',
              color: '#382a20',
              letterSpacing: '0.02em',
              lineHeight: 1,
              textAlign: 'center',
            }}
          >
            {memory.caption}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

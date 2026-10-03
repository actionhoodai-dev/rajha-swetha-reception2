'use client';

import { useMemo } from 'react';

/**
 * FairyLightWire renders a physically suspended sagging wire
 * with wound micro-LED fairy lights that have warm amber bloom.
 */
export default function FairyLightWire({
  yStart = 50,
  yEnd = 65,
  sag = 35,
  ledCount = 18,
  wireColor = 'rgba(180, 160, 130, 0.45)',
  wireShadow = 'rgba(0, 0, 0, 0.65)',
  className = '',
}) {
  // Generate micro-LED bulb positions along the quadratic bezier curve
  const leds = useMemo(() => {
    const list = [];
    for (let i = 0; i <= ledCount; i++) {
      const t = i / ledCount;
      // Quadratic Bezier: B(t) = (1-t)^2*P0 + 2(1-t)t*P1 + t^2*P2
      // P0 = (0, yStart), P1 = (50%, (yStart+yEnd)/2 + sag), P2 = (100%, yEnd)
      const midY = (yStart + yEnd) / 2 + sag;
      const xPercent = t * 100;
      const yPercent = (1 - t) * (1 - t) * yStart + 2 * (1 - t) * t * midY + t * t * yEnd;
      // Slight vertical displacement to simulate wire winding
      const windingOffset = Math.sin(t * Math.PI * 8) * 3;
      list.push({
        id: i,
        x: xPercent,
        y: yPercent + windingOffset,
        size: Math.random() > 0.3 ? 4.5 : 3.5,
        delay: (i * 0.18) % 3,
        duration: 2.2 + (i % 3) * 0.6,
      });
    }
    return list;
  }, [yStart, yEnd, sag, ledCount]);

  return (
    <div
      className={`absolute inset-x-0 pointer-events-none ${className}`}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        zIndex: 5,
      }}
    >
      <svg
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          overflow: 'visible',
        }}
      >
        {/* Wire Shadow against wall */}
        <path
          d={`M 0 ${yStart * 2 + 6} Q 500 ${(yStart + yEnd + sag * 2) + 6} 1000 ${yEnd * 2 + 6}`}
          fill="none"
          stroke={wireShadow}
          strokeWidth="2.5"
          opacity="0.4"
          filter="blur(2px)"
        />

        {/* Real Metallic Suspended Wire */}
        <path
          d={`M 0 ${yStart * 2} Q 500 ${yStart + yEnd + sag * 2} 1000 ${yEnd * 2}`}
          fill="none"
          stroke={wireColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>

      {/* Micro-LED Bulbs wrapped along the wire */}
      {leds.map((led) => (
        <div
          key={led.id}
          style={{
            position: 'absolute',
            left: `${led.x}%`,
            top: `${led.y}%`,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        >
          {/* Outer Warm Amber Halo / Bloom */}
          <div
            style={{
              position: 'absolute',
              width: '24px',
              height: '24px',
              left: '-10px',
              top: '-10px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 201, 119, 0.45) 0%, rgba(229, 157, 72, 0.18) 50%, rgba(0,0,0,0) 80%)',
              filter: 'blur(3px)',
              animation: `fairyFlicker ${led.duration}s ease-in-out ${led.delay}s infinite alternate`,
            }}
          />

          {/* Tiny Glass Filament Bulb Core */}
          <div
            style={{
              width: `${led.size}px`,
              height: `${led.size + 1.5}px`,
              borderRadius: '50% 50% 40% 40%',
              backgroundColor: '#fffbe8',
              boxShadow: '0 0 8px #ffc977, 0 0 16px rgba(243, 199, 124, 0.8)',
              animation: `fairyFlicker ${led.duration}s ease-in-out ${led.delay}s infinite alternate`,
            }}
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes fairyFlicker {
          0% {
            opacity: 0.82;
            transform: scale(0.96);
          }
          50% {
            opacity: 1;
            transform: scale(1.08);
          }
          100% {
            opacity: 0.88;
            transform: scale(0.98);
          }
        }
      `}</style>
    </div>
  );
}

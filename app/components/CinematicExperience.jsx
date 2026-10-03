'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { receptionData } from '../../config/reception';
import OurStorySection from './OurStory/OurStorySection';
import ReceptionCountdown from './ReceptionCountdown';

export default function CinematicExperience({ onToast }) {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div ref={containerRef} className="cinematic-experience-root" style={{ width: '100%', overflowX: 'hidden' }}>
      {/* =========================================================================
          SCENE 01 — "THE EVENING BEGINS"
          Screen emerges from dark; light reveals one by one: candle glow -> table lamps -> suspended lights
          ========================================================================= */}
      {/* =========================================================================
          SCENE 01 — "THE HERO SECTION: RAJHA MUKILAN & SWETHA"
          First page revealing the couple's names with rich reddish-maroon backdrop
          and high-fashion gold & ivory typography tailored for mobile
          ========================================================================= */}
      {/* =========================================================================
          SCENE 01 — "THE HERO SECTION: RAJHA MUKILAN & SWETHA"
          Uses the user-supplied luxury maroon chandelier template background
          with radiant gold typography centered precisely in the velvet panel
          ========================================================================= */}
      <section
        id="scene-evening"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#1b0409',
          backgroundImage: `url(${receptionData.assets.images.heroMaroonBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          padding: '4rem 1.2rem',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Ambient Film Shadow Overlay to emphasize central text */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(14,3,6,0.2) 0%, rgba(20,4,8,0.05) 30%, rgba(20,4,8,0.25) 75%, rgba(14,3,6,0.65) 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Central Text Column constrained to the maroon velvet panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: 'clamp(260px, 68vw, 320px)', // Fits neatly within central vertical panel
            width: '100%',
            padding: '1.2rem 0.5rem',
            margin: '0 auto',
          }}
        >
          {/* Welcome Tagline */}
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.6rem, 2.2vw, 0.72rem)',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: '#ffdf85',
              display: 'inline-block',
              fontWeight: 600,
              marginBottom: '0.9rem',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.9), 0 0 16px rgba(255, 223, 133, 0.6)',
            }}
          >
            Welcome To The Reception
          </span>

          {/* Groom's Name */}
          <h1
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(2.3rem, 8vw, 3.4rem)',
              fontWeight: 400,
              letterSpacing: '0.04em',
              lineHeight: 1.05,
              color: '#ffffff',
              textTransform: 'uppercase',
              textShadow: '0 3px 18px rgba(0, 0, 0, 0.95), 0 0 30px rgba(255, 210, 100, 0.5)',
            }}
          >
            Rajha Mukilan
          </h1>

          {/* Calligraphic "weds" */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.8rem',
              margin: '0.2rem 0',
            }}
          >
            <span
              style={{
                width: '28px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #ffdf85)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: 'clamp(2.1rem, 7.5vw, 3rem)',
                color: '#ffdf85',
                lineHeight: 1,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.9), 0 0 20px rgba(255, 223, 133, 0.7)',
              }}
            >
              weds
            </span>
            <span
              style={{
                width: '28px',
                height: '1px',
                background: 'linear-gradient(90deg, #ffdf85, transparent)',
              }}
            />
          </div>

          {/* Bride's Name */}
          <h1
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(2.3rem, 8vw, 3.4rem)',
              fontWeight: 400,
              letterSpacing: '0.04em',
              lineHeight: 1.05,
              color: '#ffffff',
              textTransform: 'uppercase',
              textShadow: '0 3px 18px rgba(0, 0, 0, 0.95), 0 0 30px rgba(255, 210, 100, 0.5)',
            }}
          >
            Swetha
          </h1>

          {/* Reception Schedule & Venue Details in Panel */}
          <div
            style={{
              marginTop: '1.4rem',
              paddingTop: '0.8rem',
              borderTop: '1px solid rgba(255, 223, 133, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.3rem',
              alignItems: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.68rem, 2.5vw, 0.78rem)',
                letterSpacing: '0.26em',
                color: '#fff5d6',
                textTransform: 'uppercase',
                fontWeight: 600,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)',
              }}
            >
              13 November 2026
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.62rem, 2.2vw, 0.72rem)',
                letterSpacing: '0.2em',
                color: '#ffd98c',
                textTransform: 'uppercase',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)',
              }}
            >
              6:00 PM – 9:00 PM
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.6rem, 2.1vw, 0.7rem)',
                letterSpacing: '0.18em',
                color: '#f0e3ce',
                textTransform: 'uppercase',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)',
              }}
            >
              Sri Mahal &bull; Namakkal
            </p>
          </div>
        </motion.div>

        {/* Downward Scroll Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7, y: [0, 6, 0] }}
          transition={{ opacity: { duration: 1, delay: 1 }, y: { repeat: Infinity, duration: 2, ease: 'easeInOut' } }}
          style={{
            position: 'absolute',
            bottom: '1.4rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem',
            zIndex: 10,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.55rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#ffd98c',
              textShadow: '0 2px 8px rgba(0,0,0,0.9)',
            }}
          >
            Scroll
          </span>
          <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.62rem', color: '#ffdf85' }}></i>
        </motion.div>
      </section>

      {/* =========================================================================
          SCENE 02 — "THE CELEBRATION OF LOVE"
          A page praising the beauty of marriage, the sanctity of the bond,
          and the meaning behind this reception gathering
          ========================================================================= */}
      <section
        id="scene-lights"
        style={{
          position: 'relative',
          minHeight: '120vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          backgroundColor: '#070608',
        }}
      >
        {/* Full-width atmospheric background imagery */}
        <motion.div
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1.0 }}
          viewport={{ amount: 0.15 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="scene-lights-bg"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.65) contrast(1.08)',
          }}
        />

        {/* Ambient Film Gradient Transitions */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, #070608 0%, rgba(7,6,8,0.45) 25%, rgba(7,6,8,0.35) 60%, #070608 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Content: Praising the beauty of marriage */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.4 }}
          style={{
            position: 'relative',
            zIndex: 10,
            padding: '2rem 1.5rem',
            textAlign: 'center',
            maxWidth: '850px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.6rem, 1.2vw, 0.72rem)',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: '#df9d54',
              marginBottom: '1.4rem',
              padding: '0.4rem 1.4rem',
              border: '1px solid rgba(223, 157, 84, 0.35)',
              borderRadius: '9999px',
              backgroundColor: 'rgba(10, 8, 12, 0.65)',
              backdropFilter: 'blur(8px)',
            }}
          >
            The Sacred Bond
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              textShadow: '0 4px 30px rgba(0, 0, 0, 0.8)',
            }}
          >
            A Celebration of Love
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
              fontStyle: 'italic',
              color: '#eee1ce',
              marginTop: '1.4rem',
              lineHeight: 1.65,
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.9)',
              maxWidth: '520px',
              margin: '1.4rem auto 0',
            }}
          >
            Where two souls unite under the glow of a thousand blessings, and the beauty of togetherness fills every moment with grace.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.68rem, 1.4vw, 0.82rem)',
              letterSpacing: '0.2em',
              color: '#cfa86e',
              marginTop: '1.8rem',
              textTransform: 'uppercase',
            }}
          >
            An evening of elegance, warmth & joy
          </motion.p>
        </motion.div>
      </section>

      {/* =========================================================================
          SCENE 03 — "THE COUPLE"
          Plays the user's luxury reception video in the background:
          /reception-bg.mp4
          with high-fashion gold & ivory typography for Rajha Mukilan & Swetha
          ========================================================================= */}
      <section
        id="scene-couple"
        style={{
          position: 'relative',
          minHeight: '120vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#09070a',
          padding: '6rem 1.5rem',
          overflow: 'hidden',
        }}
      >
        {/* Luxury Background Video — reception-bg.mp4 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
            filter: 'brightness(0.58) contrast(1.1)',
          }}
        >
          <source src={receptionData.assets.receptionBgVideo || '/reception-bg.mp4'} type="video/mp4" />
        </video>

        {/* Ambient Dark Film Gradient for Maximum Text Legibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(8, 7, 9, 0.75) 0%, rgba(8, 7, 9, 0.35) 40%, rgba(8, 7, 9, 0.5) 70%, rgba(8, 7, 9, 0.88) 100%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        {/* Warm Golden Glow Accent */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'clamp(280px, 65vw, 650px)',
            height: 'clamp(280px, 65vw, 650px)',
            background: 'radial-gradient(circle, rgba(223, 157, 84, 0.16) 0%, rgba(120, 28, 48, 0.12) 40%, transparent 75%)',
            borderRadius: '50%',
            filter: 'blur(45px)',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '1200px',
            width: '100%',
            textAlign: 'center',
          }}
        >
          {/* Editorial Preface */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.68rem, 1.3vw, 0.8rem)',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: '#cfa86e',
              marginBottom: '2rem',
              fontWeight: 400,
            }}
          >
            Together with their families
          </motion.p>

          {/* Groom: RAJHA MUKILAN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(2.8rem, 10vw, 7.5rem)',
                fontWeight: 400,
                letterSpacing: '0.04em',
                lineHeight: 1.05,
                color: '#faf5ed',
                textTransform: 'uppercase',
                margin: '0 auto',
                textShadow: '0 4px 40px rgba(0, 0, 0, 0.7)',
              }}
            >
              Rajha Mukilan
            </h1>
          </motion.div>

          {/* Elegant Calligraphic Link: and */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{
              margin: '0.8rem 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
            }}
          >
            <span
              style={{
                width: 'clamp(30px, 8vw, 80px)',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(207, 168, 110, 0.6))',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                color: '#f3c77c',
                lineHeight: 1,
              }}
            >
              and
            </span>
            <span
              style={{
                width: 'clamp(30px, 8vw, 80px)',
                height: '1px',
                background: 'linear-gradient(90deg, rgba(207, 168, 110, 0.6), transparent)',
              }}
            />
          </motion.div>

          {/* Bride: SWETHA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(2.8rem, 10vw, 7.5rem)',
                fontWeight: 400,
                letterSpacing: '0.04em',
                lineHeight: 1.05,
                color: '#faf5ed',
                textTransform: 'uppercase',
                margin: '0 auto',
                textShadow: '0 4px 40px rgba(0, 0, 0, 0.7)',
              }}
            >
              Swetha
            </h1>
          </motion.div>

          {/* Subtle Supporting Line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
              fontStyle: 'italic',
              color: '#df9d54',
              marginTop: '2.5rem',
              letterSpacing: '0.06em',
            }}
          >
            cordially invite you to celebrate their wedding reception
          </motion.p>
        </div>
      </section>

      {/* =========================================================================
          SIGNATURE CHAPTER — "OUR STORY: THE MEMORY WALL"
          Physical memory wall inside a luxury reception venue:
          Hanging sagging wires, wrapped warm micro-LEDs, mini wooden clips,
          and authentic Polaroid instant-film memories of Rajha & Swetha
          interwoven with the couple's heartfelt narrative.
          ========================================================================= */}
      <OurStorySection onToast={onToast} />

      {/* =========================================================================
          SCENE 04 — "THE INFORMATION REVEAL"
          Cinematic title sequence transformation:
          13 NOVEMBER 2026 -> 6:00 PM – 9:00 PM -> SRI MAHAL, NAMAKKAL
          ========================================================================= */}
      <section
        id="scene-info"
        style={{
          position: 'relative',
          minHeight: '110vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0a080c',
          padding: '6rem 1.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3rem',
            textAlign: 'center',
          }}
        >
          {/* Sequence 1: The Date */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2 }}
            style={{
              padding: '2.5rem 2rem',
              borderTop: '1px solid rgba(243, 199, 124, 0.25)',
              borderBottom: '1px solid rgba(243, 199, 124, 0.25)',
              width: '100%',
              maxWidth: '650px',
              backgroundColor: 'rgba(14, 11, 16, 0.4)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: '#df9d54',
                display: 'block',
                marginBottom: '0.6rem',
              }}
            >
              The Date
            </span>
            <div
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(2.4rem, 6.5vw, 4.2rem)',
                fontWeight: 400,
                letterSpacing: '0.1em',
                color: '#faf5ed',
                textTransform: 'uppercase',
                lineHeight: 1.15,
              }}
            >
              13 November 2026
            </div>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                fontStyle: 'italic',
                color: 'rgba(238, 225, 206, 0.75)',
                display: 'block',
                marginTop: '0.5rem',
              }}
            >
              Friday Evening
            </span>
          </motion.div>

          {/* Sequence 2: The Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: '#df9d54',
                marginBottom: '0.4rem',
              }}
            >
              The Hours
            </span>
            <div
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                fontWeight: 400,
                letterSpacing: '0.12em',
                color: '#f5edd8',
              }}
            >
              6:00 PM — 9:00 PM
            </div>
          </motion.div>

          {/* Sequence 3: The Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: '#df9d54',
                marginBottom: '0.5rem',
              }}
            >
              The Venue
            </span>
            <div
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(2rem, 5vw, 3.4rem)',
                fontWeight: 400,
                letterSpacing: '0.14em',
                color: '#faf5ed',
                textTransform: 'uppercase',
              }}
            >
              Sri Mahal
            </div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)',
                letterSpacing: '0.22em',
                color: 'rgba(238, 225, 206, 0.8)',
                textTransform: 'uppercase',
                marginTop: '0.5rem',
              }}
            >
              Trichy Road Flyover, Namakkal
            </div>
          </motion.div>
        </div>
      </section>



      {/* =========================================================================
          SCENE 07 — "THE CELEBRATION"
          Wider view: celebration pavilion under thousands of glowing fairy lights
          ========================================================================= */}
      <section
        id="scene-celebration"
        style={{
          position: 'relative',
          minHeight: '120vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          backgroundColor: '#070508',
        }}
      >
        <motion.div
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1.0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${receptionData.assets.images.venueDusk})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.72) contrast(1.05)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, #070508 0%, rgba(7,5,8,0.2) 30%, rgba(7,5,8,0.4) 65%, #080709 100%)',
            pointerEvents: 'none',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.4 }}
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            padding: '2rem',
            maxWidth: '850px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: '#df9d54',
              display: 'block',
              marginBottom: '1rem',
            }}
          >
            The Celebration
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#ffffff',
              lineHeight: 1.15,
              textShadow: '0 4px 35px rgba(0,0,0,0.9)',
            }}
          >
            Under A Thousand Stars
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
              fontStyle: 'italic',
              color: '#eee1ce',
              marginTop: '1.2rem',
            }}
          >
            Surrounded by laughter, music, and the warmth of beloved ones.
          </p>
        </motion.div>
      </section>

      {/* =========================================================================
          SCENE 08 — "VENUE & INVITATION DETAILS"
          Clear, elegant information composition with interactive Calendar and Directions
          13 NOVEMBER 2026 | 6:00 PM – 9:00 PM | SRI MAHAL, NAMAKKAL
          ========================================================================= */}
      <section
        id="scene-venue"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#080709',
          padding: '6rem 1.5rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4 }}
          style={{
            maxWidth: '850px',
            width: '100%',
            backgroundColor: 'rgba(14, 11, 16, 0.75)',
            border: '1px solid rgba(243, 199, 124, 0.35)',
            borderRadius: '4px',
            padding: 'clamp(2rem, 5vw, 4rem)',
            textAlign: 'center',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
          }}
        >
          {/* Subtle Location Pin */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              backgroundColor: 'rgba(243, 199, 124, 0.12)',
              border: '1px solid rgba(243, 199, 124, 0.4)',
              color: '#f3c77c',
              fontSize: '1.2rem',
              marginBottom: '1.8rem',
            }}
          >
            <i className="fa-solid fa-location-dot"></i>
          </div>

          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#df9d54',
              display: 'block',
              marginBottom: '0.8rem',
            }}
          >
            Venue &amp; Schedule
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#faf5ed',
              lineHeight: 1.2,
            }}
          >
            Sri Mahal
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
              letterSpacing: '0.2em',
              color: 'rgba(238, 225, 206, 0.85)',
              textTransform: 'uppercase',
              marginTop: '0.8rem',
            }}
          >
            Trichy Road Flyover, Namakkal
          </p>

          {/* Schedule Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              margin: '2.5rem 0',
              padding: '1.5rem',
              borderTop: '1px solid rgba(243, 199, 124, 0.18)',
              borderBottom: '1px solid rgba(243, 199, 124, 0.18)',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: '#df9d54',
                  display: 'block',
                  marginBottom: '0.2rem',
                }}
              >
                Reception Date
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: '1.25rem',
                  letterSpacing: '0.08em',
                  color: '#ffffff',
                }}
              >
                13 November 2026
              </span>
            </div>

            <div
              style={{
                width: '1px',
                height: '35px',
                backgroundColor: 'rgba(243, 199, 124, 0.25)',
              }}
            />

            <div>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: '#df9d54',
                  display: 'block',
                  marginBottom: '0.2rem',
                }}
              >
                Evening Timing
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: '1.25rem',
                  letterSpacing: '0.08em',
                  color: '#ffffff',
                }}
              >
                6:00 PM – 9:00 PM
              </span>
            </div>
          </div>

          {/* Interactive Countdown Timer, Dusk Ambiance Guide & Actions */}
          <ReceptionCountdown onToast={onToast} />
        </motion.div>
      </section>

      {/* =========================================================================
          FINAL SCENE
          End frame of a cinematic wedding film
          The couple's names appear again, the reception lights remain glowing in the dark
          ========================================================================= */}
      <footer
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#050406',
          padding: '6rem 1.5rem',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background Video — reception-bg.mp4 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
            filter: 'brightness(0.45) contrast(1.1)',
          }}
        >
          <source src={receptionData.assets.receptionBgVideo || '/reception-bg.mp4'} type="video/mp4" />
        </video>

        {/* Dark film gradient overlay for crisp text readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(5, 4, 6, 0.82) 0%, rgba(5, 4, 6, 0.45) 40%, rgba(5, 4, 6, 0.55) 65%, rgba(5, 4, 6, 0.92) 100%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        {/* Warm golden glow accent */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'clamp(250px, 60vw, 550px)',
            height: 'clamp(250px, 60vw, 550px)',
            background: 'radial-gradient(circle, rgba(229, 157, 72, 0.14) 0%, rgba(120, 28, 48, 0.1) 45%, transparent 80%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '900px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              color: '#cfa86e',
              marginBottom: '2rem',
            }}
          >
            We look forward to celebrating with you
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(2.4rem, 8vw, 5.8rem)',
              fontWeight: 400,
              letterSpacing: '0.06em',
              lineHeight: 1.1,
              color: '#faf5ed',
              textTransform: 'uppercase',
            }}
          >
            {receptionData.couple.groom}
          </h2>

          <div
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              color: '#f3c77c',
              margin: '0.6rem 0',
            }}
          >
            and
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(2.4rem, 8vw, 5.8rem)',
              fontWeight: 400,
              letterSpacing: '0.06em',
              lineHeight: 1.1,
              color: '#faf5ed',
              textTransform: 'uppercase',
            }}
          >
            {receptionData.couple.bride}
          </h2>

          {/* Details recap */}
          <div
            style={{
              marginTop: '3.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
              alignItems: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.8rem, 1.6vw, 0.95rem)',
                letterSpacing: '0.28em',
                color: '#df9d54',
                textTransform: 'uppercase',
              }}
            >
              13 November 2026 &bull; 6:00 PM – 9:00 PM
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.75rem, 1.4vw, 0.88rem)',
                letterSpacing: '0.22em',
                color: 'rgba(238, 225, 206, 0.75)',
                textTransform: 'uppercase',
              }}
            >
              Sri Mahal &bull; Namakkal
            </p>
          </div>

          <div
            style={{
              marginTop: '4rem',
              fontFamily: 'var(--font-serif)',
              fontSize: '0.9rem',
              fontStyle: 'italic',
              color: 'rgba(238, 225, 206, 0.4)',
              letterSpacing: '0.1em',
            }}
          >
            {receptionData.couple.hashtag}
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

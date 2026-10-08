import { useId } from 'react';
import { motion } from 'framer-motion';

/**
 * BrushStrokeBanner
 * Replicates the exact premium EdTech brush-stroke style (PhysicsWallah / NeetPulse).
 * - Organic SVG path with natural brush edges
 * - Deep Purple → Violet → Hot Pink gradient
 * - Grain noise texture for realism
 * - Soft glow bloom effect
 * - Framer Motion swipe reveal + text fade
 */
export default function BrushStrokeBanner({
  text = 'CRACK NEET. OWN YOUR FUTURE.',
  className = '',
}) {
  const uid = useId().replace(/:/g, '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`relative inline-flex items-center justify-start ${className}`}
      style={{
        filter: 'drop-shadow(0 0 18px rgba(168, 85, 247, 0.6)) drop-shadow(0 4px 12px rgba(236, 72, 153, 0.3))',
      }}
    >
      {/* ── SVG Brush Stroke Background ── */}
      <motion.svg
        viewBox="0 0 900 58"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full overflow-visible"
        preserveAspectRatio="none"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'left center' }}
        aria-hidden="true"
      >
        <defs>
          {/* Deep purple → violet → hot pink */}
          <linearGradient id={`${uid}-g`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#5b21b6" />
            <stop offset="30%"  stopColor="#7c3aed" />
            <stop offset="65%"  stopColor="#c026d3" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>

          {/* Grain texture for realism */}
          <filter id={`${uid}-n`} x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65 0.75"
              numOctaves="3"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
            <feBlend in="SourceGraphic" in2="gray" mode="soft-light" result="blended" />
            <feComposite in="blended" in2="SourceGraphic" operator="in" />
          </filter>

          {/* Blur bloom for glow depth */}
          <filter id={`${uid}-b`} x="-8%" y="-30%" width="116%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Glow bloom layer */}
        <path
          d="
            M 6,29
            C 12,18  22,10  42,9
            C 100,7  180,8  270,7
            C 360,6  450,8  540,7
            C 630,6  710,8  790,9
            L 812,7  L 826,12  L 838,6
            L 850,11  L 860,7  L 868,13
            L 875,8  L 882,14  L 888,10
            L 893,16  L 895,29
            L 891,43  L 884,48  L 876,44
            L 868,50  L 858,46  L 848,52
            L 836,47  L 822,53
            C 750,55  660,56  570,55
            C 480,54  390,56  300,55
            C 210,54  130,56   65,54
            C 36,53   14,47    6,40
            Z
          "
          fill={`url(#${uid}-g)`}
          filter={`url(#${uid}-b)`}
          opacity="0.45"
        />

        {/* Main brush stroke with grain */}
        <path
          d="
            M 6,29
            C 12,18  22,10  42,9
            C 100,7  180,8  270,7
            C 360,6  450,8  540,7
            C 630,6  710,8  790,9
            L 812,7  L 826,12  L 838,6
            L 850,11  L 860,7  L 868,13
            L 875,8  L 882,14  L 888,10
            L 893,16  L 895,29
            L 891,43  L 884,48  L 876,44
            L 868,50  L 858,46  L 848,52
            L 836,47  L 822,53
            C 750,55  660,56  570,55
            C 480,54  390,56  300,55
            C 210,54  130,56   65,54
            C 36,53   14,47    6,40
            Z
          "
          fill={`url(#${uid}-g)`}
          filter={`url(#${uid}-n)`}
        />
      </motion.svg>

      {/* ── Text on top ── */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.35, ease: 'easeOut' }}
        className="relative z-10 select-none"
        style={{
          fontFamily: "'Outfit', 'Poppins', sans-serif",
          fontWeight: 900,
          fontStyle: 'italic',
          fontSize: 'inherit',
          color: '#ffffff',
          padding: '0.3em 1.4em 0.3em 1em',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          textShadow: '0 0 16px rgba(255,255,255,0.4), 0 1px 3px rgba(0,0,0,0.5)',
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
}

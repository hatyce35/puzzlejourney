import React from 'react';

// Continuous Scenic Landscape Painting: Cosmic Panorama
export const CosmicLandscapeIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="cosmic-sky" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0B092A" />
        <stop offset="35%" stopColor="#1B124C" />
        <stop offset="70%" stopColor="#3B0764" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <linearGradient id="nebula-sweep" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EC4899" stopOpacity="0.5" />
        <stop offset="30%" stopColor="#8B5CF6" stopOpacity="0.4" />
        <stop offset="70%" stopColor="#06B6D4" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
      </linearGradient>
      <linearGradient id="aurora-stream" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
        <stop offset="50%" stopColor="#34D399" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="planet-glow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="50%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#7C2D12" />
      </linearGradient>
      <linearGradient id="alien-mt-1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4C1D95" />
        <stop offset="100%" stopColor="#1E1B4B" />
      </linearGradient>
      <linearGradient id="alien-mt-2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#581C87" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
    </defs>

    {/* Seamless Deep Space Foundation */}
    <rect width="600" height="600" fill="url(#cosmic-sky)" />

    {/* Sweeping Diagonal Cosmic Nebula Dust River */}
    <path
      d="M -100 150 Q 150 50 350 180 Q 550 310 700 250 L 700 450 Q 500 550 250 420 Q 50 300 -100 400 Z"
      fill="url(#nebula-sweep)"
      filter="blur(18px)"
    />

    {/* Luminous Atmospheric Aurora Waves */}
    <path
      d="M -50 220 Q 150 120 300 200 Q 450 280 650 190 L 650 260 Q 450 340 300 270 Q 150 190 -50 280 Z"
      fill="url(#aurora-stream)"
      filter="blur(8px)"
    />

    {/* Starry Dust Field across entire painting */}
    {[
      {x: 30, y: 40}, {x: 80, y: 90}, {x: 140, y: 30}, {x: 210, y: 70}, {x: 280, y: 40},
      {x: 360, y: 80}, {x: 430, y: 30}, {x: 520, y: 60}, {x: 580, y: 40}, {x: 50, y: 160},
      {x: 180, y: 140}, {x: 480, y: 150}, {x: 570, y: 190}, {x: 90, y: 260}, {x: 230, y: 240},
      {x: 390, y: 220}, {x: 520, y: 280}, {x: 40, y: 360}, {x: 160, y: 340}, {x: 440, y: 350}
    ].map((s, i) => (
      <circle key={i} cx={s.x} cy={s.y} r={(i % 3) + 1.5} fill="#FFF" opacity={0.85} />
    ))}

    {/* Grand Ringed Celestial Body Rising behind mountains */}
    <g transform="translate(380, 210)">
      <circle cx="0" cy="0" r="75" fill="url(#planet-glow)" />
      {/* Sweeping Ring System passing through the planet */}
      <ellipse cx="0" cy="0" rx="160" ry="34" stroke="#FDE68A" strokeWidth="16" fill="none" transform="rotate(-18)" opacity="0.8" />
      <ellipse cx="0" cy="0" rx="140" ry="26" stroke="#FB923C" strokeWidth="6" fill="none" transform="rotate(-18)" opacity="0.6" />
    </g>

    {/* Distant Layer of Jagged Alien Mountain Peaks */}
    <polygon
      points="-20,380 70,300 160,360 270,280 380,350 490,290 620,370 620,600 -20,600"
      fill="url(#alien-mt-1)"
    />

    {/* Midground Layer of Crystalline Mountains with Glow */}
    <polygon
      points="-20,440 90,360 190,430 310,340 430,420 540,350 620,440 620,600 -20,600"
      fill="url(#alien-mt-2)"
    />

    {/* Luminous Crystal Ridges & Glowing Crevasses across foreground */}
    <path
      d="M 0 490 Q 150 450 300 480 Q 450 510 600 470 L 600 600 L 0 600 Z"
      fill="#0F172A"
    />
    <path
      d="M 0 520 Q 200 480 400 530 Q 520 500 600 520"
      stroke="#38BDF8"
      strokeWidth="3.5"
      fill="none"
      opacity="0.8"
      filter="drop-shadow(0 0 6px #0284C7)"
    />
    <path
      d="M 60 560 Q 250 510 450 570"
      stroke="#F472B6"
      strokeWidth="2.5"
      fill="none"
      opacity="0.7"
      filter="drop-shadow(0 0 6px #EC4899)"
    />

    {/* Sprouting glowing crystals along the foreground ridge */}
    {[
      {x: 80, y: 500, h: 40, c: '#38BDF8'},
      {x: 105, y: 510, h: 28, c: '#67E8F9'},
      {x: 240, y: 520, h: 36, c: '#C084FC'},
      {x: 260, y: 530, h: 24, c: '#E879F9'},
      {x: 480, y: 490, h: 42, c: '#34D399'},
      {x: 505, y: 505, h: 30, c: '#6EE7B7'}
    ].map((c, i) => (
      <polygon
        key={i}
        points={`${c.x-6},${c.y} ${c.x},${c.y-c.h} ${c.x+6},${c.y}`}
        fill={c.c}
        stroke="#FFF"
        strokeWidth="1"
        opacity="0.9"
      />
    ))}
  </g>
);

// Continuous Scenic Landscape Painting: Deep Underwater Coral Lagoon
export const OceanicLandscapeIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="ocean-water" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="30%" stopColor="#0284C7" />
        <stop offset="65%" stopColor="#0369A1" />
        <stop offset="100%" stopColor="#0C4A6E" />
      </linearGradient>
      <linearGradient id="sand-bed" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FDE68A" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
    </defs>

    {/* Deep Ocean Gradient Base */}
    <rect width="600" height="600" fill="url(#ocean-water)" />

    {/* Grand Sunbeams (Crepuscular Rays) cutting through the depths */}
    <polygon points="60,0 160,0 340,600 200,600" fill="#FFF" opacity="0.14" />
    <polygon points="240,0 360,0 520,600 400,600" fill="#FFF" opacity="0.12" />
    <polygon points="420,0 510,0 600,600 530,600" fill="#FFF" opacity="0.09" />

    {/* Rising ambient sea bubbles */}
    {[
      {x: 90, y: 120, r: 6}, {x: 160, y: 220, r: 8}, {x: 280, y: 180, r: 10},
      {x: 380, y: 140, r: 7}, {x: 490, y: 210, r: 9}, {x: 120, y: 380, r: 8},
      {x: 320, y: 340, r: 6}, {x: 440, y: 390, r: 9}, {x: 520, y: 310, r: 7}
    ].map((b, i) => (
      <circle key={i} cx={b.x} cy={b.y} r={b.r} fill="#E0F2FE" opacity="0.55" stroke="#FFF" strokeWidth="1.5" />
    ))}

    {/* Synchronized School of Fish flowing across the water */}
    <g fill="#BAE6FD" opacity="0.75">
      {[
        {x: 140, y: 160}, {x: 170, y: 150}, {x: 200, y: 165}, {x: 230, y: 155},
        {x: 260, y: 170}, {x: 290, y: 160}, {x: 320, y: 175}, {x: 350, y: 165},
        {x: 380, y: 180}, {x: 410, y: 170}, {x: 440, y: 185}
      ].map((f, i) => (
        <path key={i} d={`M ${f.x} ${f.y} Q ${f.x+12} ${f.y-4} ${f.x+24} ${f.y} Q ${f.x+12} ${f.y+4} ${f.x} ${f.y} Z`} />
      ))}
    </g>

    {/* Distant Underwater Mountain & Reef Ridge */}
    <path
      d="M -20 400 Q 150 330 300 370 Q 450 320 620 390 L 620 600 L -20 600 Z"
      fill="#0369A1"
      opacity="0.8"
    />

    {/* Continuous Vast Coral Shelf spanning edge-to-edge */}
    <g fill="#A855F7">
      <path d="M 0 450 C 60 380 120 440 180 390 C 240 450 300 370 360 420 C 420 360 480 430 540 380 C 580 410 600 390 600 450 L 600 600 L 0 600 Z" />
    </g>

    {/* Layer of Orange and Yellow Coral Formations */}
    <g fill="#F97316">
      <path d="M -10 490 Q 70 420 150 480 Q 230 430 310 490 Q 390 420 470 480 Q 550 430 610 490 L 610 600 L -10 600 Z" />
    </g>

    {/* Sweeping Sandy Sea Dunes Floor */}
    <path
      d="M 0 520 Q 150 490 300 525 Q 450 500 600 530 L 600 600 L 0 600 Z"
      fill="url(#sand-bed)"
    />

    {/* Swaying Emerald Sea Kelp Forest from sides */}
    {[-20, 10, 35, 550, 575, 605].map((kx, i) => (
      <path
        key={i}
        d={`M ${kx} 600 Q ${kx + (i % 2 ? 30 : -30)} 450 ${kx} 350 Q ${kx - (i % 2 ? 30 : -30)} 250 ${kx} 180`}
        stroke="#15803D"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />
    ))}
  </g>
);

// Continuous Scenic Landscape Painting: Tropical Sunset Coast & Bay
export const TropicalSunsetLandscapeIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="sunset-sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4A044E" />
        <stop offset="25%" stopColor="#9D174D" />
        <stop offset="50%" stopColor="#EA580C" />
        <stop offset="75%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#FEF08A" />
      </linearGradient>
      <linearGradient id="ocean-sunset" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="25%" stopColor="#C2410C" />
        <stop offset="60%" stopColor="#0E7490" />
        <stop offset="100%" stopColor="#083344" />
      </linearGradient>
      <linearGradient id="beach-sand" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FDE68A" />
        <stop offset="100%" stopColor="#CA8A04" />
      </linearGradient>
    </defs>

    {/* Fiery Sunset Sky */}
    <rect width="600" height="340" fill="url(#sunset-sky)" />

    {/* Radiant Setting Sun on Horizon */}
    <circle cx="300" cy="240" r="55" fill="#FFFBEB" filter="drop-shadow(0 0 16px #FDE047)" />

    {/* Layered Horizontal Evening Clouds */}
    <path d="M 0 110 Q 150 95 300 110 Q 450 125 600 105 L 600 125 Q 450 145 300 130 Q 150 115 0 130 Z" fill="#831843" opacity="0.6" />
    <path d="M 0 160 Q 200 145 400 165 Q 520 175 600 155 L 600 180 Q 450 195 300 180 Q 150 165 0 180 Z" fill="#9F1239" opacity="0.6" />

    {/* Distant Volcanic Sea Cliffs Mountain Ridge */}
    <polygon points="-20,240 80,180 180,240 280,210 380,240 480,190 620,240 620,270 -20,270" fill="#4C0519" opacity="0.85" />

    {/* Shimmering Ocean Waters with Sun Reflection */}
    <rect x="0" y="240" width="600" height="200" fill="url(#ocean-sunset)" />
    {/* Sun reflection column on water */}
    <polygon points="260,240 340,240 390,440 210,440" fill="#FEF08A" opacity="0.35" filter="blur(6px)" />

    {/* Rolling Ocean Wave Surf */}
    <path d="M 0 320 Q 150 300 300 320 Q 450 340 600 315 L 600 360 Q 450 385 300 360 Q 150 340 0 360 Z" fill="#06B6D4" opacity="0.7" />
    <path d="M 0 355 Q 200 335 400 355 Q 520 375 600 350 L 600 390 Q 450 410 300 390 Q 150 375 0 390 Z" fill="#E0F2FE" opacity="0.85" />

    {/* Expansive Sandy Beach Shoreline */}
    <path
      d="M 0 385 Q 250 350 600 400 L 600 600 L 0 600 Z"
      fill="url(#beach-sand)"
    />

    {/* Natural Framing: Sweeping Palm Trees Arching over the Bay */}
    <g stroke="#451A03" strokeLinecap="round" fill="none">
      <path d="M 40 600 Q 100 420 180 250" strokeWidth="24" />
      <path d="M 40 600 Q 100 420 180 250" stroke="#78350F" strokeWidth="16" />
      <path d="M 0 600 Q 30 450 110 320" strokeWidth="18" />
      <path d="M 0 600 Q 30 450 110 320" stroke="#78350F" strokeWidth="12" />
    </g>

    {/* Lush Palm Leaves Canopy */}
    <g fill="#14532D">
      <path d="M 180 250 Q 80 180 20 220 Q 90 270 180 250" />
      <path d="M 180 250 Q 160 140 220 110 Q 220 190 180 250" />
      <path d="M 180 250 Q 260 170 330 200 Q 260 260 180 250" />
      <path d="M 180 250 Q 270 260 300 330 Q 220 300 180 250" fill="#166534" />
      <path d="M 110 320 Q 30 260 -20 300 Q 40 340 110 320" />
      <path d="M 110 320 Q 170 260 230 290 Q 170 340 110 320" fill="#166534" />
    </g>
  </g>
);

// Continuous Scenic Landscape Painting: Alpine Fairytale Castle & Mountain Valley
export const AlpineCastleLandscapeIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="alpine-sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#312E81" />
        <stop offset="40%" stopColor="#6366F1" />
        <stop offset="75%" stopColor="#F472B6" />
        <stop offset="100%" stopColor="#FEF08A" />
      </linearGradient>
      <linearGradient id="snow-peaks" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="50%" stopColor="#E2E8F0" />
        <stop offset="100%" stopColor="#94A3B8" />
      </linearGradient>
      <linearGradient id="pine-hills" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#15803D" />
        <stop offset="100%" stopColor="#14532D" />
      </linearGradient>
      <linearGradient id="river-stream" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
    </defs>

    {/* Alpine Sunrise/Sunset Sky */}
    <rect width="600" height="320" fill="url(#alpine-sky)" />

    {/* Majestic Snow-Capped Alpine Mountain Range (Alpenglow) */}
    <polygon points="-20,240 90,100 210,230 330,80 450,220 560,110 620,240 620,350 -20,350" fill="#475569" />
    {/* Snow caps on mountain peaks */}
    <polygon points="90,100 65,145 80,140 90,155 105,135 120,150" fill="url(#snow-peaks)" />
    <polygon points="330,80 295,135 315,128 330,145 350,125 370,140" fill="url(#snow-peaks)" />
    <polygon points="560,110 535,150 550,145 560,160 575,140 590,155" fill="url(#snow-peaks)" />

    {/* Rolling Pine Forest Hills in Midground */}
    <path
      d="M -20 280 Q 150 230 300 270 Q 450 220 620 260 L 620 400 L -20 400 Z"
      fill="url(#pine-hills)"
    />

    {/* Fairytale Castle nested naturally on the rocky promontory */}
    <g transform="translate(360, 210)">
      {/* Stone promontory cliff base */}
      <polygon points="-80,80 -50,20 60,20 90,80" fill="#334155" />
      {/* Castle walls and towers */}
      <rect x="-40" y="-30" width="80" height="60" fill="#E2E8F0" stroke="#475569" strokeWidth="2.5" />
      {/* Center tall spire */}
      <rect x="-15" y="-75" width="30" height="50" fill="#F8FAFC" stroke="#475569" strokeWidth="2" />
      <polygon points="-20,-75 20,-75 0,-130" fill="#7C3AED" stroke="#5B21B6" strokeWidth="2" />
      {/* Left and Right turrets */}
      <rect x="-45" y="-50" width="18" height="40" fill="#E2E8F0" stroke="#475569" strokeWidth="1.5" />
      <polygon points="-48,-50 -24,-50 -36,-85" fill="#7C3AED" />
      <rect x="27" y="-50" width="18" height="40" fill="#E2E8F0" stroke="#475569" strokeWidth="1.5" />
      <polygon points="24,-50 48,-50 36,-85" fill="#7C3AED" />
    </g>

    {/* Lush Green Alpine Meadow Valley */}
    <path
      d="M 0 350 Q 200 310 400 340 Q 520 320 600 350 L 600 600 L 0 600 Z"
      fill="#22C55E"
    />
    <path
      d="M 0 400 Q 250 360 600 410 L 600 600 L 0 600 Z"
      fill="#16A34A"
    />

    {/* Winding Turquoise Alpine River flowing through the center */}
    <path
      d="M 330 320 Q 300 370 250 410 Q 180 460 220 510 Q 260 560 200 600 L 290 600 Q 340 540 300 500 Q 260 450 330 400 Q 380 360 360 320 Z"
      fill="url(#river-stream)"
    />

    {/* Stone Arched Bridge across the river */}
    <g transform="translate(230, 480)">
      <path d="M -30 20 L -30 0 L 60 0 L 60 20 Q 15 5 -30 20 Z" fill="#94A3B8" stroke="#475569" strokeWidth="2.5" />
      <rect x="-30" y="-8" width="90" height="8" rx="2" fill="#CBD5E1" stroke="#475569" strokeWidth="1.5" />
    </g>

    {/* Wildflower Dots across the Alpine Meadow */}
    {[
      {x: 60, y: 440, c: '#EF4444'}, {x: 100, y: 460, c: '#FACC15'}, {x: 80, y: 520, c: '#EC4899'},
      {x: 130, y: 560, c: '#38BDF8'}, {x: 420, y: 450, c: '#FACC15'}, {x: 480, y: 480, c: '#EF4444'},
      {x: 530, y: 520, c: '#C084FC'}, {x: 450, y: 560, c: '#FACC15'}
    ].map((w, i) => (
      <circle key={i} cx={w.x} cy={w.y} r="4" fill={w.c} />
    ))}
  </g>
);

// Continuous Scenic Landscape Painting: Enchanted Twilight Forest & Glowing River
export const EnchantedForestLandscapeIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="twilight-sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0B132B" />
        <stop offset="50%" stopColor="#1C2541" />
        <stop offset="100%" stopColor="#064E3B" />
      </linearGradient>
      <linearGradient id="magic-river" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#67E8F9" />
        <stop offset="50%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="moss-bank" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#065F46" />
        <stop offset="100%" stopColor="#022C22" />
      </linearGradient>
    </defs>

    {/* Atmospheric Twilight Sky Base */}
    <rect width="600" height="600" fill="url(#twilight-sky)" />

    {/* Radiant Moonlight Beam through the canopy */}
    <polygon points="260,0 340,0 480,600 320,600" fill="#FEF08A" opacity="0.14" />
    <polygon points="120,0 200,0 280,600 160,600" fill="#67E8F9" opacity="0.1" />

    {/* Intertwining Ancient Forest Canopy at Top */}
    <g fill="#022C22">
      <path d="M 0 0 Q 150 120 300 40 Q 450 140 600 0 L 600 120 Q 450 200 300 120 Q 150 220 0 120 Z" />
      {/* Hanging moss and wisteria vines */}
      {[50, 120, 200, 280, 360, 440, 520].map((vx, i) => (
        <path key={i} d={`M ${vx} 120 Q ${vx + 15} 170 ${vx} 220`} stroke="#A7F3D0" strokeWidth="3" fill="none" opacity="0.75" />
      ))}
    </g>

    {/* Massive Ancient Tree Trunks Framing Left and Right */}
    <path d="M -20 600 Q 100 350 40 100 L 120 100 Q 180 350 100 600 Z" fill="#0F172A" />
    <path d="M 620 600 Q 500 350 560 100 L 480 100 Q 420 350 500 600 Z" fill="#0F172A" />

    {/* Glowing Bioluminescent Winding River flowing edge-to-edge through the center */}
    <path
      d="M 280 200 Q 250 280 320 340 Q 400 410 330 480 Q 250 540 310 600 L 410 600 Q 360 520 430 460 Q 500 380 410 320 Q 340 260 360 200 Z"
      fill="url(#magic-river)"
      filter="drop-shadow(0 0 12px #06B6D4)"
    />

    {/* Soft Rolling Mossy Riverbanks */}
    <path
      d="M 0 340 Q 140 300 250 370 Q 180 480 220 600 L 0 600 Z"
      fill="url(#moss-bank)"
    />
    <path
      d="M 600 340 Q 460 300 370 390 Q 450 490 410 600 L 600 600 Z"
      fill="url(#moss-bank)"
    />

    {/* Glowing Bioluminescent Mushroom Groves along banks */}
    {[
      {x: 140, y: 440, r: 18, c: '#06B6D4'},
      {x: 180, y: 470, r: 12, c: '#EC4899'},
      {x: 120, y: 510, r: 15, c: '#A855F7'},
      {x: 440, y: 460, r: 18, c: '#EC4899'},
      {x: 480, y: 490, r: 14, c: '#06B6D4'},
      {x: 430, y: 530, r: 12, c: '#FACC15'}
    ].map((m, i) => (
      <g key={i} transform={`translate(${m.x}, ${m.y})`}>
        <path d={`M -${m.r} 0 Q 0 -${m.r*1.3} ${m.r} 0 Z`} fill={m.c} filter="drop-shadow(0 0 6px rgba(255,255,255,0.6))" />
        <rect x="-2" y="0" width="4" height={m.r * 0.8} fill="#E2E8F0" />
      </g>
    ))}

    {/* Swarm of Floating Golden Firefly Bokeh Particles */}
    {[
      {x: 80, y: 260}, {x: 160, y: 220}, {x: 230, y: 310}, {x: 300, y: 260},
      {x: 380, y: 280}, {x: 470, y: 230}, {x: 530, y: 310}, {x: 140, y: 380},
      {x: 270, y: 450}, {x: 390, y: 420}, {x: 480, y: 400}, {x: 230, y: 540},
      {x: 380, y: 540}
    ].map((f, i) => (
      <g key={i} transform={`translate(${f.x}, ${f.y})`}>
        <circle cx="0" cy="0" r="10" fill="#FACC15" opacity="0.25" filter="blur(3px)" />
        <circle cx="0" cy="0" r="4" fill="#FDE047" />
        <circle cx="0" cy="0" r="1.5" fill="#FFF" />
      </g>
    ))}
  </g>
);

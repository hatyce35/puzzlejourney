import React from 'react';

// Common reusable SVG components and gradients for rich vector illustrations

export const CatIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="cat-sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF3B0" />
        <stop offset="100%" stopColor="#FFE082" />
      </linearGradient>
      <linearGradient id="cat-fur" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF9E43" />
        <stop offset="100%" stopColor="#E65100" />
      </linearGradient>
      <linearGradient id="yarn-pink" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF4081" />
        <stop offset="100%" stopColor="#C2185B" />
      </linearGradient>
    </defs>
    {/* Background */}
    <rect width="600" height="600" fill="url(#cat-sky)" />
    <circle cx="500" cy="120" r="80" fill="#FFFDE7" opacity="0.6" />
    <path d="M 0 480 Q 300 440 600 480 L 600 600 L 0 600 Z" fill="#81C784" />
    <path d="M 0 520 Q 300 490 600 520 L 600 600 L 0 600 Z" fill="#4CAF50" />

    {/* Flowers */}
    <g transform="translate(60, 500)">
      <circle cx="0" cy="0" r="10" fill="#FFEB3B" />
      <circle cx="-14" cy="0" r="9" fill="#FFF" />
      <circle cx="14" cy="0" r="9" fill="#FFF" />
      <circle cx="0" cy="-14" r="9" fill="#FFF" />
      <circle cx="0" cy="14" r="9" fill="#FFF" />
    </g>
    <g transform="translate(520, 520)">
      <circle cx="0" cy="0" r="12" fill="#FFEB3B" />
      <circle cx="-16" cy="0" r="10" fill="#FF80AB" />
      <circle cx="16" cy="0" r="10" fill="#FF80AB" />
      <circle cx="0" cy="-16" r="10" fill="#FF80AB" />
      <circle cx="0" cy="16" r="10" fill="#FF80AB" />
    </g>

    {/* Cat Tail */}
    <path d="M 380 430 Q 480 400 460 300 Q 450 280 430 300 Q 430 360 360 410 Z" fill="#E65100" />

    {/* Cat Body */}
    <ellipse cx="300" cy="400" rx="140" ry="110" fill="url(#cat-fur)" />
    <ellipse cx="300" cy="420" rx="90" ry="80" fill="#FFF3E0" />

    {/* Paws */}
    <ellipse cx="230" cy="480" rx="35" ry="25" fill="#FFF3E0" stroke="#FFB74D" strokeWidth="3" />
    <ellipse cx="370" cy="480" rx="35" ry="25" fill="#FFF3E0" stroke="#FFB74D" strokeWidth="3" />

    {/* Cat Head */}
    <circle cx="300" cy="240" r="115" fill="url(#cat-fur)" />

    {/* Ears */}
    <polygon points="200,200 220,100 280,160" fill="#E65100" />
    <polygon points="215,190 230,120 270,165" fill="#FF80AB" />
    <polygon points="400,200 380,100 320,160" fill="#E65100" />
    <polygon points="385,190 370,120 330,165" fill="#FF80AB" />

    {/* Head Stripes */}
    <path d="M 300 135 L 300 170" stroke="#BF360C" strokeWidth="8" strokeLinecap="round" />
    <path d="M 270 145 L 280 180" stroke="#BF360C" strokeWidth="7" strokeLinecap="round" />
    <path d="M 330 145 L 320 180" stroke="#BF360C" strokeWidth="7" strokeLinecap="round" />

    {/* Eyes */}
    <ellipse cx="250" cy="235" rx="22" ry="26" fill="#00C853" />
    <ellipse cx="250" cy="235" rx="14" ry="22" fill="#1B5E20" />
    <circle cx="244" cy="225" r="7" fill="#FFFFFF" />
    <circle cx="256" cy="242" r="3" fill="#FFFFFF" />

    <ellipse cx="350" cy="235" rx="22" ry="26" fill="#00C853" />
    <ellipse cx="350" cy="235" rx="14" ry="22" fill="#1B5E20" />
    <circle cx="344" cy="225" r="7" fill="#FFFFFF" />
    <circle cx="356" cy="242" r="3" fill="#FFFFFF" />

    {/* Cheeks & Nose */}
    <circle cx="215" cy="275" r="16" fill="#FF80AB" opacity="0.4" />
    <circle cx="385" cy="275" r="16" fill="#FF80AB" opacity="0.4" />
    <polygon points="290,265 310,265 300,277" fill="#FF4081" />
    <path d="M 300 277 Q 285 295 270 290 M 300 277 Q 315 295 330 290" stroke="#BF360C" strokeWidth="4" fill="none" strokeLinecap="round" />

    {/* Whiskers */}
    <path d="M 230 275 L 140 265 M 225 285 L 135 285 M 230 295 L 145 305" stroke="#BF360C" strokeWidth="3" strokeLinecap="round" />
    <path d="M 370 275 L 460 265 M 375 285 L 465 285 M 370 295 L 455 305" stroke="#BF360C" strokeWidth="3" strokeLinecap="round" />

    {/* Yarn Ball */}
    <g transform="translate(130, 460)">
      <circle cx="0" cy="0" r="45" fill="url(#yarn-pink)" />
      <path d="M -30 -10 Q 0 30 30 -15 M -20 -30 Q 20 0 -10 35 M -35 15 Q 15 -25 35 10" stroke="#F8BBD0" strokeWidth="4" fill="none" />
      <path d="M 30 25 Q 70 70 120 40 Q 150 20 180 35" stroke="#FF4081" strokeWidth="4" fill="none" strokeLinecap="round" />
    </g>
  </g>
);

export const PuppyIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="pup-sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#81D4FA" />
        <stop offset="100%" stopColor="#E1F5FE" />
      </linearGradient>
      <linearGradient id="pup-fur" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFE082" />
        <stop offset="100%" stopColor="#FFB300" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#pup-sky)" />
    {/* Sun and Clouds */}
    <circle cx="100" cy="100" r="50" fill="#FFF59D" />
    <ellipse cx="480" cy="120" rx="60" ry="30" fill="#FFFFFF" opacity="0.8" />
    <ellipse cx="450" cy="110" rx="40" ry="25" fill="#FFFFFF" opacity="0.8" />
    <path d="M 0 450 Q 300 400 600 450 L 600 600 L 0 600 Z" fill="#66BB6A" />

    {/* Puppy Tail */}
    <path d="M 400 380 Q 480 320 460 260 Q 440 270 420 340 Z" fill="#FFA000" />

    {/* Body */}
    <ellipse cx="320" cy="410" rx="130" ry="100" fill="url(#pup-fur)" />
    <ellipse cx="320" cy="430" rx="80" ry="70" fill="#FFF8E1" />

    {/* Collar */}
    <path d="M 230 320 Q 300 360 370 320" stroke="#0288D1" strokeWidth="18" fill="none" strokeLinecap="round" />
    <circle cx="300" cy="345" r="14" fill="#FFD54F" stroke="#FFA000" strokeWidth="3" />

    {/* Head */}
    <circle cx="300" cy="220" r="110" fill="url(#pup-fur)" />

    {/* Floppy Ears */}
    <path d="M 210 160 C 130 180 140 300 190 320 C 230 310 220 220 220 180 Z" fill="#FF8F00" />
    <path d="M 390 160 C 470 180 460 300 410 320 C 370 310 380 220 380 180 Z" fill="#FF8F00" />

    {/* Snout */}
    <ellipse cx="300" cy="250" rx="55" ry="40" fill="#FFF8E1" />
    <path d="M 275 230 Q 300 215 325 230 Q 320 255 300 255 Q 280 255 275 230 Z" fill="#3E2723" />
    <path d="M 300 255 L 300 275 M 300 275 Q 280 285 270 275 M 300 275 Q 320 285 330 275" stroke="#3E2723" strokeWidth="4" fill="none" strokeLinecap="round" />
    {/* Pink Tongue */}
    <path d="M 290 278 Q 300 305 310 278 Z" fill="#FF4081" />

    {/* Eyes */}
    <circle cx="250" cy="195" r="18" fill="#3E2723" />
    <circle cx="244" cy="190" r="6" fill="#FFFFFF" />
    <circle cx="350" cy="195" r="18" fill="#3E2723" />
    <circle cx="344" cy="190" r="6" fill="#FFFFFF" />

    {/* Paws */}
    <ellipse cx="250" cy="490" rx="35" ry="25" fill="#FFF8E1" stroke="#FFA000" strokeWidth="3" />
    <ellipse cx="360" cy="490" rx="35" ry="25" fill="#FFF8E1" stroke="#FFA000" strokeWidth="3" />

    {/* Butterfly */}
    <g transform="translate(130, 260) rotate(-15)">
      <ellipse cx="-15" cy="-10" rx="18" ry="12" fill="#E040FB" />
      <ellipse cx="15" cy="-10" rx="18" ry="12" fill="#E040FB" />
      <ellipse cx="-10" cy="10" rx="12" ry="8" fill="#7C4DFF" />
      <ellipse cx="10" cy="10" rx="12" ry="8" fill="#7C4DFF" />
      <line x1="0" y1="-15" x2="0" y2="15" stroke="#212121" strokeWidth="3" />
    </g>
  </g>
);

export const PandaIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="panda-bg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#C8E6C9" />
        <stop offset="100%" stopColor="#E8F5E9" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#panda-bg)" />

    {/* Bamboo Stalks in background */}
    <g stroke="#388E3C" strokeWidth="18" strokeLinecap="round">
      <line x1="80" y1="0" x2="80" y2="600" />
      <line x1="140" y1="0" x2="140" y2="600" stroke="#4CAF50" strokeWidth="14" />
      <line x1="490" y1="0" x2="490" y2="600" />
      <line x1="540" y1="0" x2="540" y2="600" stroke="#2E7D32" strokeWidth="22" />
    </g>

    {/* Bamboo Leaves */}
    <path d="M 80 180 Q 30 150 10 180 Q 50 190 80 180" fill="#2E7D32" />
    <path d="M 140 260 Q 200 230 220 260 Q 180 270 140 260" fill="#4CAF50" />
    <path d="M 490 200 Q 420 170 400 200 Q 450 210 490 200" fill="#388E3C" />

    {/* Ground */}
    <ellipse cx="300" cy="530" rx="260" ry="70" fill="#81C784" />

    {/* Panda Ears */}
    <circle cx="210" cy="180" r="45" fill="#212121" />
    <circle cx="390" cy="180" r="45" fill="#212121" />

    {/* Panda Body */}
    <ellipse cx="300" cy="420" rx="140" ry="110" fill="#FFFFFF" />

    {/* Arms / Vest */}
    <path d="M 180 340 C 180 430 420 430 420 340 C 370 320 230 320 180 340 Z" fill="#212121" />

    {/* Legs */}
    <circle cx="200" cy="480" r="45" fill="#212121" />
    <circle cx="400" cy="480" r="45" fill="#212121" />
    <circle cx="200" cy="480" r="25" fill="#424242" />
    <circle cx="400" cy="480" r="25" fill="#424242" />

    {/* Head */}
    <ellipse cx="300" cy="270" rx="125" ry="110" fill="#FFFFFF" />

    {/* Eye Patches */}
    <ellipse cx="245" cy="265" rx="32" ry="25" fill="#212121" transform="rotate(-15 245 265)" />
    <ellipse cx="355" cy="265" rx="32" ry="25" fill="#212121" transform="rotate(15 355 265)" />

    {/* Eyes */}
    <circle cx="250" cy="265" r="10" fill="#FFFFFF" />
    <circle cx="252" cy="265" r="6" fill="#000000" />
    <circle cx="254" cy="263" r="2" fill="#FFFFFF" />

    <circle cx="350" cy="265" r="10" fill="#FFFFFF" />
    <circle cx="348" cy="265" r="6" fill="#000000" />
    <circle cx="346" cy="263" r="2" fill="#FFFFFF" />

    {/* Cheeks */}
    <circle cx="210" cy="305" r="15" fill="#FF80AB" opacity="0.5" />
    <circle cx="390" cy="305" r="15" fill="#FF80AB" opacity="0.5" />

    {/* Nose & Mouth */}
    <ellipse cx="300" cy="295" rx="18" ry="12" fill="#212121" />
    <path d="M 300 307 L 300 320 M 300 320 Q 285 330 275 320 M 300 320 Q 315 330 325 320" stroke="#212121" strokeWidth="4" fill="none" strokeLinecap="round" />

    {/* Eating Bamboo shoot */}
    <line x1="330" y1="315" x2="420" y2="440" stroke="#66BB6A" strokeWidth="12" strokeLinecap="round" />
    <path d="M 390 380 Q 430 360 450 380 Q 410 400 390 380" fill="#43A047" />
  </g>
);

export const RabbitIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="rab-sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F8BBD0" />
        <stop offset="100%" stopColor="#FCE4EC" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#rab-sky)" />
    <path d="M 0 460 Q 300 420 600 460 L 600 600 L 0 600 Z" fill="#A5D6A7" />

    {/* Long Bunny Ears */}
    <ellipse cx="230" cy="140" rx="35" ry="110" fill="#FFFFFF" transform="rotate(-10 230 140)" />
    <ellipse cx="230" cy="140" rx="20" ry="85" fill="#F8BBD0" transform="rotate(-10 230 140)" />

    <ellipse cx="370" cy="140" rx="35" ry="110" fill="#FFFFFF" transform="rotate(10 370 140)" />
    <ellipse cx="370" cy="140" rx="20" ry="85" fill="#F8BBD0" transform="rotate(10 370 140)" />

    {/* Body */}
    <ellipse cx="300" cy="420" rx="125" ry="110" fill="#FFFFFF" />
    <ellipse cx="300" cy="440" rx="85" ry="80" fill="#FFF3E0" />

    {/* Head */}
    <circle cx="300" cy="270" r="105" fill="#FFFFFF" />

    {/* Eyes */}
    <ellipse cx="250" cy="260" rx="14" ry="18" fill="#AD1457" />
    <circle cx="245" cy="254" r="5" fill="#FFFFFF" />
    <ellipse cx="350" cy="260" rx="14" ry="18" fill="#AD1457" />
    <circle cx="345" cy="254" r="5" fill="#FFFFFF" />

    {/* Cheeks */}
    <circle cx="225" cy="295" r="16" fill="#FF80AB" opacity="0.4" />
    <circle cx="375" cy="295" r="16" fill="#FF80AB" opacity="0.4" />

    {/* Nose & Mouth */}
    <polygon points="292,282 308,282 300,292" fill="#EC407A" />
    <path d="M 300 292 L 300 304 M 300 304 Q 285 314 275 306 M 300 304 Q 315 314 325 306" stroke="#880E4F" strokeWidth="3" fill="none" />

    {/* Holding Big Carrot */}
    <g transform="translate(300, 420) rotate(25)">
      <polygon points="-25,-70 25,-70 0,60" fill="#FF6D00" />
      <path d="M -15 -40 L 5 -40 M -5 -10 L 15 -10 M -10 20 L 5 20" stroke="#E65100" strokeWidth="3" />
      {/* Carrot Greens */}
      <path d="M -15 -70 Q -40 -120 -20 -130 Q -10 -90 0 -70" fill="#43A047" />
      <path d="M 0 -70 Q 0 -130 15 -135 Q 15 -90 0 -70" fill="#4CAF50" />
      <path d="M 15 -70 Q 40 -120 25 -130 Q 15 -90 0 -70" fill="#388E3C" />
    </g>

    {/* Paws holding carrot */}
    <ellipse cx="250" cy="400" rx="25" ry="20" fill="#FFFFFF" stroke="#FCE4EC" strokeWidth="3" />
    <ellipse cx="330" cy="410" rx="25" ry="20" fill="#FFFFFF" stroke="#FCE4EC" strokeWidth="3" />
  </g>
);

export const FoxIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="fox-bg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF8E1" />
        <stop offset="100%" stopColor="#FFE082" />
      </linearGradient>
      <linearGradient id="fox-coat" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF7043" />
        <stop offset="100%" stopColor="#D84315" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#fox-bg)" />
    {/* Autumn leaves scatter */}
    <path d="M 80 120 Q 110 80 140 120 Q 110 160 80 120" fill="#E65100" opacity="0.7" transform="rotate(30 110 120)" />
    <path d="M 480 90 Q 510 50 540 90 Q 510 130 480 90" fill="#F57F17" opacity="0.7" transform="rotate(-20 510 90)" />
    <path d="M 520 400 Q 550 360 580 400 Q 550 440 520 400" fill="#D84315" opacity="0.7" />

    {/* Ground with autumn foliage */}
    <ellipse cx="300" cy="530" rx="280" ry="70" fill="#8D6E63" />
    <ellipse cx="300" cy="540" rx="260" ry="60" fill="#5D4037" />

    {/* Big Bushy Tail wrapping around */}
    <path d="M 280 440 C 440 450 520 350 480 260 C 440 260 410 330 320 400 Z" fill="url(#fox-coat)" />
    <path d="M 480 260 C 450 260 435 290 410 320 C 440 310 470 290 480 260 Z" fill="#FFFFFF" />

    {/* Body */}
    <ellipse cx="280" cy="400" rx="110" ry="90" fill="url(#fox-coat)" />
    <ellipse cx="270" cy="410" rx="60" ry="65" fill="#FFFFFF" />

    {/* Head */}
    <polygon points="170,160 210,60 270,140" fill="#BF360C" />
    <polygon points="185,150 215,85 255,140" fill="#FFFFFF" />

    <polygon points="390,160 350,60 290,140" fill="#BF360C" />
    <polygon points="375,150 345,85 305,140" fill="#FFFFFF" />

    {/* Fox Face Diamond */}
    <polygon points="280,120 180,240 280,330 380,240" fill="url(#fox-coat)" />
    <polygon points="280,230 180,240 280,330" fill="#FFFFFF" />
    <polygon points="280,230 380,240 280,330" fill="#FFFFFF" />

    {/* Nose */}
    <circle cx="280" cy="325" r="12" fill="#212121" />

    {/* Clever Eyes */}
    <path d="M 215 235 Q 240 220 255 240" stroke="#212121" strokeWidth="6" fill="none" strokeLinecap="round" />
    <circle cx="240" cy="235" r="6" fill="#212121" />
    <path d="M 345 235 Q 320 220 305 240" stroke="#212121" strokeWidth="6" fill="none" strokeLinecap="round" />
    <circle cx="320" cy="235" r="6" fill="#212121" />

    {/* Cute Mushrooms */}
    <g transform="translate(110, 480)">
      <path d="M 0 0 Q 25 -35 50 0 Z" fill="#D32F2F" />
      <circle cx="15" cy="-12" r="4" fill="#FFF" />
      <circle cx="35" cy="-15" r="5" fill="#FFF" />
      <rect x="20" y="0" width="10" height="20" rx="3" fill="#FFFDE7" />
    </g>
  </g>
);

export const RainbowIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="rb-sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4FC3F7" />
        <stop offset="100%" stopColor="#E1F5FE" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#rb-sky)" />

    {/* Radiant Sun */}
    <circle cx="80" cy="100" r="55" fill="#FFEE58" />
    <g stroke="#FFEE58" strokeWidth="5" strokeLinecap="round">
      <line x1="80" y1="25" x2="80" y2="10" />
      <line x1="80" y1="175" x2="80" y2="190" />
      <line x1="5" y1="100" x2="20" y2="100" />
      <line x1="140" y1="100" x2="155" y2="100" />
      <line x1="27" y1="47" x2="38" y2="58" />
      <line x1="122" y1="142" x2="133" y2="153" />
      <line x1="27" y1="153" x2="38" y2="142" />
      <line x1="122" y1="58" x2="133" y2="47" />
    </g>

    {/* Rainbow Arcs */}
    <g fill="none" strokeWidth="18">
      <path d="M 20 460 A 280 280 0 0 1 580 460" stroke="#E53935" />
      <path d="M 38 460 A 262 262 0 0 1 562 460" stroke="#FB8C00" />
      <path d="M 56 460 A 244 244 0 0 1 544 460" stroke="#FDD835" />
      <path d="M 74 460 A 226 226 0 0 1 526 460" stroke="#43A047" />
      <path d="M 92 460 A 208 208 0 0 1 508 460" stroke="#1E88E5" />
      <path d="M 110 460 A 190 190 0 0 1 490 460" stroke="#8E24AA" />
    </g>

    {/* Fluffy Clouds */}
    <g fill="#FFFFFF" opacity="0.95">
      <circle cx="100" cy="450" r="45" />
      <circle cx="150" cy="440" r="55" />
      <circle cx="200" cy="460" r="40" />

      <circle cx="430" cy="460" r="42" />
      <circle cx="480" cy="435" r="55" />
      <circle cx="530" cy="455" r="40" />
    </g>

    {/* Rolling Hills */}
    <path d="M -50 480 Q 150 420 350 470 Q 500 500 650 460 L 650 600 L -50 600 Z" fill="#66BB6A" />
    <path d="M -50 530 Q 200 480 400 520 Q 550 540 650 510 L 650 600 L -50 600 Z" fill="#43A047" />

    {/* River */}
    <path d="M 280 470 Q 290 530 240 600 L 320 600 Q 340 530 310 470 Z" fill="#29B6F6" />
  </g>
);

export const FlowerGardenIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="garden-bg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E0F7FA" />
        <stop offset="60%" stopColor="#FFF9C4" />
        <stop offset="100%" stopColor="#C8E6C9" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#garden-bg)" />

    {/* Big Sunflower */}
    <g transform="translate(150, 240)">
      {/* Petals */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => (
        <ellipse key={deg} cx="0" cy="-60" rx="16" ry="35" fill="#FDD835" transform={`rotate(${deg})`} />
      ))}
      {/* Center */}
      <circle cx="0" cy="0" r="45" fill="#5D4037" />
      <circle cx="0" cy="0" r="40" fill="#3E2723" />
      {/* Stem */}
      <path d="M 0 45 Q -20 180 10 360" stroke="#388E3C" strokeWidth="18" fill="none" />
      <path d="M -10 180 Q -60 160 -80 200 Q -30 220 -10 180" fill="#4CAF50" />
    </g>

    {/* Red Rose & Pink Tulips */}
    <g transform="translate(380, 280)">
      <path d="M 0 35 Q 20 160 -10 320" stroke="#2E7D32" strokeWidth="16" fill="none" />
      <path d="M 0 35 C -60 -40 -30 -100 0 -50 C 30 -100 60 -40 0 35 Z" fill="#E53935" />
      <circle cx="0" cy="-35" r="22" fill="#C62828" />
    </g>

    <g transform="translate(480, 340)">
      <path d="M 0 30 L 0 260" stroke="#388E3C" strokeWidth="14" />
      <path d="M 0 30 C -40 -10 -30 -70 0 -30 C 30 -70 40 -10 0 30 Z" fill="#EC407A" />
    </g>

    {/* Busy Bumblebee */}
    <g transform="translate(320, 140) rotate(15)">
      <ellipse cx="-12" cy="-14" rx="16" ry="10" fill="#E1F5FE" opacity="0.8" />
      <ellipse cx="12" cy="-14" rx="16" ry="10" fill="#E1F5FE" opacity="0.8" />
      <ellipse cx="0" cy="0" rx="24" ry="16" fill="#FDD835" />
      <path d="M -8 -15 L -8 15 M 4 -15 L 4 15" stroke="#212121" strokeWidth="6" />
      <circle cx="18" cy="0" r="10" fill="#212121" />
      <circle cx="21" cy="-3" r="2" fill="#FFFFFF" />
    </g>

    {/* Grass Foreground */}
    <path d="M 0 540 Q 150 510 300 540 Q 450 510 600 540 L 600 600 L 0 600 Z" fill="#2E7D32" />
  </g>
);

export const WaterfallIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="wf-sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#80DEEA" />
        <stop offset="100%" stopColor="#E0F7FA" />
      </linearGradient>
      <linearGradient id="wf-water" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E0F7FA" />
        <stop offset="50%" stopColor="#4DD0E1" />
        <stop offset="100%" stopColor="#0097A7" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#wf-sky)" />

    {/* Mountain Cliffs Left and Right */}
    <polygon points="0,0 200,0 180,420 0,460" fill="#546E7A" />
    <polygon points="0,0 160,0 140,410 0,450" fill="#37474F" />

    <polygon points="600,0 400,0 420,420 600,460" fill="#546E7A" />
    <polygon points="600,0 440,0 460,410 600,450" fill="#37474F" />

    {/* Green Foliage on cliffs */}
    <ellipse cx="140" cy="120" rx="50" ry="30" fill="#2E7D32" />
    <ellipse cx="460" cy="160" rx="55" ry="35" fill="#388E3C" />
    <ellipse cx="170" cy="300" rx="40" ry="25" fill="#43A047" />

    {/* The Flowing Waterfall */}
    <rect x="200" y="0" width="200" height="420" fill="url(#wf-water)" />
    {/* Water Flow Lines */}
    <path d="M 230 0 L 230 420 M 270 0 L 270 420 M 310 0 L 310 420 M 350 0 L 350 420 M 380 0 L 380 420" stroke="#FFFFFF" strokeWidth="4" opacity="0.6" strokeDasharray="30 15" />

    {/* Mist and foam splash pool */}
    <ellipse cx="300" cy="420" rx="140" ry="30" fill="#E0F7FA" opacity="0.9" />
    <ellipse cx="300" cy="420" rx="110" ry="20" fill="#FFFFFF" />

    {/* Turquoise Basin Lagoon */}
    <ellipse cx="300" cy="510" rx="340" ry="120" fill="#00ACC1" />
    <ellipse cx="300" cy="530" rx="280" ry="80" fill="#00838F" />

    {/* Tropical Ferns Foreground */}
    <path d="M 0 600 Q 80 480 160 520 Q 80 560 0 600" fill="#1B5E20" />
    <path d="M 600 600 Q 520 480 440 520 Q 520 560 600 600" fill="#1B5E20" />
  </g>
);

export const BeachIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="beach-sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4FC3F7" />
        <stop offset="60%" stopColor="#FFF59D" />
        <stop offset="100%" stopColor="#FFCC80" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#beach-sky)" />

    {/* Warm Sun */}
    <circle cx="480" cy="110" r="55" fill="#FFA726" />
    <circle cx="480" cy="110" r="45" fill="#FFEE58" />

    {/* Calm Ocean Waves */}
    <rect x="0" y="260" width="600" height="120" fill="#0288D1" />
    <path d="M 0 340 Q 150 320 300 340 Q 450 360 600 340 L 600 400 L 0 400 Z" fill="#29B6F6" />
    <path d="M 0 380 Q 200 360 400 380 Q 550 400 600 380 L 600 440 L 0 440 Z" fill="#80DEEA" />

    {/* Golden Sand Beach */}
    <path d="M 0 420 Q 300 380 600 430 L 600 600 L 0 600 Z" fill="#FFE082" />
    <path d="M 0 460 Q 300 430 600 480 L 600 600 L 0 600 Z" fill="#FFD54F" />

    {/* Palm Tree */}
    <path d="M 100 550 Q 160 350 140 160" stroke="#795548" strokeWidth="26" fill="none" strokeLinecap="round" />
    <path d="M 100 550 Q 160 350 140 160" stroke="#5D4037" strokeWidth="18" fill="none" strokeLinecap="round" />
    {/* Palm Fronds */}
    <g fill="#2E7D32">
      <path d="M 140 160 Q 60 120 0 160 Q 70 190 140 160" />
      <path d="M 140 160 Q 140 70 110 20 Q 170 80 140 160" />
      <path d="M 140 160 Q 220 80 280 110 Q 210 160 140 160" />
      <path d="M 140 160 Q 240 160 270 230 Q 190 200 140 160" fill="#388E3C" />
      <path d="M 140 160 Q 80 230 40 250 Q 80 200 140 160" fill="#388E3C" />
    </g>

    {/* Coconuts */}
    <circle cx="130" cy="175" r="10" fill="#4E342E" />
    <circle cx="150" cy="180" r="11" fill="#3E2723" />

    {/* Red Starfish on Sand */}
    <g transform="translate(420, 500) scale(0.7)">
      <polygon points="0,-40 12,-12 40,-12 18,6 26,35 0,18 -26,35 -18,6 -40,-12 -12,-12" fill="#E53935" />
      <circle cx="0" cy="0" r="8" fill="#FF8A80" />
    </g>
  </g>
);

export const MountainIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="mt-sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3F51B5" />
        <stop offset="50%" stopColor="#FF7043" />
        <stop offset="100%" stopColor="#FFE082" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#mt-sky)" />

    {/* Rising Morning Sun */}
    <circle cx="300" cy="270" r="70" fill="#FFF9C4" />

    {/* Far Mountain */}
    <polygon points="300,140 140,380 460,380" fill="#5C6BC0" />
    <polygon points="300,140 255,210 280,200 300,225 320,195 345,210" fill="#FFFFFF" />

    {/* Left Mountain Peak */}
    <polygon points="170,180 20,440 340,440" fill="#3949AB" />
    <polygon points="170,180 125,260 150,245 170,270 195,245 220,265" fill="#ECEFF1" />

    {/* Right Mountain Peak */}
    <polygon points="440,190 290,440 590,440" fill="#283593" />
    <polygon points="440,190 395,270 420,250 440,280 470,250 495,275" fill="#ECEFF1" />

    {/* Alpine Mirror Lake */}
    <rect x="0" y="440" width="600" height="80" fill="#1A237E" />
    <rect x="0" y="480" width="600" height="40" fill="#0D47A1" opacity="0.8" />

    {/* Evergreen Pine Trees Foreground */}
    <g fill="#1B5E20">
      <polygon points="70,400 40,470 100,470" />
      <polygon points="70,430 30,510 110,510" />
      <polygon points="130,410 100,480 160,480" />
      <polygon points="130,445 90,520 170,520" />

      <polygon points="500,390 470,460 530,460" />
      <polygon points="500,420 460,500 540,500" />
      <polygon points="540,430 510,510 570,510" />
    </g>
    <rect x="0" y="520" width="600" height="80" fill="#2E7D32" />
  </g>
);

export const IceCreamIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="ic-bg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F8BBD0" />
        <stop offset="100%" stopColor="#E1BEE7" />
      </linearGradient>
      <linearGradient id="cone-pattern" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFA726" />
        <stop offset="100%" stopColor="#FB8C00" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#ic-bg)" />

    {/* Sparkle stars */}
    <circle cx="120" cy="140" r="10" fill="#FFF" />
    <circle cx="480" cy="180" r="8" fill="#FFF" />

    {/* Waffle Cone */}
    <polygon points="210,380 390,380 300,580" fill="url(#cone-pattern)" />
    {/* Waffle Grid Lines */}
    <g stroke="#E65100" strokeWidth="3" opacity="0.6">
      <line x1="230" y1="410" x2="350" y2="470" />
      <line x1="250" y1="450" x2="330" y2="520" />
      <line x1="270" y1="490" x2="310" y2="560" />
      <line x1="370" y1="410" x2="250" y2="470" />
      <line x1="350" y1="450" x2="270" y2="520" />
      <line x1="330" y1="490" x2="290" y2="560" />
    </g>

    {/* Bottom Scoop: Mint Chocolate Chip */}
    <circle cx="300" cy="370" r="85" fill="#80CBC4" />
    {/* Chocolate chips */}
    <rect x="260" y="350" width="12" height="10" rx="3" fill="#3E2723" />
    <rect x="310" y="380" width="14" height="10" rx="3" fill="#3E2723" />
    <rect x="330" y="340" width="10" height="12" rx="3" fill="#3E2723" />

    {/* Middle Scoop: Strawberry Swirl */}
    <circle cx="300" cy="270" r="80" fill="#F48FB1" />
    <path d="M 240 260 Q 300 290 360 250" stroke="#C2185B" strokeWidth="8" fill="none" strokeLinecap="round" />

    {/* Top Scoop: Vanilla with Chocolate Fudge Drip */}
    <circle cx="300" cy="180" r="75" fill="#FFF9C4" />
    {/* Dripping Chocolate Sauce */}
    <path d="M 230 170 C 240 210 260 210 270 180 C 280 230 300 220 310 180 C 330 220 350 210 370 170 C 360 130 240 130 230 170 Z" fill="#4E342E" />

    {/* Colorful Sprinkles */}
    <rect x="270" y="160" width="12" height="5" rx="2" fill="#E91E63" transform="rotate(25 270 160)" />
    <rect x="320" y="150" width="12" height="5" rx="2" fill="#00E676" transform="rotate(-35 320 150)" />
    <rect x="295" y="140" width="12" height="5" rx="2" fill="#00B0FF" transform="rotate(60 295 140)" />

    {/* Glossy Red Cherry on Top */}
    <circle cx="300" cy="95" r="26" fill="#D50000" />
    <circle cx="292" cy="88" r="7" fill="#FFFFFF" opacity="0.8" />
    <path d="M 300 75 Q 330 20 360 40" stroke="#2E7D32" strokeWidth="4" fill="none" strokeLinecap="round" />
  </g>
);

export const CupcakesIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="cup-bg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF3E0" />
        <stop offset="100%" stopColor="#FFE0B2" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#cup-bg)" />

    {/* Elegant Table surface */}
    <rect x="0" y="440" width="600" height="160" fill="#BCAAA4" />
    <rect x="0" y="440" width="600" height="20" fill="#8D6E63" />

    {/* Left Cupcake: Blueberry Fantasy */}
    <g transform="translate(160, 360)">
      {/* Wrapper */}
      <polygon points="-70,30 70,30 50,110 -50,110" fill="#90CAF9" />
      {[-40, -20, 0, 20, 40].map(x => (
        <line key={x} x1={x} y1="30" x2={x * 0.7} y2="110" stroke="#42A5F5" strokeWidth="3" />
      ))}
      {/* Swirled Frosting */}
      <ellipse cx="0" cy="20" rx="75" ry="30" fill="#42A5F5" />
      <ellipse cx="0" cy="-5" rx="60" ry="25" fill="#64B5F6" />
      <circle cx="0" cy="-30" r="30" fill="#90CAF9" />
      {/* Blueberries on top */}
      <circle cx="-15" cy="-40" r="12" fill="#1565C0" />
      <circle cx="15" cy="-40" r="12" fill="#0D47A1" />
    </g>

    {/* Center Grand Cupcake: Strawberry Delight with Candle */}
    <g transform="translate(300, 340)">
      {/* Wrapper */}
      <polygon points="-80,50 80,50 60,140 -60,140" fill="#F8BBD0" />
      {[-50, -25, 0, 25, 50].map(x => (
        <line key={x} x1={x} y1="50" x2={x * 0.75} y2="140" stroke="#EC407A" strokeWidth="4" />
      ))}
      {/* Swirled Pink Frosting */}
      <ellipse cx="0" cy="40" rx="90" ry="35" fill="#F06292" />
      <ellipse cx="0" cy="10" rx="75" ry="30" fill="#F48FB1" />
      <ellipse cx="0" cy="-20" rx="55" ry="25" fill="#F8BBD0" />
      <circle cx="0" cy="-45" r="28" fill="#FCE4EC" />
      {/* Golden Sugar Pearls */}
      <circle cx="-35" cy="20" r="6" fill="#FFD54F" />
      <circle cx="35" cy="20" r="6" fill="#FFD54F" />
      <circle cx="-15" cy="-10" r="6" fill="#FFD54F" />
      <circle cx="20" cy="-15" r="6" fill="#FFD54F" />
      {/* Candle */}
      <rect x="-6" y="-110" width="12" height="65" rx="3" fill="#FFF" stroke="#E91E63" strokeWidth="2" />
      {/* Flame */}
      <path d="M 0 -140 Q 15 -115 0 -110 Q -15 -115 0 -140 Z" fill="#FFEB3B" />
      <path d="M 0 -130 Q 8 -115 0 -110 Q -8 -115 0 -130 Z" fill="#FF5722" />
    </g>

    {/* Right Cupcake: Chocolate Caramel */}
    <g transform="translate(440, 370)">
      <polygon points="-65,20 65,20 45,100 -45,100" fill="#D7CCC8" />
      <ellipse cx="0" cy="15" rx="70" ry="28" fill="#5D4037" />
      <ellipse cx="0" cy="-10" rx="55" ry="24" fill="#6D4C41" />
      <circle cx="0" cy="-30" r="26" fill="#8D6E63" />
      {/* Caramel Drizzle */}
      <path d="M -40 0 Q 0 -30 40 10" stroke="#FFB300" strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
  </g>
);

export const BalloonsIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="bal-sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#29B6F6" />
        <stop offset="100%" stopColor="#B3E5FC" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#bal-sky)" />

    {/* Sunny Clouds */}
    <ellipse cx="140" cy="180" rx="90" ry="40" fill="#FFFFFF" opacity="0.9" />
    <ellipse cx="480" cy="140" rx="80" ry="35" fill="#FFFFFF" opacity="0.9" />

    {/* Balloon Strings convergent to bottom center */}
    <g stroke="#78909C" strokeWidth="2" fill="none">
      <path d="M 170 240 Q 230 380 300 520" />
      <path d="M 230 180 Q 270 350 300 520" />
      <path d="M 310 140 Q 305 330 300 520" />
      <path d="M 380 170 Q 340 340 300 520" />
      <path d="M 440 230 Q 370 380 300 520" />
      <path d="M 250 280 Q 275 400 300 520" />
      <path d="M 350 270 Q 330 400 300 520" />
    </g>

    {/* Ribbons Bow */}
    <circle cx="300" cy="520" r="10" fill="#E91E63" />
    <path d="M 280 540 Q 300 520 320 540 M 270 560 Q 300 530 330 560" stroke="#E91E63" strokeWidth="4" fill="none" />

    {/* Balloons (with highlights and tie knots) */}
    {/* Red */}
    <g transform="translate(170, 200)">
      <ellipse cx="0" cy="0" rx="60" ry="75" fill="#F44336" />
      <ellipse cx="-20" cy="-25" rx="14" ry="24" fill="#FFCDD2" opacity="0.6" transform="rotate(-20 -20 -25)" />
      <polygon points="-8,74 8,74 0,82" fill="#D32F2F" />
    </g>

    {/* Cyan */}
    <g transform="translate(430, 190)">
      <ellipse cx="0" cy="0" rx="58" ry="72" fill="#00E5FF" />
      <ellipse cx="-18" cy="-22" rx="12" ry="20" fill="#E0F7FA" opacity="0.8" transform="rotate(-20 -18 -22)" />
      <polygon points="-8,71 8,71 0,79" fill="#00B8D4" />
    </g>

    {/* Purple */}
    <g transform="translate(230, 150)">
      <ellipse cx="0" cy="0" rx="62" ry="76" fill="#AB47BC" />
      <ellipse cx="-20" cy="-25" rx="14" ry="22" fill="#E1BEE7" opacity="0.7" transform="rotate(-20 -20 -25)" />
      <polygon points="-8,75 8,75 0,83" fill="#7B1FA2" />
    </g>

    {/* Lime Green */}
    <g transform="translate(380, 140)">
      <ellipse cx="0" cy="0" rx="60" ry="74" fill="#76FF03" />
      <ellipse cx="-18" cy="-22" rx="12" ry="22" fill="#F1F8E9" opacity="0.8" transform="rotate(-20 -18 -22)" />
      <polygon points="-8,73 8,73 0,81" fill="#64DD17" />
    </g>

    {/* Golden Yellow King Center */}
    <g transform="translate(305, 110)">
      <ellipse cx="0" cy="0" rx="68" ry="85" fill="#FFEA00" />
      <ellipse cx="-22" cy="-28" rx="16" ry="28" fill="#FFFDE7" opacity="0.85" transform="rotate(-20 -22 -28)" />
      <polygon points="-10,84 10,84 0,94" fill="#FFD600" />
    </g>

    {/* Orange Front */}
    <g transform="translate(260, 260)">
      <ellipse cx="0" cy="0" rx="55" ry="70" fill="#FF9100" />
      <ellipse cx="-16" cy="-20" rx="12" ry="20" fill="#FFE0B2" opacity="0.7" transform="rotate(-20 -16 -20)" />
      <polygon points="-8,69 8,69 0,77" fill="#FF6D00" />
    </g>

    {/* Hot Pink Front */}
    <g transform="translate(350, 250)">
      <ellipse cx="0" cy="0" rx="56" ry="70" fill="#FF4081" />
      <ellipse cx="-16" cy="-20" rx="12" ry="20" fill="#FCE4EC" opacity="0.7" transform="rotate(-20 -16 -20)" />
      <polygon points="-8,69 8,69 0,77" fill="#C2185B" />
    </g>
  </g>
);

export const ToyRoomIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="toy-wall" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF9C4" />
        <stop offset="100%" stopColor="#FFF176" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#toy-wall)" />
    {/* Striped Wallpaper Accent */}
    <g stroke="#FFFDE7" strokeWidth="8" opacity="0.5">
      {[50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="400" />
      ))}
    </g>
    {/* Wooden Floor */}
    <rect x="0" y="400" width="600" height="200" fill="#D7CCC8" />
    <line x1="0" y1="400" x2="600" y2="400" stroke="#8D6E63" strokeWidth="8" />

    {/* Plush Brown Teddy Bear */}
    <g transform="translate(200, 340)">
      {/* Ears */}
      <circle cx="-50" cy="-70" r="26" fill="#8D6E63" />
      <circle cx="-50" cy="-70" r="14" fill="#D7CCC8" />
      <circle cx="50" cy="-70" r="26" fill="#8D6E63" />
      <circle cx="50" cy="-70" r="14" fill="#D7CCC8" />
      {/* Body */}
      <ellipse cx="0" cy="50" rx="75" ry="65" fill="#8D6E63" />
      <ellipse cx="0" cy="55" rx="45" ry="40" fill="#D7CCC8" />
      {/* Head */}
      <circle cx="0" cy="-20" r="65" fill="#8D6E63" />
      <ellipse cx="0" cy="-10" rx="30" ry="22" fill="#D7CCC8" />
      <ellipse cx="0" cy="-18" rx="14" ry="10" fill="#3E2723" />
      <circle cx="-24" cy="-32" r="7" fill="#3E2723" />
      <circle cx="24" cy="-32" r="7" fill="#3E2723" />
      {/* Red Bow Tie */}
      <polygon points="-25,30 25,30 0,40" fill="#E53935" />
      <polygon points="-25,50 25,50 0,40" fill="#E53935" />
      <circle cx="0" cy="40" r="8" fill="#C62828" />
    </g>

    {/* Wooden Toy Train */}
    <g transform="translate(410, 430)">
      {/* Train tracks */}
      <line x1="-120" y1="90" x2="160" y2="90" stroke="#795548" strokeWidth="6" />
      {/* Engine Body */}
      <rect x="-40" y="0" width="100" height="70" rx="8" fill="#1E88E5" />
      <rect x="10" y="-30" width="50" height="50" rx="6" fill="#43A047" />
      <rect x="-30" y="-20" width="18" height="30" rx="4" fill="#FDD835" />
      {/* Wheels */}
      <circle cx="-15" cy="75" r="16" fill="#D32F2F" stroke="#212121" strokeWidth="4" />
      <circle cx="35" cy="75" r="16" fill="#D32F2F" stroke="#212121" strokeWidth="4" />
    </g>

    {/* Alphabet Toy Blocks */}
    <g transform="translate(100, 480)">
      {/* Block A */}
      <rect x="0" y="0" width="50" height="50" rx="6" fill="#E53935" stroke="#B71C1C" strokeWidth="3" />
      <text x="25" y="36" fill="#FFF" fontSize="30" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">A</text>
      {/* Block B */}
      <rect x="55" y="0" width="50" height="50" rx="6" fill="#43A047" stroke="#1B5E20" strokeWidth="3" />
      <text x="80" y="36" fill="#FFF" fontSize="30" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">B</text>
      {/* Block C on top */}
      <rect x="28" y="-55" width="50" height="50" rx="6" fill="#1E88E5" stroke="#0D47A1" strokeWidth="3" />
      <text x="53" y="-19" fill="#FFF" fontSize="30" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">C</text>
    </g>
  </g>
);

export const CandyWorldIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="candy-sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F8BBD0" />
        <stop offset="100%" stopColor="#FFF9C4" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#candy-sky)" />

    {/* Cotton Candy Clouds */}
    <ellipse cx="140" cy="110" rx="70" ry="35" fill="#E1BEE7" opacity="0.9" />
    <ellipse cx="460" cy="140" rx="80" ry="40" fill="#B2EBF2" opacity="0.9" />

    {/* Gumdrop Hills in background */}
    <path d="M 0 450 C 100 320 220 320 320 450 Z" fill="#81C784" />
    <path d="M 280 460 C 380 300 500 300 600 460 Z" fill="#FF8A80" />

    {/* Chocolate Fudge River */}
    <path d="M 0 520 Q 200 460 300 530 Q 450 600 600 510 L 600 600 L 0 600 Z" fill="#5D4037" />
    <path d="M 0 540 Q 200 480 300 550 Q 450 620 600 530 L 600 600 L 0 600 Z" fill="#4E342E" />

    {/* Giant Spiral Rainbow Lollipop */}
    <g transform="translate(180, 240)">
      {/* Stick */}
      <rect x="-8" y="70" width="16" height="180" rx="5" fill="#FFF" stroke="#E0E0E0" strokeWidth="2" />
      {/* Candy Disc */}
      <circle cx="0" cy="0" r="80" fill="#FFEB3B" />
      <path d="M 0 0 C 40 -80 80 -40 80 0 C 80 40 40 80 0 80 C -40 80 -80 40 -80 0 C -80 -40 -40 -80 0 -80" stroke="#FF1744" strokeWidth="18" fill="none" strokeLinecap="round" />
      <path d="M 0 0 C 20 -40 40 -20 40 0 C 40 20 20 40 0 40 C -20 40 -40 20 -40 0" stroke="#00E676" strokeWidth="12" fill="none" strokeLinecap="round" />
    </g>

    {/* Candy Canes */}
    <g transform="translate(420, 310)">
      <path d="M 0 160 L 0 50 A 40 40 0 0 0 -80 50" stroke="#FFFFFF" strokeWidth="26" fill="none" strokeLinecap="round" />
      <path d="M 0 160 L 0 50 A 40 40 0 0 0 -80 50" stroke="#D50000" strokeWidth="26" fill="none" strokeDasharray="16 16" strokeLinecap="round" />
    </g>

    {/* Jelly Beans Foreground */}
    <ellipse cx="120" cy="540" rx="22" ry="14" fill="#E040FB" transform="rotate(-15 120 540)" />
    <ellipse cx="480" cy="550" rx="24" ry="15" fill="#00E5FF" transform="rotate(20 480 550)" />
    <ellipse cx="320" cy="565" rx="20" ry="13" fill="#FFEA00" transform="rotate(5 320 565)" />
  </g>
);

export const SpaceRocketIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="space-bg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#080720" />
        <stop offset="50%" stopColor="#150E3D" />
        <stop offset="100%" stopColor="#2A104E" />
      </linearGradient>
      <linearGradient id="nebula-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EC4899" stopOpacity="0.4" />
        <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="rocket-hull" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="50%" stopColor="#E2E8F0" />
        <stop offset="100%" stopColor="#94A3B8" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#space-bg)" />

    {/* Nebula swirls and star fields across the background */}
    <ellipse cx="140" cy="120" rx="130" ry="80" fill="url(#nebula-grad)" transform="rotate(-25 140 120)" />
    <ellipse cx="480" cy="380" rx="140" ry="90" fill="url(#nebula-grad)" transform="rotate(35 480 380)" />

    {/* Star clusters and constellations */}
    {[
      {x: 40, y: 50, r: 2}, {x: 90, y: 70, r: 3}, {x: 160, y: 40, r: 2.5}, {x: 230, y: 90, r: 2},
      {x: 320, y: 40, r: 3}, {x: 380, y: 80, r: 2}, {x: 550, y: 60, r: 3}, {x: 420, y: 160, r: 2},
      {x: 60, y: 240, r: 2.5}, {x: 190, y: 220, r: 2}, {x: 520, y: 260, r: 3}, {x: 80, y: 400, r: 2},
      {x: 240, y: 440, r: 2.5}, {x: 350, y: 480, r: 2}, {x: 560, y: 440, r: 3}, {x: 140, y: 540, r: 2}
    ].map((s, idx) => (
      <circle key={idx} cx={s.x} cy={s.y} r={s.r} fill="#FFF" opacity="0.9" />
    ))}

    {/* Object 1 (Top-Left): Swirling Purple Spiral Galaxy & Golden Comet */}
    <g transform="translate(100, 90)">
      <ellipse cx="0" cy="0" rx="60" ry="25" fill="#C084FC" opacity="0.5" transform="rotate(-30)" />
      <ellipse cx="0" cy="0" rx="35" ry="14" fill="#F472B6" opacity="0.7" transform="rotate(-30)" />
      <circle cx="0" cy="0" r="10" fill="#FFF" />
      {/* Comet streaking past */}
      <path d="M 50 -20 Q 90 -45 130 -60" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
      <path d="M 50 -20 Q 80 -35 110 -45" stroke="#F87171" strokeWidth="2" opacity="0.6" />
      <circle cx="50" cy="-20" r="7" fill="#FDE047" />
    </g>

    {/* Object 2 (Top-Right): Giant Ringed Saturn with Moons */}
    <g transform="translate(480, 110)">
      <circle cx="0" cy="0" r="42" fill="#F59E0B" />
      <path d="M -25 -10 Q 0 5 25 -10" stroke="#D97706" strokeWidth="6" fill="none" opacity="0.6" />
      {/* Rings */}
      <ellipse cx="0" cy="0" rx="85" ry="22" stroke="#FDE68A" strokeWidth="10" fill="none" transform="rotate(-20)" opacity="0.85" />
      <ellipse cx="0" cy="0" rx="65" ry="16" stroke="#FCD34D" strokeWidth="4" fill="none" transform="rotate(-20)" opacity="0.7" />
      {/* Tiny moon */}
      <circle cx="-65" cy="30" r="6" fill="#CBD5E1" />
      <circle cx="55" cy="-35" r="4" fill="#94A3B8" />
    </g>

    {/* Object 3 (Top-Center): Orbiting Space Station with Solar Panels */}
    <g transform="translate(280, 100) rotate(15) scale(0.85)">
      {/* Central module */}
      <rect x="-15" y="-12" width="30" height="24" rx="4" fill="#E2E8F0" stroke="#334155" strokeWidth="2" />
      <circle cx="0" cy="0" r="7" fill="#38BDF8" />
      {/* Left solar array */}
      <line x1="-15" y1="0" x2="-45" y2="0" stroke="#64748B" strokeWidth="4" />
      <rect x="-95" y="-20" width="50" height="40" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
      <line x1="-70" y1="-20" x2="-70" y2="20" stroke="#38BDF8" strokeWidth="1" />
      {/* Right solar array */}
      <line x1="15" y1="0" x2="45" y2="0" stroke="#64748B" strokeWidth="4" />
      <rect x="45" y="-20" width="50" height="40" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
      <line x1="70" y1="-20" x2="70" y2="20" stroke="#38BDF8" strokeWidth="1" />
    </g>

    {/* Object 4 (Mid-Left): Deep Space Satellite Probe */}
    <g transform="translate(90, 260) rotate(-20) scale(0.8)">
      {/* Gold foil body */}
      <polygon points="-15,-20 15,-20 20,20 -20,20" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
      {/* Parabolic radar dish */}
      <path d="M 0 -20 Q -35 -40 -35 -70 Q 0 -50 35 -70 Q 35 -40 0 -20 Z" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
      <line x1="0" y1="-45" x2="0" y2="-65" stroke="#EF4444" strokeWidth="3" />
      <circle cx="0" cy="-65" r="4" fill="#EF4444" />
      {/* Antenna arms */}
      <line x1="-15" y1="20" x2="-35" y2="50" stroke="#94A3B8" strokeWidth="2" />
      <line x1="15" y1="20" x2="35" y2="50" stroke="#94A3B8" strokeWidth="2" />
    </g>

    {/* Object 5 (Center): Hero Retro Rocket Launching diagonally */}
    <g transform="translate(310, 270) rotate(42)">
      {/* Thruster exhaust plasma flame */}
      <polygon points="-28,110 28,110 0,230" fill="#EF4444" />
      <polygon points="-18,110 18,110 0,180" fill="#F59E0B" />
      <polygon points="-8,110 8,110 0,140" fill="#FEF08A" />
      {/* Flame spark particles */}
      <circle cx="-15" cy="190" r="4" fill="#FBBF24" />
      <circle cx="18" cy="210" r="5" fill="#F59E0B" />
      <circle cx="-5" cy="240" r="3" fill="#EF4444" />

      {/* Aerodynamic side boosters */}
      <rect x="-42" y="30" width="14" height="70" rx="5" fill="#E2E8F0" stroke="#334155" strokeWidth="2" />
      <polygon points="-42,30 -28,30 -35,10" fill="#DC2626" />
      <rect x="28" y="30" width="14" height="70" rx="5" fill="#E2E8F0" stroke="#334155" strokeWidth="2" />
      <polygon points="28,30 42,30 35,10" fill="#DC2626" />

      {/* Fins */}
      <polygon points="-32,60 -75,115 -32,105" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
      <polygon points="32,60 75,115 32,105" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />

      {/* Main Hull */}
      <path d="M -32 105 L -32 20 Q -32 -70 0 -130 Q 32 -70 32 20 L 32 105 Z" fill="url(#rocket-hull)" stroke="#334155" strokeWidth="3" />
      {/* Red nose cone tip */}
      <path d="M -24 -45 Q -32 -70 0 -130 Q 32 -70 24 -45 Z" fill="#DC2626" />

      {/* Porthole cockpit window with astronaut reflection */}
      <circle cx="0" cy="-10" r="22" fill="#38BDF8" stroke="#1E293B" strokeWidth="5" />
      <path d="M -6 -18 Q 8 -18 12 -8" stroke="#FFF" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />
      <rect x="-32" y="65" width="64" height="12" fill="#DC2626" />
    </g>

    {/* Object 6 (Mid-Right): Cute Green Alien in UFO Saucer with Tractor Beam */}
    <g transform="translate(490, 260)">
      {/* Tractor light beam cone */}
      <polygon points="-15,15 15,15 50,110 -50,110" fill="#4ADE80" opacity="0.25" />
      {/* Glass dome */}
      <path d="M -22 0 C -22 -30 22 -30 22 0 Z" fill="#A7F3D0" opacity="0.75" stroke="#34D399" strokeWidth="2" />
      {/* Green alien head & big eyes */}
      <ellipse cx="0" cy="-6" rx="12" ry="10" fill="#22C55E" />
      <circle cx="-5" cy="-8" r="4" fill="#000" />
      <circle cx="-4" cy="-9" r="1.5" fill="#FFF" />
      <circle cx="5" cy="-8" r="4" fill="#000" />
      <circle cx="6" cy="-9" r="1.5" fill="#FFF" />
      <circle cx="0" cy="-15" r="3" fill="#FACC15" />
      <line x1="0" y1="-12" x2="0" y2="-15" stroke="#22C55E" strokeWidth="2" />
      {/* Flying saucer metallic rim with multicolored lights */}
      <ellipse cx="0" cy="5" rx="45" ry="14" fill="#64748B" stroke="#334155" strokeWidth="2" />
      <ellipse cx="0" cy="3" rx="38" ry="8" fill="#94A3B8" />
      {[-28, -14, 0, 14, 28].map((lx, i) => (
        <circle key={i} cx={lx} cy={6} r="3" fill={i % 2 === 0 ? '#F43F5E' : '#38BDF8'} />
      ))}
    </g>

    {/* Object 7 (Bottom-Left): Spacewalking Astronaut Tethered with Wrench */}
    <g transform="translate(130, 450) rotate(-15) scale(0.9)">
      {/* Flexible air hose tether winding upwards */}
      <path d="M 0 30 Q -50 0 -20 -60 Q 10 -120 70 -140" stroke="#E2E8F0" strokeWidth="3" fill="none" strokeDasharray="4 2" />
      {/* Life support backpack */}
      <rect x="-35" y="-25" width="20" height="45" rx="5" fill="#94A3B8" stroke="#475569" strokeWidth="2" />
      {/* Body & legs */}
      <ellipse cx="0" cy="10" rx="22" ry="26" fill="#F8FAFC" stroke="#64748B" strokeWidth="2.5" />
      <rect x="-18" y="28" width="14" height="26" rx="6" fill="#F8FAFC" stroke="#64748B" strokeWidth="2" />
      <rect x="4" y="28" width="14" height="26" rx="6" fill="#F8FAFC" stroke="#64748B" strokeWidth="2" />
      <ellipse cx="-11" cy="54" rx="9" ry="6" fill="#64748B" />
      <ellipse cx="11" cy="54" rx="9" ry="6" fill="#64748B" />
      {/* Waving arm holding wrench */}
      <path d="M 18 -5 Q 38 -20 45 -40" stroke="#F8FAFC" strokeWidth="10" strokeLinecap="round" fill="none" />
      <ellipse cx="45" cy="-40" rx="7" ry="7" fill="#64748B" />
      <rect x="42" y="-55" width="6" height="20" rx="2" fill="#FACC15" transform="rotate(30 45 -45)" />
      {/* Helmet with gold visor */}
      <circle cx="0" cy="-22" r="22" fill="#F8FAFC" stroke="#64748B" strokeWidth="2.5" />
      <ellipse cx="4" cy="-22" rx="14" ry="12" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
      <path d="M 0 -26 Q 8 -26 12 -20" stroke="#FEF08A" strokeWidth="2" fill="none" strokeLinecap="round" />
    </g>

    {/* Object 8 (Bottom-Right): Cratered Lunar Moon Base with Flag & Rover */}
    <g transform="translate(450, 490)">
      {/* Moon surface curvature */}
      <path d="M -160 50 Q 0 -20 160 30 L 160 120 L -160 120 Z" fill="#94A3B8" />
      {/* Craters with shadows */}
      <ellipse cx="-70" cy="45" rx="28" ry="14" fill="#64748B" />
      <ellipse cx="-70" cy="47" rx="24" ry="10" fill="#475569" />
      <ellipse cx="40" cy="30" rx="35" ry="16" fill="#64748B" />
      <ellipse cx="40" cy="32" rx="30" ry="12" fill="#475569" />
      <ellipse cx="100" cy="70" rx="20" ry="9" fill="#475569" />

      {/* Cosmic explorer flag */}
      <line x1="-30" y1="20" x2="-30" y2="-35" stroke="#E2E8F0" strokeWidth="3" />
      <polygon points="-30,-35 15,-20 -30,-5" fill="#EF4444" stroke="#B91C1C" strokeWidth="1" />
      <circle cx="-15" cy="-20" r="4" fill="#FEF08A" />

      {/* Moon Rover vehicle */}
      <g transform="translate(80, 20) scale(0.7)">
        <rect x="-25" y="-15" width="50" height="20" rx="4" fill="#F8FAFC" stroke="#334155" strokeWidth="2" />
        <circle cx="15" cy="-22" r="8" fill="#38BDF8" stroke="#334155" strokeWidth="2" />
        <line x1="-15" y1="-15" x2="-15" y2="-32" stroke="#64748B" strokeWidth="2" />
        <ellipse cx="-15" cy="-32" rx="8" ry="4" fill="#FACC15" />
        {/* Rover mesh wheels */}
        <circle cx="-16" cy="10" r="10" fill="#334155" stroke="#94A3B8" strokeWidth="2" />
        <circle cx="16" cy="10" r="10" fill="#334155" stroke="#94A3B8" strokeWidth="2" />
      </g>
    </g>
  </g>
);

export const UnderwaterIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="ocean-bg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="35%" stopColor="#0284C7" />
        <stop offset="70%" stopColor="#0369A1" />
        <stop offset="100%" stopColor="#082F49" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#ocean-bg)" />

    {/* Sunbeams shimmering down from surface */}
    <polygon points="40,0 120,0 260,600 160,600" fill="#FFF" opacity="0.12" />
    <polygon points="220,0 310,0 480,600 370,600" fill="#FFF" opacity="0.1" />
    <polygon points="420,0 490,0 590,600 510,600" fill="#FFF" opacity="0.08" />

    {/* Air bubbles rising */}
    {[
      {x: 70, y: 180, r: 8}, {x: 80, y: 140, r: 5}, {x: 210, y: 250, r: 9},
      {x: 220, y: 210, r: 6}, {x: 340, y: 160, r: 10}, {x: 390, y: 120, r: 7},
      {x: 480, y: 280, r: 8}, {x: 520, y: 220, r: 5}, {x: 270, y: 400, r: 7}
    ].map((b, i) => (
      <circle key={i} cx={b.x} cy={b.y} r={b.r} fill="#E0F2FE" opacity="0.6" stroke="#FFF" strokeWidth="1.5" />
    ))}

    {/* Object 1 (Top-Left): Leaping Dolphin & Surface Seabirds */}
    <g transform="translate(100, 70)">
      {/* Surface wave crest */}
      <path d="M -80 -10 Q -40 -20 0 -10 Q 40 0 80 -10" stroke="#BAE6FD" strokeWidth="4" fill="none" opacity="0.7" />
      {/* Dolphin leaping */}
      <path d="M -40 25 C -20 -15 20 -20 50 15 C 30 10 0 15 -10 35 Z" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
      <polygon points="50,15 70,8 65,22" fill="#0284C7" />
      <polygon points="5,0 12,-15 18,-2" fill="#0369A1" />
      <circle cx="-25" cy="5" r="2.5" fill="#FFF" />
    </g>

    {/* Object 2 (Top-Center): Glowing Translucent Jellyfish */}
    <g transform="translate(290, 80)">
      <ellipse cx="0" cy="0" rx="30" ry="22" fill="#F472B6" opacity="0.75" />
      <ellipse cx="0" cy="-2" rx="22" ry="14" fill="#FDF2F8" opacity="0.6" />
      {/* Trailing wavy tentacles */}
      <path d="M -15 15 Q -25 45 -15 75 Q -5 105 -15 125" stroke="#F472B6" strokeWidth="3" fill="none" opacity="0.8" />
      <path d="M -5 18 Q 5 50 -5 85 Q 5 115 -2 135" stroke="#E879F9" strokeWidth="2.5" fill="none" opacity="0.8" />
      <path d="M 8 18 Q -2 50 12 85 Q 0 115 10 135" stroke="#E879F9" strokeWidth="2.5" fill="none" opacity="0.8" />
      <path d="M 18 15 Q 28 45 18 75 Q 8 105 18 125" stroke="#F472B6" strokeWidth="3" fill="none" opacity="0.8" />
    </g>

    {/* Object 3 (Top-Right): Swimming Green Sea Turtle */}
    <g transform="translate(470, 95) rotate(-18)">
      {/* Flippers */}
      <path d="M -10 -25 Q 15 -65 -15 -60 Z" fill="#15803D" />
      <path d="M 15 -25 Q 40 -65 10 -60 Z" fill="#16A34A" />
      <path d="M -15 20 Q -5 45 -25 40 Z" fill="#15803D" />
      <path d="M 15 20 Q 25 45 5 40 Z" fill="#15803D" />
      {/* Shell with hexagon pattern */}
      <ellipse cx="0" cy="0" rx="42" ry="30" fill="#15803D" stroke="#14532D" strokeWidth="3" />
      <ellipse cx="0" cy="0" rx="32" ry="22" fill="#22C55E" />
      <polygon points="0,-12 12,-4 12,8 0,16 -12,8 -12,-4" fill="#15803D" stroke="#166534" strokeWidth="2" />
      {/* Head */}
      <ellipse cx="46" cy="0" rx="14" ry="10" fill="#22C55E" stroke="#15803D" strokeWidth="2" />
      <circle cx="50" cy="-4" r="2.5" fill="#000" />
    </g>

    {/* Object 4 (Mid-Left): Sunken Pirate Shipwreck with Wheel & Anchor */}
    <g transform="translate(110, 310)">
      {/* Broken ship hull */}
      <path d="M -70 20 L 70 20 C 50 60 -30 70 -70 20 Z" fill="#582F0E" stroke="#3F1D06" strokeWidth="3" />
      {[-40, -10, 20, 50].map((rx, idx) => (
        <line key={idx} x1={rx} y1="20" x2={rx - 10} y2="60" stroke="#3F1D06" strokeWidth="3" />
      ))}
      {/* Broken wooden mast with torn sail */}
      <line x1="0" y1="20" x2="-20" y2="-90" stroke="#7F4F24" strokeWidth="7" />
      <path d="M -15 -70 Q 20 -60 10 -30 L -10 -40 Z" fill="#CBD5E1" opacity="0.6" stroke="#94A3B8" strokeWidth="1" />
      {/* Seaweed clinging to mast */}
      <path d="M -18 -80 Q -30 -50 -15 -20" stroke="#22C55E" strokeWidth="4" fill="none" />
      {/* Ship wheel on deck */}
      <circle cx="25" cy="5" r="14" fill="none" stroke="#A68A56" strokeWidth="3" />
      <circle cx="25" cy="5" r="5" fill="#7F4F24" />
      {/* Iron anchor resting on rocks */}
      <g transform="translate(-50, 70)">
        <line x1="0" y1="-30" x2="0" y2="15" stroke="#64748B" strokeWidth="4" />
        <circle cx="0" cy="-30" r="5" fill="none" stroke="#64748B" strokeWidth="3" />
        <path d="M -20 5 Q 0 25 20 5" stroke="#64748B" strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>
    </g>

    {/* Object 5 (Center): Coral Reef Garden & Striped Clownfish Pair in Anemone */}
    <g transform="translate(300, 300)">
      {/* Purple Sea Fan Coral */}
      <path d="M -50 40 Q -80 -20 -30 -70 Q 0 -30 20 -70 Q 60 -10 20 40 Z" fill="#A855F7" opacity="0.75" />
      {/* Sea Anemone tentacles */}
      {[-25, -15, -5, 5, 15, 25].map((ax, idx) => (
        <path key={idx} d={`M ${ax} 40 Q ${ax + (idx % 2 ? 10 : -10)} 0 ${ax} -30`} stroke="#F43F5E" strokeWidth="7" strokeLinecap="round" fill="none" />
      ))}
      {/* Clownfish #1 (Mom) */}
      <g transform="translate(-10, -5) scale(0.9)">
        <ellipse cx="0" cy="0" rx="35" ry="24" fill="#FF6B00" />
        <polygon points="-30,0 -48,-16 -42,0 -48,16" fill="#FF6B00" />
        <path d="M -10 -22 Q -5 0 -10 22 L 0 22 Q 5 0 0 -22 Z" fill="#FFF" stroke="#000" strokeWidth="1.5" />
        <path d="M 12 -18 Q 16 0 12 18 L 18 16 Q 22 0 18 -16 Z" fill="#FFF" stroke="#000" strokeWidth="1.5" />
        <circle cx="22" cy="-6" r="4.5" fill="#FFF" />
        <circle cx="23" cy="-6" r="2.5" fill="#000" />
      </g>
      {/* Clownfish #2 (Baby) */}
      <g transform="translate(35, 15) scale(0.55)">
        <ellipse cx="0" cy="0" rx="35" ry="24" fill="#FF8500" />
        <polygon points="-30,0 -48,-16 -42,0 -48,16" fill="#FF8500" />
        <path d="M -10 -22 Q -5 0 -10 22 L 0 22 Q 5 0 0 -22 Z" fill="#FFF" stroke="#000" strokeWidth="1.5" />
        <circle cx="22" cy="-6" r="5" fill="#FFF" />
        <circle cx="23" cy="-6" r="2.5" fill="#000" />
      </g>
    </g>

    {/* Object 6 (Mid-Right): Friendly Red Octopus holding Antique Telescope */}
    <g transform="translate(480, 290)">
      {/* Big round bulbous octopus head */}
      <ellipse cx="0" cy="-20" rx="38" ry="34" fill="#E11D48" stroke="#9F1239" strokeWidth="2.5" />
      {/* Big expressive eyes */}
      <ellipse cx="-14" cy="-16" rx="9" ry="11" fill="#FFF" />
      <circle cx="-13" cy="-15" r="5" fill="#1E293B" />
      <circle cx="-11" cy="-18" r="2" fill="#FFF" />
      <ellipse cx="14" cy="-16" rx="9" ry="11" fill="#FFF" />
      <circle cx="15" cy="-15" r="5" fill="#1E293B" />
      <circle cx="17" cy="-18" r="2" fill="#FFF" />
      {/* 8 curly tentacles with suction cups */}
      <path d="M -25 5 Q -60 20 -40 50 Q -25 70 -50 90" stroke="#E11D48" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M -10 10 Q -30 40 -15 70 Q 0 95 -10 115" stroke="#E11D48" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M 10 10 Q 30 40 15 70 Q 0 95 10 115" stroke="#E11D48" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M 25 5 Q 60 20 40 50 Q 25 70 55 90" stroke="#E11D48" strokeWidth="10" strokeLinecap="round" fill="none" />
      {/* Suction cup dots */}
      <circle cx="-45" cy="40" r="3" fill="#FDA4AF" />
      <circle cx="-25" cy="65" r="3" fill="#FDA4AF" />
      <circle cx="45" cy="40" r="3" fill="#FDA4AF" />
      {/* Holding brass telescope in front tentacle */}
      <rect x="-35" y="-5" width="40" height="10" rx="2" fill="#FACC15" stroke="#B45309" strokeWidth="2" transform="rotate(-25 -35 -5)" />
    </g>

    {/* Object 7 (Bottom-Left): Giant Clam Shell with Glowing Pearl */}
    <g transform="translate(130, 490)">
      {/* Clam bottom shell */}
      <path d="M -50 20 C -50 60 50 60 50 20 C 30 20 0 30 -50 20 Z" fill="#9333EA" stroke="#581C87" strokeWidth="3" />
      {/* Clam open upper shell */}
      <path d="M -55 18 C -55 -40 55 -40 55 18 C 30 5 0 0 -55 18 Z" fill="#C084FC" stroke="#7E22CE" strokeWidth="3" />
      {/* Fluted shell ridges */}
      {[-35, -15, 0, 15, 35].map((rx, idx) => (
        <line key={idx} x1={0} y1="20" x2={rx} y2="-30" stroke="#7E22CE" strokeWidth="2" />
      ))}
      {/* Iridescent Glowing Pearl */}
      <circle cx="0" cy="12" r="16" fill="#FDF4FF" stroke="#F0ABFC" strokeWidth="2" />
      <circle cx="-4" cy="8" r="5" fill="#FFF" />
      <circle cx="0" cy="12" r="24" fill="#A855F7" opacity="0.3" />
    </g>

    {/* Object 8 (Bottom-Center): Sunken Greek Amphora with Spilling Coins */}
    <g transform="translate(310, 500)">
      {/* Clay terracotta jug tipped on sand */}
      <g transform="rotate(-35)">
        <path d="M -20 -40 L 20 -40 L 30 10 C 30 45 -30 45 -30 10 Z" fill="#EA580C" stroke="#9A3412" strokeWidth="2.5" />
        <ellipse cx="0" cy="-40" rx="20" ry="7" fill="#C2410C" />
        <path d="M -20 -30 Q -40 -15 -25 0" stroke="#9A3412" strokeWidth="4" fill="none" />
        <path d="M 20 -30 Q 40 -15 25 0" stroke="#9A3412" strokeWidth="4" fill="none" />
      </g>
      {/* Spilling gold doubloons */}
      <circle cx="20" cy="20" r="7" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
      <circle cx="35" cy="25" r="8" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.5" />
      <circle cx="28" cy="35" r="7" fill="#EAB308" stroke="#CA8A04" strokeWidth="1.5" />
      <circle cx="48" cy="30" r="6" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
    </g>

    {/* Object 9 (Bottom-Right): Cute Pufferfish & Sea Crab on Shell Sand */}
    <g transform="translate(480, 490)">
      {/* Sandy ocean bed */}
      <path d="M -180 50 Q -50 20 80 50 L 80 110 L -180 110 Z" fill="#FDE68A" />
      {/* Spiky yellow pufferfish */}
      <g transform="translate(-60, 0)">
        <circle cx="0" cy="0" r="26" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
        {/* Spikes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line key={deg} x1="0" y1="0" x2={Math.cos(deg*Math.PI/180)*34} y2={Math.sin(deg*Math.PI/180)*34} stroke="#EA580C" strokeWidth="3" />
        ))}
        <circle cx="10" cy="-6" r="6" fill="#FFF" />
        <circle cx="12" cy="-6" r="3" fill="#000" />
        <ellipse cx="18" cy="6" rx="4" ry="3" fill="#F97316" />
      </g>
      {/* Red Sea Crab */}
      <g transform="translate(30, 25)">
        <ellipse cx="0" cy="0" rx="20" ry="14" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" />
        {/* Claws */}
        <path d="M -15 -8 Q -30 -25 -20 -35 Q -5 -25 -10 -10" fill="#EF4444" stroke="#B91C1C" strokeWidth="1.5" />
        <path d="M 15 -8 Q 30 -25 20 -35 Q 5 -25 10 -10" fill="#EF4444" stroke="#B91C1C" strokeWidth="1.5" />
        {/* Stalk eyes */}
        <circle cx="-6" cy="-16" r="3" fill="#FFF" />
        <circle cx="-6" cy="-16" r="1.5" fill="#000" />
        <circle cx="6" cy="-16" r="3" fill="#FFF" />
        <circle cx="6" cy="-16" r="1.5" fill="#000" />
      </g>
    </g>
  </g>
);

export const TreasureIslandIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="ti-sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F97316" />
        <stop offset="35%" stopColor="#FB923C" />
        <stop offset="70%" stopColor="#FDE047" />
        <stop offset="100%" stopColor="#BAE6FD" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#ti-sky)" />

    {/* Tropical Sunset Sun & Clouds */}
    <circle cx="300" cy="180" r="65" fill="#FEF08A" opacity="0.9" />
    <path d="M 40 100 Q 90 80 140 100 Q 180 120 120 130 Z" fill="#FFF" opacity="0.4" />
    <path d="M 420 120 Q 470 100 520 120 Q 560 140 500 150 Z" fill="#FFF" opacity="0.4" />

    {/* Azure Ocean Lagoon */}
    <rect x="0" y="240" width="600" height="360" fill="#0284C7" />
    <path d="M 0 280 Q 150 260 300 280 Q 450 300 600 280 L 600 340 L 0 340 Z" fill="#0EA5E9" />
    <path d="M 0 330 Q 180 310 360 330 Q 500 350 600 330 L 600 390 L 0 390 Z" fill="#38BDF8" />

    {/* Object 1 (Top-Left): Menacing Skull Rock Cave with Glowing Eye Torches */}
    <g transform="translate(110, 160)">
      {/* Giant stone skull shape */}
      <path d="M -60 70 C -70 -20 70 -20 60 70 C 40 85 -40 85 -60 70 Z" fill="#64748B" stroke="#334155" strokeWidth="3" />
      {/* Eye socket caves with fiery glow */}
      <ellipse cx="-22" cy="20" rx="14" ry="18" fill="#1E293B" />
      <circle cx="-22" cy="24" r="5" fill="#F59E0B" />
      <ellipse cx="22" cy="20" rx="14" ry="18" fill="#1E293B" />
      <circle cx="22" cy="24" r="5" fill="#F59E0B" />
      {/* Nose cavity & teeth */}
      <polygon points="0,35 -8,50 8,50" fill="#1E293B" />
      <rect x="-24" y="62" width="8" height="12" rx="2" fill="#E2E8F0" />
      <rect x="-10" y="62" width="8" height="12" rx="2" fill="#E2E8F0" />
      <rect x="4" y="62" width="8" height="12" rx="2" fill="#E2E8F0" />
      <rect x="18" y="62" width="8" height="12" rx="2" fill="#E2E8F0" />
    </g>

    {/* Object 2 (Top-Right): Grand 3-Masted Pirate Galleon with Jolly Roger */}
    <g transform="translate(480, 180) scale(0.85)">
      {/* Wooden Ship Hull */}
      <path d="M -65 25 L 65 25 L 50 55 L -45 55 Z" fill="#451A03" stroke="#290E02" strokeWidth="3" />
      {/* Gun ports */}
      {[-30, -10, 10, 30].map((gx, idx) => (
        <rect key={idx} x={gx} y="32" width="7" height="7" fill="#000" stroke="#78350F" strokeWidth="1" />
      ))}
      {/* 3 Masts and Billowing White Sails */}
      <line x1="-35" y1="25" x2="-35" y2="-60" stroke="#78350F" strokeWidth="4" />
      <rect x="-55" y="-55" width="40" height="25" rx="3" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
      <line x1="0" y1="25" x2="0" y2="-80" stroke="#78350F" strokeWidth="5" />
      <rect x="-25" y="-75" width="50" height="32" rx="3" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
      {/* Black Jolly Roger Flag with skull */}
      <polygon points="0,-80 30,-70 0,-60" fill="#0F172A" />
      <circle cx="10" cy="-70" r="3" fill="#FFF" />
      <line x1="30" y1="25" x2="30" y2="-55" stroke="#78350F" strokeWidth="4" />
      <rect x="15" y="-50" width="35" height="22" rx="3" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
    </g>

    {/* Main Golden Beach Shore */}
    <path d="M 0 380 Q 250 330 600 390 L 600 600 L 0 600 Z" fill="#FDE047" />
    <path d="M 0 420 Q 300 370 600 430 L 600 600 L 0 600 Z" fill="#FACC15" />

    {/* Object 3 (Mid-Left): Weathered Wooden Pier Jetty with Colorful Pirate Parrot */}
    <g transform="translate(100, 350)">
      {/* Wooden dock pilings */}
      <rect x="-50" y="30" width="100" height="16" rx="3" fill="#78350F" stroke="#451A03" strokeWidth="2" />
      <rect x="-40" y="46" width="12" height="40" fill="#451A03" />
      <rect x="25" y="46" width="12" height="40" fill="#451A03" />
      {/* Coiled rope & rum barrel */}
      <ellipse cx="-25" cy="24" rx="14" ry="18" fill="#92400E" stroke="#451A03" strokeWidth="2" />
      <line x1="-39" y1="18" x2="-11" y2="18" stroke="#000" strokeWidth="2" />
      <line x1="-39" y1="30" x2="-11" y2="30" stroke="#000" strokeWidth="2" />
      {/* Scarlet Macaw Pirate Parrot */}
      <g transform="translate(15, -10)">
        {/* Tail feathers */}
        <polygon points="-5,20 -15,55 -5,50" fill="#2563EB" />
        <polygon points="0,20 -8,60 2,55" fill="#EF4444" />
        {/* Red body */}
        <ellipse cx="0" cy="10" rx="12" ry="16" fill="#DC2626" />
        {/* Yellow & Blue wing */}
        <path d="M -6 5 Q 12 10 8 30 Q -6 25 -6 5" fill="#FACC15" stroke="#2563EB" strokeWidth="3" />
        {/* Head & Beak */}
        <circle cx="-4" cy="-6" r="8" fill="#DC2626" />
        <circle cx="-6" cy="-8" r="2.5" fill="#FFF" />
        <circle cx="-7" cy="-8" r="1.2" fill="#000" />
        <path d="M -10 -6 Q -18 -4 -16 2 Q -10 0 -10 -6" fill="#F8FAFC" stroke="#475569" strokeWidth="1" />
      </g>
    </g>

    {/* Object 4 (Center): Unfurled Pirate Treasure Map with Compass Rose */}
    <g transform="translate(300, 350) rotate(-6)">
      {/* Aged parchment paper */}
      <rect x="-65" y="-45" width="130" height="90" rx="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="3" />
      <path d="M -60 -40 Q -30 -35 0 -42 Q 35 -38 60 -42" stroke="#B45309" strokeWidth="1" fill="none" />
      {/* Red X marks the spot */}
      <line x1="20" y1="5" x2="40" y2="25" stroke="#DC2626" strokeWidth="5" strokeLinecap="round" />
      <line x1="40" y1="5" x2="20" y2="25" stroke="#DC2626" strokeWidth="5" strokeLinecap="round" />
      {/* Dotted path leading to X */}
      <path d="M -40 25 Q -10 20 -20 -10 Q 0 -25 25 10" stroke="#78350F" strokeWidth="3" strokeDasharray="6 4" fill="none" />
      {/* Compass Rose */}
      <g transform="translate(-35, -15) scale(0.6)">
        <circle cx="0" cy="0" r="18" fill="none" stroke="#B45309" strokeWidth="2" />
        <polygon points="0,-18 5,-5 18,0 5,5 0,18 -5,5 -18,0 -5,-5" fill="#B45309" />
        <polygon points="0,-18 5,-5 0,0 -5,-5" fill="#DC2626" />
      </g>
    </g>

    {/* Object 5 (Mid-Right): Curved Coconut Palms & Cheeky Monkey */}
    <g transform="translate(490, 330)">
      {/* Twin Palm Trunks */}
      <path d="M 30 180 Q -10 60 20 -40" stroke="#78350F" strokeWidth="22" strokeLinecap="round" fill="none" />
      <path d="M 30 180 Q -10 60 20 -40" stroke="#92400E" strokeWidth="14" strokeLinecap="round" fill="none" />
      {/* Palm Fronds */}
      <g transform="translate(20, -40)" fill="#15803D">
        <path d="M 0 0 Q -70 -30 -100 0 Q -50 30 0 0" />
        <path d="M 0 0 Q -20 -60 20 -80 Q 30 -30 0 0" />
        <path d="M 0 0 Q 70 -40 100 -10 Q 60 30 0 0" />
        <path d="M 0 0 Q 50 40 40 80 Q 10 40 0 0" />
      </g>
      {/* Coconuts */}
      <circle cx="15" cy="-25" r="9" fill="#451A03" />
      <circle cx="28" cy="-20" r="10" fill="#3B1202" />
      {/* Cheeky little brown monkey hanging by tail */}
      <g transform="translate(-10, 40)">
        <path d="M 15 -10 Q 0 -30 10 -40" stroke="#78350F" strokeWidth="5" fill="none" strokeLinecap="round" />
        <ellipse cx="5" cy="0" rx="14" ry="18" fill="#78350F" />
        <ellipse cx="5" cy="2" rx="9" ry="12" fill="#D97706" />
        <circle cx="5" cy="-16" r="12" fill="#78350F" />
        <circle cx="5" cy="-14" r="8" fill="#D97706" />
        <circle cx="2" cy="-16" r="2" fill="#000" />
        <circle cx="8" cy="-16" r="2" fill="#000" />
      </g>
    </g>

    {/* Object 6 (Bottom-Left): Crossed Pirate Cutlass Swords & Flintlock Pistol */}
    <g transform="translate(130, 500)">
      {/* Wooden crate */}
      <rect x="-45" y="-15" width="90" height="50" rx="4" fill="#92400E" stroke="#451A03" strokeWidth="3" />
      <line x1="-45" y1="10" x2="45" y2="10" stroke="#451A03" strokeWidth="2" />
      {/* Crossed steel cutlass swords */}
      <g transform="rotate(35)">
        <path d="M -50 -5 Q 0 -8 40 -20 Q 30 -12 -50 5 Z" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.5" />
        <circle cx="-50" cy="0" r="8" fill="#F59E0B" />
      </g>
      <g transform="rotate(-35)">
        <path d="M -50 5 Q 0 8 40 20 Q 30 12 -50 -5 Z" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.5" />
        <circle cx="-50" cy="0" r="8" fill="#F59E0B" />
      </g>
      {/* Brass Flintlock Pistol */}
      <g transform="translate(0, 10)">
        <rect x="-20" y="-4" width="35" height="8" rx="2" fill="#64748B" />
        <path d="M -20 0 Q -35 15 -30 25" stroke="#78350F" strokeWidth="7" strokeLinecap="round" fill="none" />
        <rect x="-8" y="-6" width="10" height="6" fill="#F59E0B" />
      </g>
    </g>

    {/* Object 7 (Bottom-Center): Overflowing Grand Treasure Chest with Jewels & Goblet */}
    <g transform="translate(320, 480)">
      {/* Chest Base */}
      <rect x="-65" y="0" width="130" height="75" rx="8" fill="#78350F" stroke="#451A03" strokeWidth="4" />
      {/* Iron reinforcement straps and rivets */}
      <rect x="-60" y="0" width="16" height="75" fill="#334155" />
      <rect x="44" y="0" width="16" height="75" fill="#334155" />
      <circle cx="0" cy="35" r="10" fill="#FACC15" />
      <rect x="-3" y="35" width="6" height="12" fill="#000" />
      {/* Open curved chest lid thrown back */}
      <path d="M -70 0 C -70 -55 70 -55 70 0 Z" fill="#582F0E" stroke="#3F1D06" strokeWidth="4" />
      <path d="M -60 -5 C -60 -45 -45 -45 -45 -5" stroke="#334155" strokeWidth="14" fill="none" />
      <path d="M 45 -5 C 45 -45 60 -45 60 -5" stroke="#334155" strokeWidth="14" fill="none" />

      {/* Sparkling mound of gold coins and sparkling gems */}
      <ellipse cx="0" cy="-5" rx="55" ry="18" fill="#FACC15" />
      {[-35, -20, -5, 10, 25, 40].map((cx, idx) => (
        <circle key={idx} cx={cx} cy={-5 + (idx % 2 ? 6 : -4)} r="7" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.5" />
      ))}
      {/* Red Rubies & Blue Sapphires */}
      <polygon points="-25,-12 -15,-22 -5,-12 -15,-2" fill="#DC2626" />
      <polygon points="15,-10 25,-20 35,-10 25,0" fill="#2563EB" />
      <polygon points="-5,-8 0,-18 5,-8 0,2" fill="#16A34A" />
      {/* Golden Goblet Cup */}
      <g transform="translate(-10, -25)">
        <polygon points="-12,-18 12,-18 6,0 -6,0" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
        <line x1="0" y1="0" x2="0" y2="12" stroke="#CA8A04" strokeWidth="3" />
        <ellipse cx="0" cy="12" rx="10" ry="3" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />
      </g>
    </g>

    {/* Object 8 (Bottom-Right): Message in Glass Bottle & Starfish on Shore */}
    <g transform="translate(500, 510)">
      {/* Green Glass Bottle with rolled parchment message inside */}
      <g transform="rotate(-25)">
        <rect x="-10" y="-30" width="20" height="50" rx="8" fill="#34D399" opacity="0.75" stroke="#059669" strokeWidth="2" />
        <rect x="-5" y="-42" width="10" height="14" fill="#34D399" opacity="0.8" stroke="#059669" strokeWidth="1.5" />
        {/* Cork stopper */}
        <rect x="-4" y="-48" width="8" height="8" rx="2" fill="#92400E" />
        {/* Rolled parchment message with string */}
        <rect x="-5" y="-20" width="10" height="32" rx="3" fill="#FEF3C7" stroke="#B45309" strokeWidth="1" />
        <line x1="-5" y1="-5" x2="5" y2="-5" stroke="#DC2626" strokeWidth="2" />
      </g>
      {/* Vivid Red Starfish */}
      <g transform="translate(-40, 20) scale(0.65)">
        <polygon points="0,-35 10,-10 35,-10 15,5 22,30 0,15 -22,30 -15,5 -35,-10 -10,-10" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" />
        <circle cx="0" cy="0" r="7" fill="#FCA5A5" />
      </g>
      {/* Sea Shells */}
      <path d="M 25 15 Q 40 5 35 25 Z" fill="#FBCFE8" stroke="#DB2777" strokeWidth="1.5" />
    </g>
  </g>
);

export const CastleIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="castle-sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4338CA" />
        <stop offset="40%" stopColor="#7C3AED" />
        <stop offset="80%" stopColor="#C084FC" />
        <stop offset="100%" stopColor="#FDE047" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#castle-sky)" />

    {/* Radiant Sunset Sun & Flying Royal Hawk */}
    <circle cx="300" cy="180" r="50" fill="#FEF08A" opacity="0.8" />
    <g transform="translate(100, 70) scale(0.8)">
      {/* Royal messenger falcon silhouette */}
      <path d="M 0 0 Q -30 -20 -50 0 Q -25 -5 0 10 Q 25 -5 50 0 Q 30 -20 0 0" fill="#312E81" />
    </g>

    {/* Distant Alpine Peaks & Hilltop Windmill */}
    <polygon points="0,240 100,160 200,240" fill="#6366F1" opacity="0.5" />
    <polygon points="400,240 500,150 600,240" fill="#6366F1" opacity="0.5" />
    {/* Tiny windmill on hill */}
    <g transform="translate(540, 200) scale(0.55)">
      <polygon points="-12,30 12,30 8,-10 -8,-10" fill="#78350F" />
      <circle cx="0" cy="-10" r="4" fill="#FACC15" />
      <line x1="-25" y1="-25" x2="25" y2="5" stroke="#F8FAFC" strokeWidth="3" />
      <line x1="-25" y1="5" x2="25" y2="-25" stroke="#F8FAFC" strokeWidth="3" />
    </g>

    {/* Rolling Green Palace Grounds */}
    <path d="M 0 340 Q 200 290 400 320 Q 520 340 600 310 L 600 600 L 0 600 Z" fill="#16A34A" />
    <path d="M 0 380 Q 250 330 600 370 L 600 600 L 0 600 Z" fill="#15803D" />

    {/* Object 1 (Center-High): Grand Citadel Castle Fortress with Turrets & Clock */}
    <g transform="translate(300, 240)">
      {/* Central Keep Stone Wall */}
      <rect x="-80" y="0" width="160" height="120" fill="#CBD5E1" stroke="#475569" strokeWidth="4" />
      {/* Stone brick texture details */}
      <line x1="-80" y1="30" x2="80" y2="30" stroke="#94A3B8" strokeWidth="2" />
      <line x1="-80" y1="60" x2="80" y2="60" stroke="#94A3B8" strokeWidth="2" />
      <line x1="-80" y1="90" x2="80" y2="90" stroke="#94A3B8" strokeWidth="2" />
      {/* High center spire with clock tower */}
      <rect x="-35" y="-80" width="70" height="90" fill="#E2E8F0" stroke="#475569" strokeWidth="3" />
      <circle cx="0" cy="-40" r="14" fill="#FEF08A" stroke="#B45309" strokeWidth="2" />
      <line x1="0" y1="-40" x2="0" y2="-48" stroke="#000" strokeWidth="2" />
      <line x1="0" y1="-40" x2="6" y2="-40" stroke="#000" strokeWidth="2" />
      {/* Conical purple spire roof */}
      <polygon points="-45,-80 45,-80 0,-170" fill="#7C3AED" stroke="#5B21B6" strokeWidth="3" />
      <line x1="0" y1="-170" x2="0" y2="-200" stroke="#FACC15" strokeWidth="3" />
      <polygon points="0,-200 35,-185 0,-170" fill="#EF4444" />

      {/* Left Tower */}
      <rect x="-125" y="-30" width="55" height="150" fill="#94A3B8" stroke="#475569" strokeWidth="3" />
      <polygon points="-135,-30 -60,-30 -97,-120" fill="#6D28D9" stroke="#4C1D95" strokeWidth="3" />
      <line x1="-97" y1="-120" x2="-97" y2="-145" stroke="#FACC15" strokeWidth="2.5" />
      <polygon points="-97,-145 -70,-132 -97,-120" fill="#3B82F6" />

      {/* Right Tower */}
      <rect x="70" y="-30" width="55" height="150" fill="#94A3B8" stroke="#475569" strokeWidth="3" />
      <polygon points="60,-30 135,-30 97,-120" fill="#6D28D9" stroke="#4C1D95" strokeWidth="3" />
      <line x1="97" y1="-120" x2="97" y2="-145" stroke="#FACC15" strokeWidth="2.5" />
      <polygon points="97,-145 125,-132 97,-120" fill="#3B82F6" />

      {/* Arched Portcullis Main Gate with Iron Grille */}
      <path d="M -30 120 L -30 60 A 30 30 0 0 1 30 60 L 30 120 Z" fill="#451A03" stroke="#290E02" strokeWidth="4" />
      {[-18, -6, 6, 18].map((gx, idx) => (
        <line key={idx} x1={gx} y1="45" x2={gx} y2="120" stroke="#94A3B8" strokeWidth="3" />
      ))}
      <line x1="-30" y1="75" x2="30" y2="75" stroke="#94A3B8" strokeWidth="3" />
      <line x1="-30" y1="95" x2="30" y2="95" stroke="#94A3B8" strokeWidth="3" />
    </g>

    {/* Object 2 (Top-Right): Friendly Green Baby Dragon blowing smoke rings */}
    <g transform="translate(480, 220)">
      {/* Perched on castle wall */}
      <ellipse cx="0" cy="10" rx="22" ry="18" fill="#22C55E" stroke="#15803D" strokeWidth="2" />
      {/* Dragon wings */}
      <polygon points="-10,-5 -35,-30 -15,-15 -30,-5" fill="#4ADE80" stroke="#16A34A" strokeWidth="1.5" />
      {/* Tail with spade tip */}
      <path d="M 18 15 Q 35 25 35 40" stroke="#22C55E" strokeWidth="6" fill="none" strokeLinecap="round" />
      <polygon points="35,40 42,32 30,35" fill="#15803D" />
      {/* Head with cute horn and snout */}
      <circle cx="-14" cy="-10" r="14" fill="#22C55E" stroke="#15803D" strokeWidth="2" />
      <polygon points="-12,-22 -8,-32 -4,-20" fill="#FACC15" />
      <circle cx="-18" cy="-14" r="3.5" fill="#FFF" />
      <circle cx="-19" cy="-14" r="2" fill="#000" />
      {/* Cute little heart smoke ring blown */}
      <circle cx="-38" cy="-24" r="6" fill="none" stroke="#FDE047" strokeWidth="2.5" opacity="0.8" />
      <circle cx="-50" cy="-35" r="9" fill="none" stroke="#FB923C" strokeWidth="2" opacity="0.6" />
    </g>

    {/* Object 3 (Mid-Left): Royal Guard Knight in Shining Plate Armor */}
    <g transform="translate(100, 360)">
      {/* Tall halberd spear */}
      <line x1="30" y1="60" x2="30" y2="-60" stroke="#78350F" strokeWidth="4" />
      <polygon points="30,-60 22,-85 38,-85" fill="#CBD5E1" stroke="#475569" strokeWidth="2" />
      <polygon points="30,-70 45,-60 30,-50" fill="#94A3B8" />
      {/* Knight body armor */}
      <rect x="-18" y="-10" width="36" height="42" rx="8" fill="#E2E8F0" stroke="#475569" strokeWidth="2.5" />
      {/* Heraldic Shield with Lion Emblem */}
      <path d="M -30 -5 L -5 -5 L -5 30 Q -17 45 -30 30 Z" fill="#DC2626" stroke="#FACC15" strokeWidth="2.5" />
      <circle cx="-17" cy="12" r="6" fill="#FACC15" />
      {/* Helmet with crimson feather plume */}
      <circle cx="0" cy="-26" r="16" fill="#CBD5E1" stroke="#475569" strokeWidth="2.5" />
      <rect x="-10" y="-28" width="20" height="6" rx="2" fill="#0F172A" />
      <path d="M 0 -42 Q -10 -65 -25 -55 Q -10 -45 0 -42" fill="#DC2626" stroke="#B91C1C" strokeWidth="1" />
      {/* Armored legs */}
      <rect x="-14" y="32" width="10" height="30" rx="3" fill="#94A3B8" />
      <rect x="4" y="32" width="10" height="30" rx="3" fill="#94A3B8" />
    </g>

    {/* Object 4 (Mid-Right): King's Ornate Golden Royal Carriage */}
    <g transform="translate(480, 370) scale(0.9)">
      {/* Carriage cabin */}
      <rect x="-45" y="-25" width="90" height="50" rx="16" fill="#FACC15" stroke="#B45309" strokeWidth="3" />
      {/* Crown on top */}
      <polygon points="-12,-25 -16,-38 -6,-30 0,-42 6,-30 16,-38 12,-25" fill="#EAB308" stroke="#CA8A04" strokeWidth="1.5" />
      {/* Carriage window with red velvet curtains */}
      <rect x="-20" y="-14" width="40" height="26" rx="6" fill="#450A0A" stroke="#B45309" strokeWidth="2" />
      <path d="M -18 -12 Q -10 0 -18 10 M 18 -12 Q 10 0 18 10" stroke="#DC2626" strokeWidth="4" fill="none" />
      {/* Big golden spoke wheels */}
      <circle cx="-32" cy="32" r="18" fill="none" stroke="#B45309" strokeWidth="4" />
      <circle cx="-32" cy="32" r="4" fill="#FACC15" />
      <circle cx="32" cy="32" r="18" fill="none" stroke="#B45309" strokeWidth="4" />
      <circle cx="32" cy="32" r="4" fill="#FACC15" />
    </g>

    {/* Castle Moat Water Body */}
    <rect x="0" y="470" width="600" height="130" fill="#0284C7" />
    <path d="M 0 490 Q 300 460 600 490 L 600 520 L 0 520 Z" fill="#0369A1" />

    {/* Object 5 (Bottom-Left): Stone Arched Bridge with Moat Swans */}
    <g transform="translate(130, 500)">
      {/* Arched Stone Bridge */}
      <path d="M -60 20 L -60 -15 L 60 -15 L 60 20 Q 0 -10 -60 20 Z" fill="#94A3B8" stroke="#475569" strokeWidth="3" />
      {/* Bridge balustrade railing */}
      <rect x="-60" y="-22" width="120" height="8" rx="2" fill="#CBD5E1" stroke="#475569" strokeWidth="1.5" />
      {/* Graceful White Swan in Moat */}
      <g transform="translate(0, 40)">
        <ellipse cx="0" cy="0" rx="18" ry="10" fill="#FFF" stroke="#CBD5E1" strokeWidth="1" />
        <path d="M 12 -4 Q 24 -18 16 -30 Q 10 -25 10 -15" stroke="#FFF" strokeWidth="4" fill="none" strokeLinecap="round" />
        <polygon points="18,-29 26,-27 20,-24" fill="#F97316" />
      </g>
    </g>

    {/* Object 6 (Bottom-Center): Courtyard Splashing Fountain */}
    <g transform="translate(300, 480)">
      {/* Cobblestone paving around */}
      <ellipse cx="0" cy="50" rx="65" ry="24" fill="#64748B" stroke="#475569" strokeWidth="2" />
      {/* Tiered stone fountain basin */}
      <ellipse cx="0" cy="35" rx="42" ry="15" fill="#94A3B8" stroke="#475569" strokeWidth="3" />
      <ellipse cx="0" cy="33" rx="35" ry="10" fill="#38BDF8" />
      {/* Center column & upper tier */}
      <rect x="-7" y="10" width="14" height="25" fill="#64748B" />
      <ellipse cx="0" cy="10" rx="22" ry="8" fill="#94A3B8" stroke="#475569" strokeWidth="2" />
      {/* Splashing water jets */}
      <path d="M 0 10 Q -25 -15 -20 20 M 0 10 Q 0 -30 0 10 M 0 10 Q 25 -15 20 20" stroke="#E0F2FE" strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>

    {/* Object 7 (Bottom-Right): Medieval Market Stall with Striped Awning & Apples */}
    <g transform="translate(480, 500)">
      {/* Wooden stall frame */}
      <rect x="-45" y="10" width="90" height="40" rx="3" fill="#78350F" stroke="#451A03" strokeWidth="3" />
      {/* Striped Red-and-White Fabric Awning */}
      <path d="M -50 10 L -45 -18 L 45 -18 L 50 10 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
      {[-30, -10, 10, 30].map((sx, idx) => (
        <polygon key={idx} points={`${sx-6},10 ${sx-6},-18 ${sx+6},-18 ${sx+6},10`} fill="#F8FAFC" />
      ))}
      {/* Wooden crates of bright red apples and bread */}
      <rect x="-35" y="0" width="30" height="15" fill="#B45309" stroke="#78350F" strokeWidth="1.5" />
      <circle cx="-28" cy="-2" r="5" fill="#EF4444" />
      <circle cx="-20" cy="-3" r="5" fill="#DC2626" />
      <circle cx="-12" cy="-2" r="5" fill="#EF4444" />
      {/* Golden wheat bread loaves */}
      <ellipse cx="18" cy="2" rx="14" ry="7" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
    </g>
  </g>
);

export const MagicalForestIllustration: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="mf-sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0B132B" />
        <stop offset="45%" stopColor="#1C2541" />
        <stop offset="85%" stopColor="#3A0CA3" />
        <stop offset="100%" stopColor="#064E3B" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#mf-sky)" />

    {/* Glowing Crescent Moon & Swirling Mystic Constellations */}
    <path d="M 300 90 A 40 40 0 1 0 350 40 A 30 30 0 1 1 300 90" fill="#FEF08A" opacity="0.9" />
    <circle cx="340" cy="50" r="12" fill="#FEF08A" opacity="0.25" filter="blur(4px)" />

    {/* Ancient Twisted Roots & Magical Glowing Rune Tree */}
    <path d="M 0 450 Q 80 300 40 100 Q 120 180 140 60 Q 120 280 80 450 Z" fill="#0A0F1D" />
    <path d="M 600 450 Q 520 300 560 100 Q 480 180 460 60 Q 480 280 520 450 Z" fill="#0A0F1D" />
    {/* Glowing runes carved into bark */}
    <path d="M 60 220 L 70 240 L 60 260 M 65 240 L 80 240" stroke="#38BDF8" strokeWidth="3" fill="none" opacity="0.8" />
    <circle cx="530" cy="220" r="8" fill="none" stroke="#C084FC" strokeWidth="3" opacity="0.8" />
    <path d="M 526 216 L 534 224 M 534 216 L 526 224" stroke="#C084FC" strokeWidth="2" />

    {/* Object 1 (Top-Left): Wizard Treehouse with Lantern Windows & Smoking Chimney */}
    <g transform="translate(130, 160)">
      {/* Treehouse wooden cottage on thick branches */}
      <rect x="-40" y="-15" width="80" height="60" rx="5" fill="#451A03" stroke="#290E02" strokeWidth="3" />
      {/* Steep thatched/tile roof */}
      <polygon points="-50,-15 50,-15 0,-65" fill="#7C2D12" stroke="#431407" strokeWidth="3" />
      {/* Stone chimney with curly puffing smoke */}
      <rect x="18" y="-60" width="14" height="25" fill="#64748B" stroke="#334155" strokeWidth="2" />
      <circle cx="25" cy="-72" r="6" fill="#CBD5E1" opacity="0.6" />
      <circle cx="32" cy="-86" r="9" fill="#E2E8F0" opacity="0.5" />
      {/* Glowing stained-glass lantern window */}
      <circle cx="0" cy="12" r="14" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" />
      <line x1="-14" y1="12" x2="14" y2="12" stroke="#78350F" strokeWidth="2" />
      <line x1="0" y1="-2" x2="0" y2="26" stroke="#78350F" strokeWidth="2" />
      {/* Hanging rope ladder */}
      <line x1="-25" y1="45" x2="-25" y2="90" stroke="#B45309" strokeWidth="2" />
      <line x1="-15" y1="45" x2="-15" y2="90" stroke="#B45309" strokeWidth="2" />
      {[-25, -15].map((lx, idx) => (
        <React.Fragment key={idx}>
          <line x1="-25" y1={55 + idx * 15} x2="-15" y2={55 + idx * 15} stroke="#78350F" strokeWidth="2.5" />
        </React.Fragment>
      ))}
    </g>

    {/* Object 2 (Top-Right): Wise Old Horned Owl with Starry Wizard Hat */}
    <g transform="translate(480, 150)">
      {/* Mossy tree branch */}
      <path d="M -50 35 Q 0 20 60 40" stroke="#582F0E" strokeWidth="16" strokeLinecap="round" fill="none" />
      <path d="M -30 25 Q -10 20 0 28" stroke="#16A34A" strokeWidth="6" fill="none" />
      {/* Owl body & wings */}
      <ellipse cx="0" cy="10" rx="22" ry="26" fill="#78350F" stroke="#451A03" strokeWidth="2" />
      <ellipse cx="0" cy="12" rx="14" ry="18" fill="#FDE68A" />
      {/* Big wise yellow glowing eyes */}
      <circle cx="-10" cy="-6" r="10" fill="#FACC15" stroke="#451A03" strokeWidth="2" />
      <circle cx="-10" cy="-6" r="5" fill="#000" />
      <circle cx="-8" cy="-8" r="2" fill="#FFF" />
      <circle cx="10" cy="-6" r="10" fill="#FACC15" stroke="#451A03" strokeWidth="2" />
      <circle cx="10" cy="-6" r="5" fill="#000" />
      <circle cx="12" cy="-8" r="2" fill="#FFF" />
      <polygon points="0,-2 -4,5 4,5" fill="#F97316" />
      {/* Starry purple wizard hat with buckle */}
      <polygon points="-20,-16 20,-16 5,-50" fill="#6B21A8" stroke="#4C1D95" strokeWidth="2" />
      <ellipse cx="0" cy="-16" rx="24" ry="6" fill="#581C87" />
      <circle cx="2" cy="-32" r="3" fill="#FACC15" />
    </g>

    {/* Object 3 (Mid-Left): Alchemist Stone Altar with Bubbling Magic Potions */}
    <g transform="translate(100, 340)">
      {/* Carved stone pedestal altar */}
      <polygon points="-40,40 40,40 30,-5 -30,-5" fill="#475569" stroke="#1E293B" strokeWidth="2.5" />
      {/* Potion Flask 1: Glowing Cyan Round Flask */}
      <g transform="translate(-18, -12)">
        <circle cx="0" cy="0" r="14" fill="#06B6D4" stroke="#0891B2" strokeWidth="2" />
        <rect x="-3" y="-20" width="6" height="8" fill="#E2E8F0" />
        <ellipse cx="0" cy="-20" rx="5" ry="2" fill="#78350F" />
        <circle cx="-4" cy="-4" r="3" fill="#FFF" opacity="0.7" />
      </g>
      {/* Potion Flask 2: Glowing Purple Triangular Erlenmeyer */}
      <g transform="translate(15, -14)">
        <polygon points="-14,10 14,10 4,-12 -4,-12" fill="#A855F7" stroke="#7E22CE" strokeWidth="2" />
        <rect x="-3" y="-20" width="6" height="8" fill="#E2E8F0" />
        <ellipse cx="0" cy="-20" rx="4" ry="2" fill="#78350F" />
        <circle cx="2" cy="0" r="2.5" fill="#FFF" opacity="0.8" />
      </g>
    </g>

    {/* Object 4 (Center): Radiant White Unicorn with Spiral Gold Horn at Crystal Pond */}
    <g transform="translate(300, 310)">
      {/* Luminous crystal pond water */}
      <ellipse cx="0" cy="65" rx="75" ry="24" fill="#06B6D4" opacity="0.5" />
      <ellipse cx="0" cy="65" rx="55" ry="16" fill="#67E8F9" opacity="0.7" />
      {/* Unicorn Aura Glow */}
      <circle cx="0" cy="0" r="65" fill="#A7F3D0" opacity="0.2" filter="blur(8px)" />
      {/* Elegant Body & Silvery Mane */}
      <ellipse cx="10" cy="15" rx="42" ry="28" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
      <path d="M 30 18 Q 65 25 55 55" stroke="#F1F5F9" strokeWidth="8" fill="none" strokeLinecap="round" />
      {/* Slender legs */}
      <line x1="-15" y1="35" x2="-20" y2="70" stroke="#F8FAFC" strokeWidth="5" strokeLinecap="round" />
      <line x1="-2" y1="35" x2="-5" y2="70" stroke="#E2E8F0" strokeWidth="5" strokeLinecap="round" />
      <line x1="22" y1="35" x2="20" y2="70" stroke="#F8FAFC" strokeWidth="5" strokeLinecap="round" />
      <line x1="35" y1="35" x2="38" y2="70" stroke="#E2E8F0" strokeWidth="5" strokeLinecap="round" />
      {/* Golden hooves */}
      <rect x="-23" y="68" width="6" height="5" rx="1" fill="#FACC15" />
      <rect x="-8" y="68" width="6" height="5" rx="1" fill="#FACC15" />
      <rect x="17" y="68" width="6" height="5" rx="1" fill="#FACC15" />
      <rect x="35" y="68" width="6" height="5" rx="1" fill="#FACC15" />
      {/* Arched Neck & Head */}
      <path d="M -15 20 Q -25 -10 -40 -15" stroke="#F8FAFC" strokeWidth="18" fill="none" strokeLinecap="round" />
      <ellipse cx="-42" cy="-20" rx="16" ry="12" fill="#F8FAFC" />
      {/* Spiraled Golden Horn casting light */}
      <polygon points="-46,-28 -40,-26 -70,-65" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
      <circle cx="-70" cy="-65" r="5" fill="#FEF08A" opacity="0.9" />
      {/* Gentle eye and silver mane */}
      <circle cx="-45" cy="-22" r="3" fill="#3B82F6" />
      <path d="M -22 -15 Q -10 -5 -15 15" stroke="#BAE6FD" strokeWidth="4" fill="none" />
    </g>

    {/* Object 5 (Mid-Right): Bioluminescent Giant Mushrooms & Sleeping Fairy */}
    <g transform="translate(480, 330)">
      {/* Giant Neon Teal Mushroom */}
      <path d="M -10 60 L 10 60 L 6 -10 L -6 -10 Z" fill="#E2E8F0" opacity="0.8" />
      <path d="M -45 -10 Q 0 -65 45 -10 Z" fill="#06B6D4" stroke="#0891B2" strokeWidth="2.5" />
      {[-20, 0, 20].map((mx, idx) => (
        <circle key={idx} cx={mx} cy={-28 + (idx % 2 ? 8 : -4)} r="5" fill="#A5F3FC" />
      ))}
      {/* Smaller Magenta Mushroom */}
      <g transform="translate(-40, 20) scale(0.7)">
        <path d="M -10 50 L 10 50 L 6 -10 L -6 -10 Z" fill="#E2E8F0" />
        <path d="M -35 -10 Q 0 -55 35 -10 Z" fill="#EC4899" stroke="#BE185D" strokeWidth="2" />
        <circle cx="0" cy="-25" r="4" fill="#FBCFE8" />
      </g>
      {/* Cute sleeping fairy on four-leaf clover */}
      <g transform="translate(25, 20)">
        {/* Four leaf clover */}
        <circle cx="-8" cy="8" r="8" fill="#22C55E" />
        <circle cx="8" cy="8" r="8" fill="#22C55E" />
        <circle cx="0" cy="16" r="8" fill="#22C55E" />
        {/* Fairy body */}
        <ellipse cx="0" cy="0" rx="8" ry="12" fill="#F472B6" />
        <circle cx="0" cy="-10" r="7" fill="#FED7AA" />
        {/* Iridescent gossamer wings */}
        <ellipse cx="-12" cy="-12" rx="12" ry="6" fill="#BAE6FD" opacity="0.75" transform="rotate(-30 -12 -12)" />
        <ellipse cx="12" cy="-12" rx="12" ry="6" fill="#BAE6FD" opacity="0.75" transform="rotate(30 12 -12)" />
      </g>
    </g>

    {/* Object 6 (Bottom-Left): Ancient Druidic Standing Megalith Stone */}
    <g transform="translate(110, 490)">
      {/* Tall prehistoric rune stone */}
      <polygon points="-25,50 25,50 18,-60 -20,-50" fill="#475569" stroke="#1E293B" strokeWidth="3" />
      {/* Glowing neon green Celtic spiral rune */}
      <path d="M 0 -20 A 8 8 0 0 1 8 -12 A 12 12 0 0 1 -4 0 A 16 16 0 0 1 0 -20" stroke="#4ADE80" strokeWidth="3.5" fill="none" opacity="0.9" />
      {/* Overgrowing moss */}
      <path d="M -22 30 Q -10 20 -2 35 Q 15 25 24 35 L 25 50 L -25 50 Z" fill="#15803D" />
    </g>

    {/* Object 7 (Bottom-Center): Sprouting Amethyst Geodes & Floating Spellbook */}
    <g transform="translate(300, 480)">
      {/* Floating open spellbook with glowing magic runes */}
      <g transform="translate(0, -30) scale(0.85)">
        <path d="M -35 0 Q -15 -10 0 0 Q 15 -10 35 0 L 32 25 Q 15 15 0 25 Q -15 15 -32 25 Z" fill="#F8FAFC" stroke="#78350F" strokeWidth="2.5" />
        <path d="M -38 -2 Q -15 -12 0 -2 Q 15 -12 38 -2 L 35 27 Q 15 17 0 27 Q -15 17 -35 27 Z" fill="#831843" stroke="#500724" strokeWidth="2" />
        {/* Glowing gold magical glyphs floating out */}
        <circle cx="-12" cy="-15" r="3" fill="#FDE047" />
        <circle cx="15" cy="-20" r="4" fill="#FDE047" />
        <path d="M -5 -35 L 0 -45 L 5 -35 Z" fill="#FACC15" />
      </g>
      {/* Clusters of sharp violet amethyst crystal geodes */}
      <polygon points="-30,30 -22,-10 -15,30" fill="#9333EA" stroke="#581C87" strokeWidth="1.5" />
      <polygon points="-18,30 -10,-22 -2,30" fill="#A855F7" stroke="#6B21A8" strokeWidth="1.5" />
      <polygon points="-5,30 5,-15 12,30" fill="#C084FC" stroke="#7E22CE" strokeWidth="1.5" />
      <polygon points="8,30 18,-25 25,30" fill="#A855F7" stroke="#6B21A8" strokeWidth="1.5" />
      <polygon points="20,30 28,-8 35,30" fill="#9333EA" stroke="#581C87" strokeWidth="1.5" />
    </g>

    {/* Object 8 (Bottom-Right): Swarm of Golden Fireflies & Forest Hedgehog */}
    <g transform="translate(480, 500)">
      {/* Forest soil & clover */}
      <ellipse cx="0" cy="30" rx="80" ry="25" fill="#14532D" />
      {/* Cute little woodland hedgehog with red apple */}
      <g transform="translate(-20, 10)">
        {/* Spiky brown body */}
        <ellipse cx="0" cy="0" rx="22" ry="15" fill="#78350F" />
        {[0, 30, 60, 90, 120, 150].map((deg) => (
          <line key={deg} x1="0" y1="0" x2={Math.cos(deg*Math.PI/180)*26} y2={-Math.abs(Math.sin(deg*Math.PI/180)*22)} stroke="#451A03" strokeWidth="3" />
        ))}
        {/* Snout & eye */}
        <polygon points="-18,4 -32,2 -20,-4" fill="#FED7AA" stroke="#78350F" strokeWidth="1" />
        <circle cx="-32" cy="2" r="2.5" fill="#000" />
        <circle cx="-22" cy="-1" r="2" fill="#000" />
        {/* Little shiny red apple on back */}
        <circle cx="4" cy="-12" r="8" fill="#EF4444" />
        <line x1="4" y1="-20" x2="6" y2="-24" stroke="#78350F" strokeWidth="1.5" />
      </g>

      {/* Floating glowing golden fireflies with halo */}
      {[
        {x: 10, y: -40}, {x: 45, y: -20}, {x: -40, y: -60}, {x: 30, y: -80}
      ].map((f, i) => (
        <g key={i} transform={`translate(${f.x}, ${f.y})`}>
          <circle cx="0" cy="0" r="14" fill="#FACC15" opacity="0.3" filter="blur(3px)" />
          <circle cx="0" cy="0" r="5" fill="#FDE047" />
          <circle cx="0" cy="0" r="2" fill="#FFF" />
        </g>
      ))}
    </g>
  </g>
);


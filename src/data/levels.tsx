import React from 'react';
import { LevelDefinition } from '../types/game';

// Helper to render high-resolution architectural image with graceful gradient fallback
const renderHistoricImage = (
  imageUrl: string,
  key: string,
  gradFrom: string,
  gradTo: string
) => (width: number, height: number) => (
  <g>
    <defs>
      <linearGradient id={`bg-grad-${key}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={gradFrom} />
        <stop offset="100%" stopColor={gradTo} />
      </linearGradient>
    </defs>
    <rect width={width || 600} height={height || 600} fill={`url(#bg-grad-${key})`} />
    <image
      href={imageUrl}
      x="0"
      y="0"
      width={width || 600}
      height={height || 600}
      preserveAspectRatio="xMidYMid slice"
    />
  </g>
);

export const GAME_LEVELS: LevelDefinition[] = [
  // ==========================================
  // TIER 1: Tarihi Başkentler & İkonik Şehirler (Levels 1–5: 9–12 Parça)
  // ==========================================
  {
    id: 1,
    title: 'Venedik — Büyük Kanal',
    city: 'Venedik',
    country: 'İtalya',
    category: 'Tarihi Başkentler',
    rows: 3,
    cols: 3,
    description: 'Zümrüt yeşili sularda süzülen geleneksel gondollar ve tarihi Venedik Gotik sarayları.',
    imageUrl: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=900&q=85',
    renderIllustration: renderHistoricImage(
      'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=900&q=85',
      'venice',
      '#0F766E',
      '#1E293B'
    ),
  },
  {
    id: 2,
    title: 'Kapadokya — Sıcak Hava Balonları',
    city: 'Nevşehir',
    country: 'Türkiye',
    category: 'Tarihi Başkentler',
    rows: 3,
    cols: 3,
    description: 'Gündoğumunda tarihi peri bacaları ve kayadan oyma vadiler üzerinde yükselen rengarenk balonlar.',
    imageUrl: 'https://images.unsplash.com/photo-1609137144822-26f5e71ba213?auto=format&fit=crop&w=900&q=85',
    renderIllustration: renderHistoricImage(
      'https://images.unsplash.com/photo-1609137144822-26f5e71ba213?auto=format&fit=crop&w=900&q=85',
      'cappadocia',
      '#C2410C',
      '#78350F'
    ),
  },
  {
    id: 3,
    title: 'Paris — Eyfel Kulesi ve Seine',
    city: 'Paris',
    country: 'Fransa',
    category: 'Tarihi Başkentler',
    rows: 3,
    cols: 4,
    description: 'Seine Nehri kıyısında akşam ışıklarıyla parıldayan Eyfel Kulesi ve tarihi Haussmann taş mimarisi.',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=85',
    renderIllustration: renderHistoricImage(
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=85',
      'paris',
      '#1E1B4B',
      '#312E81'
    ),
  },
  {
    id: 4,
    title: 'Kyoto — Tarihi Pagoda ve Sonbahar',
    city: 'Kyoto',
    country: 'Japonya',
    category: 'Tarihi Başkentler',
    rows: 3,
    cols: 4,
    description: 'Kızıl Japon akçaağaçları ve taş fenerli Zen yoluyla çevrili beş katlı asırlık ahşap pagoda.',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=85',
    renderIllustration: renderHistoricImage(
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=85',
      'kyoto',
      '#991B1B',
      '#450A0A'
    ),
  },
  {
    id: 5,
    title: 'Roma — Kolezyum ve Antik Şehir',
    city: 'Roma',
    country: 'İtalya',
    category: 'Tarihi Başkentler',
    rows: 3,
    cols: 4,
    description: 'İmparatorluk döneminin efsanevi taş amfitiyatrosu, altın günbatımı ışığında antik Roma kemerleri.',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=85',
    renderIllustration: renderHistoricImage(
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=85',
      'rome',
      '#B45309',
      '#451A03'
    ),
  },

  // ==========================================
  // TIER 2: Akdeniz ve Ege İncileri (Levels 6–10: 16 Parça)
  // ==========================================
  {
    id: 6,
    title: 'Santorini — Oia ve Mavi Kümbetler',
    city: 'Santorini',
    country: 'Yunanistan',
    category: 'Akdeniz İncileri',
    rows: 4,
    cols: 4,
    description: 'Ege Denizi kalderasına bakan bembeyaz kireç evler, kobalt mavi kubbeler ve begonviller.',
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=85',
    renderIllustration: renderHistoricImage(
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=85',
      'santorini',
      '#0284C7',
      '#F8FAFC'
    ),
  },
  {
    id: 7,
    title: 'İstanbul — Boğaz ve Kız Kulesi',
    city: 'İstanbul',
    country: 'Türkiye',
    category: 'Akdeniz İncileri',
    rows: 4,
    cols: 4,
    description: 'Akşam kızıllığında Boğaziçi dalgaları, tarihi yarımadanın kubbe siluetleri ve Kız Kulesi.',
    imageUrl: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=85',
    renderIllustration: renderHistoricImage(
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=85',
      'istanbul',
      '#C2410C',
      '#0369A1'
    ),
  },
  {
    id: 8,
    title: 'Prag — Karl Köprüsü ve Eski Şehir',
    city: 'Prag',
    country: 'Çek Cumhuriyeti',
    category: 'Akdeniz İncileri',
    rows: 4,
    cols: 4,
    description: 'Vltava Nehri üzerinde barok heykellerle süslü taş köprü, Gotik kuleler ve masalsı kale manzarası.',
    imageUrl: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=900&q=85',
    renderIllustration: renderHistoricImage(
      'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=900&q=85',
      'prague',
      '#334155',
      '#B45309'
    ),
  },
  {
    id: 9,
    title: 'Barselona — Sagrada Família',
    city: 'Barselona',
    country: 'İspanya',
    category: 'Akdeniz İncileri',
    rows: 4,
    cols: 4,
    description: 'Antoni Gaudí’nin doğadan ilham alan görkemli taş kuleleri ve gökyüzüne uzanan organik mimari.',
    imageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=900&q=85',
    renderIllustration: renderHistoricImage(
      'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=900&q=85',
      'barcelona',
      '#78350F',
      '#1E293B'
    ),
  },
  {
    id: 10,
    title: 'Floransa — Duomo ve Floransa Çatıları',
    city: 'Floransa',
    country: 'İtalya',
    category: 'Akdeniz İncileri',
    rows: 4,
    cols: 4,
    description: 'Rönesans’ın doğduğu şehirde Brunelleschi kubbesi, terakota kiremitli çatılar ve Toskana tepeleri.',
    imageUrl: 'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=900&q=85',
    renderIllustration: renderHistoricImage(
      'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=900&q=85',
      'florence',
      '#EA580C',
      '#475569'
    ),
  },

  // ==========================================
  // TIER 3: Doğu & Asya Harikaları (Levels 11–15: 25 Parça - Level 10 Sonrası +1 Kat Zorluk)
  // ==========================================
  {
    id: 11,
    title: 'Tac Mahal — Beyaz Mermer Saray',
    city: 'Agra',
    country: 'Hindistan',
    category: 'Doğu Harikaları',
    rows: 5,
    cols: 5,
    description: 'Şafak vaktinde havuzdaki kusursuz yansımasıyla parıldayan beyaz mermer kubbeler ve minareler.',
    imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=85',
    renderIllustration: renderHistoricImage(
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=85',
      'tajmahal',
      '#F8FAFC',
      '#0E7490'
    ),
  },
  {
    id: 12,
    title: 'Petra — Gül Şehri Hazine Tapınağı',
    city: 'Petra',
    country: 'Ürdün',
    category: 'Doğu Harikaları',
    rows: 5,
    cols: 5,
    description: 'Kırmızı kanyon kayalıklarının kalbine oyulmuş 2000 yıllık görkemli El-Hazne tapınağı.',
    imageUrl: 'https://images.unsplash.com/photo-1579606032834-deaff9e3c79a?auto=format&fit=crop&w=900&q=85',
    renderIllustration: renderHistoricImage(
      'https://images.unsplash.com/photo-1579606032834-deaff9e3c79a?auto=format&fit=crop&w=900&q=85',
      'petra',
      '#BE123C',
      '#78350F'
    ),
  },
  {
    id: 13,
    title: 'Fuji Dağı ve Chureito Pagodası',
    city: 'Yamanashi',
    country: 'Japonya',
    category: 'Doğu Harikaları',
    rows: 5,
    cols: 5,
    description: 'Karlı Fuji Yanardağı zirvesi, baharda pembe sakura kiraz çiçekleri ve kırmızı pagoda kulesi.',
    imageUrl: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=900&q=85',
    renderIllustration: renderHistoricImage(
      'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=900&q=85',
      'fuji',
      '#DC2626',
      '#38BDF8'
    ),
  },
  {
    id: 14,
    title: 'Semerkant — Registan Meydanı',
    city: 'Semerkant',
    country: 'Özbekistan',
    category: 'Doğu Harikaları',
    rows: 5,
    cols: 5,
    description: 'Turkuaz çinili dev medreseler, yivli mavi kubbeler ve İpek Yolu’nun efsanevi İslam mimarisi.',
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85',
    renderIllustration: renderHistoricImage(
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85',
      'samarkand',
      '#0284C7',
      '#D97706'
    ),
  },
  {
    id: 15,
    title: 'Angkor Vat — Antik Orman Tapınağı',
    city: 'Siem Reap',
    country: 'Kamboçya',
    category: 'Doğu Harikaları',
    rows: 5,
    cols: 5,
    description: 'Lotus nilüfer göletine yansıyan devasa taş kuleler, asırlık banyan ağaçları ve Khmer tapınakları.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85',
    renderIllustration: renderHistoricImage(
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85',
      'angkor',
      '#D97706',
      '#15803D'
    ),
  },

  // ==========================================
  // TIER 4: Dünya Mirasları & Panoramalar (Levels 16–20: 36 Parça - Kesintisiz Tablo Manzaraları)
  // ==========================================
  {
    id: 16,
    title: 'Neuschwanstein Şatosu — Bavyera Alpleri',
    city: 'Bavyera',
    country: 'Almanya',
    category: 'Dünya Mirasları',
    rows: 6,
    cols: 6,
    description: 'Sisli Alp dağları ve çam ormanlarının yamacında bir masal tablosu gibi yükselen kuleler.',
    imageUrl: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=900&q=85',
    renderIllustration: renderHistoricImage(
      'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=900&q=85',
      'neuschwanstein',
      '#14532D',
      '#475569'
    ),
  },
  {
    id: 17,
    title: 'Mont Saint-Michel — Denizdeki Ada Manastır',
    city: 'Normandiya',
    country: 'Fransa',
    category: 'Dünya Mirasları',
    rows: 6,
    cols: 6,
    description: 'Okyanus gelgitleri arasında yükselen Gotik taş manastır, akşam suları ve gökyüzü yansımaları.',
    imageUrl: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=900&q=85',
    renderIllustration: renderHistoricImage(
      'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=900&q=85',
      'montsaintmichel',
      '#334155',
      '#CA8A04'
    ),
  },
  {
    id: 18,
    title: 'Giza Piramitleri — Çöl Günbatımı',
    city: 'Kahire',
    country: 'Mısır',
    category: 'Dünya Mirasları',
    rows: 6,
    cols: 6,
    description: 'Binlerce yıllık Keops Piramidi, batan çöl güneşinin altın kızıllığında devasa taş siluetler.',
    imageUrl: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=900&q=85',
    renderIllustration: renderHistoricImage(
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=900&q=85',
      'pyramids',
      '#EA580C',
      '#78350F'
    ),
  },
  {
    id: 19,
    title: 'Dubrovnik — Adriyatik Surları',
    city: 'Dubrovnik',
    country: 'Hırvatistan',
    category: 'Dünya Mirasları',
    rows: 6,
    cols: 6,
    description: 'Turkuaz Adriyatik suları kenarında yükselen asırlık taş surlar ve kızıl kiremitli tarihi şehir çatısı.',
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=85',
    renderIllustration: renderHistoricImage(
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=85',
      'dubrovnik',
      '#0284C7',
      '#EA580C'
    ),
  },
  {
    id: 20,
    title: 'Machu Picchu — İnka Gökyüzü Şehri',
    city: 'Cusco',
    country: 'Peru',
    category: 'Dünya Mirasları',
    rows: 6,
    cols: 6,
    description: 'And Dağları’nın sisli bulutları arasında yükselen Huayna Picchu zirvesi ve teraslı antik İnka kenti.',
    imageUrl: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=900&q=85',
    renderIllustration: renderHistoricImage(
      'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=900&q=85',
      'machupicchu',
      '#16A34A',
      '#1E293B'
    ),
  },
];

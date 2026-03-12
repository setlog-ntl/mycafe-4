export interface MenuItem {
  name: string;
  nameEn?: string;
  desc: string;
  descEn?: string;
  price: string;
  category: string;
  emoji: string;
  imageUrl?: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export interface BusinessHour {
  day: string;
  dayEn?: string;
  hours: string;
  hoursEn?: string;
  isHoliday?: boolean;
}

const DEMO_MENU: MenuItem[] = [
  {
    name: '아메리카노',
    nameEn: 'Americano',
    desc: '에티오피아 예가체프 싱글 오리진, 화사한 과일 산미',
    descEn: 'Ethiopia Yirgacheffe single origin, bright fruity acidity',
    price: '₩4,500',
    category: '커피',
    emoji: '☕',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=120&h=120&q=80&auto=format&fit=crop',
  },
  {
    name: '카페라떼',
    nameEn: 'Cafe Latte',
    desc: '스팀 밀크와 에스프레소의 완벽한 균형',
    descEn: 'Perfect balance of steamed milk and espresso',
    price: '₩5,000',
    category: '커피',
    emoji: '☕',
    imageUrl: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=120&h=120&q=80&auto=format&fit=crop',
  },
  {
    name: '바닐라라떼',
    nameEn: 'Vanilla Latte',
    desc: '마다가스카르 바닐라빈, 부드러운 단맛',
    descEn: 'Madagascar vanilla bean, smooth sweetness',
    price: '₩5,500',
    category: '커피',
    emoji: '☕',
  },
  {
    name: '콜드브루',
    nameEn: 'Cold Brew',
    desc: '18시간 저온 추출, 깔끔하고 깊은 풍미',
    descEn: '18-hour cold extraction, clean and deep flavor',
    price: '₩5,000',
    category: '커피',
    emoji: '☕',
    imageUrl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=120&h=120&q=80&auto=format&fit=crop',
    isPopular: true,
  },
  {
    name: '플랫화이트',
    nameEn: 'Flat White',
    desc: '리스트레토 더블샷 + 마이크로폼, 진한 커피 풍미',
    descEn: 'Ristretto double shot + microfoam, intense coffee flavour',
    price: '₩5,800',
    category: '커피',
    emoji: '☕',
    isPopular: true,
  },
  {
    name: '아인슈페너',
    nameEn: 'Einspänner',
    desc: '비엔나 스타일, 생크림 위에 에스프레소',
    descEn: 'Vienna style, espresso over whipped cream',
    price: '₩6,000',
    category: '커피',
    emoji: '☕',
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=120&h=120&q=80&auto=format&fit=crop',
    isNew: true,
  },
  {
    name: '말차라떼',
    nameEn: 'Matcha Latte',
    desc: '교토 우지 말차 1등급, 부드러운 밀크폼',
    descEn: 'Kyoto Uji matcha grade 1, smooth milk foam',
    price: '₩6,000',
    category: '논커피',
    emoji: '🍵',
    imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=120&h=120&q=80&auto=format&fit=crop',
  },
  {
    name: '얼그레이라떼',
    nameEn: 'Earl Grey Latte',
    desc: '베르가못 향 가득한 밀크티 라떼',
    descEn: 'Bergamot-infused milk tea latte',
    price: '₩5,500',
    category: '논커피',
    emoji: '🍵',
  },
  {
    name: '유자에이드',
    nameEn: 'Yuzu Ade',
    desc: '고흥 유자청, 상큼한 시트러스 에이드',
    descEn: 'Goheung yuzu marmalade, refreshing citrus ade',
    price: '₩5,500',
    category: '논커피',
    emoji: '🍵',
    isNew: true,
  },
  {
    name: '자몽에이드',
    nameEn: 'Grapefruit Ade',
    desc: '플로리다 자몽, 탄산과 함께 청량하게',
    descEn: 'Florida grapefruit, refreshing with sparkling water',
    price: '₩5,500',
    category: '논커피',
    emoji: '🍵',
  },
  {
    name: '당근케이크',
    nameEn: 'Carrot Cake',
    desc: '크림치즈 프로스팅, 촉촉한 당근 케이크 1조각',
    descEn: 'Cream cheese frosting, moist carrot cake slice',
    price: '₩6,500',
    category: '디저트',
    emoji: '🍰',
    imageUrl: 'https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=120&h=120&q=80&auto=format&fit=crop',
    isPopular: true,
  },
  {
    name: '크루아상',
    nameEn: 'Croissant',
    desc: '프랑스산 버터 100%, 바삭한 결이 살아있는',
    descEn: '100% French butter, flaky and crispy layers',
    price: '₩4,500',
    category: '디저트',
    emoji: '🍰',
    imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=120&h=120&q=80&auto=format&fit=crop',
  },
  {
    name: '티라미수',
    nameEn: 'Tiramisu',
    desc: '마스카포네 크림, 이탈리아 레시피 정통 티라미수',
    descEn: 'Mascarpone cream, authentic Italian recipe tiramisu',
    price: '₩7,000',
    category: '디저트',
    emoji: '🍰',
    isNew: true,
  },
  {
    name: '바스크치즈케이크',
    nameEn: 'Basque Cheesecake',
    desc: '겉바속촉, 진한 치즈의 풍미가 가득한',
    descEn: 'Crispy outside, creamy inside, rich cheese flavor',
    price: '₩7,500',
    category: '디저트',
    emoji: '🍰',
    imageUrl: 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=120&h=120&q=80&auto=format&fit=crop',
  },
  {
    name: '에티오피아 예가체프',
    nameEn: 'Ethiopia Yirgacheffe',
    desc: '워시드, 플로럴 & 시트러스 노트, 200g 원두',
    descEn: 'Washed, floral & citrus notes, 200g whole beans',
    price: '₩18,000',
    category: '원두',
    emoji: '🫘',
    imageUrl: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=120&h=120&q=80&auto=format&fit=crop',
    isPopular: true,
  },
  {
    name: '콜롬비아 수프레모',
    nameEn: 'Colombia Supremo',
    desc: '내추럴, 초콜릿 & 견과류 노트, 200g 원두',
    descEn: 'Natural, chocolate & nutty notes, 200g whole beans',
    price: '₩16,000',
    category: '원두',
    emoji: '🫘',
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=120&h=120&q=80&auto=format&fit=crop',
  }
];

const DEMO_HOURS: BusinessHour[] = [
  {
    day: '월요일',
    dayEn: 'Monday',
    hours: '정기휴무',
    isHoliday: true,
  },
  {
    day: '화요일',
    dayEn: 'Tuesday',
    hours: '09:00 - 22:00',
    hoursEn: '09:00 - 22:00',
  },
  {
    day: '수요일',
    dayEn: 'Wednesday',
    hours: '09:00 - 22:00',
    hoursEn: '09:00 - 22:00',
  },
  {
    day: '목요일',
    dayEn: 'Thursday',
    hours: '09:00 - 22:00',
    hoursEn: '09:00 - 22:00',
  },
  {
    day: '금요일',
    dayEn: 'Friday',
    hours: '09:00 - 22:00',
    hoursEn: '09:00 - 22:00',
  },
  {
    day: '토요일',
    dayEn: 'Saturday',
    hours: '09:00 - 22:00',
    hoursEn: '09:00 - 22:00',
  },
  {
    day: '일요일',
    dayEn: 'Sunday',
    hours: '09:00 - 22:00',
    hoursEn: '09:00 - 22:00',
  }
];

const _basePath = process.env.NEXT_PUBLIC_REPO_NAME ? `/${process.env.NEXT_PUBLIC_REPO_NAME}` : '';

function parseJSON<T>(raw: string | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || '온기 로스터리2',
  nameEn: process.env.NEXT_PUBLIC_SITE_NAME_EN || 'Ongi Roastery',
  description: process.env.NEXT_PUBLIC_DESCRIPTION || '매일 아침, 직접 로스팅한 한 잔의 커피',
  descriptionEn: process.env.NEXT_PUBLIC_DESCRIPTION_EN || 'A cup of freshly roasted coffee every morning',
  phone: process.env.NEXT_PUBLIC_PHONE || '02-338-1204',
  primaryColor: process.env.NEXT_PUBLIC_PRIMARY_COLOR || '#8b6914',
  address: process.env.NEXT_PUBLIC_ADDRESS || '서울 마포구 연남로 23길 8, 1층',
  addressEn: process.env.NEXT_PUBLIC_ADDRESS_EN || '1F, 8, Yeonnam-ro 23-gil, Mapo-gu, Seoul',
  kakaoMapId: process.env.NEXT_PUBLIC_KAKAO_MAP_ID || '',
  menuItems: parseJSON<MenuItem[]>(process.env.NEXT_PUBLIC_MENU_ITEMS, DEMO_MENU),
  businessHours: parseJSON<BusinessHour[]>(process.env.NEXT_PUBLIC_BUSINESS_HOURS, DEMO_HOURS),
  galleryImages: parseJSON<string[]>(process.env.NEXT_PUBLIC_GALLERY_IMAGES, [
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=600&h=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=600&h=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=600&h=600&q=80&auto=format&fit=crop'
]),
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
  naverBlogUrl: process.env.NEXT_PUBLIC_NAVER_BLOG_URL || '',
  kakaoChannelUrl: process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL || '',
  fontFamily: 'Nanum Myeongjo',
  designPreset: 'default',
  gaId: process.env.NEXT_PUBLIC_GA_ID || null,
};

export type SiteConfig = typeof siteConfig;

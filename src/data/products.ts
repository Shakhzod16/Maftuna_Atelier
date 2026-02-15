import catEvening from '@/assets/cat-evening.jpg';
import catBusiness from '@/assets/cat-business.jpg';
import catBridal from '@/assets/cat-bridal.jpg';
import catCasual from '@/assets/cat-casual.jpg';
import heroMain from '@/assets/hero-main.jpg';
import heroSecondary from '@/assets/hero-secondary.jpg';

export type Product = {
  id: number;
  name: Record<string, string>;
  price: number;
  category: string;
  img1: string;
  img2: string;
  date: string;
};

export const products: Product[] = [
  { id: 1, name: { en: 'Burgundy Tailored Blazer', ru: 'Бордовый пиджак', uz: 'Burgund bleyzeri', tr: 'Bordo Blazer', ko: '버건디 블레이저' }, price: 320, category: 'business', img1: heroMain, img2: catBusiness, date: '2025-12-01' },
  { id: 2, name: { en: 'Silk Evening Wrap Dress', ru: 'Шёлковое вечернее платье', uz: 'Ipak kechki ko\'ylak', tr: 'İpek Gece Elbisesi', ko: '실크 이브닝 드레스' }, price: 580, category: 'evening', img1: catEvening, img2: heroSecondary, date: '2025-11-15' },
  { id: 3, name: { en: 'Classic Bridal Gown', ru: 'Классическое свадебное платье', uz: 'Klassik to\'y ko\'ylagi', tr: 'Klasik Gelinlik', ko: '클래식 웨딩 드레스' }, price: 1200, category: 'bridal', img1: catBridal, img2: catEvening, date: '2025-10-20' },
  { id: 4, name: { en: 'Linen Day Ensemble', ru: 'Льняной дневной ансамбль', uz: 'Zig\'ir kundalik libos', tr: 'Keten Günlük Set', ko: '리넨 데이 앙상블' }, price: 210, category: 'casual', img1: catCasual, img2: heroMain, date: '2026-01-05' },
  { id: 5, name: { en: 'Power Suit Set', ru: 'Деловой костюм', uz: 'Biznes kostyum', tr: 'Güçlü Takım', ko: '파워 슈트 세트' }, price: 450, category: 'business', img1: catBusiness, img2: heroMain, date: '2026-01-20' },
  { id: 6, name: { en: 'Flowing Chiffon Gown', ru: 'Шифоновое платье', uz: 'Shifon ko\'ylak', tr: 'Şifon Elbise', ko: '시폰 가운' }, price: 680, category: 'evening', img1: heroSecondary, img2: catEvening, date: '2026-02-01' },
];

export const categoryKeys = ['all', 'evening', 'business', 'bridal', 'casual'] as const;

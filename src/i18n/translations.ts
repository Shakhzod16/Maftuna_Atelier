export type Language = 'en' | 'ru' | 'uz' | 'tr' | 'ko';

export const languageNames: Record<Language, string> = {
  en: 'EN',
  ru: 'РУ',
  uz: 'UZ',
  tr: 'TR',
  ko: '한',
};

type TranslationKeys = {
  nav: { home: string; products: string; marketplace: string; about: string; contact: string };
  hero: { badge: string; title: string; subtitle: string; cta: string; ctaSecondary: string };
  categories: { title: string; evening: string; eveningDesc: string; business: string; businessDesc: string; bridal: string; bridalDesc: string; casual: string; casualDesc: string; view: string };
  products: { title: string; search: string; all: string; sort: string; priceAsc: string; priceDesc: string; newest: string; viewDetails: string; quickView: string };
  marketplace: { title: string; subtitle: string; visit: string };
  about: { title: string; subtitle: string; description: string; cta: string; experience: string; customOrders: string; handmade: string };
  contact: { title: string; subtitle: string; name: string; email: string; message: string; send: string; phone: string; address: string; telegram: string; instagram: string; viewMap: string };
  footer: { tagline: string; rights: string };
};

export const translations: Record<Language, TranslationKeys> = {
  en: {
    nav: { home: 'Home', products: 'Collection', marketplace: 'Marketplace', about: 'About', contact: 'Contact' },
    hero: { badge: 'Atelier • Custom Orders', title: 'Elegance\nCrafted by Hand', subtitle: 'Bespoke women\'s tailoring with attention to every detail. From concept to creation.', cta: 'View Collection', ctaSecondary: 'Book Consultation' },
    categories: { title: 'Our Craft', evening: 'Evening Wear', eveningDesc: 'Sophisticated gowns for special occasions', business: 'Business Attire', businessDesc: 'Tailored suits and professional elegance', bridal: 'Bridal', bridalDesc: 'Custom wedding gowns made with love', casual: 'Casual Chic', casualDesc: 'Everyday elegance, effortlessly styled', view: 'View' },
    products: { title: 'Collection', search: 'Search collection...', all: 'All', sort: 'Sort', priceAsc: 'Price: Low to High', priceDesc: 'Price: High to Low', newest: 'Newest', viewDetails: 'View details', quickView: 'Quick view' },
    marketplace: { title: 'Find Us On', subtitle: 'Shop our collections across trusted platforms', visit: 'Visit' },
    about: { title: 'The Atelier', subtitle: 'Our Story', description: 'Maftuna Atelier is a women\'s tailoring studio specializing in bespoke garments. Each piece is handcrafted with premium fabrics, ensuring perfect fit and timeless style. We believe clothing should tell your story.', cta: 'Get in Touch', experience: '10+ Years Experience', customOrders: '500+ Custom Orders', handmade: '100% Handmade' },
    contact: { title: 'Get in Touch', subtitle: 'We\'d love to hear from you', name: 'Your name', email: 'Email address', message: 'Your message', send: 'Send Message', phone: 'Phone', address: 'Address', telegram: 'Telegram', instagram: 'Instagram', viewMap: 'View on Map' },
    footer: { tagline: 'Bespoke women\'s tailoring', rights: 'All rights reserved' },
  },
  ru: {
    nav: { home: 'Главная', products: 'Коллекция', marketplace: 'Маркетплейс', about: 'О нас', contact: 'Контакты' },
    hero: { badge: 'Ателье • Индивидуальные заказы', title: 'Элегантность\nРучной работы', subtitle: 'Индивидуальный пошив женской одежды с вниманием к каждой детали.', cta: 'Смотреть коллекцию', ctaSecondary: 'Записаться на консультацию' },
    categories: { title: 'Наше мастерство', evening: 'Вечерние наряды', eveningDesc: 'Изысканные платья для особых случаев', business: 'Деловая одежда', businessDesc: 'Костюмы и профессиональная элегантность', bridal: 'Свадебные', bridalDesc: 'Свадебные платья на заказ', casual: 'Повседневный шик', casualDesc: 'Элегантность на каждый день', view: 'Смотреть' },
    products: { title: 'Коллекция', search: 'Поиск по коллекции...', all: 'Все', sort: 'Сортировка', priceAsc: 'Цена: по возрастанию', priceDesc: 'Цена: по убыванию', newest: 'Новинки', viewDetails: 'Подробнее', quickView: 'Быстрый просмотр' },
    marketplace: { title: 'Мы на площадках', subtitle: 'Наши коллекции на проверенных платформах', visit: 'Перейти' },
    about: { title: 'Ателье', subtitle: 'Наша история', description: 'Maftuna Atelier — это студия женского пошива, специализирующаяся на одежде на заказ. Каждое изделие создаётся вручную из премиальных тканей.', cta: 'Связаться с нами', experience: '10+ лет опыта', customOrders: '500+ заказов', handmade: '100% ручная работа' },
    contact: { title: 'Свяжитесь с нами', subtitle: 'Мы будем рады вашему обращению', name: 'Ваше имя', email: 'Email', message: 'Сообщение', send: 'Отправить', phone: 'Телефон', address: 'Адрес', telegram: 'Телеграм', instagram: 'Инстаграм', viewMap: 'Показать на карте' },
    footer: { tagline: 'Индивидуальный женский пошив', rights: 'Все права защищены' },
  },
  uz: {
    nav: { home: 'Bosh sahifa', products: 'Kolleksiya', marketplace: 'Marketplace', about: 'Biz haqimizda', contact: 'Aloqa' },
    hero: { badge: 'Atelye • Buyurtma tikish', title: 'Nafislik\nQo\'lda yaratilgan', subtitle: 'Har bir detalga e\'tibor qaratilgan ayollar kiyimi tikish xizmati.', cta: 'Kolleksiyani ko\'rish', ctaSecondary: 'Konsultatsiya olish' },
    categories: { title: 'Bizning hunarimiz', evening: 'Kechki liboslar', eveningDesc: 'Maxsus kunlar uchun hashamatli ko\'ylaklar', business: 'Ishbilarmonlik kiyimi', businessDesc: 'Kostyumlar va professional nafislik', bridal: 'To\'y liboslari', bridalDesc: 'Buyurtma bo\'yicha to\'y ko\'ylaklar', casual: 'Kundalik shik', casualDesc: 'Har kungi nafislik', view: 'Ko\'rish' },
    products: { title: 'Kolleksiya', search: 'Kolleksiyadan qidirish...', all: 'Hammasi', sort: 'Saralash', priceAsc: 'Narx: pastdan yuqoriga', priceDesc: 'Narx: yuqoridan pastga', newest: 'Eng yangi', viewDetails: 'Batafsil', quickView: 'Tez ko\'rish' },
    marketplace: { title: 'Biz qayerdamiz', subtitle: 'Ishonchli platformalarda bizning kolleksiyalar', visit: 'O\'tish' },
    about: { title: 'Atelye', subtitle: 'Bizning hikoyamiz', description: 'Maftuna Atelier — buyurtma asosida ayollar kiyimi tikuvchi studiya. Har bir buyum qo\'lda premium matolardan tayyorlanadi.', cta: 'Bog\'lanish', experience: '10+ yil tajriba', customOrders: '500+ buyurtma', handmade: '100% qo\'l ishi' },
    contact: { title: 'Bog\'lanish', subtitle: 'Biz bilan bog\'laning', name: 'Ismingiz', email: 'Email', message: 'Xabaringiz', send: 'Yuborish', phone: 'Telefon', address: 'Manzil', telegram: 'Telegram', instagram: 'Instagram', viewMap: 'Xaritada ko\'rish' },
    footer: { tagline: 'Individual ayollar tikuvi', rights: 'Barcha huquqlar himoyalangan' },
  },
  tr: {
    nav: { home: 'Ana Sayfa', products: 'Koleksiyon', marketplace: 'Marketplace', about: 'Hakkımızda', contact: 'İletişim' },
    hero: { badge: 'Atölye • Özel Siparişler', title: 'Zarafet\nEl İşçiliği', subtitle: 'Her detaya özen gösteren ısmarlama kadın terziliği.', cta: 'Koleksiyonu Gör', ctaSecondary: 'Randevu Al' },
    categories: { title: 'Sanatımız', evening: 'Gece Kıyafetleri', eveningDesc: 'Özel günler için sofistike elbiseler', business: 'İş Kıyafetleri', businessDesc: 'Terzi dikimi takımlar', bridal: 'Gelinlik', bridalDesc: 'Özel tasarım gelinlikler', casual: 'Günlük Şıklık', casualDesc: 'Her gün için zarafet', view: 'İncele' },
    products: { title: 'Koleksiyon', search: 'Koleksiyonda ara...', all: 'Tümü', sort: 'Sırala', priceAsc: 'Fiyat: Artan', priceDesc: 'Fiyat: Azalan', newest: 'En Yeni', viewDetails: 'Detaylar', quickView: 'Hızlı bakış' },
    marketplace: { title: 'Bizi Bulun', subtitle: 'Güvenilir platformlarda koleksiyonlarımız', visit: 'Git' },
    about: { title: 'Atölye', subtitle: 'Hikayemiz', description: 'Maftuna Atelier, ısmarlama kadın giyim konusunda uzmanlaşmış bir terzi stüdyosudur. Her parça premium kumaşlarla el yapımıdır.', cta: 'İletişime Geç', experience: '10+ Yıl Deneyim', customOrders: '500+ Sipariş', handmade: '100% El Yapımı' },
    contact: { title: 'İletişim', subtitle: 'Sizden haber almak isteriz', name: 'Adınız', email: 'E-posta', message: 'Mesajınız', send: 'Gönder', phone: 'Telefon', address: 'Adres', telegram: 'Telegram', instagram: 'Instagram', viewMap: 'Haritada Gör' },
    footer: { tagline: 'Ismarlama kadın terziliği', rights: 'Tüm hakları saklıdır' },
  },
  ko: {
    nav: { home: '홈', products: '컬렉션', marketplace: '마켓플레이스', about: '소개', contact: '연락처' },
    hero: { badge: '아틀리에 • 맞춤 주문', title: '우아함을\n손으로 만들다', subtitle: '모든 디테일에 정성을 담은 여성 맞춤 의상.', cta: '컬렉션 보기', ctaSecondary: '상담 예약' },
    categories: { title: '우리의 기술', evening: '이브닝 웨어', eveningDesc: '특별한 날을 위한 세련된 드레스', business: '비즈니스 의상', businessDesc: '맞춤 정장과 전문적인 우아함', bridal: '웨딩', bridalDesc: '사랑으로 만든 맞춤 웨딩드레스', casual: '캐주얼 시크', casualDesc: '일상의 우아함', view: '보기' },
    products: { title: '컬렉션', search: '컬렉션 검색...', all: '전체', sort: '정렬', priceAsc: '가격: 낮은순', priceDesc: '가격: 높은순', newest: '최신', viewDetails: '자세히 보기', quickView: '빠른 보기' },
    marketplace: { title: '마켓플레이스', subtitle: '신뢰할 수 있는 플랫폼에서 만나보세요', visit: '방문' },
    about: { title: '아틀리에', subtitle: '우리의 이야기', description: 'Maftuna Atelier는 맞춤 여성 의상을 전문으로 하는 재봉 스튜디오입니다. 모든 작품은 프리미엄 원단으로 수제작됩니다.', cta: '연락하기', experience: '10년+ 경험', customOrders: '500+ 맞춤 주문', handmade: '100% 수제작' },
    contact: { title: '연락처', subtitle: '연락을 기다립니다', name: '이름', email: '이메일', message: '메시지', send: '보내기', phone: '전화', address: '주소', telegram: '텔레그램', instagram: '인스타그램', viewMap: '지도 보기' },
    footer: { tagline: '맞춤 여성 재봉', rights: '모든 권리 보유' },
  },
};

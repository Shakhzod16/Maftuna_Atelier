import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import heroMain from '@/assets/hero-main.jpg';
import heroSecondary from '@/assets/hero-secondary.jpg';
import heroDetail from '@/assets/hero-detail.jpg';
import catEvening from '@/assets/cat-evening.jpg';
import catBusiness from '@/assets/cat-business.jpg';
import catBridal from '@/assets/cat-bridal.jpg';
import catCasual from '@/assets/cat-casual.jpg';

const Index = () => {
  const { t } = useLanguage();

  const categories = [
    { img: catEvening, name: t.categories.evening, desc: t.categories.eveningDesc },
    { img: catBusiness, name: t.categories.business, desc: t.categories.businessDesc },
    { img: catBridal, name: t.categories.bridal, desc: t.categories.bridalDesc },
    { img: catCasual, name: t.categories.casual, desc: t.categories.casualDesc },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left text */}
          <div className="space-y-6 animate-fade-in">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-primary border border-primary rounded-full px-4 py-1.5">
              {t.hero.badge}
            </span>
            <h1 className="font-serif text-5xl lg:text-7xl font-light leading-[1.1] text-foreground whitespace-pre-line">
              {t.hero.title}
            </h1>
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground text-sm tracking-wide rounded hover:opacity-90 transition-opacity"
              >
                {t.hero.cta}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-foreground text-foreground text-sm tracking-wide rounded hover:bg-foreground hover:text-background transition-colors"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* Right image collage */}
          <div className="grid grid-cols-2 gap-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="row-span-2">
              <img src={heroMain} alt="Tailored suit" className="w-full h-full object-cover rounded border border-border" />
            </div>
            <div>
              <img src={heroSecondary} alt="Dress" className="w-full h-full object-cover rounded border border-border" />
            </div>
            <div>
              <img src={heroDetail} alt="Atelier details" className="w-full h-full object-cover rounded border border-border" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="border-t border-border" />
      </div>

      {/* Categories */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl lg:text-4xl font-light text-foreground mb-12">{t.categories.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <Link
              key={i}
              to="/products"
              className="group flex items-center gap-6 p-5 border border-border rounded hover:border-primary transition-all duration-300 hover:translate-x-1"
            >
              <img src={cat.img} alt={cat.name} className="w-20 h-20 object-cover rounded flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-xl text-foreground">{cat.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{cat.desc}</p>
              </div>
              <ArrowRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;

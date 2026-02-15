import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import aboutImg from '@/assets/about-atelier.jpg';

const About = () => {
  const { t } = useLanguage();

  const stats = [t.about.experience, t.about.customOrders, t.about.handmade];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left text */}
        <div className="space-y-8 animate-fade-in">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">{t.about.subtitle}</span>
            <h1 className="font-serif text-4xl lg:text-5xl font-light text-foreground mt-3">{t.about.title}</h1>
          </div>
          <div className="border border-border rounded p-6 lg:p-8">
            <p className="text-muted-foreground leading-relaxed">{t.about.description}</p>
          </div>
          <div className="flex flex-wrap gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-8 bg-primary rounded-full" />
                <span className="text-sm font-medium text-foreground">{stat}</span>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground text-sm tracking-wide rounded hover:opacity-90 transition-opacity"
          >
            {t.about.cta}
          </Link>
        </div>

        {/* Right video / image */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="aspect-[4/5] rounded border border-border overflow-hidden">
            <img src={aboutImg} alt="Atelier" className="w-full h-full object-cover" />
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center italic">Maftuna Atelier Studio</p>
        </div>
      </div>
    </div>
  );
};

export default About;

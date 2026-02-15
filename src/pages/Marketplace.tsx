import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const marketplaces = [
  { name: 'Uzum', url: 'https://uzum.uz', desc: 'Leading marketplace in Uzbekistan' },
  { name: 'Wildberries', url: 'https://wildberries.ru', desc: 'Fashion & lifestyle marketplace' },
  { name: 'Ozon', url: 'https://ozon.ru', desc: 'Multi-category online store' },
  { name: 'Kaspi', url: 'https://kaspi.kz', desc: 'Central Asian e-commerce' },
];

const Marketplace = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="font-serif text-4xl lg:text-5xl font-light text-foreground mb-3">{t.marketplace.title}</h1>
      <p className="text-muted-foreground mb-12 max-w-lg">{t.marketplace.subtitle}</p>

      <div className="max-w-2xl space-y-3">
        {marketplaces.map((mp) => (
          <a
            key={mp.name}
            href={mp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-6 p-5 border border-border rounded hover:border-primary transition-all duration-300"
          >
            <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center flex-shrink-0">
              <span className="font-serif text-lg font-semibold text-foreground">{mp.name[0]}</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-lg text-foreground">{mp.name}</h3>
              <p className="text-sm text-muted-foreground">{mp.desc}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0">
              <span className="hidden sm:inline">{t.marketplace.visit}</span>
              <ArrowRight size={16} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;

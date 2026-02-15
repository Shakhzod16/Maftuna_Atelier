import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-24">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-serif text-xl font-semibold text-foreground">Maftuna Atelier</h3>
          <p className="text-sm text-muted-foreground mt-1">{t.footer.tagline}</p>
          <p className="text-xs text-muted-foreground mt-4">© {year} Maftuna Atelier. {t.footer.rights}.</p>
        </div>
        <div className="flex flex-col md:items-end gap-3">
          <div className="flex gap-6 text-sm">
            <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.products}</Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.about}</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.contact}</Link>
          </div>
          <div className="flex gap-4 text-sm">
            <a href="https://t.me/maftuna_atelier" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Telegram</a>
            <a href="https://instagram.com/maftuna_atelier" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

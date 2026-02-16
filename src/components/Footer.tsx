import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Instagram } from 'lucide-react';
import { BUSINESS } from '@/data/business';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-atelier section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-4">
              Maftuna <span className="text-accent">Atelier</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t('footer.links')}</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t('nav.home')}</Link>
              <Link to="/products" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t('nav.products')}</Link>
              <Link to="/marketplace" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t('nav.marketplace')}</Link>
              <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t('nav.about')}</Link>
              <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t('nav.contact')}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t('footer.social')}</h4>
            <div className="flex items-center gap-4">
              <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href={BUSINESS.telegram} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
            </div>
            <p className="text-sm text-primary-foreground/70 mt-4">{BUSINESS.phone}</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Maftuna Atelier
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-fashion.jpg';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-background">
      {/* Floating accent shape */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-primary/5 blur-2xl animate-float pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="container-atelier px-6 lg:px-20 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">Maftuna Atelier</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:shadow-elegant-lg hover:scale-105"
              >
                {t('hero.cta_products')}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3.5 rounded-full border-2 border-accent text-accent font-medium text-sm transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-105"
              >
                {t('hero.cta_contact')}
              </Link>
            </div>
          </motion.div>

          {/* Right — image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Gold frame accent */}
              <div className="absolute -inset-3 rounded-3xl border-2 border-accent/30" />
              <div className="absolute -inset-6 rounded-3xl border border-accent/10" />
              <img
                src={heroImage}
                alt="Maftuna Atelier Fashion"
                className="w-full max-w-md rounded-2xl object-cover shadow-elegant-lg"
                style={{ aspectRatio: '3/4' }}
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

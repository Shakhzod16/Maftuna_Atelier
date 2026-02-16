import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sparkles, Scissors, Hand, Heart } from 'lucide-react';

const items = [
  { icon: Sparkles, key: 'national', descKey: 'national_desc' },
  { icon: Scissors, key: 'custom', descKey: 'custom_desc' },
  { icon: Hand, key: 'handmade', descKey: 'handmade_desc' },
  { icon: Heart, key: 'individual', descKey: 'individual_desc' },
];

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-card">
      <div className="container-atelier">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">{t('features.title')}</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-background hover:shadow-elegant transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="text-accent" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {t(`features.${item.key}`)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(`features.${item.descKey}`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

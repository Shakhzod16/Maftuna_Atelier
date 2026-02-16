import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Product } from '@/data/products';

// Import all product images
import national1 from '@/assets/products/1.1.jpeg';
import national2 from '@/assets/products/1.2.jpeg';
import modern1 from '@/assets/products/2.1.png';
import modern2 from '@/assets/products/2.2.png';
import custom1 from '@/assets/products/3.1.png';
import custom2 from '@/assets/products/3.2.jpeg';
import dress1 from '@/assets/products/4.1.jpeg';
import dress2 from '@/assets/products/4.2.png';

const imageMap: Record<string, string> = {
  '/products/national-1.jpg': national1,
  '/products/national-2.jpg': national2,
  '/products/modern-1.jpg': modern1,
  '/products/modern-2.jpg': modern2,
  '/products/custom-1.jpg': custom1,
  '/products/custom-2.jpg': custom2,
  '/products/dress-1.jpg': dress1,
  '/products/dress-2.jpg': dress2,
};

const categoryLabels: Record<string, string> = {
  national: 'Milliy',
  dresses: 'Ko\'ylak',
  modern: 'Zamonaviy',
  custom: 'Buyurtma',
};

interface Props {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: Props) => {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);

  const img1 = imageMap[product.images[0]] || product.images[0];
  const img2 = imageMap[product.images[1]] || product.images[1];

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('uz-UZ').format(price);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="card-elegant group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered((h) => !h)}
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-card/90 text-xs font-medium text-foreground backdrop-blur-sm">
          {categoryLabels[product.category]}
        </span>
        <img
          src={hovered ? img2 : img1}
          alt={product.nameKey}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{product.nameKey}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.descKey}</p>
        <div className="flex items-center justify-between">
          {product.price && (
            <span className="text-accent font-semibold text-sm">
              {formatPrice(product.price)} {t('products.price_label')}
            </span>
          )}
          <span className="text-primary text-sm font-medium cursor-pointer hover:underline">
            {t('products.detail')} →
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MARKET_LINKS } from '@/data/business';

// ✅ Logo importlari (Vite uchun eng to‘g‘ri yo‘l)
import uzumLogo from '@/assets/products/uzummarket.png';
import yandexLogo from '@/assets/products/yandexmarket.png';
import ozonLogo from '@/assets/products/ozon.png';
import wbLogo from '@/assets/products/wb.png';

type MarketItem = {
	key: 'uzum' | 'yandex' | 'ozon' | 'wildberries';
	name: string;
	logo: string;
	color: string;
	link: string;
};

const markets: MarketItem[] = [
	{
		key: 'uzum',
		name: 'Uzum',
		logo: uzumLogo,
		color: 'from-[hsl(280,60%,55%)] to-[hsl(280,60%,40%)]',
		link: MARKET_LINKS.uzum,
	},
	{
		key: 'yandex',
		name: 'Yandex Market',
		logo: yandexLogo,
		color: 'from-[hsl(45,90%,55%)] to-[hsl(30,90%,50%)]',
		link: MARKET_LINKS.yandex,
	},
	{
		key: 'ozon',
		name: 'Ozon',
		logo: ozonLogo,
		color: 'from-[hsl(210,80%,50%)] to-[hsl(210,80%,35%)]',
		link: MARKET_LINKS.ozon,
	},
	{
		key: 'wildberries',
		name: 'Wildberries',
		logo: wbLogo,
		color: 'from-[hsl(280,50%,45%)] to-[hsl(310,50%,40%)]',
		link: MARKET_LINKS.wildberries,
	},
];

const Marketplace = () => {
	const { t } = useTranslation();

	return (
		<section className='section-padding pt-28 bg-background min-h-screen'>
			<div className='container-atelier'>
				{/* Title */}
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='text-center mb-20'>
					<h1 className='font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4'>
						{t('marketplace.title')}
					</h1>
					<div className='gold-divider mb-4' />
					<p className='text-muted-foreground max-w-lg mx-auto'>{t('marketplace.subtitle')}</p>
				</motion.div>

				{/* Cards */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto'>
					{markets.map((m, i) => {
						const disabled = !m.link || m.link.trim() === '';

						return (
							<motion.a
								key={m.key}
								href={disabled ? undefined : m.link}
								target={disabled ? undefined : '_blank'}
								rel={disabled ? undefined : 'noopener noreferrer'}
								aria-disabled={disabled}
								title={disabled ? 'Link qo‘yilmagan' : `Open ${m.name}`}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								className={[
									'group relative overflow-hidden rounded-3xl p-[1px]',
									`bg-gradient-to-br ${m.color}`,
									disabled
										? 'opacity-60 pointer-events-none'
										: 'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
								].join(' ')}>
								{/* Inner Card */}
								<div className='relative bg-white/85 backdrop-blur-md rounded-3xl p-8 md:p-10 flex items-center justify-between shadow-elegant transition-all duration-300 group-hover:shadow-elegant-lg group-hover:scale-[1.02]'>
									{/* Left: Logo + Name */}
									<div className='flex items-center gap-6'>
										{/* ✅ Logo area (beautiful) */}
										<div className='relative'>
											{/* halo */}
											<div
												className={`absolute -inset-2 rounded-3xl bg-gradient-to-br ${m.color} opacity-20 blur-md transition-opacity duration-300 group-hover:opacity-35`}
											/>
											{/* ring */}
											<div className='relative w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white/55 backdrop-blur border border-white/60 shadow-sm flex items-center justify-center overflow-hidden'>
												<img
													src={m.logo}
													alt={`${m.name} logo`}
													className='w-[72%] h-[72%] object-contain transition-transform duration-300 group-hover:scale-110'
													loading='lazy'
													draggable={false}
												/>
											</div>
										</div>

										{/* Text */}
										<div>
											<h3 className='text-2xl font-heading font-semibold text-foreground'>{m.name}</h3>
											<p className='text-sm text-muted-foreground mt-1'>{t('marketplace.subtitle')}</p>
										</div>
									</div>

									{/* Right Arrow */}
									<div className='flex items-center gap-2 text-primary font-medium'>
										<span>{t('marketplace.visit')}</span>
										<ArrowRight size={18} className='transition-transform duration-300 group-hover:translate-x-1' />
									</div>
								</div>
							</motion.a>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Marketplace;

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sparkles, Scissors, Crown } from 'lucide-react';

// ✅ Rasmni assets dan oling (nomini o'zingizniki bilan almashtiring)
import aboutImage from '/src/assets/hero-fashion.jpg';

const About = () => {
	const { t } = useTranslation();

	const stats = [
		{ icon: Sparkles, label: t('about.experience'), value: t('about.experience_val') },
		{ icon: Scissors, label: t('about.custom_orders'), value: t('about.custom_orders_val') },
		{ icon: Crown, label: t('about.handmade_work'), value: t('about.handmade_work_val') },
	];

	return (
		<section className='section-padding pt-28 bg-background min-h-screen'>
			<div className='container-atelier'>
				{/* Title */}
				<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className='text-center mb-16'>
					<h1 className='font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4'>{t('about.title')}</h1>
					<div className='gold-divider' />
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
					{/* ✅ Left: Text + Stats */}
					<motion.div
						initial={{ opacity: 0, x: -18 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.55 }}
						className='order-2 lg:order-1'>
						<div className='relative rounded-3xl border border-border bg-card/80 backdrop-blur p-8 md:p-10 shadow-elegant overflow-hidden'>
							{/* subtle glow */}
							<div className='pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl' />
							<div className='pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl' />

							<p className='relative text-foreground leading-relaxed text-base md:text-lg'>{t('about.text')}</p>

							<div className='relative mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4'>
								{stats.map(s => (
									<div
										key={s.label}
										className='rounded-2xl bg-background/70 border border-border p-4 text-center hover:bg-background transition-colors'>
										<div className='mx-auto mb-2 h-10 w-10 rounded-2xl bg-accent/10 flex items-center justify-center'>
											<s.icon size={18} className='text-accent' />
										</div>
										<p className='text-accent font-heading text-2xl font-bold leading-none'>{s.value}</p>
										<p className='text-muted-foreground text-xs md:text-sm mt-2'>{s.label}</p>
									</div>
								))}
							</div>

							{/* small divider */}
							<div className='relative mt-8 h-px w-full bg-border' />

							<p className='relative mt-6 text-sm text-muted-foreground'>{t('about.note')}</p>
						</div>
					</motion.div>

					{/* ✅ Right: Image (portrait) */}
					<motion.div
						initial={{ opacity: 0, x: 18 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.55 }}
						className='order-1 lg:order-2 flex justify-center'>
						<div className='w-full max-w-sm'>
							{/* outer frame */}
							<div className='relative rounded-[2rem] p-[1px] bg-gradient-to-br from-accent/50 to-primary/30 shadow-elegant'>
								<div className='relative rounded-[2rem] overflow-hidden bg-secondary' style={{ aspectRatio: '9/16' }}>
									<img
										src={aboutImage}
										alt='About'
										className='w-full h-full object-cover'
										loading='lazy'
										draggable={false}
									/>

									{/* overlay */}
									<div className='absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0' />

									{/* tag */}
									<div className='absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-4 py-2 text-xs font-medium text-foreground border border-black/5'>
										<span className='h-2 w-2 rounded-full bg-accent' />
										{t('about.badge')}
									</div>

									{/* bottom caption */}
									<div className='absolute bottom-4 left-4 right-4'>
										<p className='text-white/95 font-heading text-lg font-semibold'>{t('about.imageTitle')}</p>
										<p className='text-white/75 text-sm mt-1'>{t('about.imageSubtitle')}</p>
									</div>
								</div>
							</div>

							{/* small hint */}
							<p className='text-center text-xs text-muted-foreground mt-4'>{t('about.photoNote')}</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;

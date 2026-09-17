import type { HeroSlider } from '$stylist/travel-commerce/type/object/hero-slider';
import { MEDIA_SLIDER_SLIDES } from '$stylist/animation/const/preset/media-slider';

/**
 * Generic default for TurtleHeroMorph's `slider` prop — used when no host
 * app supplies its own (e.g. this component's own story/sandbox preview).
 * The real site's data lives in the host app instead (for lankatour.ru:
 * `src/lib/landing/const/preset/hero-slider`), so it can rename/replace
 * these assets without touching the design system.
 */
export const HERO_SLIDER: HeroSlider = {
	photos: [
		{
			id: 'day',
			src: '/landing/slider/page/01.png',
			alt: 'Черепаха на пляже Шри-Ланки утром'
		},
		{
			id: 'dusk',
			src: '/landing/slider/page/01-1.png',
			alt: 'Пляж Шри-Ланки в сумерках'
		},
		{
			id: 'sunset',
			src: '/landing/slider/page/01-2.png',
			alt: 'Драматичный закат над океаном'
		}
	],
	turtleFrames: [
		'/landing/slider/scroll/logo-morph/02-turtle-01.png',
		'/landing/slider/scroll/logo-morph/02-turtle-02.png',
		'/landing/slider/scroll/logo-morph/02-turtle-03.png',
		'/landing/slider/scroll/logo-morph/02-turtle-04.png',
		'/landing/slider/scroll/logo-morph/02-turtle-05.png'
	],
	// The design system's own generic carousel demo slides (remote stock
	// imagery) — a real host app overrides `pages` with its own local photos
	// instead (for lankatour.ru: `src/lib/landing/const/preset/hero-slider`).
	pages: MEDIA_SLIDER_SLIDES.filter((slide) => slide.type !== 'hero' && slide.type !== 'form')
};

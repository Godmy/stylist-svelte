import type { TourAddon } from '$stylist/travel-commerce/type/object/tour-addon';
import type { TourGalleryImage } from '$stylist/travel-commerce/type/object/tour-gallery-image';
import type { TourRouteStop } from '$stylist/travel-commerce/type/object/tour-route-stop';
import type { CartLineItem } from '$stylist/travel-commerce/type/object/cart-line-item';
import type { CartSummary } from '$stylist/travel-commerce/type/object/cart-summary';
import type { ItineraryLeg } from '$stylist/travel-commerce/type/object/itinerary-leg';

export const SAMPLE_TOUR_GALLERY: TourGalleryImage[] = [
	{
		id: 'tea-view',
		src: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1400&q=80',
		alt: 'Tea mountains at sunrise',
		caption: 'Tea country viewpoints'
	},
	{
		id: 'coast-road',
		src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
		alt: 'Ocean road at sunrise',
		caption: 'Early coastal road'
	},
	{
		id: 'wildlife',
		src: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80',
		alt: 'Wildlife park landscape',
		caption: 'Wildlife stop'
	}
];

export const SAMPLE_TOUR_ROUTE_STOPS: TourRouteStop[] = [
	{
		id: 'pickup',
		title: 'Hotel pickup',
		description: 'Driver confirms the route and timing before the mountain road.',
		duration: '30 min'
	},
	{
		id: 'nine-arches',
		title: 'Nine Arches bridge',
		description: 'Slow viewpoint stop with enough time for photos and tea.',
		duration: '1 hour',
		imageSrc: SAMPLE_TOUR_GALLERY[0].src,
		imageAlt: SAMPLE_TOUR_GALLERY[0].alt,
		photoSpot: true
	},
	{
		id: 'waterfall',
		title: 'Waterfall pause',
		description: 'Cool air, short walk and a relaxed break before returning south.',
		duration: '45 min',
		photoSpot: true
	}
];

export const SAMPLE_TOUR_ADDONS: TourAddon[] = [
	{
		id: 'photo',
		label: 'Photo guide',
		description: 'Extra time and help at the best viewpoints.',
		price: '+$45'
	},
	{
		id: 'vip-transfer',
		label: 'VIP transfer',
		description: 'Larger vehicle, water and flexible pickup timing.',
		price: '+$80',
		selected: true
	},
	{
		id: 'drone',
		label: 'Drone clip',
		description: 'Short edited aerial video where local rules allow it.',
		price: '+$120'
	}
];

export const SAMPLE_CART_LINES: CartLineItem[] = [
	{
		id: 'ella',
		title: 'Ella and tea mountains',
		subtitle: 'Private tour',
		date: '2026-10-18',
		pickup: 'Galle hotel',
		travelers: '2 adults, 1 child',
		total: '$315',
		addons: ['VIP transfer'],
		imageSrc: SAMPLE_TOUR_GALLERY[0].src,
		imageAlt: SAMPLE_TOUR_GALLERY[0].alt
	},
	{
		id: 'mirissa',
		title: 'Whale morning',
		subtitle: 'Ocean experience',
		date: '2026-10-20',
		pickup: 'Mirissa',
		travelers: '2 adults',
		total: '$190',
		imageSrc: SAMPLE_TOUR_GALLERY[1].src,
		imageAlt: SAMPLE_TOUR_GALLERY[1].alt
	}
];

export const SAMPLE_CART_SUMMARY: CartSummary = {
	subtotal: '$505',
	discount: '-$15',
	total: '$490',
	prepayment: '$60',
	dueOnArrival: '$430'
};

export const SAMPLE_ITINERARY_LEGS: ItineraryLeg[] = [
	{
		id: 'airport-galle',
		eyebrow: 'Arrival',
		title: 'Airport to Galle',
		description: 'Meet-and-greet transfer with a coffee stop.',
		start: 'CMB airport',
		end: 'Galle Fort',
		duration: '2 h 30 min',
		price: '$95'
	},
	{
		id: 'galle-ella',
		eyebrow: 'Day trip',
		title: 'Galle to Ella loop',
		description: 'Tea fields, viewpoints and late return.',
		start: 'Galle',
		end: 'Galle',
		duration: '12 h',
		price: '$315',
		imageSrc: SAMPLE_TOUR_GALLERY[0].src,
		imageAlt: SAMPLE_TOUR_GALLERY[0].alt
	}
];

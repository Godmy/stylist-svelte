import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';

export const SAMPLE_EXCURSIONS: Excursion[] = [
	{
		id: 'ella-tea-mountains',
		title: 'Элла и чайные горы',
		slug: 'ella-tea-mountains',
		summary: 'Облака, водопады, поезд и зеленые плантации высокогорного Цейлона.',
		imageSrc: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1400&q=80',
		imageAlt: 'Чайные плантации в горах Шри-Ланки',
		duration: '12 часов',
		pickup: 'из Галле',
		priceFrom: 'от $145',
		categories: ['hills-mountains', 'plants-parks', 'popular'],
		tags: ['чай', 'водопады', 'поезд', 'горы'],
		featured: true
	},
	{
		id: 'mirissa-whales',
		title: 'В поисках китов',
		slug: 'mirissa-whales',
		summary: 'Ранний океан, мягкий свет и шанс увидеть самое большое животное планеты.',
		imageSrc: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
		imageAlt: 'Океан на рассвете',
		duration: '7 часов',
		pickup: 'из Мириссы',
		priceFrom: 'от $95',
		categories: ['ocean-fishing', 'wildlife'],
		tags: ['киты', 'океан', 'рассвет']
	},
	{
		id: 'yala-wildlife',
		title: 'Дикая Шри-Ланка',
		slug: 'yala-wildlife',
		summary: 'Сафари, слоны, птицы и заповедный юг острова.',
		imageSrc: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80',
		imageAlt: 'Слон в природном парке',
		duration: '10 часов',
		pickup: 'из Тангалле',
		priceFrom: 'от $130',
		categories: ['wildlife', 'extreme'],
		tags: ['слоны', 'сафари', 'птицы']
	},
	{
		id: 'galle-culture',
		title: 'Форт Галле и южное побережье',
		slug: 'galle-culture',
		summary: 'Колониальные улицы, маяк, закат и тихие пляжи рядом с городом.',
		imageSrc: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80',
		imageAlt: 'Побережье и маяк',
		duration: '5 часов',
		pickup: 'из Галле',
		priceFrom: 'от $70',
		categories: ['culture', 'ocean-fishing', 'popular'],
		tags: ['форт', 'маяк', 'закат']
	}
];

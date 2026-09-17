import type { AdminProduct } from '$stylist/travel-admin/type/object/admin-product';

export const SAMPLE_ADMIN_PRODUCTS: AdminProduct[] = [
	{
		id: 1,
		domain: 'tour',
		slug: 'sigiriya-dambulla',
		title: 'Сигирия и Дамбулла',
		summary: 'Скала-крепость и пещерные храмы за один день',
		heroImageId: null,
		gallery: [],
		badges: ['ТОП'],
		priceUnit: 'per_person',
		basePriceCents: 6_500_00,
		oldPriceCents: null,
		minAdvanceDays: 0,
		status: 'published',
		sortOrder: 1
	},
	{
		id: 2,
		domain: 'premium',
		slug: 'vip-chek-na-million',
		title: 'VIP: остров за миллион',
		summary: 'Вертолётная площадка, частный шеф, вилла с бассейном',
		heroImageId: null,
		gallery: [],
		badges: ['VIP'],
		priceUnit: 'per_tour',
		basePriceCents: 120_000_00,
		oldPriceCents: null,
		minAdvanceDays: 7,
		status: 'draft',
		sortOrder: 2
	},
	{
		id: 3,
		domain: 'club',
		slug: 'skydiving-mirissa',
		title: 'Прыжок с парашютом над Мириссой',
		summary: 'Тандем-прыжок, видео с камеры инструктора',
		heroImageId: null,
		gallery: [],
		badges: [],
		priceUnit: 'per_person',
		basePriceCents: 25_000_00,
		oldPriceCents: null,
		minAdvanceDays: 5,
		status: 'published',
		sortOrder: 3
	}
];

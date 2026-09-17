import type { AdminProductAddon } from '$stylist/travel-admin/type/object/admin-product-addon';

export const SAMPLE_ADMIN_ADDONS: AdminProductAddon[] = [
	{
		id: 1,
		productId: 1,
		domain: null,
		label: 'Фотограф на маршруте',
		descriptionHtml: '2 часа съёмки, 30+ обработанных фото',
		priceCents: 4_000_00,
		priceUnit: 'flat',
		sortOrder: 1
	},
	{
		id: 2,
		productId: 1,
		domain: null,
		label: 'Съёмка с коптера',
		descriptionHtml: 'Видео 4K, готовый ролик 1–2 минуты',
		priceCents: 6_000_00,
		priceUnit: 'flat',
		sortOrder: 2
	},
	{
		id: 3,
		productId: null,
		domain: 'wedding',
		label: 'VIP-трансфер',
		descriptionHtml: 'Автомобиль представительского класса',
		priceCents: 3_000_00,
		priceUnit: 'per_day',
		sortOrder: 1
	}
];

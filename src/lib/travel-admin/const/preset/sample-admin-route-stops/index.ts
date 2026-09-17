import type { AdminRouteStop } from '$stylist/travel-admin/type/object/admin-route-stop';

export const SAMPLE_ADMIN_ROUTE_STOPS: AdminRouteStop[] = [
	{
		id: 1,
		productId: 1,
		sortOrder: 1,
		title: 'Смотровая площадка Пидурангала',
		description: 'Панорама на скалу Сигирия, лучший свет на рассвете',
		photoSpot: true,
		durationMinutes: 45
	},
	{
		id: 2,
		productId: 1,
		sortOrder: 2,
		title: 'Пещерные храмы Дамбуллы',
		description: 'Золотой храм, статуи Будды',
		photoSpot: true,
		durationMinutes: 60
	},
	{
		id: 3,
		productId: 1,
		sortOrder: 3,
		title: 'Обед в местном ресторане',
		description: 'Шри-ланкийская кухня, рис и карри',
		photoSpot: false,
		durationMinutes: 40
	}
];

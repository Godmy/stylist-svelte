import type { AdminPickupPoint } from '$stylist/travel-admin/type/object/admin-pickup-point';

export const SAMPLE_ADMIN_PICKUP_POINTS: AdminPickupPoint[] = [
	{ id: 1, label: 'Галле', zone: 'south', surchargeCents: 0, sortOrder: 1 },
	{ id: 2, label: 'Унаватуна', zone: 'south', surchargeCents: 50_00, sortOrder: 2 },
	{ id: 3, label: 'Коломбо (аэропорт)', zone: 'west', surchargeCents: 150_00, sortOrder: 3 }
];

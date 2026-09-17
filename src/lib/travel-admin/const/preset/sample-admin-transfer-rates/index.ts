import type { AdminTransferRate } from '$stylist/travel-admin/type/object/admin-transfer-rate';

export const SAMPLE_ADMIN_TRANSFER_RATES: AdminTransferRate[] = [
	{ id: 1, fromPointId: 1, toPointId: 2, vehicleType: 'sedan', minPeople: 1, maxPeople: 3, priceCents: 20_00 },
	{ id: 2, fromPointId: 1, toPointId: 2, vehicleType: 'minivan', minPeople: 4, maxPeople: 8, priceCents: 35_00 },
	{ id: 3, fromPointId: 3, toPointId: 1, vehicleType: 'sedan', minPeople: 1, maxPeople: 3, priceCents: 180_00 },
	{ id: 4, fromPointId: 3, toPointId: 1, vehicleType: 'bus', minPeople: 9, maxPeople: 20, priceCents: 320_00 }
];

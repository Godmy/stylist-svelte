import type { AdminTransferRate } from '$stylist/travel-admin/type/object/admin-transfer-rate';
import type { AdminPickupPoint } from '$stylist/travel-admin/type/object/admin-pickup-point';

export interface RecipePricingMatrixEditor {
	rates: AdminTransferRate[];
	pickupPoints: AdminPickupPoint[];
	onChange: (rates: AdminTransferRate[]) => void;
	class?: string;
}

import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotWarrantyPeriod } from '$stylist/commerce/interface/slot/warranty-period';
import type { SlotWarrantyClaim } from '$stylist/commerce/interface/slot/warranty-claim';
import type { BehaviorWarrantyInfoEvents } from '$stylist/commerce/interface/behavior/warranty-info-events';

export interface RecipeWarrantyInfo
	extends ComputeIntersectAll<[SlotTheme]>,
		BehaviorWarrantyInfoEvents {
	productName: string;

	purchaseDate: Date;

	warrantyPeriod: SlotWarrantyPeriod;

	claims?: SlotWarrantyClaim[];

	serialNumber?: string;

	productId?: string;

	termsUrl?: string;

	locale?: string;

	showCoverageDetails?: boolean;

	showExclusions?: boolean;

	showClaimsHistory?: boolean;

	showFileDownload?: boolean;

	showClaimForm?: boolean;

	headerClass?: string;

	contentClass?: string;

	claimClass?: string;

	inputClass?: string;
}

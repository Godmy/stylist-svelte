import type { WarrantyPeriodType } from '$stylist/commerce/type/alias/warranty-period-type';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeWarrantyInfo
	extends ComputeIntersectAll<[SlotTheme]> {
	onClaimSubmit?: (claim: Omit<({
id: string;
	date: Date;
	status: 'pending' | 'approved' | 'rejected' | 'resolved';
	issue: string;
	description?: string;
	resolution?: string;
	claimNumber: string;
}), 'id' | 'date' | 'status'>) => void;
	onTermsClick?: () => void;
	onFileDownload?: () => void;

	productName: string;

	purchaseDate: Date;

	warrantyPeriod: ({
type: WarrantyPeriodType;
	duration: number;
	description?: string;
	coverage?: string[];
	exclusions?: string[];
});

	claims?: ({
id: string;
	date: Date;
	status: 'pending' | 'approved' | 'rejected' | 'resolved';
	issue: string;
	description?: string;
	resolution?: string;
	claimNumber: string;
})[];

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

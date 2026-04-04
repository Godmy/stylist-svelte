/**
 * WarrantyInfoContract — информация о гарантии.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export type WarrantyPeriodType = 'limited' | 'full' | 'extended';

export interface WarrantyPeriodContract {
	type: WarrantyPeriodType;
	duration: number;
	description?: string;
	coverage?: string[];
	exclusions?: string[];
}

export interface WarrantyClaimContract {
	id: string;
	date: Date;
	status: 'pending' | 'approved' | 'rejected' | 'resolved';
	issue: string;
	description?: string;
	resolution?: string;
	claimNumber: string;
}

export interface WarrantyInfoEventsContract {
	onClaimSubmit?: (claim: Omit<WarrantyClaimContract, 'id' | 'date' | 'status'>) => void;
	onTermsClick?: () => void;
	onFileDownload?: () => void;
}

export interface WarrantyInfoContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]>, WarrantyInfoEventsContract {
	/** Product name */
	productName: string;
	/** Purchase date */
	purchaseDate: Date;
	/** Warranty period */
	warrantyPeriod: WarrantyPeriodContract;
	/** List of claims */
	claims?: WarrantyClaimContract[];
	/** Serial number */
	serialNumber?: string;
	/** Product ID */
	productId?: string;
	/** Terms URL */
	termsUrl?: string;
	/** Locale for formatting */
	locale?: string;
	/** Show coverage details */
	showCoverageDetails?: boolean;
	/** Show exclusions */
	showExclusions?: boolean;
	/** Show claims history */
	showClaimsHistory?: boolean;
	/** Show file download */
	showFileDownload?: boolean;
	/** Show claim form */
	showClaimForm?: boolean;
	/** Additional CSS class for header */
	headerClass?: string;
	/** Additional CSS class for content */
	contentClass?: string;
	/** Additional CSS class for claim */
	claimClass?: string;
	/** Additional CSS class for input */
	inputClass?: string;
}

/**
 * WarrantyInfoContract вЂ” РёРЅС„РѕСЂРјР°С†РёСЏ Рѕ РіР°СЂР°РЅС‚РёРё.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotWarrantyPeriod } from '$stylist/commerce/interface/slot/warranty-period';
import type { SlotWarrantyClaim } from '$stylist/commerce/interface/slot/warranty-claim';
import type { BehaviorWarrantyInfoEvents } from '$stylist/commerce/interface/behavior/warranty-info-events';

export interface RecipeWarrantyInfo extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]>, BehaviorWarrantyInfoEvents {
	/** Product name */
	productName: string;
	/** Purchase date */
	purchaseDate: Date;
	/** Warranty period */
	warrantyPeriod: SlotWarrantyPeriod;
	/** List of claims */
	claims?: SlotWarrantyClaim[];
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

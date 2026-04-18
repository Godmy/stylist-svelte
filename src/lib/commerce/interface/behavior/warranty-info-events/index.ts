/**
 * WarrantyInfoContract вЂ” РёРЅС„РѕСЂРјР°С†РёСЏ Рѕ РіР°СЂР°РЅС‚РёРё.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotWarrantyClaim } from '$stylist/commerce/interface/slot/warranty-claim';

export interface BehaviorWarrantyInfoEvents {
	onClaimSubmit?: (claim: Omit<SlotWarrantyClaim, 'id' | 'date' | 'status'>) => void;
	onTermsClick?: () => void;
	onFileDownload?: () => void;
}

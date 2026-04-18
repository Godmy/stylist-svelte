/**
 * ProductTourContract вЂ” РёРЅС‚РµСЂР°РєС‚РёРІРЅС‹Р№ С‚СѓСЂ РїРѕ РїСЂРѕРґСѓРєС‚Сѓ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotProductTourStep } from '$stylist/commerce/interface/slot/product-tour-step';
import type { BehaviorProductTourEvents } from '$stylist/commerce/interface/behavior/product-tour-events';

export interface RecipeProductTour extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]>, BehaviorProductTourEvents {
	/** List of tour steps */
	steps: SlotProductTourStep[];
	/** Current step index */
	currentStep?: number;
	/** Show tour */
	showTour?: boolean;
}

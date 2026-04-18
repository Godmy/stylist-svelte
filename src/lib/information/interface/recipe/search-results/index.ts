/**
 * SearchResults вЂ” СЂРµР·СѓР»СЊС‚Р°С‚С‹ РїРѕРёСЃРєР°..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 *   ICaptionSlot        (information) вЂ” caption (Caption)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface SearchResultsRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{}


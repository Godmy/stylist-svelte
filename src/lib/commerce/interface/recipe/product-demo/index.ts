/**
 * ProductDemoContract вЂ” РґРµРјРѕ-Р±Р»РѕРє РїСЂРѕРґСѓРєС‚Р°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” title (Р·Р°РіРѕР»РѕРІРѕРє РґРµРјРѕ)
 *   ICaptionSlot      (information) вЂ” description (РѕРїРёСЃР°РЅРёРµ)
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { Snippet } from 'svelte';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeProductDemo extends StructIntersectAll<[ SlotLabel, SlotCaption, ThemeAttributes<HTMLDivElement> ]> {
	/** Demo content snippet */
	demoContent: Snippet;
	/** List of features */
	features?: string[];
	/** Demo callback */
	onDemo?: () => void;
}

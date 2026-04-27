/**
 * PropsEditor вЂ” СЂРµРґР°РєС‚РѕСЂ РїСЂРѕРїСЃРѕРІ..
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” label (Label)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { PropDefinition } from '$stylist/playground/type/struct/prop-definition';

export interface PropsEditorRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{
	propDefinitions?: PropDefinition[];
	propValues?: Record<string, unknown>;
	onPropChange?: (name: string, value: unknown) => void;
}


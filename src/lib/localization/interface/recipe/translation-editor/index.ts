import type { SlotTranslationEditor } from '$stylist/localization/interface/slot/translation-editor';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotExtendedTranslationEditor } from '$stylist/localization/interface/slot/extended-translation-editor';

export interface RecipeTranslationEditor
	extends ComputeIntersectAll<[SlotTranslationEditor, SlotExtendedTranslationEditor]> {
	class?: string;
}

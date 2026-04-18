import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotExtendedTranslationEditor as ExtendedTranslationEditorProps } from '$stylist/localization/interface/slot/extended-translation-editor';

export interface TranslationEditorStateProps extends StructIntersectAll<[ExtendedTranslationEditorProps]> {
	class?: string;
}

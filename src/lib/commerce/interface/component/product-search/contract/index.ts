/**
 * ProductSearchContract — поиск по товарам.
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — placeholder (подсказка в поле поиска)
 *   ThemeAttributes   (theme)       — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ProductSearchEventsContract {
	onSearch?: (query: string) => void;
	onSuggestionSelect?: (suggestion: string) => void;
}

export interface ProductSearchContract
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ThemeAttributes<HTMLDivElement>
	]>, ProductSearchEventsContract {
	/** Search suggestions */
	suggestions?: string[];
}

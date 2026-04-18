import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
export interface SearchBarStateProps extends StructIntersectAll<[]> {
	placeholder?: string;
	value?: string;
	disabled?: boolean;
	debounceMs?: number;
	class?: string;
	onValueInput?: (value: string) => void;
	onValueChange?: (value: string) => void;
	onSearch?: (value: string) => void;
	onClear?: () => void;
}

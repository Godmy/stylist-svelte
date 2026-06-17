import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenPropertyType } from '$stylist/development/type/enum/property-type';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export interface RecipeNodeProperty
	extends StructIntersectAll<[SlotTheme, Omit<HTMLAttributes<HTMLDivElement>, 'onchange'>]> {
	id?: string;
	name: string;
	type?: TokenPropertyType;
	value?: unknown;
	defaultValue?: unknown;
	size?: TokenSize;
	editable?: boolean;
	typeEditable?: boolean;
	options?: string[];
	min?: number;
	max?: number;
	step?: number;
	prefix?: string;
	suffix?: string;
	label?: string;
	description?: string;
	icon?: string | Snippet;
	error?: boolean;
	errorMessage?: string;
	placeholder?: string;
	onchange?: (name: string, value: unknown) => void;
}

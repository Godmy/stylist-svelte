import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenPropertyType } from '$stylist/architecture/type/alias/property-type';
import type { TokenSize } from '$stylist/layout/type/alias/size';

export interface RecipeNodeProperty
	extends ComputeIntersectAll<[SlotTheme, Omit<HTMLAttributes<HTMLDivElement>, 'onchange'>]> {
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

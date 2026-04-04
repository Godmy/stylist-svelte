/**
 * NodeProperty — свойство узла..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   ICaptionSlot        (information) — caption (Caption)
 *   IStatusSlot        (information) — status (Status)
 */
import type { Snippet } from 'svelte';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenPropertyType } from '$stylist/information/type/enum/property-type';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface NodePropertyState {
	error?: boolean;
	editable?: boolean;
}

export type NodePropertyRecipe = Omit<ThemeAttributes<HTMLDivElement>, 'onchange'> & {
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
};

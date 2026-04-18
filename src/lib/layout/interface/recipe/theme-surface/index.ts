import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ContractThemeContext } from '$stylist/theme/interface/contract/theme-context';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface ThemeSurfaceRecipe extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLElement>]> {
	class?: string;
	headerClass?: string;
	contentClass?: string;
	footerClass?: string;
	header?: Snippet<[ContractThemeContext | null]>;
	content: Snippet<[ContractThemeContext | null]>;
	footer?: Snippet<[ContractThemeContext | null]>;
}


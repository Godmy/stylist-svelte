import type { Snippet } from 'svelte';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { ThemeContextValue } from '$stylist/theme/interface/contract/theme-context';

export interface ThemeSurfaceRecipe extends ThemeAttributes<HTMLElement> {
	class?: string;
	headerClass?: string;
	contentClass?: string;
	footerClass?: string;
	header?: Snippet<[ThemeContextValue | null]>;
	content: Snippet<[ThemeContextValue | null]>;
	footer?: Snippet<[ThemeContextValue | null]>;
}

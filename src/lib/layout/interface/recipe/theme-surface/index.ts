import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeContext } from '$stylist/theme/interface/contract/theme-context';
import type { ProtoTheme } from '$stylist/theme/interface/proto/thema';

export interface ThemeSurfaceRecipe extends RecordArchitectureMerge<[ProtoTheme, HTMLAttributes<HTMLElement>]> {
	class?: string;
	headerClass?: string;
	contentClass?: string;
	footerClass?: string;
	header?: Snippet<[ThemeContext | null]>;
	content: Snippet<[ThemeContext | null]>;
	footer?: Snippet<[ThemeContext | null]>;
}

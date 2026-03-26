import type { HTMLAttributes } from 'svelte/elements';

export type ThemeVariant = 'default' | 'accent' | 'muted' | 'ghost' | 'outline';
export type ThemeTone = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

export interface ThemeAttributes<T extends HTMLElement = HTMLElement> extends HTMLAttributes<T> {
	'data-theme'?: string;
	'data-variant'?: ThemeVariant;
	'data-tone'?: ThemeTone;
	'data-state'?: string;
	'data-gradient'?: string;
}

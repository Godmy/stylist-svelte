import type { HTMLAttributes } from 'svelte/elements';
import type { THighContrastTheme } from '../../tokens/interaction/high-contrast';

export interface IHighContrastToggleProps extends HTMLAttributes<HTMLDivElement> {
	enabled?: boolean;
	onToggle?: (enabled: boolean) => void;
	theme?: THighContrastTheme;
	class?: string;
	buttonClass?: string;
}

export interface IHighContrastState {
	isHighContrast: boolean;
}

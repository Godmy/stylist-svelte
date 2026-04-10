import type { HTMLAttributes } from 'svelte/elements';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';

export type AccessibilityToolbarProps = {
	showFontSizeControls?: boolean;
	showScreenReaderTester?: boolean;
	showFocusIndicator?: boolean;
	showTokenAnimationToggle?: boolean;
	class?: string;
	toolbarClass?: string;
	buttonClass?: string;
	variant?: 'default' | 'minimal' | 'compact';
	size?: 'sm' | 'md' | 'lg';
} & ArchitectureHTMLAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>;

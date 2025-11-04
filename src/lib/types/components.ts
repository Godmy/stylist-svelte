/**
 * Common component types for stylist-svelte library
 */

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'ghost' | 'link';
export type Size = 'sm' | 'md' | 'lg' | 'xl';
export type Position = 'top' | 'bottom' | 'left' | 'right';
export type Orientation = 'horizontal' | 'vertical';

export interface BaseComponentProps {
	class?: string;
	'data-testid'?: string;
}

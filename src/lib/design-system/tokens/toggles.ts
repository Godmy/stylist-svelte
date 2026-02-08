/**
 * Toggle domain tokens.
 * Used by:
 * - interaction/controls/toggles/BaseToggle.ts
 */

export type TokenToggleSize = 'sm' | 'md' | 'lg';

export const TOKEN_TOGGLE_SIZE_CLASSES: Record<TokenToggleSize, string> = {
	sm: 'w-8 h-4',
	md: 'w-10 h-5',
	lg: 'w-12 h-6'
};

export const TOKEN_TOGGLE_HANDLE_SIZE_CLASSES: Record<TokenToggleSize, string> = {
	sm: 'h-3 w-3',
	md: 'h-4 w-4',
	lg: 'h-5 w-5'
};

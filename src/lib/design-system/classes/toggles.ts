/**
 * Toggle domain classes.
 * Used by:
 * - interaction/controls/toggles/BaseToggle.ts
 */

import type { CompactSize } from '../tokens/sizes';

export const TOKEN_TOGGLE_SIZE_CLASSES: Record<CompactSize, string> = {
	sm: 'w-8 h-4',
	md: 'w-10 h-5',
	lg: 'w-12 h-6'
};

export const TOKEN_TOGGLE_HANDLE_SIZE_CLASSES: Record<CompactSize, string> = {
	sm: 'h-3 w-3',
	md: 'h-4 w-4',
	lg: 'h-5 w-5'
};

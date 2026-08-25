import type { HTMLAttributes } from 'svelte/elements';
import type { TokenOrientation } from '$stylist/layout/type/alias/orientation';
export interface RecipeSeparator extends HTMLAttributes<HTMLHRElement> {
	class?: string;
	orientation?: TokenOrientation;
	decorative?: boolean;
}

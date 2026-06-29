import type { HTMLAttributes } from 'svelte/elements';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { TokenOrientation } from '$stylist/layout/type/alias/orientation';

export type DividerProps = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
	orientation?: TokenOrientation;
	align?: string;
	dashed?: boolean;
	label?: string;
};

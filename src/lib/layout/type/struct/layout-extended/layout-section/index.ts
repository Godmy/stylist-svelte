import type { Snippet } from 'svelte';
import type { TokenSize } from '$stylist/layout/type/alias/size';

export type LayoutSection = {
	id?: string;
	content: Snippet;
	size?: TokenSize | 'xl' | '2xl' | 'full';
	className?: string;
};

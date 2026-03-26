import type { Snippet } from 'svelte';
import type { TokenSize } from '$stylist/architecture/type/token/size';

export type LayoutSection = {
	id?: string;
	content: Snippet;
	size?: TokenSize | 'xl' | '2xl' | 'full';
	className?: string;
};

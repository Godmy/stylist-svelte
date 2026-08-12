import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { TokenSize } from '$stylist/theme/type/alias/size';
export interface ContainerProps extends LayoutHTMLAttributes<HTMLDivElement> {
	size?: TokenSize;
	class?: string;
	children?: Snippet;
	alignItems?: string;
	justifyContent?: string;
}

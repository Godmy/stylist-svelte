import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { AttributeAspectRatio } from '$stylist/layout/type/struct/aspect-ratio/attribute-aspect-ratio';

export type AspectRatioProps = AttributeAspectRatio &
	LayoutHTMLAttributes<HTMLDivElement> & {
		class?: string;
		children?: Snippet;
	};

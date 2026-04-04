import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { AttributeAspectRatio } from '$stylist/layout/type/struct/aspect-ratio';

export type AspectRatioProps = AttributeAspectRatio &
	ArchitectureHTMLAttributes<HTMLDivElement> & {
		class?: string;
		children?: Snippet;
	};



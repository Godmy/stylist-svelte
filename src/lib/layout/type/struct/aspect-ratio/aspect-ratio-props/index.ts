import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';
import type { AttributeAspectRatio } from '../attribute-aspect-ratio';

export type AspectRatioProps = AttributeAspectRatio &
	ArchitectureHTMLAttributes<HTMLDivElement> & {
		class?: string;
		children?: Snippet;
	};

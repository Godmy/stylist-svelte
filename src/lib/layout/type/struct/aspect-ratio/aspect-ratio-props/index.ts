import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';
import type { AttributeAspectRatio } from '../attribute-aspect-ratio';

export type AspectRatioProps = AttributeAspectRatio &
	ArchitectureHTMLAttributes<HTMLDivElement> & {
		class?: string;
		children?: Snippet;
	};

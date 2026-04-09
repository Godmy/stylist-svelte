import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';
import type { AttributeContainer } from '../attribute-container';

export type ContainerProps = AttributeContainer &
	ArchitectureHTMLAttributes<HTMLDivElement> & {
		class?: string;
		children?: Snippet;
		alignItems?: string;
		justifyContent?: string;
	};

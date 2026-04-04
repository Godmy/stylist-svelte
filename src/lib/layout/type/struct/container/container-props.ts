import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { AttributeContainer } from '$stylist/layout/type/struct/container';

export type ContainerProps = AttributeContainer &
	ArchitectureHTMLAttributes<HTMLDivElement> & {
		class?: string;
		children?: Snippet;
		alignItems?: string;
		justifyContent?: string;
	};



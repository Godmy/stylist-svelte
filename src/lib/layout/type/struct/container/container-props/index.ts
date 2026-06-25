import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { AttributeContainer } from '$stylist/layout/type/struct/container/attribute-container';

export type ContainerProps = AttributeContainer &
	LayoutHTMLAttributes<HTMLDivElement> & {
		class?: string;
		children?: Snippet;
		alignItems?: string;
		justifyContent?: string;
	};

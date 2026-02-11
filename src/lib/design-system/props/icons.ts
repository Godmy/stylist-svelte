import type { Snippet } from 'svelte';

import type { ComponentSize } from '../tokens/sizes';
import type { ColorVariant, DefaultVariants, NeutralVariant, SemanticVariant } from '../tokens/variants';
import type { CommonSize } from '../tokens/variants';
import type { ContentProp } from './common';

export interface IconChevronProps {
	isOpen?: boolean;
	size?: CommonSize;
	direction?: 'up' | 'down' | 'left' | 'right';
	variant?: SemanticVariant | NeutralVariant | 'dark' | 'light';
	disabled?: boolean;
	class?: string;
}

export interface IconCircleProps {
	variant?: SemanticVariant | NeutralVariant | 'dark' | 'light';
	size?: CommonSize;
	filled?: boolean;
	disabled?: boolean;
	class?: string;
	icon?: Snippet;
}

export interface IconWrapperProps extends ContentProp {
	size?: ComponentSize;
	variant?: DefaultVariants;
	shape?: 'circle' | 'square' | 'rounded';
	color?: ColorVariant;
	disabled?: boolean;
	class?: string;
}

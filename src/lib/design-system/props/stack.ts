import type { Snippet } from 'svelte';

import type { Justification, Orientation } from '../tokens/layout';
import type { StackAlign } from './common';

export interface StackProps {
	direction?: Orientation;
	spacing?: string | number;
	align?: StackAlign;
	justify?: Justification;
	class?: string;
	children?: Snippet;
}

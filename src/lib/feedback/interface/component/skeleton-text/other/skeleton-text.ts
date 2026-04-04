import type { Snippet } from 'svelte';
import type { ISkeletonProps } from '$stylist/feedback/interface/component/feedback/other';

export interface SkeletonTextProps extends ISkeletonProps {
	width?: string;
	content?: Snippet;
}

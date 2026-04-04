import type { Snippet } from 'svelte';
import type { ISkeletonProps } from '$stylist/feedback/interface/component/feedback/other';

export interface SkeletonRectangleProps extends ISkeletonProps {
	width?: number;
	height?: number;
	content?: Snippet;
}

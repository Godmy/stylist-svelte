import type { Snippet } from 'svelte';
import type { ISkeletonProps } from '$stylist/notification/interface/component/notification/other';

export interface SkeletonRectangleProps extends ISkeletonProps {
	width?: number;
	height?: number;
	content?: Snippet;
}

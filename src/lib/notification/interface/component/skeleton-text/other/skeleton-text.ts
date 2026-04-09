import type { Snippet } from 'svelte';
import type { ISkeletonProps } from '$stylist/notification/interface/component/notification/other';

export interface SkeletonTextProps extends ISkeletonProps {
	width?: string;
	content?: Snippet;
}

import type { Snippet } from 'svelte';
import type { ISkeletonProps } from '$stylist/feedback/interface/component/feedback/other';

export interface SkeletonCircleProps extends ISkeletonProps {
	size?: number;
	content?: Snippet;
}

import type { Snippet } from 'svelte';
import type { ISkeletonProps } from '$stylist/notification/interface/component/notification/other';

export interface SkeletonCircleProps extends ISkeletonProps {
	size?: number;
	content?: Snippet;
}

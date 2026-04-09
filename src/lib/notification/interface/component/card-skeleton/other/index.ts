import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface CardSkeletonProps extends InteractionHTMLAttributes<HTMLDivElement> {
	count?: number;
	showAvatar?: boolean;
	class?: string;
}

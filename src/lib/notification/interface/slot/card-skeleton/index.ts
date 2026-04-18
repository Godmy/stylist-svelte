import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotCardSkeleton extends InteractionHTMLAttributes<HTMLDivElement> {
	count?: number;
	showAvatar?: boolean;
	class?: string;
}

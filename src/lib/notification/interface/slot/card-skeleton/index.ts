import type { HTMLAttributes } from 'svelte/elements';

export interface SlotCardSkeleton extends HTMLAttributes<HTMLDivElement> {
	count?: number;
	showAvatar?: boolean;
	class?: string;
}

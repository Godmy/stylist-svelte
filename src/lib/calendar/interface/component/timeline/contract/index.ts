import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { CalendarHTMLAttributes } from '$stylist/calendar/type/struct/item';
import type { ChildrenHtmlAttributes } from '$stylist/calendar/type/struct/children';
import type { Snippet } from 'svelte';

export type TimelineStatus = 'completed' | 'current' | 'pending';

export interface TimelineItem {
	id: string;
	title: string;
	content?: Snippet;
	date?: string;
	status?: TimelineStatus;
	icon?: Snippet;
}

export interface TimelineContractBase {
	items: TimelineItem[];
	orientation?: 'vertical' | 'horizontal';
	class?: string;
	itemClass?: string;
	connectorClass?: string;
	iconClass?: string;
}

export type TimelineContract = RecordArchitectureMerge<
	[
		TimelineContractBase,
		CalendarHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement>
	]
>;

import type { StructWbdDiscussionNote } from '$stylist/wbd/type/struct/discussion-note';

export interface SlotDiscussionThread {
	notes: StructWbdDiscussionNote[];
	class?: string;
}

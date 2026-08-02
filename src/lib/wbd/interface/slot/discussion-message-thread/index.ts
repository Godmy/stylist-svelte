import type { StructWbdDiscussionMessage } from '$stylist/wbd/type/struct/discussion-message';

export interface SlotWbdDiscussionMessageThread {
	messages: StructWbdDiscussionMessage[];
	class?: string;
}

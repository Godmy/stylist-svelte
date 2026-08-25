import type { HTMLAttributes } from 'svelte/elements';
import type { SlotCommentThreadItem } from '$stylist/social/interface/slot/comment-thread-item';
export interface SlotCommentThread extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	comments: SlotCommentThreadItem[];
	currentUserId?: string;
	onCommentSubmit?: (content: string, parentId?: string) => void;
	onReplySubmit?: (content: string, parentId: string) => void;
	onEditSubmit?: (commentId: string, newContent: string) => void;
	onDelete?: (commentId: string) => void;
	showTitle?: boolean;
	showReply?: boolean;
	showLikes?: boolean;
	class?: string;
	headerClass?: string;
	commentClass?: string;
	replyClass?: string;
	inputClass?: string;
}

import type { HtmlAttributesBase } from '$stylist/information/interface/slot';
import type { SlotCommentUser } from '$stylist/social/interface/slot/comment-user';
import type { SlotCommentItem } from '$stylist/social/interface/slot/comment-item';

export interface SlotCommentSystem extends HtmlAttributesBase<HTMLDivElement> {
	comments: SlotCommentItem[];
	currentUser: SlotCommentUser;
	showReply?: boolean;
	showLikes?: boolean;
	showDislikes?: boolean;
	showEdit?: boolean;
	showDelete?: boolean;
	enableNestedReplies?: boolean;
	maxRepliesDepth?: number;
	maxRepliesToShow?: number;
	showLoadMore?: boolean;
	onCommentSubmit?: (content: string, parentId?: string) => void;
	onCommentLike?: (commentId: string, like: boolean) => void;
	onCommentEdit?: (commentId: string, newContent: string) => void;
	onCommentDelete?: (commentId: string) => void;
	onReplyToggle?: (commentId: string, show: boolean) => void;
	class?: string;
	commentClass?: string;
	formClass?: string;
	inputClass?: string;
	headerClass?: string;
	actionsClass?: string;
	buttonClass?: string;
	locale?: string;
	timezone?: string;
}

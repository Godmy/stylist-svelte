import type { HtmlAttributesBase } from '$stylist/information/interface/slot';
import type { SlotCommentUser } from '$stylist/social/interface/slot/comment-user';

export interface SlotCommentItem {
	id: string;
	author: SlotCommentUser;
	content: string;
	timestamp: Date;
	likes?: number;
	dislikes?: number;
	isLiked?: boolean;
	isDisliked?: boolean;
	isEdited?: boolean;
	replies?: SlotCommentItem[];
	parentId?: string;
}

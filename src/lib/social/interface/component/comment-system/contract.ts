import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface CommentSystemUser {
	id: string;
	name: string;
	avatar?: string;
	role?: string;
	isOnline?: boolean;
}

export interface CommentSystemItem {
	id: string;
	author: CommentSystemUser;
	content: string;
	timestamp: Date;
	likes?: number;
	dislikes?: number;
	isLiked?: boolean;
	isDisliked?: boolean;
	isEdited?: boolean;
	replies?: CommentSystemItem[];
	parentId?: string;
}

export type CommentSystemContract = RecordArchitectureMerge<
	[
		{
			comments: CommentSystemItem[];
			currentUser: CommentSystemUser;
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
			commentClass?: string;
			formClass?: string;
			inputClass?: string;
			headerClass?: string;
			actionsClass?: string;
			buttonClass?: string;
			locale?: string;
			timezone?: string;
		},
		InformationHTMLAttributes<HTMLDivElement>
	]
>;

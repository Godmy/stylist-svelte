import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface CommentThreadUser {
	id: string;
	name: string;
	avatar?: string;
	role?: string;
}

export interface CommentThreadItem {
	id: string;
	author: CommentThreadUser;
	content: string;
	timestamp: Date;
	replies?: CommentThreadItem[];
	likes?: number;
	liked?: boolean;
	isEdited?: boolean;
}

export type CommentThreadContract = RecordArchitectureMerge<
	[
		{
			title?: string;
			comments: CommentThreadItem[];
			currentUserId?: string;
			onCommentSubmit?: (content: string, parentId?: string) => void;
			onReplySubmit?: (content: string, parentId: string) => void;
			onEditSubmit?: (commentId: string, newContent: string) => void;
			onDelete?: (commentId: string) => void;
			showTitle?: boolean;
			showReply?: boolean;
			showLikes?: boolean;
			headerClass?: string;
			commentClass?: string;
			replyClass?: string;
			inputClass?: string;
		},
		InformationHTMLAttributes<HTMLDivElement>
	]
>;

import { commentThreadStartEditing } from '$stylist/social/function/script/comment-thread-start-editing';
import { commentThreadSubmitComment } from '$stylist/social/function/script/comment-thread';
import { commentThreadSubmitEdit } from '$stylist/social/function/script/comment-thread-submit-edit';
import { commentThreadSubmitReply } from '$stylist/social/function/script/comment-thread-submit-reply';
import type { SlotCommentThread } from '$stylist/social/interface/slot/comment-thread';

export function createCommentThreadState(props: SlotCommentThread) {
	let newComment = $state('');
	let editingCommentId = $state<string | null>(null);
	let editTexts = $state<Record<string, string>>({});
	let replyTexts = $state<Record<string, string>>({});

	return {
		get wrapperClass() { return `comment-thread ${props.class ?? ''}`.trim(); },
		get headerClass() { return `border-b border-[var(--color-border-primary)] p-4 ${props.headerClass ?? ''}`.trim(); },
		get commentClass() { return `p-4 ${props.commentClass ?? ''}`.trim(); },
		get replyClass() { return `ml-8 border-l border-[var(--color-border-primary)] ${props.replyClass ?? ''}`.trim(); },
		get composerInputClass() { return `w-full rounded-md border border-[var(--color-border-primary)] p-3 ${props.inputClass ?? ''}`.trim(); },
		get actionButtonClass() { return 'text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary-600)]'; },
		get newComment() { return newComment; },
		set newComment(value: string) { newComment = value; },
		get editingCommentId() { return editingCommentId; },
		set editingCommentId(value: string | null) { editingCommentId = value; },
		get editTexts() { return editTexts; },
		set editTexts(value: Record<string, string>) { editTexts = value; },
		get replyTexts() { return replyTexts; },
		set replyTexts(value: Record<string, string>) { replyTexts = value; },
		submitComment: () => commentThreadSubmitComment(newComment, props.onCommentSubmit, (value) => { newComment = value; }),
		submitReply: (commentId: string) => commentThreadSubmitReply(commentId, replyTexts, props.onReplySubmit, (value) => { replyTexts = value; }),
		submitEdit: (commentId: string) => commentThreadSubmitEdit(commentId, editTexts, props.onEditSubmit, (value) => { editingCommentId = value; }),
		startEditing: (commentId: string, content: string) => commentThreadStartEditing(commentId, content, (value) => { editingCommentId = value; }, (value) => { editTexts = value; }, editTexts)
	};
}

export default createCommentThreadState;

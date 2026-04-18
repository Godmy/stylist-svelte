import type { SlotCommentSystem } from '$stylist/social/interface/slot/comment-system';

export function createCommentSystemState(props: SlotCommentSystem) {
	let editCommentId = $state<string | null>(null);
	let editContent = $state('');
	let newComment = $state('');
	let replyContent = $state('');
	let showReplyForm = $state<Record<string, boolean>>({});

	function formatDate(value: Date): string {
		return new Intl.DateTimeFormat(props.locale, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value));
	}

	function toggleReplyForm(commentId: string): void {
		showReplyForm = { ...showReplyForm, [commentId]: !showReplyForm[commentId] };
		props.onReplyToggle?.(commentId, showReplyForm[commentId]);
	}

	function submitComment(): void {
		const content = newComment.trim();
		if (!content) return;
		props.onCommentSubmit?.(content);
		newComment = '';
	}

	function submitReply(commentId: string): void {
		const content = replyContent.trim();
		if (!content) return;
		props.onCommentSubmit?.(content, commentId);
		replyContent = '';
		showReplyForm = { ...showReplyForm, [commentId]: false };
	}

	return {
		get wrapperClass() { return `comment-system ${props.class ?? ''}`.trim(); },
		get cardClass() { return 'rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)]'; },
		get composerClass() { return `p-4 ${props.formClass ?? ''}`.trim(); },
		get controlInputClass() { return `w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-3 text-sm ${props.inputClass ?? ''}`.trim(); },
		get actionBarClass() { return `mt-2 flex items-center gap-3 text-sm text-[var(--color-text-secondary)] ${props.actionsClass ?? ''}`.trim(); },
		get primaryButtonClass() { return `rounded-md bg-[var(--color-primary-600)] px-4 py-2 text-sm font-medium text-[var(--color-text-inverse)] ${props.buttonClass ?? ''}`.trim(); },
		get countHeaderClass() { return `border-t border-[var(--color-border-primary)] px-4 py-3 text-sm font-medium ${props.headerClass ?? ''}`.trim(); },
		get currentUserId() { return props.currentUser?.id; },
		get editCommentId() { return editCommentId; },
		set editCommentId(value: string | null) { editCommentId = value; },
		get editContent() { return editContent; },
		set editContent(value: string) { editContent = value; },
		get newComment() { return newComment; },
		set newComment(value: string) { newComment = value; },
		get replyContent() { return replyContent; },
		set replyContent(value: string) { replyContent = value; },
		get showReplyForm() { return showReplyForm; },
		set showReplyForm(value: Record<string, boolean>) { showReplyForm = value; },
		formatDate,
		submitComment,
		submitReply,
		toggleReplyForm
	};
}

export default createCommentSystemState;

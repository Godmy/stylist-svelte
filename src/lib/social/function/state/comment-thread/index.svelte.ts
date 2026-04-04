import { CommentThreadStyleManager } from '$stylist/social/class/style-manager/comment-thread';
import type { CommentThreadProps, CommentThreadItem } from '$stylist/social/interface/component/comment-thread/other';

export interface CommentThreadStateProps extends CommentThreadProps {
	class?: string;
}

export function createCommentThreadState(props: CommentThreadStateProps) {
	// Props with defaults
	const title = $derived(props.title ?? 'Comments');
	const comments = $derived(props.comments ?? []);
	const currentUserId = $derived(props.currentUserId);
	const showTitle = $derived(props.showTitle ?? true);
	const showReply = $derived(props.showReply ?? true);
	const showLikes = $derived(props.showLikes ?? true);

	// State
	let newComment = $state('');
	let replyTexts: Record<string, string> = $state({});
	let editTexts: Record<string, string> = $state({});
	let editingCommentId: string | null = $state(null);

	// Classes
	const wrapperClass = $derived(CommentThreadStyleManager.getWrapperClass(props.class));
	const headerClass = $derived(CommentThreadStyleManager.getHeaderClass(props.headerClass));
	const commentClass = $derived(CommentThreadStyleManager.getCommentClass(props.commentClass ?? ''));
	const replyClass = $derived(CommentThreadStyleManager.getReplyClass(props.replyClass ?? ''));
	const composerInputClass = $derived(CommentThreadStyleManager.getComposerInputClass(props.inputClass ?? ''));

	// Methods
	function submitComment(): void {
		if (newComment.trim() && props.onCommentSubmit) {
			props.onCommentSubmit(newComment.trim());
			newComment = '';
		}
	}

	function submitReply(parentId: string): void {
		const content = replyTexts[parentId];
		if (content && props.onReplySubmit) {
			props.onReplySubmit(content, parentId);
			replyTexts[parentId] = '';
		}
	}

	function submitEdit(commentId: string): void {
		const content = editTexts[commentId];
		if (content && props.onEditSubmit) {
			props.onEditSubmit(commentId, content);
			editingCommentId = null;
		}
	}

	function startEditing(commentId: string, content: string): void {
		editingCommentId = commentId;
		editTexts[commentId] = content;
	}

	function handleKeyDown(e: KeyboardEvent, action: () => void): void {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			action();
		}
	}

	function formatDate(date: Date): string {
		return date.toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
	}

	// Rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			title: _title,
			comments: _comments,
			currentUserId: _currentUserId,
			onCommentSubmit: _onCommentSubmit,
			onReplySubmit: _onReplySubmit,
			onEditSubmit: _onEditSubmit,
			onDelete: _onDelete,
			showTitle: _showTitle,
			showReply: _showReply,
			showLikes: _showLikes,
			headerClass: _headerClass,
			commentClass: _commentClass,
			replyClass: _replyClass,
			inputClass: _inputClass,
			...rest
		} = props;
		return rest;
	});

	return {
		get title() {
			return title;
		},
		get comments() {
			return comments;
		},
		get currentUserId() {
			return currentUserId;
		},
		get showTitle() {
			return showTitle;
		},
		get showReply() {
			return showReply;
		},
		get showLikes() {
			return showLikes;
		},
		get newComment() {
			return newComment;
		},
		get replyTexts() {
			return replyTexts;
		},
		get editTexts() {
			return editTexts;
		},
		get editingCommentId() {
			return editingCommentId;
		},
		get wrapperClass() {
			return wrapperClass;
		},
		get headerClass() {
			return headerClass;
		},
		get commentClass() {
			return commentClass;
		},
		get replyClass() {
			return replyClass;
		},
		get composerInputClass() {
			return composerInputClass;
		},
		get restProps() {
			return restProps;
		},
		submitComment,
		submitReply,
		submitEdit,
		startEditing,
		handleKeyDown,
		formatDate
	};
}

export default createCommentThreadState;

import type { CommentSystemProps } from '$stylist/social/interface/component/comment-system/other';
import { CommentSystemStyleManager } from '$stylist/social/class/style-manager/comment-system';

export type CommentSystemState = ReturnType<typeof createCommentSystemState>;

export function createCommentSystemState(props: CommentSystemProps) {
  let newComment = $state('');
  let replyContent = $state('');
  let showReplyForm = $state<Record<string, boolean>>({});
  let editCommentId: string | null = $state(null);
  let editContent = $state('');

  const currentUserId = $derived((props.currentUser?.id ?? null) as string | null);
  const wrapperClass = $derived(CommentSystemStyleManager.getWrapperClass(props.class ?? ''));
  const cardClass = $derived(CommentSystemStyleManager.getCardClass());
  const composerClass = $derived(CommentSystemStyleManager.getComposerClass(props.formClass ?? ''));
  const controlInputClass = $derived(CommentSystemStyleManager.getInputClass(props.inputClass ?? ''));
  const countHeaderClass = $derived(CommentSystemStyleManager.getHeaderClass(props.headerClass ?? ''));
  const actionBarClass = $derived(CommentSystemStyleManager.getActionsClass(props.actionsClass ?? ''));
  const primaryButtonClass = $derived(CommentSystemStyleManager.getPrimaryButtonClass(props.buttonClass ?? ''));

  const submitComment = (parentId?: string) => {
    if (!newComment.trim()) return;
    props.onCommentSubmit?.(newComment, parentId);
    newComment = '';
  };

  const submitReply = (commentId: string) => {
    if (!replyContent.trim()) return;
    props.onCommentSubmit?.(replyContent, commentId);
    replyContent = '';
    showReplyForm = { ...showReplyForm, [commentId]: false };
  };

  const toggleReplyForm = (commentId: string) => {
    const nextState = !showReplyForm[commentId];
    showReplyForm = { ...showReplyForm, [commentId]: nextState };
    props.onReplyToggle?.(commentId, nextState);
  };

  const formatDate = (date: Date): string => {
    return new Date(date).toLocaleDateString(props.locale ?? 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return {
    newComment,
    replyContent,
    showReplyForm,
    editCommentId,
    editContent,
    currentUserId,
    wrapperClass,
    cardClass,
    composerClass,
    controlInputClass,
    countHeaderClass,
    actionBarClass,
    primaryButtonClass,
    submitComment,
    submitReply,
    toggleReplyForm,
    formatDate,
  };
}

export default createCommentSystemState;

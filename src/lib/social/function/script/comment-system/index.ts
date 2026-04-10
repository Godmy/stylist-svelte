export function commentSystemSubmitComment(
  newComment: string,
  onCommentSubmit?: (content: string, parentId?: string) => void,
  parentId?: string
) {
  if (!newComment.trim()) return;
  onCommentSubmit?.(newComment, parentId);
}

export function commentSystemSubmitReply(
  replyContent: string,
  commentId: string,
  onCommentSubmit?: (content: string, parentId: string) => void,
  setShowReplyForm?: (forms: Record<string, boolean>) => void,
  showReplyForm?: Record<string, boolean>
) {
  if (!replyContent.trim()) return;
  onCommentSubmit?.(replyContent, commentId);
  setShowReplyForm?.({ ...(showReplyForm ?? {}), [commentId]: false });
}

export function commentSystemToggleReplyForm(
  commentId: string,
  showReplyForm: Record<string, boolean>,
  onReplyToggle?: (commentId: string, nextState: boolean) => void,
  setShowReplyForm?: (forms: Record<string, boolean>) => void
) {
  const nextState = !showReplyForm[commentId];
  setShowReplyForm?.({ ...showReplyForm, [commentId]: nextState });
  onReplyToggle?.(commentId, nextState);
}

export function commentSystemFormatDate(date: Date, locale: string = 'en-US'): string {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

export default commentSystemSubmitComment;

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

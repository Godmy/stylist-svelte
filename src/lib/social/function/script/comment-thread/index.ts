export function commentThreadSubmitComment(
  newComment: string,
  onCommentSubmit?: (content: string) => void,
  setNewComment?: (v: string) => void
) {
  if (newComment.trim() && onCommentSubmit) {
    onCommentSubmit(newComment.trim());
    setNewComment?.('');
  }
}

export function commentThreadSubmitReply(
  parentId: string,
  replyTexts: Record<string, string>,
  onReplySubmit?: (content: string, parentId: string) => void,
  setReplyTexts?: (v: Record<string, string>) => void
) {
  const content = replyTexts[parentId];
  if (content && onReplySubmit) {
    onReplySubmit(content, parentId);
    setReplyTexts?.({ ...replyTexts, [parentId]: '' });
  }
}

export function commentThreadSubmitEdit(
  commentId: string,
  editTexts: Record<string, string>,
  onEditSubmit?: (id: string, content: string) => void,
  setEditingCommentId?: (v: string | null) => void
) {
  const content = editTexts[commentId];
  if (content && onEditSubmit) {
    onEditSubmit(commentId, content);
    setEditingCommentId?.(null);
  }
}

export function commentThreadStartEditing(
  commentId: string,
  content: string,
  setEditingCommentId: (v: string | null) => void,
  setEditTexts: (v: Record<string, string>) => void,
  editTexts: Record<string, string>
) {
  setEditingCommentId(commentId);
  setEditTexts({ ...editTexts, [commentId]: content });
}

export function commentThreadHandleKeyDown(e: KeyboardEvent, action: () => void) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    action();
  }
}

export function commentThreadFormatDate(date: Date, locale?: string) {
  return date.toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

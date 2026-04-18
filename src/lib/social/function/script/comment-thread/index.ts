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

export function commentSystemSubmitComment(
  newComment: string,
  onCommentSubmit?: (content: string, parentId?: string) => void,
  parentId?: string
) {
  if (!newComment.trim()) return;
  onCommentSubmit?.(newComment, parentId);
}

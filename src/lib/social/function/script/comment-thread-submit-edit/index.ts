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

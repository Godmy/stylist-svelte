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

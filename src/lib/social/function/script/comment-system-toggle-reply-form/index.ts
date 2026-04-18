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

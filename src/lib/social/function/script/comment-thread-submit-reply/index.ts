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

import type { CommentThreadProps } from '$stylist/social/interface/component/comment-thread/other';
import { CommentThreadStyleManager } from '$stylist/social/class/style-manager/comment-thread';

export type CommentThreadState = ReturnType<typeof createCommentThreadState>;

export function createCommentThreadState(props: CommentThreadProps) {
  let newComment = $state('');
  let replyTexts: Record<string, string> = $state({});
  let editTexts: Record<string, string> = $state({});
  let editingCommentId: string | null = $state(null);

  const wrapperClass = $derived(CommentThreadStyleManager.getWrapperClass(props.class ?? ''));
  const headerClass = $derived(CommentThreadStyleManager.getHeaderClass(props.headerClass ?? ''));
  const composerInputClass = $derived(CommentThreadStyleManager.getComposerInputClass(props.inputClass ?? ''));
  const actionButtonClass = $derived(CommentThreadStyleManager.getActionButtonClass());
  const commentClass = $derived(CommentThreadStyleManager.getCommentClass(props.commentClass ?? ''));
  const replyClass = $derived(CommentThreadStyleManager.getReplyClass(props.replyClass ?? ''));

  const startEditing = (commentId: string, content: string) => {
    editingCommentId = commentId;
    editTexts = { ...editTexts, [commentId]: content };
  };

  const submitEdit = (commentId: string) => {
    props.onEditSubmit?.(commentId, editTexts[commentId]);
    editingCommentId = null;
  };

  const submitComment = () => {
    if (!newComment.trim()) return;
    props.onCommentSubmit?.(newComment);
    newComment = '';
  };

  const submitReply = (commentId: string) => {
    if (!replyTexts[commentId]?.trim()) return;
    props.onReplySubmit?.(commentId, replyTexts[commentId]);
    const updated = { ...replyTexts };
    updated[commentId] = '';
    replyTexts = updated;
  };

  return {
    newComment,
    replyTexts,
    editTexts,
    editingCommentId,
    wrapperClass,
    headerClass,
    composerInputClass,
    actionButtonClass,
    commentClass,
    replyClass,
    startEditing,
    submitEdit,
    submitComment,
    submitReply,
  };
}

export default createCommentThreadState;

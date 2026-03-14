import type { HtmlAttributesBase } from './common';

import type { CommentThreadItem } from '../../types/information/comment-thread';
export interface CommentThreadProps extends HtmlAttributesBase<HTMLDivElement> {
  title?: string;
  comments: CommentThreadItem[];
  currentUserId?: string;
  onCommentSubmit?: (content: string, parentId?: string) => void;
  onReplySubmit?: (content: string, parentId: string) => void;
  onEditSubmit?: (commentId: string, newContent: string) => void;
  onDelete?: (commentId: string) => void;
  showTitle?: boolean;
  showReply?: boolean;
  showLikes?: boolean;
  class?: string;
  headerClass?: string;
  commentClass?: string;
  replyClass?: string;
  inputClass?: string;
}




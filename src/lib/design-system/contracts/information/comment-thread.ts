import type { HtmlAttributesBase } from './common';

export type CommentThreadUser = {
  id: string;
  name: string;
  avatar?: string;
  role?: string;
};

export type CommentThreadItem = {
  id: string;
  author: CommentThreadUser;
  content: string;
  timestamp: Date;
  replies?: CommentThreadItem[];
  likes?: number;
  liked?: boolean;
  isEdited?: boolean;
};

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

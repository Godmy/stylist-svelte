import type { HtmlAttributesBase } from './common';

export type CommentUser = {
  id: string;
  name: string;
  avatar?: string;
  role?: string;
  isOnline?: boolean;
};

export type CommentItem = {
  id: string;
  author: CommentUser;
  content: string;
  timestamp: Date;
  likes?: number;
  dislikes?: number;
  isLiked?: boolean;
  isDisliked?: boolean;
  isEdited?: boolean;
  replies?: CommentItem[];
  parentId?: string;
};

export interface CommentSystemProps extends HtmlAttributesBase<HTMLDivElement> {
  comments: CommentItem[];
  currentUser: CommentUser;
  showReply?: boolean;
  showLikes?: boolean;
  showDislikes?: boolean;
  showEdit?: boolean;
  showDelete?: boolean;
  enableNestedReplies?: boolean;
  maxRepliesDepth?: number;
  maxRepliesToShow?: number;
  showLoadMore?: boolean;
  onCommentSubmit?: (content: string, parentId?: string) => void;
  onCommentLike?: (commentId: string, like: boolean) => void;
  onCommentEdit?: (commentId: string, newContent: string) => void;
  onCommentDelete?: (commentId: string) => void;
  onReplyToggle?: (commentId: string, show: boolean) => void;
  class?: string;
  commentClass?: string;
  formClass?: string;
  inputClass?: string;
  headerClass?: string;
  actionsClass?: string;
  buttonClass?: string;
  locale?: string;
  timezone?: string;
}

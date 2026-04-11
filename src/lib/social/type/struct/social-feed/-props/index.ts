import type { FeedUser } from '../feeduser';
import type { FilterOption } from '../filteroption';
import type { Post } from '../post';
import type { RestProps } from '../rest-props';

export type Props = RestProps & {
  posts: Post[];
  currentUser?: FeedUser;
  showFilters?: boolean;
  showSearch?: boolean;
  showCreatePost?: boolean;
  filters?: FilterOption[];
  showLoadMore?: boolean;
  onPostLike?: (postId: string) => void;
  onPostComment?: (postId: string) => void;
  onPostShare?: (postId: string) => void;
  onPostBookmark?: (postId: string) => void;
  onCreatePost?: () => void;
  onLoadMore?: () => void;
  class?: string;
  headerClass?: string;
  feedItemClass?: string;
  footerClass?: string;
};

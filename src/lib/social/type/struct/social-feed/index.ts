import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type Post = {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  date?: string;
  excerpt?: string;
  author: string;
  tags?: string[];
  content: string;
  authorAvatar?: string;
  authorIsVerified?: boolean;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  isBookmarked: boolean;
};

export type FilterOption = {
  id: string;
  label: string;
  active: boolean;
};

export type FeedUser = {
  id: string;
  name: string;
  avatar?: string;
};

export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

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

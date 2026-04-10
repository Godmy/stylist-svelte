import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type SOCIAL_FEED_POST = {
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

export type SOCIAL_FEED_FILTER_OPTION = {
  id: string;
  label: string;
  active: boolean;
};

export type SOCIAL_FEED_USER = {
  id: string;
  name: string;
  avatar?: string;
};

export type SOCIAL_FEED_REST_PROPS = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

export type SOCIAL_FEED_PROPS = SOCIAL_FEED_REST_PROPS & {
  posts: SOCIAL_FEED_POST[];
  currentUser?: SOCIAL_FEED_USER;
  showFilters?: boolean;
  showSearch?: boolean;
  showCreatePost?: boolean;
  filters?: SOCIAL_FEED_FILTER_OPTION[];
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

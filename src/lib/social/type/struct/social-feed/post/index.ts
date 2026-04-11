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

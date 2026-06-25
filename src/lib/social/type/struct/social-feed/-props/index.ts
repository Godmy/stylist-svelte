import type { FeedUser } from '$stylist/social/type/struct/social-feed/feeduser';
import type { FilterOption } from '$stylist/social/type/struct/social-feed/filteroption';
import type { Post } from '$stylist/social/type/struct/social-feed/post';
import type { RestProps } from '$stylist/social/type/struct/social-feed/rest-props';

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

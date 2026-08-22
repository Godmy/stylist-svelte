import type { Post } from '$stylist/social/type/object/social-feed/post';

import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

export interface RecipeSocialFeed
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
		SlotThemeBorder,
		SlotTypography {
	posts: Post[];
	currentUser?: {
		id: string;
		name: string;
		avatar?: string;
	};
	showFilters?: boolean;
	showSearch?: boolean;
	showCreatePost?: boolean;
	filters?: {
		id: string;
		label: string;
		active: boolean;
	}[];
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
}

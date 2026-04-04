import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
import type { RecordSocialMerge } from '$stylist/social/type/record';

export interface SocialFeedPost {
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
}

export interface SocialFeedFilter {
	id: string;
	label: string;
	active: boolean;
}

export interface SocialFeedUser {
	id: string;
	name: string;
	avatar?: string;
}

export type SocialFeedContract = RecordArchitectureMerge<
	[
		{
			posts: SocialFeedPost[];
			currentUser?: SocialFeedUser;
			showFilters?: boolean;
			showSearch?: boolean;
			showCreatePost?: boolean;
			filters?: SocialFeedFilter[];
			showLoadMore?: boolean;
			onPostLike?: (postId: string) => void;
			onPostComment?: (postId: string) => void;
			onPostShare?: (postId: string) => void;
			onPostBookmark?: (postId: string) => void;
			onCreatePost?: () => void;
			onLoadMore?: () => void;
			headerClass?: string;
			feedItemClass?: string;
			footerClass?: string;
		},
		InformationHTMLAttributes<HTMLDivElement>
	]
>;

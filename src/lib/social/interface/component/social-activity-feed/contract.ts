import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
import type { RecordSocialMerge } from '$stylist/social/type/record';

export type ActivityType = 'like' | 'comment' | 'share' | 'follow' | 'mention' | 'post' | 'update';

export interface SocialActivityItem {
	id: string;
	type: ActivityType;
	actor: {
		id: string;
		name: string;
		avatar?: string;
	};
	target?: {
		type: string;
		id: string;
		title?: string;
	};
	timestamp: Date;
	read?: boolean;
}

export type SocialActivityFeedContract = RecordArchitectureMerge<
	[
		{
			activities: SocialActivityItem[];
			title?: string;
			showFilter?: boolean;
			showUnreadCount?: boolean;
			showTimestamp?: boolean;
			markAsReadOnClick?: boolean;
			onActivityClick?: (activity: SocialActivityItem) => void;
			onMarkAllRead?: () => void;
			onLoadMore?: () => void;
			headerClass?: string;
			itemClass?: string;
			footerClass?: string;
			locale?: string;
		},
		InformationHTMLAttributes<HTMLDivElement>
	]
>;

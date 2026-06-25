import type { Activity } from '$stylist/social/type/struct/social-activity-feed/activity';
import type { RestProps } from '$stylist/social/type/struct/social-activity-feed/rest-props';

export type Props = RestProps & {
	activities: Activity[];
	showAvatars?: boolean;
	showTimestamp?: boolean;
	showReadStatus?: boolean;
	enableFiltering?: boolean;
	showLoadMore?: boolean;
	maxActivities?: number;
	onActivityClick?: (activity: Activity) => void;
	onActivityMarkRead?: (activityId: string) => void;
	onActivityMarkUnread?: (activityId: string) => void;
	class?: string;
	itemClass?: string;
	headerClass?: string;
	footerClass?: string;
	locale?: string;
};

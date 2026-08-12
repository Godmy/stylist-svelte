import type { HTMLAttributes } from 'svelte/elements';
import type { Activity } from '$stylist/social/type/object/social-activity-feed/activity';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

export interface RecipeSocialActivityFeed extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, SlotTypography {
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
}

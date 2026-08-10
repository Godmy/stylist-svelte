import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
﻿import type { Activity } from '$stylist/social/type/struct/social-activity-feed/activity';

export type Props = (Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotThemeBorder & SlotTypography) & {
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

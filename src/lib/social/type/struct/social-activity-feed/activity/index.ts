import type { ActivityType } from '$stylist/social/type/struct/social-activity-feed/activitytype';
import type { User } from '$stylist/social/type/struct/social-activity-feed/user';

export type Activity = {
	id: string;
	type: ActivityType;
	actor: User;
	target?: User;
	subject?: string;
	content?: string;
	timestamp: Date;
	relatedUrl?: string;
	isRead?: boolean;
	isImportant?: boolean;
};

import type { ActivityType } from '$stylist/social/type/struct/social-activity-feed/activitytype';

export type Activity = {
	id: string;
	type: ActivityType;
	actor: {
	id: string;
	name: string;
	username?: string;
	avatar?: string;
	isVerified?: boolean;
};
	target?: {
	id: string;
	name: string;
	username?: string;
	avatar?: string;
	isVerified?: boolean;
};
	subject?: string;
	content?: string;
	timestamp: Date;
	relatedUrl?: string;
	isRead?: boolean;
	isImportant?: boolean;
};

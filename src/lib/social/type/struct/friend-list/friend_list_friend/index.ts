import type { TOKEN_AVAILABILITY } from '$stylist/interaction/const/array/availability';

export type FRIEND_LIST_FRIEND = {
	id: string;
	name: string;
	username?: string;
	avatar?: string;
	status: (typeof TOKEN_AVAILABILITY)[number];
	lastSeen?: Date;
	isOnline?: boolean;
	isFavorite?: boolean;
	tags?: string[];
};

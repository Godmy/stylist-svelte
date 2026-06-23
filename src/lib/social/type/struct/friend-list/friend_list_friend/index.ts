import type { AvatarUserStatus } from '$stylist/media/type/struct/avatar-user-status';

export type FRIEND_LIST_FRIEND = {
	id: string;
	name: string;
	username?: string;
	avatar?: string;
	status: AvatarUserStatus;
	lastSeen?: Date;
	isOnline?: boolean;
	isFavorite?: boolean;
	tags?: string[];
};

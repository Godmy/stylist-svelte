import type { FRIEND_LIST_FRIEND } from '../friend_list_friend';
import type { FRIEND_LIST_REST_PROPS } from '../friend_list_rest_-props';
import type { AvatarUserStatus } from '$stylist/media/type/struct/avatar-user-status';

export type FRIEND_LIST_PROPS = FRIEND_LIST_REST_PROPS & {
	friends: FRIEND_LIST_FRIEND[];
	showStatus?: boolean;
	showLastSeen?: boolean;
	showTags?: boolean;
	showSearch?: boolean;
	showInviteButton?: boolean;
	sortBy?: 'name' | 'status' | 'lastSeen';
	sortOrder?: 'asc' | 'desc';
	groupByStatus?: boolean;
	maxFriends?: number;
	onFriendSelect?: (friend: FRIEND_LIST_FRIEND) => void;
	onSendMessage?: (friend: FRIEND_LIST_FRIEND) => void;
	onCall?: (friend: FRIEND_LIST_FRIEND) => void;
	onVideoCall?: (friend: FRIEND_LIST_FRIEND) => void;
	onAddFriend?: () => void;
	onStatusChange?: (friendId: string, status: AvatarUserStatus) => void;
	class?: string;
	itemClass?: string;
	headerClass?: string;
	searchClass?: string;
	listClass?: string;
	locale?: string;
};

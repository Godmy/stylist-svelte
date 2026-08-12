import type { FRIEND_LIST_FRIEND } from '$stylist/social/type/object/friend-list/friend_list_friend';

import type { TOKEN_AVAILABILITY } from '$stylist/user/const/array/availability';

import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
export type FRIEND_LIST_PROPS = (Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotThemeBorder & SlotTypography) & {
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
	onStatusChange?: (friendId: string, status: (typeof TOKEN_AVAILABILITY)[number]) => void;
	class?: string;
	itemClass?: string;
	headerClass?: string;
	searchClass?: string;
	listClass?: string;
	locale?: string;
};

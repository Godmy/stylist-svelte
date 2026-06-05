import type { FRIEND_LIST_FRIEND } from '$stylist/social/type/struct/friend-list/friend_list_friend';

export function friendListHandleCall(
	friend: FRIEND_LIST_FRIEND,
	onCall?: (friend: FRIEND_LIST_FRIEND) => void
) {
	onCall?.(friend);
}

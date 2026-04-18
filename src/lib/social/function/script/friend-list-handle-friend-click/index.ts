import type { FRIEND_LIST_FRIEND } from '$stylist/social/type/struct/friend-list';

export function friendListHandleFriendClick(friend: FRIEND_LIST_FRIEND, onFriendSelect?: (friend: FRIEND_LIST_FRIEND) => void) {
  onFriendSelect?.(friend);
}

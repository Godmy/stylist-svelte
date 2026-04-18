import type { FRIEND_LIST_FRIEND } from '$stylist/social/type/struct/friend-list';

export function friendListHandleCall(friend: FRIEND_LIST_FRIEND, onCall?: (friend: FRIEND_LIST_FRIEND) => void) {
  onCall?.(friend);
}

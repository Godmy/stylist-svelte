import type { FRIEND_LIST_FRIEND } from '$stylist/social/type/struct/friend-list';

export function friendListHandleVideoCall(friend: FRIEND_LIST_FRIEND, onVideoCall?: (friend: FRIEND_LIST_FRIEND) => void) {
  onVideoCall?.(friend);
}

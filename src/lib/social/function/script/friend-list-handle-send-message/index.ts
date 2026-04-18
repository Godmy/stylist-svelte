import type { FRIEND_LIST_FRIEND } from '$stylist/social/type/struct/friend-list';

export function friendListHandleSendMessage(friend: FRIEND_LIST_FRIEND, onSendMessage?: (friend: FRIEND_LIST_FRIEND) => void) {
  onSendMessage?.(friend);
}

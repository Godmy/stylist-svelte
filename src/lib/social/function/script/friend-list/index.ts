import type { FRIEND_LIST_FRIEND, FRIEND_LIST_STATUS } from '$stylist/social/type/struct/friend-list';

export function friendListHandleSearchInput(e: Event, setSearchQuery: (v: string) => void) {
  const target = e.target as HTMLInputElement;
  setSearchQuery(target.value);
}

export function friendListHandleFriendClick(friend: FRIEND_LIST_FRIEND, onFriendSelect?: (friend: FRIEND_LIST_FRIEND) => void) {
  onFriendSelect?.(friend);
}

export function friendListHandleSendMessage(friend: FRIEND_LIST_FRIEND, onSendMessage?: (friend: FRIEND_LIST_FRIEND) => void) {
  onSendMessage?.(friend);
}

export function friendListHandleCall(friend: FRIEND_LIST_FRIEND, onCall?: (friend: FRIEND_LIST_FRIEND) => void) {
  onCall?.(friend);
}

export function friendListHandleVideoCall(friend: FRIEND_LIST_FRIEND, onVideoCall?: (friend: FRIEND_LIST_FRIEND) => void) {
  onVideoCall?.(friend);
}

export function friendListHandleAddFriend(onAddFriend?: () => void) {
  onAddFriend?.();
}

export function friendListGetStatusColor(status: string): string {
  const statusColors: Record<string, string> = {
    'online': 'bg-[var(--color-success-500)]',
    'away': 'bg-yellow-500',
    'busy': 'bg-[var(--color-danger-500)]',
    'offline': 'bg-[var(--color-neutral-400)]'
  };
  return statusColors[status];
}

export function friendListGetStatusText(status: string): string {
  const statusTexts: Record<string, string> = {
    'online': 'Online',
    'away': 'Away',
    'busy': 'Busy',
    'offline': 'Offline'
  };
  return statusTexts[status];
}

export function friendListFormatLastSeen(date: Date, locale?: string): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);

  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;

  return new Date(date).toLocaleDateString(locale || 'en-US', {
    month: 'short',
    day: 'numeric'
  });
}

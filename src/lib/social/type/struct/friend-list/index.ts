import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type FRIEND_LIST_STATUS = 'online' | 'offline' | 'away' | 'busy';

export type FRIEND_LIST_FRIEND = {
  id: string;
  name: string;
  username?: string;
  avatar?: string;
  status: FRIEND_LIST_STATUS;
  lastSeen?: Date;
  isOnline?: boolean;
  isFavorite?: boolean;
  tags?: string[];
};

export type FRIEND_LIST_REST_PROPS = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

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
  onStatusChange?: (friendId: string, status: FRIEND_LIST_STATUS) => void;
  class?: string;
  itemClass?: string;
  headerClass?: string;
  searchClass?: string;
  listClass?: string;
  locale?: string;
};

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

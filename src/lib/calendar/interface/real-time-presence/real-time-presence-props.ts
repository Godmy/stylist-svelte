export interface IRealTimePresenceProps {
  users?: RealTimePresenceUser[];
  showAvatars?: boolean;
  showStatus?: boolean;
  showLastSeen?: boolean;
  showCursorPositions?: boolean;
  title?: string;
  class?: string;
  userListClass?: string;
  userItemClass?: string;
  statusClass?: string;
}

export interface RealTimePresenceUser {
  id: string;
  name: string;
  avatar?: string;
  status: RealTimePresenceStatus;
  lastSeen?: Date;
  cursorPosition?: { x: number; y: number };
}

export type RealTimePresenceStatus = 'online' | 'away' | 'busy' | 'offline';

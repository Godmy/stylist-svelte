type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
type UserStatus = 'online' | 'away' | 'offline' | 'typing' | 'idle';

export interface AvatarProps {
  src?: string;
  alt?: string;
  id?: string;
  name?: string;
  status?: UserStatus;
  size?: AvatarSize;
  showStatus?: boolean;
  class?: string;
}

export type { AvatarSize, UserStatus };
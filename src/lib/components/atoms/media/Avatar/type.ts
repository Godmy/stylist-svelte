type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
type AvatarUserStatus = 'online' | 'away' | 'offline' | 'typing' | 'idle';

export interface AvatarProps {
  src?: string;
  alt?: string;
  id?: string;
  name?: string;
  status?: AvatarUserStatus;
  size?: AvatarSize;
  showStatus?: boolean;
  class?: string;
}

export type { AvatarSize, AvatarUserStatus };
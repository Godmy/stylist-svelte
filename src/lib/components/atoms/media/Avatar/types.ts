/**
 * Avatar types and interfaces following SOLID principles
 */

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
export type AvatarUserStatus = 'online' | 'away' | 'offline' | 'typing' | 'idle';

export interface IAvatarProps {
  src?: string;
  alt?: string;
  id?: string;
  name?: string;
  status?: AvatarUserStatus;
  size?: AvatarSize;
  showStatus?: boolean;
  class?: string;
}

export interface IAvatarStyleClasses {
  size: string;
  status: string;
}
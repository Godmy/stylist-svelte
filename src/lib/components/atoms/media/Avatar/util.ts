import type { AvatarUserStatus, AvatarSize } from './types';
import { STATUS_COLORS, AVATAR_SIZE_CLASSES, STATUS_SIZE_CLASSES } from './constant';

/**
 * Calculates the first initial from a name
 */
export function getInitials(name?: string): string {
  return name ? name.charAt(0).toUpperCase() : '?';
}

/**
 * Gets the appropriate status color class based on status
 */
export function getStatusColor(status?: AvatarUserStatus): string {
  const statusKey = status || 'offline';
  return STATUS_COLORS[statusKey as keyof typeof STATUS_COLORS] || STATUS_COLORS.offline;
}

/**
 * Gets the appropriate size classes based on size prop
 */
export function getAvatarSizeClasses(size: AvatarSize): string {
  return AVATAR_SIZE_CLASSES[size as keyof typeof AVATAR_SIZE_CLASSES] || AVATAR_SIZE_CLASSES.md;
}

/**
 * Gets the appropriate status indicator size classes based on size prop
 */
export function getStatusSizeClasses(size: AvatarSize): string {
  return STATUS_SIZE_CLASSES[size as keyof typeof STATUS_SIZE_CLASSES] || STATUS_SIZE_CLASSES.md;
}
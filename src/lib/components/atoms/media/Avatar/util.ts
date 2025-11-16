import type { AvatarUserStatus, AvatarSize } from './type';
import { STATUS_COLORS, SIZE_CLASSES, STATUS_SIZE_CLASSES } from './constant';

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
  return STATUS_COLORS[status || 'offline'] || STATUS_COLORS.offline;
}

/**
 * Gets the appropriate size classes based on size prop
 */
export function getAvatarSizeClasses(size: AvatarSize): string {
  return SIZE_CLASSES[size] || SIZE_CLASSES.md;
}

/**
 * Gets the appropriate status indicator size classes based on size prop
 */
export function getStatusSizeClasses(size: AvatarSize): string {
  return STATUS_SIZE_CLASSES[size] || STATUS_SIZE_CLASSES.md;
}
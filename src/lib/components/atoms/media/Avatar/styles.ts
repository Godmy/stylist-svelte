import type { AvatarSize, AvatarUserStatus, IAvatarStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing avatar styling logic
 */
export class AvatarStyleManager {
  static getSizeClasses(size: AvatarSize): string {
    const sizeClasses: Record<AvatarSize, string> = {
      sm: 'w-8 h-8 text-sm',
      md: 'w-10 h-10 text-base',
      lg: 'w-12 h-12 text-lg',
      xl: 'w-16 h-16 text-xl'
    };

    return sizeClasses[size];
  }

  static getStatusClasses(status?: AvatarUserStatus): string {
    const statusClasses: Record<AvatarUserStatus, string> = {
      online: 'bg-green-500',
      away: 'bg-yellow-500',
      offline: 'bg-gray-400',
      typing: 'bg-blue-500',
      idle: 'bg-orange-500'
    };

    return statusClasses[status || 'offline'] || statusClasses.offline;
  }

  static getStatusSizeClasses(size: AvatarSize): string {
    const statusSizeClasses: Record<AvatarSize, string> = {
      sm: 'w-2 h-2',
      md: 'w-2.5 h-2.5',
      lg: 'w-3 h-3',
      xl: 'w-3.5 h-3.5'
    };

    return statusSizeClasses[size];
  }

  static getBaseClasses(): string {
    return 'inline-flex items-center justify-center rounded-full bg-gray-200 font-medium text-gray-700';
  }

  static getStatusBorderClass(): string {
    return 'absolute bottom-0 right-0 rounded-full border-2 border-white';
  }

  static getAllClasses(size: AvatarSize, className: string): string {
    const baseClasses = this.getBaseClasses();
    const sizeClasses = this.getSizeClasses(size);

    return `${baseClasses} ${sizeClasses} ${className}`;
  }
}
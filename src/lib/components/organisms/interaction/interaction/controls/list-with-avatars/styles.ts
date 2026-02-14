import type { IListWithAvatarsStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing ListWithAvatars styling logic
 * Uses CSS variables from the theme system
 */
export class ListWithAvatarsStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'c-list-with-avatars divide-y divide-gray-200 rounded-md border border-gray-200';

    return `${baseClasses} ${className}`;
  }

  static getItemClasses(size: 'sm' | 'md' | 'lg', itemClass: string): string {
    const sizeClasses = {
      sm: 'py-2',
      md: 'py-3',
      lg: 'py-4'
    };

    const baseClasses = `flex items-center px-4 ${sizeClasses[size] || sizeClasses.md}`;

    return `${baseClasses} ${itemClass}`;
  }

  static getAvatarClasses(size: 'sm' | 'md' | 'lg', avatarClass: string): string {
    const sizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12'
    };

    const baseClasses = 'rounded-full object-cover';

    return `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${avatarClass}`;
  }

  static getContentClasses(contentClass: string): string {
    return `flex-1 min-w-0 ${contentClass}`;
  }

  static getStatusClasses(status: 'online' | 'away' | 'busy' | 'offline'): string {
    const statusClasses = {
      online: 'bg-green-500',
      away: 'bg-yellow-500',
      busy: 'bg-red-500',
      offline: 'bg-gray-400'
    };

    return `absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border border-white ${statusClasses[status] || statusClasses.offline}`;
  }

  static getActionsClasses(actionsClass: string): string {
    return `ml-4 flex space-x-2 ${actionsClass}`;
  }

  static getTextSizeClasses(size: 'sm' | 'md' | 'lg'): string {
    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    };

    return sizeClasses[size] || sizeClasses.md;
  }

  static getActionClasses(variant: 'primary' | 'danger' | 'secondary'): string {
    const variantClasses = {
      primary: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
      danger: 'bg-red-100 text-red-700 hover:bg-red-200',
      secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    };

    return `px-3 py-1 rounded text-xs font-medium ${variantClasses[variant] || variantClasses.secondary}`;
  }

  static getAllClasses(className: string, size: 'sm' | 'md' | 'lg', itemClass: string): string {
    const baseClasses = this.getBaseClasses(className);
    const itemClasses = this.getItemClasses(size, itemClass);

    return `${baseClasses} ${itemClasses}`;
  }
}
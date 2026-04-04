import type { IRealTimePresenceStyleClasses } from '$stylist/calendar/interface/component/real-time-presence/struct/styles';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing RealTimePresence styling logic
 * Uses CSS variables from the theme system
 */
export class RealTimePresenceStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'c-real-time-presence flex items-center space-x-2';

    return `${baseClasses} ${className}`;
  }

  static getUserClasses(): string {
    return 'presence-user flex items-center space-x-2 p-2 rounded-lg hover:bg-[var(--color-background-secondary)]';
  }

  static getStatusClasses(status: string): string {
    const statusClasses: Record<string, string> = {
      online: 'status-online text-[var(--color-success-500)]',
      away: 'status-away text-yellow-500',
      offline: 'status-offline text-[var(--color-text-tertiary)]'
    };

    return statusClasses[status] || 'status-default';
  }

  static getOnlineClass(): string {
    return 'user-online';
  }

  static getAwayClass(): string {
    return 'user-away';
  }

  static getOfflineClass(): string {
    return 'user-offline';
  }

  static getAllClasses(className: string, status: string): string {
    const baseClasses = this.getBaseClasses(className);
    const statusClass = this.getStatusClasses(status);

    return `${baseClasses} ${statusClass}`;
  }
}

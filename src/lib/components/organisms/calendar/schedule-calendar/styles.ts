/**
 * ScheduleCalendar Style Manager
 *
 * This class manages all styling for the ScheduleCalendar component following the
 * theming system and SOLID principles by separating styling concerns from component logic.
 */

export class ScheduleCalendarStyleManager {
  /**
   * Gets the main wrapper classes for the schedule calendar
   */
  static getWrapperClasses(hostClass: string): string {
    return `schedule-calendar border border-[--color-border-default] rounded-[--radius-lg] overflow-auto ${hostClass}`;
  }

  /**
   * Gets the header classes for the schedule calendar
   */
  static getHeaderClasses(headerClass: string): string {
    return `flex items-center justify-between p-[--spacing-lg] border-b border-[--color-border-default] ${headerClass}`;
  }

  /**
   * Gets the schedule grid classes
   */
  static getGridClasses(): string {
    return 'grid grid-cols-8 min-w-max';
  }

  /**
   * Gets the time gutter classes
   */
  static getTimeGutterClasses(): string {
    return 'border-r border-[--color-border-default]';
  }

  /**
   * Gets the time slot classes
   */
  static getTimeSlotClasses(): string {
    return 'p-[--spacing-sm] border-b border-[--color-border-subtle] text-right text-[--text-size-xs] text-[--color-text-muted]';
  }

  /**
   * Gets the day column classes
   */
  static getDayColumnClasses(isWeekend: boolean): string {
    const baseClasses = 'border-r border-[--color-border-default]';
    const weekendClass = isWeekend ? 'bg-[--color-surface-muted]' : '';

    return `${baseClasses} ${weekendClass}`;
  }

  /**
   * Gets the day header classes
   */
  static getDayHeaderClasses(isToday: boolean, headerClass: string): string {
    const baseClasses = 'p-[--spacing-sm] text-center text-[--text-size-sm] font-[--font-weight-medium]';
    const todayClass = isToday ? 'bg-[--color-primary-100]' : '';

    return `${baseClasses} ${todayClass} ${headerClass}`;
  }

  /**
   * Gets the time slot cell classes
   */
  static getTimeSlotCellClasses(slotClass: string): string {
    return `p-[--spacing-xs] border-b border-[--color-border-subtle] relative ${slotClass}`;
  }

  /**
   * Gets the event classes
   */
  static getEventClasses(color?: string, eventClass: string = ''): string {
    const baseClasses = 'text-[--text-size-xs] p-[--spacing-xs] rounded-[--radius-sm] mb-[--spacing-xs] cursor-pointer truncate';
    const colorClass = color || 'bg-[--color-surface-accent] text-[--color-text-primary]';

    return `${baseClasses} ${colorClass} ${eventClass}`;
  }

  /**
   * Gets the priority badge classes
   */
  static getPriorityBadgeClasses(priority: string): string {
    switch (priority) {
      case 'high':
        return 'inline-flex items-center px-[--spacing-2xs] py-[--spacing-3xs] rounded-full text-[--text-size-2xs] font-[--font-weight-medium] bg-[--color-danger-100] text-[--color-danger-800]';
      case 'medium':
        return 'inline-flex items-center px-[--spacing-2xs] py-[--spacing-3xs] rounded-full text-[--text-size-2xs] font-[--font-weight-medium] bg-[--color-warning-100] text-[--color-warning-800]';
      case 'low':
        return 'inline-flex items-center px-[--spacing-2xs] py-[--spacing-3xs] rounded-full text-[--text-size-2xs] font-[--font-weight-medium] bg-[--color-success-100] text-[--color-success-800]';
      default:
        return 'inline-flex items-center px-[--spacing-2xs] py-[--spacing-3xs] rounded-full text-[--text-size-2xs] font-[--font-weight-medium] bg-[--color-surface-muted] text-[--color-text-secondary]';
    }
  }

  /**
   * Gets the today button classes
   */
  static getTodayButtonClasses(): string {
    return 'ml-[--spacing-md]';
  }

  /**
   * Gets the navigation button classes
   */
  static getNavigationButtonClasses(): string {
    return 'h-[--spacing-xl] w-[--spacing-xl] flex items-center justify-center rounded-[--radius-md] hover:bg-[--color-surface-hover]';
  }
}
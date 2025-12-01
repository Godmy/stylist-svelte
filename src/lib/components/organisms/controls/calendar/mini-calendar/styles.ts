/**
 * MiniCalendar Style Manager
 *
 * This class manages all styling for the MiniCalendar component following the
 * theming system and SOLID principles by separating styling concerns from component logic.
 */

export class MiniCalendarStyleManager {
  /**
   * Gets the main wrapper classes for the mini calendar
   */
  static getWrapperClasses(compact: boolean, hostClass: string): string {
    const baseClasses = 'mini-calendar border border-[--color-border-default] rounded-[--radius-lg] overflow-hidden';
    const sizeClass = compact ? 'text-[--text-size-xs]' : 'text-[--text-size-sm]';
    
    return `${baseClasses} ${sizeClass} ${hostClass}`;
  }

  /**
   * Gets the header classes for the calendar
   */
  static getHeaderClasses(headerClass: string): string {
    return `flex items-center justify-between p-[--spacing-xs] border-b border-[--color-border-default] ${headerClass}`;
  }

  /**
   * Gets the weekday header classes
   */
  static getWeekdayHeaderClasses(headerClass: string): string {
    return `p-[--spacing-xs] text-center font-[--font-weight-medium] text-[--color-text-muted] ${headerClass}`;
  }

  /**
   * Gets the day cell classes based on its properties
   */
  static getDayCellClasses(isToday: boolean, isCurrentMonth: boolean, hasEvent: boolean, dayClass: string): string {
    const baseClasses = 'min-h-[--spacing-xl] p-[--spacing-xs] text-center border-t border-r border-[--color-border-subtle] cursor-pointer';
    const todayClass = isToday ? 'bg-[--color-primary-100] font-[--font-weight-bold]' : '';
    const currentMonthClass = isCurrentMonth ? 'text-[--color-text-primary]' : 'text-[--color-text-disabled]';
    const eventClass = hasEvent ? 'text-[--color-primary-600]' : '';

    return `${baseClasses} ${todayClass} ${currentMonthClass} ${eventClass} ${dayClass}`;
  }

  /**
   * Gets the date number display classes
   */
  static getDateNumberClasses(): string {
    return 'flex flex-col items-center justify-center h-full';
  }

  /**
   * Gets the event indicator classes
   */
  static getEventIndicatorClasses(color?: string, eventClass: string = ''): string {
    const baseClasses = 'w-[--spacing-xs] h-[--spacing-xs] rounded-full';
    const colorClass = color || '[--color-primary-500]';

    return `${baseClasses} ${colorClass} ${eventClass}`;
  }

  /**
   * Gets the calendar grid classes
   */
  static getGridClasses(): string {
    return 'grid grid-cols-7';
  }
}
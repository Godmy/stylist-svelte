/**
 * TimeGrid Style Manager
 *
 * This class manages all styling for the TimeGrid component following the
 * theming system and SOLID principles by separating styling concerns from component logic.
 */

export class TimeGridStyleManager {
  /**
   * Gets the main wrapper classes for the time grid calendar
   */
  static getWrapperClasses(hostClass: string): string {
    return `time-grid-calendar border border-[--color-border-default] rounded-[--radius-lg] overflow-auto ${hostClass}`;
  }

  /**
   * Gets the header classes for the time grid calendar
   */
  static getHeaderClasses(headerClass: string): string {
    return `flex items-center justify-between p-[--spacing-lg] border-b border-[--color-border-default] ${headerClass}`;
  }

  /**
   * Gets the time grid classes
   */
  static getTimeGridClasses(): string {
    return 'grid grid-cols-8 min-w-max h-[calc(100vh-200px)]';
  }

  /**
   * Gets the time slot classes
   */
  static getTimeSlotClasses(): string {
    return 'border-b border-[--color-border-subtle] relative';
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
   * Gets the time indicator classes
   */
  static getTimeIndicatorClasses(): string {
    return 'absolute w-full h-[--spacing-0.5] bg-[--color-danger-500] z-[10]';
  }

  /**
   * Gets the event classes
   */
  static getEventClasses(color?: string, eventClass: string = ''): string {
    const baseClasses = 'absolute left-[--spacing-xs] right-[--spacing-xs] p-[--spacing-xs] text-[--text-size-xs] rounded-[--radius-sm] m-[--spacing-0.5] truncate';
    const colorClass = color || 'bg-[--color-surface-accent] text-[--color-text-primary]';

    return `${baseClasses} ${colorClass} ${eventClass}`;
  }

  /**
   * Gets the all-day event classes
   */
  static getAllDayEventClasses(): string {
    return 'h-[--spacing-lg]';
  }

  /**
   * Gets the time label classes
   */
  static getTimeLabelClasses(isFirstSlot: boolean): string {
    const baseClasses = 'absolute top-0 right-0 w-full text-right pr-[--spacing-sm] pt-[--spacing-xs] text-[--text-size-xs]';
    const colorClass = isFirstSlot ? 'text-[--color-text-primary]' : 'text-[--color-text-muted]';

    return `${baseClasses} ${colorClass}`;
  }

  /**
   * Gets the navigation button classes
   */
  static getNavigationButtonClasses(): string {
    return 'h-[--spacing-xl] w-[--spacing-xl] flex items-center justify-center rounded-[--radius-md] hover:bg-[--color-surface-hover]';
  }

  /**
   * Gets the view toggle button classes
   */
  static getViewToggleButtonClasses(): string {
    return 'h-[--spacing-xl] flex items-center justify-center rounded-[--radius-md] hover:bg-[--color-surface-hover]';
  }
}
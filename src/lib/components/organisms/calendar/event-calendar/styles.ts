/**
 * EventCalendar Style Manager
 *
 * This class manages all styling for the EventCalendar component following the
 * theming system and SOLID principles by separating styling concerns from component logic.
 */

export class EventCalendarStyleManager {
  /**
   * Gets the main wrapper classes for the event calendar based on view mode
   */
  static getWrapperClasses(viewMode: string): string {
    const baseClasses = 'event-calendar border border-[--color-border-default] rounded-[--radius-lg] overflow-hidden bg-[--color-surface-primary] shadow-[--shadow-sm]';
    const modeSpecificClasses = viewMode === 'day' ? 'flex flex-col' : 'block';

    return `${baseClasses} ${modeSpecificClasses}`;
  }

  /**
   * Gets the header classes for the calendar
   */
  static getHeaderClasses(): string {
    return 'flex items-center justify-between p-[--spacing-lg] border-b border-[--color-border-default] bg-[--color-surface-secondary]';
  }

  /**
   * Gets the weekday header classes
   */
  static getWeekdayHeaderClasses(): string {
    return 'p-[--spacing-sm] text-center text-[--text-size-xs] font-[--font-weight-medium] text-[--color-text-muted]';
  }

  /**
   * Gets the date header classes for day/week views
   */
  static getDateHeaderClasses(isToday: boolean): string {
    const baseClasses = 'p-[--spacing-sm] font-[--font-weight-semibold] text-[--color-text-secondary]';
    const todayClass = isToday ? 'bg-[--color-primary-50] text-[--color-primary-700]' : '';

    return `${baseClasses} ${todayClass}`;
  }

  /**
   * Gets the day cell classes based on its properties
   */
  static getDayCellClasses(isToday: boolean, isCurrentMonth: boolean): string {
    const baseClasses = 'min-h-[6rem] p-[--spacing-xs] border-t border-r border-[--color-border-subtle] relative group';
    const todayClass = isToday ? 'bg-[--color-primary-50]' : '';
    const notCurrentMonthClass = !isCurrentMonth ? 'bg-[--color-surface-muted] text-[--color-text-disabled]' : 'hover:bg-[--color-surface-hover]';

    return `${baseClasses} ${todayClass} ${notCurrentMonthClass}`;
  }

  /**
   * Gets the date number display classes
   */
  static getDateNumberClasses(isToday: boolean): string {
    const baseClasses = 'text-right p-[--spacing-xs]';
    const todayClass = isToday
      ? 'rounded-full h-6 w-6 flex items-center justify-center bg-[--color-primary-600] text-[--color-text-inverse] mx-auto'
      : '';

    return `${baseClasses} ${todayClass}`;
  }

  /**
   * Gets the event display classes
   */
  static getEventClasses(hasColor: boolean, customColor?: string): string {
    const baseClasses = 'text-[--text-size-xs] p-[--spacing-xs] rounded-[--radius-sm] truncate cursor-pointer text-[--color-text-primary] hover:opacity-90 transition-opacity';
    const customColorClass = hasColor && customColor ? customColor : 'bg-[--color-surface-accent]';

    return `${baseClasses} ${customColorClass}`;
  }

  /**
   * Gets the modal overlay classes
   */
  static getModalOverlayClasses(): string {
    return 'fixed inset-0 bg-[--color-overlay-backdrop] flex items-center justify-center z-[100] p-[--spacing-lg]';
  }

  /**
   * Gets the modal content classes
   */
  static getModalContentClasses(): string {
    return 'bg-[--color-surface-primary] rounded-[--radius-lg] shadow-[--shadow-lg] p-[--spacing-xl] max-w-md w-full mx-[--spacing-md]';
  }

  /**
   * Gets the modal header classes
   */
  static getModalHeaderClasses(): string {
    return 'flex justify-between items-start mb-[--spacing-md]';
  }

  /**
   * Gets the modal footer classes
   */
  static getModalFooterClasses(): string {
    return 'calendar-footer mt-[--spacing-lg]';
  }

  /**
   * Gets the calendar grid classes
   */
  static getGridClasses(): string {
    return 'grid grid-cols-7';
  }
}
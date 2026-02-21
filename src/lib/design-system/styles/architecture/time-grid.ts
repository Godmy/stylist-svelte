export class TimeGridStyleManager {
  static getWrapperClasses(): string {
    return 'c-time-grid border border-[--color-border-default] rounded-[--radius-lg] overflow-auto';
  }

  static getHeaderClasses(): string {
    return 'flex items-center justify-between p-[--spacing-lg] border-b border-[--color-border-default]';
  }

  static getTimeGridClasses(): string {
    return 'grid grid-cols-8 min-w-max h-[calc(100vh-200px)]';
  }

  static getTimeSlotClasses(): string {
    return 'border-b border-[--color-border-subtle] relative';
  }

  static getDayColumnClasses(isWeekend: boolean): string {
    const baseClasses = 'border-r border-[--color-border-default]';
    const weekendClass = isWeekend ? 'bg-[--color-surface-muted]' : '';

    return `${baseClasses} ${weekendClass}`;
  }

  static getDayHeaderClasses(isToday: boolean, headerClass: string = ''): string {
    const baseClasses = 'p-[--spacing-sm] text-center text-[--text-size-sm] font-[--font-weight-medium]';
    const todayClass = isToday ? 'bg-[--color-primary-100]' : '';

    return `${baseClasses} ${todayClass} ${headerClass}`;
  }

  static getTimeIndicatorClasses(): string {
    return 'absolute w-full h-[--spacing-0.5] bg-[--color-danger-500] z-[10]';
  }

  static getEventClasses(color?: string, eventClass: string = ''): string {
    const baseClasses = 'absolute left-[--spacing-xs] right-[--spacing-xs] p-[--spacing-xs] text-[--text-size-xs] rounded-[--radius-sm] m-[--spacing-0.5] truncate';
    const colorClass = color || 'bg-[--color-surface-accent] text-[--color-text-primary]';

    return `${baseClasses} ${colorClass} ${eventClass}`;
  }

  static getAllDayEventClasses(): string {
    return 'h-[--spacing-lg]';
  }

  static getTimeLabelClasses(isFirstSlot: boolean): string {
    const baseClasses = 'absolute top-0 right-0 w-full text-right pr-[--spacing-sm] pt-[--spacing-xs] text-[--text-size-xs]';
    const colorClass = isFirstSlot ? 'text-[--color-text-primary]' : 'text-[--color-text-muted]';

    return `${baseClasses} ${colorClass}`;
  }

  static getNavigationButtonClasses(): string {
    return 'h-[--spacing-xl] w-[--spacing-xl] flex items-center justify-center rounded-[--radius-md] hover:bg-[--color-surface-hover]';
  }

  static getViewToggleButtonClasses(): string {
    return 'h-[--spacing-xl] flex items-center justify-center rounded-[--radius-md] hover:bg-[--color-surface-hover]';
  }
}
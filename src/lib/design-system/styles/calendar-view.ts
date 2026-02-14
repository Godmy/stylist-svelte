export class CalendarViewStyleManager {
  static getWrapperClasses(): string {
    return 'c-calendar-view border border-[--color-border-default] rounded-[--radius-lg] overflow-hidden';
  }

  static getHeaderClasses(): string {
    return 'flex items-center justify-between p-[--spacing-lg] border-b border-[--color-border-default]';
  }

  static getNavigationButtonClasses(): string {
    return 'h-[--spacing-xl] w-[--spacing-xl] flex items-center justify-center rounded-[--radius-md] hover:bg-[--color-surface-hover]';
  }

  static getTodayButtonClasses(): string {
    return 'mx-[--spacing-sm] h-[--spacing-xl] flex items-center justify-center rounded-[--radius-md] hover:bg-[--color-surface-hover]';
  }

  static getViewToggleButtonClasses(isActive: boolean): string {
    return isActive 
      ? 'h-[--spacing-xl] px-[--spacing-md] rounded-[--radius-md] bg-[--color-primary-500] text-[--color-text-inverse]' 
      : 'h-[--spacing-xl] px-[--spacing-md] rounded-[--radius-md] hover:bg-[--color-surface-hover]';
  }

  static getGridClasses(): string {
    return 'grid grid-cols-7';
  }

  static getWeekdayHeaderClasses(): string {
    return 'p-[--spacing-sm] text-center text-[--text-size-xs] font-[--font-weight-medium] text-[--color-text-secondary] bg-[--color-surface-subtle]';
  }

  static getDayCellClasses(isToday: boolean, isCurrentMonth: boolean): string {
    const baseClasses = 'min-h-[--spacing-24] p-[--spacing-sm] border-t border-[--color-border-default] border-r border-[--color-border-default]';
    const todayClass = isToday ? 'bg-[--color-primary-50] bg-[--color-primary-50]' : '';
    const monthClass = !isCurrentMonth ? 'bg-[--color-surface-muted] text-[--color-text-disabled]' : '';

    return `${baseClasses} ${todayClass} ${monthClass}`;
  }

  static getDateNumberClasses(isToday: boolean): string {
    if (isToday) {
      return 'flex items-center justify-center h-[--spacing-6] w-[--spacing-6] rounded-full bg-[--color-primary-500] text-[--color-text-inverse]';
    }
    return '';
  }

  static getAddEventButtonClasses(): string {
    return 'text-[--color-text-tertiary] hover:text-[--color-text-primary]';
  }

  static getEventItemClasses(color?: string): string {
    const baseClasses = 'text-[--text-size-xs] p-[--spacing-xs] rounded truncate cursor-pointer';
    const colorClass = color || 'bg-[--color-surface-accent] text-[--color-text-primary]';

    return `${baseClasses} ${colorClass}`;
  }

  static getWeekNumberClasses(): string {
    return 'p-[--spacing-sm] text-[--text-size-xs] font-[--font-weight-medium] text-[--color-text-secondary] bg-[--color-surface-muted]';
  }
}
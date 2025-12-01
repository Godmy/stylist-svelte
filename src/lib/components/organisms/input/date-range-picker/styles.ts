import type { DateRangePickerVariant } from './types';

/**
 * Менеджер стилей для компонента DateRangePicker
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * - Только генерирует CSS-классы на основе пропсов
 * - Не содержит логики отображения или поведения
 * - Изолирует стили от компонента для упрощения поддержки
 */
export class DateRangePickerStyleManager {
  /**
   * Получить CSS-классы для основного контейнера
   */
  static getContainerClasses(className?: string): string {
    const baseClasses = [
      'relative',
      'inline-block',
      'w-full'
    ];

    if (className) {
      baseClasses.push(className);
    }

    return baseClasses.join(' ');
  }

  /**
   * Получить CSS-классы для контейнера инпута
   */
  static getInputContainerClasses(): string {
    return [
      'relative'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для инпута
   */
  static getInputClasses(isDisabled: boolean, inputClass?: string): string {
    const baseClasses = [
      'w-full',
      'p-2',
      'pl-10',
      'pr-10',
      'border',
      'border-[--color-border-default]',
      'rounded-md',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-[--color-primary-500]',
      'focus:border-[--color-primary-500]',
      'cursor-pointer'
    ];

    if (isDisabled) {
      baseClasses.push(
        'bg-[--color-surface-disabled]',
        'text-[--color-text-disabled]',
        'cursor-not-allowed'
      );
    } else {
      baseClasses.push('bg-[--color-surface-primary]');
    }

    if (inputClass) {
      baseClasses.push(inputClass);
    }

    return baseClasses.join(' ');
  }

  /**
   * Получить CSS-классы для иконки календаря
   */
  static getCalendarIconClasses(): string {
    return [
      'absolute',
      'left-3',
      'top-1/2',
      'transform',
      '-translate-y-1/2',
      'text-[--color-text-secondary]'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для кнопки очистки
   */
  static getClearButtonClasses(): string {
    return [
      'absolute',
      'right-8',
      'top-1/2',
      'transform',
      '-translate-y-1/2',
      'text-[--color-text-secondary]',
      'hover:text-[--color-text-primary]'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для кнопки календаря
   */
  static getCalendarButtonClasses(isDisabled: boolean, buttonClass?: string): string {
    const baseClasses = [
      'absolute',
      'right-0',
      'top-0',
      'h-full',
      'px-3',
      'rounded-r-md',
      'hover:bg-[--color-surface-hover]'
    ];

    if (isDisabled) {
      baseClasses.push('hidden');
    } else {
      baseClasses.push('block');
    }

    if (buttonClass) {
      baseClasses.push(buttonClass);
    }

    return baseClasses.join(' ');
  }

  /**
   * Получить CSS-классы для календаря
   */
  static getCalendarClasses(calendarClass?: string): string {
    const baseClasses = [
      'absolute',
      'z-10',
      'mt-1',
      'p-4',
      'bg-[--color-surface-primary]',
      'border',
      'border-[--color-border-default]',
      'rounded-md',
      'shadow-lg',
      'w-80'
    ];

    if (calendarClass) {
      baseClasses.push(calendarClass);
    }

    return baseClasses.join(' ');
  }

  /**
   * Получить CSS-классы для заголовка календаря
   */
  static getCalendarHeaderClasses(): string {
    return [
      'flex',
      'items-center',
      'justify-between',
      'mb-4'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для кнопки навигации по месяцам
   */
  static getNavigationButtonClasses(): string {
    return [
      'p-1',
      'rounded-full',
      'hover:bg-[--color-surface-hover]'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для заголовка месяца
   */
  static getMonthHeaderClasses(): string {
    return [
      'text-[--text-size-base]',
      'font-semibold',
      'text-[--color-text-primary]'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для заголовков дней недели
   */
  static getWeekdayHeaderClasses(): string {
    return [
      'text-center',
      'text-[--text-size-xs]',
      'font-medium',
      'text-[--color-text-secondary]',
      'p-1'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для сетки дней
   */
  static getDaysGridClasses(): string {
    return [
      'grid',
      'grid-cols-7',
      'gap-1'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для кнопки даты
   */
  static getDateButtonClasses(
    isInRange: boolean,
    isStartOrEnd: boolean,
    isToday: boolean,
    isCurrentMonth: boolean
  ): string {
    const baseClasses = [
      'h-8',
      'w-8',
      'text-sm',
      'rounded-full'
    ];

    if (isInRange) {
      baseClasses.push('bg-[--color-primary-100]');
    } else if (isStartOrEnd) {
      baseClasses.push(
        'bg-[--color-primary-500]',
        'text-[--color-text-inverse]'
      );
    } else if (isToday) {
      baseClasses.push(
        'bg-[--color-surface-secondary]',
        'font-bold'
      );
    } else {
      baseClasses.push('hover:bg-[--color-surface-hover]');
    }

    if (!isCurrentMonth) {
      baseClasses.push('text-[--color-text-disabled]');
    } else {
      baseClasses.push('text-[--color-text-primary]');
    }

    return baseClasses.join(' ');
  }

  /**
   * Получить CSS-классы для пустой ячейки даты
   */
  static getEmptyDateCellClasses(): string {
    return [
      'h-8',
      'w-8'
    ].join(' ');
  }
}
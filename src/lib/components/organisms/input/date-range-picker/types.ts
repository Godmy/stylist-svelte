import type { HTMLAttributes } from 'svelte/elements';

/**
 * Интерфейс диапазона дат
 */
export interface IDateRange {
  /**
   * Начальная дата
   */
  start: Date | null;

  /**
   * Конечная дата
   */
  end: Date | null;
}

/**
 * Варианты стилей DateRangePicker
 */
export type DateRangePickerVariant = 'default' | 'compact' | 'minimal';

/**
 * Типы пропсов для компонента DateRangePicker
 */
export interface IDateRangePickerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Выбранный диапазон дат
   */
  value?: IDateRange;

  /**
   * Отключен ли компонент
   */
  disabled?: boolean;

  /**
   * Плейсхолдер для инпута
   */
  placeholder?: string;

  /**
   * CSS класс для основного контейнера
   */
  class?: string;

  /**
   * CSS класс для календаря
   */
  calendarClass?: string;

  /**
   * CSS класс для инпута
   */
  inputClass?: string;

  /**
   * CSS класс для кнопки
   */
  buttonClass?: string;

  /**
   * Вариант отображения
   */
  variant?: DateRangePickerVariant;

  /**
   * Обработчик ввода (при каждом изменении)
   */
  onInput?: (range: IDateRange) => void;

  /**
   * Обработчик изменения (после завершения выбора)
   */
  onChange?: (range: IDateRange) => void;
}
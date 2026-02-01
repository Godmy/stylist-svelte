import type { Snippet } from 'svelte';

/**
 * Типы пропсов для компонента ErrorMessage
 */
export interface IErrorMessageProps {
  /**
   * Ошибка для отображения
   */
  error?: Error | string | null;

  /**
   * Заголовок ошибки
   */
  title?: string;

  /**
   * Функция для повторной попытки действия
   */
  onRetry?: () => void;

  /**
   * Показывать ли кнопку повтора
   */
  showRetry?: boolean;
}

/**
 * Менеджер стилей для компонента ErrorMessage
 *
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * - Только генерирует CSS-классы на основе пропсов
 * - Не содержит логики отображения или поведения
 * - Изолирует стили от компонента для упрощения поддержки
 */
export class ErrorMessageStyleManager {
  /**
   * Получить основные CSS-классы для контейнера ошибки
   */
  static getBaseClasses(): string {
    return [
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'p-8',
      'bg-[--color-danger-50]',
      'dark:bg-[--color-danger-900]',
      'border',
      'border-[--color-danger-200]',
      'dark:border-[--color-danger-700]',
      'rounded-md',
      'text-center',
      'text-[--color-danger-800]',
      'dark:text-[--color-danger-200]'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для заголовка ошибки
   */
  static getTitleClasses(): string {
    return [
      'text-[--text-size-lg]',
      'font-semibold',
      'mb-2',
      'text-[--color-text-primary]'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для текста ошибки
   */
  static getTextClasses(): string {
    return [
      'text-[--text-size-sm]',
      'mb-4',
      'text-[--color-text-secondary]',
      'leading-relaxed'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для кнопки повтора
   */
  static getRetryButtonClasses(): string {
    return [
      'mt-4',
      'bg-[--color-danger-500]',
      'hover:bg-[--color-danger-600]',
      'text-[--color-text-inverse]',
      'border',
      'border-none',
      'py-2',
      'px-4',
      'rounded',
      'cursor-pointer',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-[--color-danger-500]'
    ].join(' ');
  }

  /**
   * Получить CSS-классы для контейнера кнопки
   */
  static getButtonContainerClasses(): string {
    return [
      'mt-4'
    ].join(' ');
  }
}


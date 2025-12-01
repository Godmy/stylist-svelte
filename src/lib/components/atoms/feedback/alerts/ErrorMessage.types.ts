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
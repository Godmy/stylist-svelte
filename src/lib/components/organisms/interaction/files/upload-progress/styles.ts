/**
 * Менеджер стилей для компонента UploadProgress
 *
 * Следует принципам SOLID:
 * - SRP: Только генерация CSS-классов для UploadProgress
 * - OCP: Легко расширяем новыми вариантами стилей
 * - LSP: Совместим с базовыми классами
 * - ISP: Только нужные методы
 * - DIP: Зависимости от абстракций, а не от деталей реализации
 */

import type { UploadProgressVariant } from './types';

export class UploadProgressStyleManager {
  /**
   * Получает CSS-классы для корневого элемента компонента
   */
  static getHostClasses(variant: UploadProgressVariant = 'default', hostClass?: string): string {
    const baseClasses = [
      'c-upload-progress',
      'flex',
      'flex-col',
      'gap-3'
    ];

    // Добавляем классы в зависимости от варианта
    const variantClasses = this.getVariantClasses(variant);
    if (variantClasses) {
      baseClasses.push(variantClasses);
    }

    if (hostClass) {
      baseClasses.push(hostClass);
    }

    return baseClasses.join(' ');
  }

  /**
   * Получает CSS-классы для отдельного элемента файла
   */
  static getItemClasses(status: string, compact: boolean = false, itemClass?: string): string {
    const baseClasses = [
      'upload-progress-item',
      'flex',
      'items-center',
      'p-3',
      'border',
      'rounded-lg',
      'transition-all',
      'duration-200'
    ];

    // Добавляем стили в зависимости от статуса
    const statusClasses = this.getStatusClasses(status);
    if (statusClasses) {
      baseClasses.push(statusClasses);
    }

    // Добавляем классы для компактного режима
    if (compact) {
      baseClasses.push('p-2');
    }

    if (itemClass) {
      baseClasses.push(itemClass);
    }

    return baseClasses.join(' ');
  }

  /**
   * Получает CSS-классы для прогресс-бара
   */
  static getProgressClasses(progress: number, progressClass?: string): string {
    const baseClasses = [
      'upload-progress-bar',
      'h-2',
      'rounded-full',
      'overflow-hidden',
      'transition-all',
      'duration-300'
    ];

    // Добавляем цвет в зависимости от прогресса
    const progressColorClasses = this.getProgressColorClasses(progress);
    if (progressColorClasses) {
      baseClasses.push(progressColorClasses);
    }

    if (progressClass) {
      baseClasses.push(progressClass);
    }

    return baseClasses.join(' ');
  }

  /**
   * Получает CSS-классы для заполнения прогресс-бара
   */
  static getProgressFillClasses(progress: number): string {
    const baseClasses = [
      'upload-progress-fill',
      'h-full',
      'rounded-full',
      'transition-all',
      'duration-300'
    ];

    // Добавляем цвет в зависимости от прогресса
    const progressColorClasses = this.getProgressColorClasses(progress);
    if (progressColorClasses) {
      baseClasses.push(progressColorClasses.replace('bg-', 'bg-'));
    } else {
      baseClasses.push('bg-[--color-primary-500]');
    }

    return baseClasses.join(' ');
  }

  /**
   * Возвращает классы в зависимости от варианта компонента
   */
  static getVariantClasses(variant: UploadProgressVariant): string {
    const variantClasses: Record<UploadProgressVariant, string> = {
      default: 'space-y-3',
      compact: 'space-y-2',
      detailed: 'space-y-4'
    };

    return variantClasses[variant];
  }

  /**
   * Возвращает классы в зависимости от статуса файла
   */
  static getStatusClasses(status: string): string {
    const statusClasses: Record<string, string> = {
      success: 'border-[--color-success-border] bg-[--color-success-bg]',
      error: 'border-[--color-danger-border] bg-[--color-danger-bg]',
      uploading: 'border-[--color-info-border] bg-[--color-info-bg]',
      idle: 'border-[--color-default-border] bg-[--color-default-bg]'
    };

    return statusClasses[status] || statusClasses.idle;
  }

  /**
   * Возвращает цветовые классы в зависимости от прогресса
   */
  static getProgressColorClasses(progress: number): string {
    if (progress < 30) {
      return 'bg-[--color-success-400]';
    } else if (progress < 70) {
      return 'bg-[--color-success-500]';
    } else {
      return 'bg-[--color-success-600]';
    }
  }

  /**
   * Возвращает классы для иконки в зависимости от статуса
   */
  static getIconClasses(status: string): string {
    const statusClasses: Record<string, string> = {
      success: 'text-[--color-success-text]',
      error: 'text-[--color-danger-text]',
      uploading: 'text-[--color-info-text] animate-pulse',
      idle: 'text-[--color-default-text]'
    };

    return `h-6 w-6 ${statusClasses[status] || statusClasses.idle}`;
  }

  /**
   * Возвращает классы для текста имени файла
   */
  static getFileNameClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary] truncate max-w-[180px]';
  }

  /**
   * Возвращает классы для текста размера файла
   */
  static getFileSizeClasses(): string {
    return 'text-xs text-[--color-text-secondary] mt-1';
  }

  /**
   * Возвращает классы для текста ошибки
   */
  static getErrorTextClasses(): string {
    return 'text-xs text-[--color-danger-text] mt-1 truncate max-w-[180px]';
  }

  /**
   * Возвращает классы для текста прогресса
   */
  static getProgressTextClasses(): string {
    return 'text-xs text-[--color-text-secondary] mt-1';
  }

  /**
   * Возвращает классы для контейнера действий
   */
  static getActionsContainerClasses(): string {
    return 'ml-4 flex-shrink-0 flex space-x-2';
  }

  /**
   * Возвращает классы для сообщения о скрытых загрузках
   */
  static getHiddenUploadsMessageClasses(): string {
    return 'text-center text-sm text-[--color-text-secondary] py-2';
  }

  /**
   * Возвращает классы для сообщения об отсутствии загрузок
   */
  static getNoUploadsMessageClasses(): string {
    return 'text-center py-4 text-[--color-text-secondary]';
  }
}
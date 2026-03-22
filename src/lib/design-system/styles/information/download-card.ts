/**
 * Менеджер стилей для компонента DownloadCard
 *
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * Отвечает исключительно за генерацию CSS-классов в зависимости от пропсов
 * и не содержит никакой логики отображения или поведения.
 *
 * НОРМАЛИЗОВАННАЯ ВЕРСИЯ - использует общие базовые классы из cards.ts
 */

import type { TokenAppearance } from '$stylist/design-system/tokens/information/appearance';
import { CardStyleManager } from '$stylist/design-system/styles/information/card';

export class DownloadCardStyleManager {
  /**
   * Возвращает CSS-классы для основного контейнера DownloadCard
   * Использует нормализованные базовые классы для карточек
   */
  static getContainerClasses(className?: string): string {
    return `${CardStyleManager.getBaseClasses()} download-card flex items-center p-4 hover:shadow-md transition-shadow duration-[var(--duration-200)] ${className || ''}`.trim();
  }

  /**
   * Возвращает CSS-классы для иконки файла
   * Использует нормализованные классы для иконок
   */
  static getIconContainerClasses(): string {
    return CardStyleManager.getIconContainerBaseClasses();
  }

  /**
   * Возвращает CSS-классы для иконки в зависимости от варианта
   */
  static getIconClasses(variant: TokenAppearance = 'primary'): string {
    const variantClasses: Partial<Record<TokenAppearance, string>> = {
      primary: 'text-[--color-primary-500] bg-[--color-primary-50]',
      secondary: 'text-[--color-neutral-500] bg-[--color-neutral-50]',
      success: 'text-[--color-success-500] bg-[--color-success-50]',
      warning: 'text-[--color-warning-500] bg-[--color-warning-50]',
      danger: 'text-[--color-danger-500] bg-[--color-danger-50]',
      error: 'text-[--color-danger-500] bg-[--color-danger-50]',
      info: 'text-[--color-info-500] bg-[--color-info-50]'
    };

    return `${CardStyleManager.getIconClasses('md')} ${variantClasses[variant] || variantClasses.primary}`;
  }

  /**
   * Возвращает CSS-классы для контейнера информации о файле
   * Использует нормализованные классы для текстового контента
   */
  static getInfoContainerClasses(): string {
    return CardStyleManager.getTextContentBaseClasses();
  }

  /**
   * Возвращает CSS-классы для имени файла
   * Использует нормализованные классы для усечения текста
   */
  static getFileNameClasses(): string {
    return `text-sm font-medium text-[--color-text-primary] ${CardStyleManager.getTruncateBaseClasses()} block`;
  }

  /**
   * Возвращает CSS-классы для метаданных файла
   */
  static getMetadataClasses(): string {
    return 'text-xs text-[--color-text-secondary] mt-1 flex flex-wrap gap-2';
  }

  /**
   * Возвращает CSS-классы для отдельного элемента метаданных
   */
  static getMetadataItemClasses(): string {
    return 'inline-flex items-center';
  }

  /**
   * Возвращает CSS-классы для кнопки скачивания
   * Использует нормализованные классы для действий
   */
  static getDownloadButtonClasses(variant: TokenAppearance = 'primary'): string {
    const variantClasses: Partial<Record<TokenAppearance, string>> = {
      primary: 'text-[--color-primary-600] hover:text-[--color-primary-700]',
      secondary: 'text-[--color-neutral-600] hover:text-[--color-neutral-700]',
      success: 'text-[--color-success-600] hover:text-[--color-success-700]',
      warning: 'text-[--color-warning-600] hover:text-[--color-warning-700]',
      danger: 'text-[--color-danger-600] hover:text-[--color-danger-700]',
      error: 'text-[--color-danger-600] hover:text-[--color-danger-700]',
      info: 'text-[--color-info-600] hover:text-[--color-info-700]'
    };

    return `ml-4 p-2 rounded-full hover:bg-[--color-background-secondary] transition-colors duration-[var(--duration-150)] ${variantClasses[variant] || variantClasses.primary}`;
  }
}









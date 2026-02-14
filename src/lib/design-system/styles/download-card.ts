/**
 * Менеджер стилей для компонента DownloadCard
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * Отвечает исключительно за генерацию CSS-классов в зависимости от пропсов
 * и не содержит никакой логики отображения или поведения.
 */

import type { DownloadCardVariant } from '$stylist/design-system/props/download-card';

export class DownloadCardStyleManager {
  /**
   * Возвращает CSS-классы для основного контейнера DownloadCard
   */
  static getContainerClasses(className?: string): string {
    return `download-card flex items-center p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200 ${className || ''}`.trim();
  }

  /**
   * Возвращает CSS-классы для иконки файла
   */
  static getIconContainerClasses(): string {
    return 'flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-4';
  }

  /**
   * Возвращает CSS-классы для иконки в зависимости от варианта
   */
  static getIconClasses(variant: DownloadCardVariant = 'primary'): string {
    const variantClasses = {
      primary: 'text-blue-500 bg-blue-50',
      secondary: 'text-gray-500 bg-gray-50',
      success: 'text-green-500 bg-green-50',
      warning: 'text-yellow-500 bg-yellow-50',
      danger: 'text-red-500 bg-red-50'
    };

    return `w-6 h-6 ${variantClasses[variant]}`;
  }

  /**
   * Возвращает CSS-классы для контейнера информации о файле
   */
  static getInfoContainerClasses(): string {
    return 'flex-1 min-w-0';
  }

  /**
   * Возвращает CSS-классы для имени файла
   */
  static getFileNameClasses(): string {
    return 'text-sm font-medium text-gray-900 truncate block';
  }

  /**
   * Возвращает CSS-классы для метаданных файла
   */
  static getMetadataClasses(): string {
    return 'text-xs text-gray-500 mt-1 flex flex-wrap gap-2';
  }

  /**
   * Возвращает CSS-классы для отдельного элемента метаданных
   */
  static getMetadataItemClasses(): string {
    return 'inline-flex items-center';
  }

  /**
   * Возвращает CSS-классы для кнопки скачивания
   */
  static getDownloadButtonClasses(variant: DownloadCardVariant = 'primary'): string {
    const variantClasses = {
      primary: 'text-blue-600 hover:text-blue-800',
      secondary: 'text-gray-600 hover:text-gray-800',
      success: 'text-green-600 hover:text-green-800',
      warning: 'text-yellow-600 hover:text-yellow-800',
      danger: 'text-red-600 hover:text-red-800'
    };

    return `ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-150 ${variantClasses[variant]}`;
  }
}
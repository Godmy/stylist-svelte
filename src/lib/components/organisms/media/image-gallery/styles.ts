/**
 * @class ImageGalleryStyleManager
 * @description Менеджер стилей для компонента ImageGallery
 * Следует принципу единственной ответственности (SRP) - отвечает только за стилизацию
 * Следует принципу инверсии зависимостей (DIP) - абстракции не зависят от деталей реализации
 */
export class ImageGalleryStyleManager {
  /**
   * Возвращает CSS классы для основного контейнера галереи
   * @param className Дополнительные классы от пользователя
   * @returns Строка с CSS классами
   */
  static getHostClasses(className: string = ''): string {
    return `w-full ${className}`.trim();
  }

  /**
   * Возвращает CSS классы для контейнера основного изображения
   * @param imageClass Дополнительные классы от пользователя
   * @returns Строка с CSS классами
   */
  static getImageContainerClasses(imageClass: string = ''): string {
    return `relative overflow-hidden rounded-lg ${imageClass}`.trim();
  }

  /**
   * Возвращает CSS классы для основного изображения
   * @param imageClass Дополнительные классы от пользователя
   * @returns Строка с CSS классами
   */
  static getImageClasses(imageClass: string = ''): string {
    return `w-full h-auto object-cover ${imageClass}`.trim();
  }

  /**
   * Возвращает CSS классы для кнопки навигации
   * @param navigationClass Дополнительные классы от пользователя
   * @returns Строка с CSS классами
   */
  static getNavigationButtonClasses(navigationClass: string = ''): string {
    return `absolute top-1/2 transform -translate-y-1/2 bg-[--color-bg-overlay] text-[--color-text-inverse] p-2 rounded-full hover:bg-[--color-bg-overlay-hover] ${navigationClass}`.trim();
  }

  /**
   * Возвращает CSS классы для левой кнопки навигации
   * @param navigationClass Дополнительные классы от пользователя
   * @returns Строка с CSS классами
   */
  static getLeftNavigationButtonClasses(navigationClass: string = ''): string {
    return `absolute top-1/2 left-2 transform -translate-y-1/2 bg-[--color-bg-overlay] text-[--color-text-inverse] p-2 rounded-full hover:bg-[--color-bg-overlay-hover] ${navigationClass}`.trim();
  }

  /**
   * Возвращает CSS классы для правой кнопки навигации
   * @param navigationClass Дополнительные классы от пользователя
   * @returns Строка с CSS классами
   */
  static getRightNavigationButtonClasses(navigationClass: string = ''): string {
    return `absolute top-1/2 right-2 transform -translate-y-1/2 bg-[--color-bg-overlay] text-[--color-text-inverse] p-2 rounded-full hover:bg-[--color-bg-overlay-hover] ${navigationClass}`.trim();
  }

  /**
   * Возвращает CSS классы для счетчика изображений
   * @returns Строка с CSS классами
   */
  static getImageCounterClasses(): string {
    return 'absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[--color-bg-overlay] text-[--color-text-inverse] text-sm px-3 py-1 rounded-full';
  }

  /**
   * Возвращает CSS классы для подписи изображения
   * @param captionClass Дополнительные классы от пользователя
   * @returns Строка с CSS классами
   */
  static getCaptionClasses(captionClass: string = ''): string {
    return `mt-2 text-center text-[--color-text-secondary] ${captionClass}`.trim();
  }

  /**
   * Возвращает CSS классы для контейнера миниатюр
   * @returns Строка с CSS классами
   */
  static getThumbnailsContainerClasses(): string {
    return 'flex overflow-x-auto mt-4 space-x-2 py-2';
  }

  /**
   * Возвращает CSS классы для элемента миниатюры
   * @param isSelected Флаг, указывающий, выбрана ли миниатюра
   * @param thumbnailClass Дополнительные классы от пользователя
   * @returns Строка с CSS классами
   */
  static getThumbnailClasses(isSelected: boolean, thumbnailClass: string = ''): string {
    const baseClasses = 'flex-shrink-0 cursor-pointer rounded-md overflow-hidden border-2';
    const selectedClass = isSelected ? 'border-[--color-primary-500]' : 'border-transparent';
    
    return `${baseClasses} ${selectedClass} ${thumbnailClass}`.trim();
  }

  /**
   * Возвращает CSS классы для изображения миниатюры
   * @returns Строка с CSS классами
   */
  static getThumbnailImageClasses(): string {
    return 'w-16 h-16 object-cover';
  }

  /**
   * Возвращает CSS классы для оверлея в полноэкранном режиме
   * @returns Строка с CSS классами
   */
  static getFullscreenOverlayClasses(): string {
    return 'fixed inset-0 bg-[--color-bg-overlay] z-50 flex items-center justify-center';
  }

  /**
   * Возвращает CSS классы для кнопки закрытия в полноэкранном режиме
   * @returns Строка с CSS классами
   */
  static getFullscreenCloseButtonClasses(): string {
    return 'absolute top-4 right-4 text-[--color-text-inverse] p-2 rounded-full hover:bg-[--color-bg-overlay-hover]';
  }

  /**
   * Возвращает CSS классы для левой кнопки навигации в полноэкранном режиме
   * @returns Строка с CSS классами
   */
  static getFullscreenLeftButtonClasses(): string {
    return 'absolute left-4 text-[--color-text-inverse] p-2 rounded-full hover:bg-[--color-bg-overlay-hover]';
  }

  /**
   * Возвращает CSS классы для правой кнопки навигации в полноэкранном режиме
   * @returns Строка с CSS классами
   */
  static getFullscreenRightButtonClasses(): string {
    return 'absolute right-4 text-[--color-text-inverse] p-2 rounded-full hover:bg-[--color-bg-overlay-hover]';
  }

  /**
   * Возвращает CSS классы для контейнера полноэкранного изображения
   * @returns Строка с CSS классами
   */
  static getFullscreenImageContainerClasses(): string {
    return 'flex flex-col items-center max-w-4xl max-h-full';
  }

  /**
   * Возвращает CSS классы для полноэкранного изображения
   * @returns Строка с CSS классами
   */
  static getFullscreenImageClasses(): string {
    return 'max-h-[80vh] object-contain';
  }

  /**
   * Возвращает CSS классы для подписи в полноэкранном режиме
   * @param captionClass Дополнительные классы от пользователя
   * @returns Строка с CSS классами
   */
  static getFullscreenCaptionClasses(captionClass: string = ''): string {
    return `mt-4 text-center text-[--color-text-inverse] ${captionClass}`.trim();
  }

  /**
   * Возвращает CSS классы для текста счетчика в полноэкранном режиме
   * @returns Строка с CSS классами
   */
  static getFullscreenCounterClasses(): string {
    return 'mt-4 text-[--color-text-inverse] text-sm';
  }
}
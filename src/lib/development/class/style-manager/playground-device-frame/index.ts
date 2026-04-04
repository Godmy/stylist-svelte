/**
 * Менеджер стилей для компонента PlaygroundDeviceFrame
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class PlaygroundDeviceFrameStyleManager {
  /**
   * Получает CSS-классы для основного контейнера
   */
  static getContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'relative mx-auto border-[--color-border-primary] bg-[--color-background-primary] rounded-lg overflow-hidden shadow-lg';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для мобильного устройства
   */
  static getMobileClasses(): string {
    return 'w-[375px] h-[667px] max-w-full';
  }

  /**
   * Получает CSS-классы для планшета
   */
  static getTabletClasses(): string {
    return 'w-[768px] h-[1024px] max-w-full';
  }

  /**
   * Получает CSS-классы для десктопа
   */
  static getDesktopClasses(): string {
    return 'w-full h-[600px]';
  }

  /**
   * Получает CSS-классы для ноутбука
   */
  static getLaptopClasses(): string {
    return 'w-full h-[700px]';
  }

  /**
   * Получает CSS-классы для портретной ориентации
   */
  static getPortraitClasses(): string {
    return '';
  }

  /**
   * Получает CSS-классы для ландшафтной ориентации
   */
  static getLandscapeClasses(): string {
    return 'rotate-90';
  }

  /**
   * Получает CSS-классы для заголовка устройства
   */
  static getDeviceHeaderClasses(): string {
    return 'flex items-center justify-center h-6 bg-[--color-background-tertiary] border-b border-[--color-border-primary]';
  }

  /**
   * Получает CSS-классы для камеры
   */
  static getCameraClasses(): string {
    return 'w-2 h-2 rounded-full bg-[--color-neutral-800]';
  }

  /**
   * Получает CSS-классы для динамиков
   */
  static getSpeakerClasses(): string {
    return 'flex space-x-1';
  }

  /**
   * Получает CSS-классы для точки динамика
   */
  static getSpeakerDotClasses(): string {
    return 'w-1 h-1 rounded-full bg-[--color-neutral-600]';
  }

  /**
   * Получает CSS-классы для контейнера содержимого
   */
  static getContentContainerClasses(): string {
    return 'w-full h-full overflow-auto';
  }

  /**
   * Получает CSS-классы для контейнера кнопок управления
   */
  static getControlsContainerClasses(): string {
    return 'absolute top-1/2 -translate-y-1/2 -left-12 flex flex-col space-y-4';
  }

  /**
   * Получает CSS-классы для кнопки управления
   */
  static getControlButtonClasses(): string {
    return 'p-2 rounded-full bg-[--color-background-secondary] border border-[--color-border-primary] hover:bg-[--color-background-tertiary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для иконки управления
   */
  static getControlIconClasses(): string {
    return 'w-5 h-5 text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для метки устройства
   */
  static getDeviceLabelClasses(): string {
    return 'absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-medium text-[--color-text-secondary] whitespace-nowrap';
  }

  /**
   * Получает CSS-классы для контейнера размеров
   */
  static getSizeSelectorContainerClasses(): string {
    return 'flex items-center justify-center space-x-2 mb-4';
  }

  /**
   * Получает CSS-классы для кнопки размера
   */
  static getSizeButtonClasses(isActive: boolean): string {
    const baseClasses = 'px-3 py-1 rounded-md text-sm font-medium transition-colors';
    return isActive
      ? `${baseClasses} bg-[--color-primary-600] text-[--color-text-inverse]`
      : `${baseClasses} bg-[--color-background-secondary] text-[--color-text-secondary] hover:text-[--color-text-primary]`;
  }

  /**
   * Получает CSS-классы для контейнера ориентации
   */
  static getOrientationSelectorContainerClasses(): string {
    return 'flex items-center justify-center space-x-2 mb-4';
  }

  /**
   * Получает CSS-классы для кнопки ориентации
   */
  static getOrientationButtonClasses(isActive: boolean): string {
    const baseClasses = 'px-3 py-1 rounded-md text-sm font-medium transition-colors';
    return isActive
      ? `${baseClasses} bg-[--color-primary-600] text-[--color-text-inverse]`
      : `${baseClasses} bg-[--color-background-secondary] text-[--color-text-secondary] hover:text-[--color-text-primary]`;
  }
}

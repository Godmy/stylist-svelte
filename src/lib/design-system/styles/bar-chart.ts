/**
 * Менеджер стилей для компонента BarChart
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID -
 * данный класс отвечает только за генерацию CSS-классов для компонента BarChart
 */

export class BarChartStyleManager {
  /**
   * Получает CSS-классы для основного контейнера диаграммы
   */
  static getContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'bar-chart';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для заголовка диаграммы
   */
  static getTitleClasses(): string {
    return 'text-lg font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для контейнера диаграммы
   */
  static getChartContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'chart-container border rounded-lg p-4';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для элемента SVG
   */
  static getSvgClasses(): string {
    return 'overflow-visible';
  }

  /**
   * Получает CSS-классы для бара (столбца) диаграммы
   */
  static getBarClasses(isHovered: boolean = false): string {
    const baseClasses = 'transition-all duration-200 ease-in-out';
    const hoverClasses = isHovered ? 'scale-y-[1.05]' : 'scale-y-100';
    return `${baseClasses} ${hoverClasses}`;
  }

  /**
   * Получает CSS-классы для легенды
   */
  static getLegendClasses(): string {
    return 'flex flex-wrap gap-4 mt-4';
  }

  /**
   * Получает CSS-классы для элемента легенды
   */
  static getLegendItemClasses(): string {
    return 'flex items-center';
  }

  /**
   * Получает CSS-классы для текста легенды
   */
  static getLegendTextClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для значения в легенде
   */
  static getLegendValueClasses(): string {
    return 'text-sm text-[--color-text-tertiary] ml-1';
  }

  /**
   * Получает CSS-классы для контейнера с заголовком
   */
  static getTitleContainerClasses(): string {
    return 'flex items-center justify-between mb-2';
  }

  /**
   * Получает CSS-классы для иконки информации
   */
  static getInfoIconClasses(): string {
    return 'h-4 w-4 text-[--color-text-secondary]';
  }
}
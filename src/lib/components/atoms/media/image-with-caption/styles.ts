/**
 * @class ImageWithCaptionStyleManager
 * @description Менеджер стилей для компонента ImageWithCaption
 * Следует принципу единственной ответственности (SRP) - отвечает только за стилизацию
 * Следует принципу инверсии зависимостей (DIP) - абстракции не зависят от деталей реализации
 */
export class ImageWithCaptionStyleManager {
  /**
   * Возвращает CSS классы для основного контейнера
   * @param hostClass Дополнительные классы от пользователя
   * @param rounded Флаг закругления углов
   * @param bordered Флаг наличия границы
   * @param shadow Флаг наличия тени
   * @returns Строка с CSS классами
   */
  static getHostClasses(hostClass: string = '', rounded: boolean = false, bordered: boolean = false, shadow: boolean = false): string {
    const roundedClass = rounded ? 'rounded-lg' : '';
    const borderedClass = bordered ? 'border border-[--color-border-default]' : '';
    const shadowClass = shadow ? 'shadow-md' : '';
    
    return `image-with-caption flex flex-col ${roundedClass} ${borderedClass} ${shadowClass} ${hostClass}`.trim();
  }

  /**
   * Возвращает CSS классы для изображения
   * @param imageClass Дополнительные классы от пользователя
   * @param rounded Флаг закругления углов
   * @param bordered Флаг наличия границы
   * @param shadow Флаг наличия тени
   * @returns Строка с CSS классами
   */
  static getImageClasses(imageClass: string = '', rounded: boolean = false, bordered: boolean = false, shadow: boolean = false): string {
    const roundedClass = rounded ? 'rounded-lg' : '';
    const borderedClass = bordered ? 'border border-[--color-border-default]' : '';
    const shadowClass = shadow ? 'shadow-md' : '';
    
    return `w-full object-cover ${roundedClass} ${borderedClass} ${shadowClass} ${imageClass}`.trim();
  }

  /**
   * Возвращает CSS классы для подписи
   * @param captionClass Дополнительные классы от пользователя
   * @returns Строка с CSS классами
   */
  static getCaptionClasses(captionClass: string = ''): string {
    return `mt-2 text-center text-sm text-[--color-text-secondary] ${captionClass}`.trim();
  }
}
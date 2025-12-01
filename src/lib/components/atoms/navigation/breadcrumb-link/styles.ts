/**
 * Менеджер стилей для компонента BreadcrumbLink
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID -
 * данный класс отвечает только за генерацию CSS-классов для компонента BreadcrumbLink
 */

export class BreadcrumbLinkStyleManager {
  /**
   * Получает CSS-классы для компонента в зависимости от его состояния
   */
  static getLinkClasses(isCurrent: boolean = false, additionalClass: string = ''): string {
    const baseClasses = 'inline-block';
    const stateClasses = isCurrent
      ? 'text-[--color-text-secondary] cursor-default'
      : 'text-[--color-primary-600] hover:text-[--color-primary-800] hover:underline';
    
    const allClasses = `${baseClasses} ${stateClasses}`;
    return additionalClass ? `${allClasses} ${additionalClass}` : allClasses;
  }
}
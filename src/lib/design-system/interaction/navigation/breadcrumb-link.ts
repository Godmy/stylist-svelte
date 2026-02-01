/**
 * Типы для компонента BreadcrumbLink
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID -
 * данный файл отвечает только за типизацию компонента BreadcrumbLink
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

/**
 * Интерфейс пропсов компонента BreadcrumbLink
 */
export interface IBreadcrumbLinkProps extends HTMLAttributes<HTMLElement> {
  /**
   * Указывает, является ли ссылка текущей (неактивной)
   * @default false
   */
  current?: boolean;
  
  /**
   * URL-адрес ссылки
   */
  href?: string;
  
  /**
   * Содержимое компонента
   */
  children?: Snippet;
}

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


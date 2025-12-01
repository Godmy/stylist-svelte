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
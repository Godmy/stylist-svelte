/**
 * Типы и интерфейсы для компонента Breadcrumbs
 *
 * Этот компонент следует принципу единственной ответственности (SRP) из SOLID,
 * вынося определения типов в отдельный файл для лучшей изолированности и переиспользуемости.
 */

import type { IBreadcrumbItem } from '../breadcrumb/types';

/**
 * Интерфейс для пропсов компонента Breadcrumbs
 */
export interface IBreadcrumbsProps {
  /** Массив хлебных крошек для отображения */
  crumbs: IBreadcrumbItem[];
}

/**
 * Тип для вариантов отображения хлебных крошек
 */
export type TBreadcrumbVariant = 'default' | 'compact';
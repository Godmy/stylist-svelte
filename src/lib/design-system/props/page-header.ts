import type { Snippet } from 'svelte';
import type { IBreadcrumbItem } from '$stylist/design-system/props/breadcrumbs';

/**
 * Типы и интерфейсы для компонента PageHeader
 *
 * PageHeader - заголовок страницы с breadcrumbs и описанием
 * Следует принципам SOLID:
 *
 * Single Responsibility: Компонент отвечает только за отображение заголовка страницы
 * Open/Closed: Легко расширяется через пропсы
 * Liskov Substitution: Может быть заменен другим компонентом навигации
 * Interface Segregation: Имеет минимальный, конкретный интерфейс
 * Dependency Inversion: Зависит от абстракций, а не от конкретных реализаций
 */

export interface IPageHeaderProps {
  /** Заголовок страницы */
  title: string;

  /** Описание страницы */
  description?: string;

  /** Хлебные крошки */
  breadcrumbs?: IBreadcrumbItem[];

  /** Слот для действий (обычно кнопки справа) */
  actions?: Snippet;

  /** Дополнительные CSS классы */
  class?: string;
}

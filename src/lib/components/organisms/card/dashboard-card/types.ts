import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

/**
 * Варианты отображения DashboardCard
 */
export type DashboardCardVariant = 'default' | 'compact' | 'minimal';

/**
 * Типы пропсов для компонента DashboardCard
 */
export interface IDashboardCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Заголовок карточки
   */
  title?: string;

  /**
   * Подзаголовок карточки
   */
  subtitle?: string;

  /**
   * Основной контент карточки
   */
  content: Snippet;

  /**
   * Элементы действий (обычно кнопки)
   */
  actions?: Snippet;

  /**
   * Футер карточки
   */
  footer?: Snippet;

  /**
   * Возможность сворачивания карточки
   */
  collapsible?: boolean;

  /**
   * Начальное состояние свернутости
   */
  initiallyCollapsed?: boolean;

  /**
   * CSS класс для основного контейнера
   */
  class?: string;

  /**
   * CSS класс для заголовка
   */
  headerClass?: string;

  /**
   * CSS класс для тела
   */
  bodyClass?: string;

  /**
   * CSS класс для футера
   */
  footerClass?: string;

  /**
   * Вариант отображения карточки
   */
  variant?: DashboardCardVariant;
}
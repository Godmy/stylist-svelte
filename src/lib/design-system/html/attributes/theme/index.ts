/**
 * Theme-aware HTML Attributes
 *
 * Базовая точка входа для всех компонентов, которым нужна связанность с темой:
 * - проксируются `class`, `style`, `data-*`, `aria-*` и прочие стандартные атрибуты.
 * - добавляются семантические атрибуты для темизации (`data-theme`, `data-variant`, `data-tone`, `data-state`).
 * - компоненты могут использовать переходы/размеры из темы, а пользователь — переопределять классы/стили.
 *
 * @package @stylist/design-system
 * @subpackage html/attributes/theme
 */

import type { HTMLAttributes } from 'svelte/elements';

export type ThemeVariant = 'default' | 'accent' | 'muted' | 'ghost' | 'outline';
export type ThemeTone = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

export interface ThemeAttributes<T extends HTMLElement = HTMLElement> extends HTMLAttributes<T> {
  /**
   * Привязка к теме (например `light`, `dark`, `brand`), которая может использоваться
   * для переключения CSS правил на уровне компонента или контейнера.
   */
  'data-theme'?: string;

  /**
   * Дает возможность заранее сообщить визуальный вариант (color system variant).
   */
  'data-variant'?: ThemeVariant;

  /**
   * Указывает семантический тон (tone) для текстов/иконок.
   */
  'data-tone'?: ThemeTone;

  /**
   * Состояние компонента (`open`, `disabled`, `locked` и т.п.), может использоваться
   * чтобы применять переходы или подставлять `--opacity-*`.
   */
  'data-state'?: string;

  /**
   * При необходимости можно осмысленно выставлять имя градиента/фонов (`gradient-primary`, `gradient-hero` и
   * т.п.), чтобы `background-image: var(--gradient-${value})` работал для тем.
   */
  'data-gradient'?: string;
}

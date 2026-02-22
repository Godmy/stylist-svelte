import type { Snippet } from 'svelte';

/**
 * Типы и интерфейсы для компонента GradientBackground
 *
 * GradientBackground - компонент для отображения анимированного градиентного фона
 * Следует принципам SOLID:
 *
 * Single Responsibility: Компонент отвечает только за отображение анимированного градиента
 * Open/Closed: Легко расширяется через пропсы
 * Liskov Substitution: Может быть заменен другим компонентом фона
 * Interface Segregation: Имеет минимальный, конкретный интерфейс
 * Dependency Inversion: Зависит от абстракций, а не от конкретных реализаций
 */

export type GradientVariant =
  | 'dynamic'     // Анимированный градиент с плавным изменением цветов
  | 'static'      // Статичный градиент
  | 'particles';  // Градиент с эффектом частиц

export interface IGradientBackgroundProps {
  /** Вариант градиента */
  variant?: GradientVariant; // default: 'dynamic'

  /** Начальные цвета градиента */
  colors?: string[]; // default: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57']

  /** Скорость анимации (только для dynamic варианта) */
  speed?: number; // default: 20 (чем больше значение, тем медленнее анимация)

  /** Интенсивность анимации (только для dynamic варианта) */
  intensity?: number; // default: 50 (0-100)

  /** Направление градиента */
  direction?: string; // default: 'diagonal' ('diagonal', 'horizontal', 'vertical', 'radial')

  /** Дополнительные CSS классы */
  class?: string;

  /** Слот для дочернего контента */
  children?: Snippet;
}
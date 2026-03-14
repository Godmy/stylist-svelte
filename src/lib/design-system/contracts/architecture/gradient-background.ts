import type { Snippet } from 'svelte';  // Градиент с эффектом частиц
import type { GradientVariant } from '../../tokens/architecture/gradient';

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




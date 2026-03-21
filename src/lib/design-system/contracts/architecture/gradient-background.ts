import type { ArchitectureHTMLAttributes } from '$stylist/design-system/html/attributes/architecture';
import type { ChildrenHtmlAttributes } from '$stylist/design-system/html/attributes/children';
import type { GradientVariant } from '$stylist/design-system/tokens/architecture/gradient';

export interface IGradientBackgroundProps
	extends ArchitectureHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement> {
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
}



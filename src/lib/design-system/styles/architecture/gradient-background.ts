/**
 * Менеджер стилей для компонента GradientBackground
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * Отвечает исключительно за генерацию CSS-классов в зависимости от пропсов
 * и не содержит никакой логики отображения или поведения.
 */

import type { GradientVariant } from '$stylist/design-system/tokens/architecture/gradient';

export class GradientBackgroundStyleManager {
  /**
   * Возвращает CSS-классы для основного контейнера GradientBackground
   */
  static getContainerClasses(className?: string): string {
    return `gradient-background absolute inset-0 overflow-hidden ${className || ''}`.trim();
  }

  /**
   * Возвращает CSS-классы для основного градиента
   */
  static getGradientClasses(variant: GradientVariant = 'dynamic', direction: string = 'diagonal'): string {
    const directionClasses = {
      diagonal: '[background-image:var(--gradient-directional-diagonal)]',
      horizontal: '[background-image:var(--gradient-directional-horizontal)]',
      vertical: '[background-image:var(--gradient-directional-vertical)]',
      radial: '[background-image:var(--gradient-radial-center)]'
    };

    const baseClasses = `absolute inset-0 opacity-[var(--opacity-70)]`;
    const directionClass = directionClasses[direction as keyof typeof directionClasses] || directionClasses.diagonal;

    if (variant === 'dynamic') {
      return `${baseClasses} ${directionClass} animate-gradient`;
    }

    return `${baseClasses} ${directionClass}`;
  }

  /**
   * Возвращает CSS-классы для обертки дочернего контента
   */
  static getContentWrapperClasses(): string {
    return 'relative z-[var(--z-index-docked)]';
  }

  /**
   * Возвращает CSS-анимацию для динамического градиента
   */
  static getGradientAnimationStyles(): string {
    return `
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 15s ease infinite;
      }
    `;
  }
}







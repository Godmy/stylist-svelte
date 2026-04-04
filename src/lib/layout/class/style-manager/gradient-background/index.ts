import type { TokenGradient } from '$stylist/layout/type/enum/gradient-mode';
import type { GradientLinear } from '$stylist/layout/type/map/gradient-linear';

export class GradientBackgroundStyleManager {
  static getContainerClasses(className?: string): string {
    return `gradient-background absolute inset-0 overflow-hidden ${className || ''}`.trim();
  }

  static getGradientClasses(variant: TokenGradient = 'dynamic', direction: GradientLinear = 'diagonal'): string {
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

  static getContentWrapperClasses(): string {
    return 'relative z-[var(--z-index-docked)]';
  }

  static getGradientInlineStyle(
    style: {
      backgroundImage: string;
      gradientStart: string;
      gradientEnd: string;
      gradientInner: string;
      gradientOuter: string;
      animationDuration?: string;
    },
    intensity: number
  ): string {
    const opacity = Math.max(0, Math.min(intensity, 100)) / 100;
    return [
      `--gradient-start: ${style.gradientStart}`,
      `--gradient-end: ${style.gradientEnd}`,
      `--gradient-inner: ${style.gradientInner}`,
      `--gradient-outer: ${style.gradientOuter}`,
      `background-image: ${style.backgroundImage}`,
      `opacity: ${opacity}`,
      style.animationDuration ? `animation-duration: ${style.animationDuration}` : null
    ]
      .filter(Boolean)
      .join('; ');
  }

  static getStyleSheet(): string {
    return `
      .gradient-background {
        background-size: 400% 400%;
        animation: gradientAnimation var(--duration-s15) var(--animation-ease) infinite;
      }

      @keyframes gradientAnimation {
        0% { background-position: 0% 50% }
        50% { background-position: 100% 50% }
        100% { background-position: 0% 50% }
      }
    `;
  }
}


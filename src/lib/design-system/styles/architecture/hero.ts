/**
 * Менеджер стилей для компонента Hero
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * Отвечает исключительно за генерацию CSS-классов в зависимости от пропсов
 * и не содержит никакой логики отображения или поведения.
 */
import type { TokenBackground } from '$stylist/design-system/tokens/information/background';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import { cn } from '$stylist/design-system/utils/cn/index';

/**
 * Менеджер стилей для компонента Hero
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * Отвечает исключительно за генерацию CSS-классов в зависимости от пропсов
 * и не содержит никакой логики отображения или поведения.
 */
export class HeroStyleManager {
  /**
   * Возвращает CSS-классы для основного контейнера Hero
   */
	static getContainerClasses(height: TokenSize = 'full', className?: string): string {
		const heightClasses: Partial<Record<TokenSize, string>> = {
			full: 'min-h-screen',
			'2/3': 'min-h-[80vh]',
			'3/5': 'min-h-[60vh]'
		};
		return cn(
			'hero relative flex w-full items-center justify-center overflow-hidden bg-[var(--color-background-primary)]',
			heightClasses[height] ?? heightClasses.full,
			className
		);
	}

  /**
   * Возвращает CSS-классы для фонового элемента
   */
  static getBackgroundClasses(backgroundVariant: TokenBackground = 'gradient'): string {
    return {
      default: 'absolute inset-0 bg-[var(--color-background-secondary)]',
      gradient: 'absolute inset-0 [background-image:var(--gradient-primary)]',
      particles: 'absolute inset-0',
      image: 'absolute inset-0 bg-cover bg-center'
    }[backgroundVariant];
  }

  /**
   * Возвращает CSS-классы для контента Hero
   */
  static getContentClasses(): string {
    return 'relative z-[var(--z-index-docked)] mx-auto max-w-4xl px-4 py-16 text-center';
  }

  /**
   * Возвращает CSS-классы для заголовка
   */
  static getTitleClasses(): string {
    return 'mb-4 text-4xl font-bold text-[var(--color-text-primary)] md:text-6xl';
  }

  /**
   * Возвращает CSS-классы для подзаголовка
   */
  static getSubtitleClasses(): string {
    return 'mx-auto mb-8 max-w-2xl text-xl text-[var(--color-text-secondary)] md:text-2xl';
  }

  /**
   * Возвращает CSS-классы для контейнера статистики
   */
  static getStatsContainerClasses(): string {
    return 'mb-10 flex flex-wrap justify-center gap-8';
  }

  /**
   * Возвращает CSS-классы для элемента статистики
   */
  static getStatItemClasses(): string {
    return 'flex flex-col items-center rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-background-primary)]/80 px-5 py-4 shadow-sm backdrop-blur-sm';
  }

  /**
   * Возвращает CSS-классы для значения статистики
   */
  static getStatValueClasses(): string {
    return 'text-3xl font-bold text-[var(--color-primary-600)]';
  }

  /**
   * Возвращает CSS-классы для метки статистики
   */
  static getStatLabelClasses(): string {
    return 'mt-1 text-sm text-[var(--color-text-tertiary)]';
  }

  /**
   * Возвращает CSS-классы для контейнера CTA кнопок
   */
  static getCTAContainerClasses(): string {
    return 'flex flex-wrap justify-center gap-4';
  }

  /**
   * Возвращает CSS-классы для CTA кнопки
   */
  static getCTAButtonClasses(isPrimary: boolean): string {
    return cn(
      'rounded-lg px-6 py-3 font-medium transition-colors duration-[var(--duration-200)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-500)]',
      isPrimary
        ? 'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] hover:bg-[var(--color-primary-700)]'
        : 'border border-[var(--color-primary-200)] bg-[var(--color-background-primary)] text-[var(--color-primary-600)] hover:bg-[var(--color-primary-50)]'
    );
  }
}








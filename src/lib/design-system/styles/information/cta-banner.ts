import type { TokenBackground } from '$stylist/design-system/tokens/information/background';



export class CtaBannerStyleManager {
  static getContainerClasses(): string { return 'c-cta-banner cta-banner relative py-16 overflow-hidden'; }
  static getBackgroundClasses(backgroundVariant: TokenBackground = 'gradient'): string {
    const variantClasses = {
      default: 'absolute inset-0 bg-[--color-background-secondary]',
      gradient: 'absolute inset-0 [background-image:var(--gradient-primary)]',
      particles: 'absolute inset-0 bg-[--color-background-secondary]',
      solid: 'absolute inset-0 bg-[--color-background-secondary]',
      image: 'absolute inset-0 bg-cover bg-center opacity-[var(--opacity-30)]'
    };
    return variantClasses[backgroundVariant];
  }
  static getContentClasses(): string { return 'relative z-[var(--z-index-docked)] container mx-auto px-4 text-center max-w-3xl'; }
  static getTitleClasses(): string { return 'text-3xl md:text-4xl font-bold text-[--color-text-inverse] mb-4'; }
  static getDescriptionClasses(): string { return 'text-xl text-[--color-primary-100] mb-8'; }
  static getButtonsContainerClasses(): string { return 'flex flex-wrap justify-center gap-4'; }
  static getButtonClasses(variant: 'primary' | 'secondary' | 'outline'): string {
    const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-colors duration-[var(--duration-200)] focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantClasses = {
      primary: 'bg-[--color-background-primary] text-[--color-primary-600] hover:bg-[--color-background-secondary] focus:ring-[--color-text-inverse]',
      secondary: 'bg-[--color-primary-700] text-[--color-text-inverse] hover:bg-[--color-primary-800] focus:ring-[--color-primary-500]',
      outline: 'bg-transparent border-2 border-[--color-text-inverse] text-[--color-text-inverse] hover:bg-[--color-text-inverse] hover:text-[--color-primary-600] focus:ring-[--color-text-inverse]'
    };
    return `${baseClasses} ${variantClasses[variant]}`;
  }
}



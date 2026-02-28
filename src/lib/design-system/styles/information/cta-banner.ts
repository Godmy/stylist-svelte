export type CtaBannerBackgroundVariant = 'gradient' | 'solid' | 'image';

export class CtaBannerStyleManager {
  static getContainerClasses(): string { return 'c-cta-banner cta-banner relative py-16 overflow-hidden'; }
  static getBackgroundClasses(backgroundVariant: CtaBannerBackgroundVariant = 'gradient'): string {
    const variantClasses = {
      gradient: 'absolute inset-0 bg-gradient-to-r from-[--color-primary-500] to-[--color-info-600]',
      solid: 'absolute inset-0 bg-[--color-background-secondary]',
      image: 'absolute inset-0 bg-cover bg-center opacity-30'
    };
    return variantClasses[backgroundVariant];
  }
  static getContentClasses(): string { return 'relative z-10 container mx-auto px-4 text-center max-w-3xl'; }
  static getTitleClasses(): string { return 'text-3xl md:text-4xl font-bold text-[--color-text-inverse] mb-4'; }
  static getDescriptionClasses(): string { return 'text-xl text-[--color-primary-100] mb-8'; }
  static getButtonsContainerClasses(): string { return 'flex flex-wrap justify-center gap-4'; }
  static getButtonClasses(variant: 'primary' | 'secondary' | 'outline'): string {
    const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantClasses = {
      primary: 'bg-[--color-background-primary] text-[--color-primary-600] hover:bg-[--color-background-secondary] focus:ring-[--color-text-inverse]',
      secondary: 'bg-[--color-primary-700] text-[--color-text-inverse] hover:bg-[--color-primary-800] focus:ring-[--color-primary-500]',
      outline: 'bg-transparent border-2 border-[--color-text-inverse] text-[--color-text-inverse] hover:bg-[--color-text-inverse] hover:text-[--color-primary-600] focus:ring-[--color-text-inverse]'
    };
    return `${baseClasses} ${variantClasses[variant]}`;
  }
}
export type CtaBannerBackgroundVariant = 'gradient' | 'solid' | 'image';

export class CtaBannerStyleManager {
  static getContainerClasses(): string { return 'c-cta-banner cta-banner relative py-16 overflow-hidden'; }
  static getBackgroundClasses(backgroundVariant: CtaBannerBackgroundVariant = 'gradient'): string {
    const variantClasses = {
      gradient: 'absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600',
      solid: 'absolute inset-0 bg-gray-100',
      image: 'absolute inset-0 bg-cover bg-center opacity-30'
    };
    return variantClasses[backgroundVariant];
  }
  static getContentClasses(): string { return 'relative z-10 container mx-auto px-4 text-center max-w-3xl'; }
  static getTitleClasses(): string { return 'text-3xl md:text-4xl font-bold text-white mb-4'; }
  static getDescriptionClasses(): string { return 'text-xl text-blue-100 mb-8'; }
  static getButtonsContainerClasses(): string { return 'flex flex-wrap justify-center gap-4'; }
  static getButtonClasses(variant: 'primary' | 'secondary' | 'outline'): string {
    const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantClasses = {
      primary: 'bg-white text-blue-600 hover:bg-gray-100 focus:ring-white',
      secondary: 'bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-500',
      outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 focus:ring-white'
    };
    return `${baseClasses} ${variantClasses[variant]}`;
  }
}
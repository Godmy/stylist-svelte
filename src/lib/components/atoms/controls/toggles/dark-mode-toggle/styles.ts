export class DarkModeToggleStyleManager {
  static getToggleClasses(isDarkMode: boolean, isDisabled: boolean, additionalClass: string = ''): string {
    const baseClasses = [
      'dark-mode-toggle',
      'bg-none',
      'border-none',
      'text-xl',
      'cursor-pointer',
      'p-2',
      'rounded-full',
      'transition-colors',
      'duration-200'
    ];

    if (isDarkMode) {
      baseClasses.push('text-yellow-300');
    } else {
      baseClasses.push('text-yellow-500');
    }

    if (isDisabled) {
      baseClasses.push('opacity-50', 'cursor-not-allowed');
    } else {
      baseClasses.push('hover:bg-gray-100', 'dark:hover:bg-gray-700');
    }

    if (additionalClass) {
      baseClasses.push(additionalClass);
    }

    return baseClasses.join(' ');
  }
}
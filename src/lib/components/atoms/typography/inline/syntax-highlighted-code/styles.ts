import type { SyntaxHighlightedCodeVariant, SyntaxHighlightedCodeSize } from './types';

export class SyntaxHighlightedCodeStyleManager {
  static getContainerClasses(
    variant: SyntaxHighlightedCodeVariant = 'default',
    size: SyntaxHighlightedCodeSize = 'md',
    additionalClass: string = ''
  ): string {
    // Base classes for syntax highlighted code
    const baseClasses = [
      'font-mono',
      'text-sm',
      'rounded',
      'p-4',
      'overflow-x-auto'
    ];

    // Add variant-specific classes
    switch (variant) {
      case 'terminal':
        baseClasses.push(
          'bg-gray-900',
          'text-green-400',
          'border',
          'border-gray-700'
        );
        break;
      case 'diff':
        baseClasses.push(
          'bg-red-50',
          'border',
          'border-red-200'
        );
        break;
      case 'default':
      default:
        baseClasses.push(
          'bg-gray-50',
          'border',
          'border-gray-200'
        );
        break;
    }

    // Add size-specific classes
    if (size === 'sm') {
      baseClasses.push('text-xs');
    } else if (size === 'lg') {
      baseClasses.push('text-base');
    }

    if (additionalClass) {
      baseClasses.push(additionalClass);
    }

    return baseClasses.join(' ');
  }

  static getCodeClasses(language: string): string {
    return `language-${language}`;
  }

  static getLineNumbersClasses(): string {
    return 'select-none pr-4 text-gray-500 text-right inline-block';
  }
}
export class TableStyleManager {
  static getTableClasses(additionalClass?: string | null): string {
    const baseClasses = [
      'min-w-full',
      'divide-y',
      'divide-gray-200'
    ];

    if (additionalClass) {
      baseClasses.push(additionalClass);
    }

    return baseClasses.join(' ');
  }

  static getCaptionClasses(): string {
    return [
      'py-3',
      'px-6',
      'text-left',
      'text-sm',
      'font-medium',
      'text-gray-900',
      'bg-gray-50'
    ].join(' ');
  }
}
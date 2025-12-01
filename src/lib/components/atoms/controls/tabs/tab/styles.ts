export class TabStyleManager {
  static getTabClasses(
    isSelected: boolean,
    additionalClass: string = ''
  ): string {
    const baseClasses = [
      'py-4',
      'px-6',
      'text-center',
      'border-b-2',
      'font-medium',
      'text-sm'
    ];

    if (isSelected) {
      baseClasses.push(
        'border-indigo-500',
        'text-indigo-600'
      );
    } else {
      baseClasses.push(
        'border-transparent',
        'text-gray-500',
        'hover:text-gray-700',
        'hover:border-gray-300'
      );
    }

    if (additionalClass) {
      baseClasses.push(additionalClass);
    }

    return baseClasses.join(' ');
  }
}
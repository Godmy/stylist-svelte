export class TabListStyleManager {
  static getTabListClasses(additionalClass: string = ''): string {
    const baseClasses = [
      'flex',
      'border-b',
      'border-gray-200'
    ];

    if (additionalClass) {
      baseClasses.push(additionalClass);
    }

    return baseClasses.join(' ');
  }
}
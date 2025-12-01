export class TableHeaderStyleManager {
  static getTableHeaderClasses(additionalClass: string = ''): string {
    const baseClasses = [
      'bg-gray-50'
    ];

    if (additionalClass) {
      baseClasses.push(additionalClass);
    }

    return baseClasses.join(' ');
  }
}
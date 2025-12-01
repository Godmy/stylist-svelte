export class TableBodyStyleManager {
  static getTableBodyClasses(additionalClass: string = ''): string {
    const baseClasses = [
      'bg-white',
      'divide-y',
      'divide-gray-200'
    ];

    if (additionalClass) {
      baseClasses.push(additionalClass);
    }

    return baseClasses.join(' ');
  }
}
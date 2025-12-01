export class TableRowStyleManager {
  static getTableRowClasses(
    striped: boolean = false,
    active: boolean = false,
    additionalClass: string = ''
  ): string {
    const baseClasses = [];

    // Add striped classes if needed
    if (striped) {
      baseClasses.push('odd:bg-white', 'even:bg-gray-50');
    } else {
      baseClasses.push('bg-white');
    }

    // Add active class if needed
    if (active) {
      baseClasses.push('bg-blue-50');
    }

    if (additionalClass) {
      baseClasses.push(additionalClass);
    }

    return baseClasses.join(' ');
  }
}
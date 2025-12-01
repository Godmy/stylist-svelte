export class TabPanelsStyleManager {
  static getTabPanelsClasses(additionalClass: string = ''): string {
    const baseClasses = [
      'mt-4'
    ];

    if (additionalClass) {
      baseClasses.push(additionalClass);
    }

    return baseClasses.join(' ');
  }
}
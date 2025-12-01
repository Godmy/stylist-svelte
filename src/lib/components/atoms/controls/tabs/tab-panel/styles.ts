export class TabPanelStyleManager {
  static getTabPanelClasses(isSelected: boolean, additionalClass: string = ''): string {
    const baseClasses = [];

    if (isSelected) {
      baseClasses.push('block');
    } else {
      baseClasses.push('hidden');
    }

    if (additionalClass) {
      baseClasses.push(additionalClass);
    }

    return baseClasses.join(' ');
  }
}
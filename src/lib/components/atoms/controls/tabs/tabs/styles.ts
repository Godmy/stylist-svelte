export class TabsStyleManager {
  static getTabsClasses(additionalClass: string = ''): string {
    const baseClasses = [
      'w-full'
    ];

    if (additionalClass) {
      baseClasses.push(additionalClass);
    }

    return baseClasses.join(' ');
  }
}
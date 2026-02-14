import type { TabGroupVariant, ITabStyleClasses } from '$stylist/design-system/props/tab-group';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing TabGroup styling logic
 * Uses CSS variables from the theme system
 */
export class TabGroupStyleManager {
  static getVariantClasses(variant: TabGroupVariant): Record<string, string> {
    const variantClasses: Record<TabGroupVariant, Record<string, string>> = {
      line: {
        tabList: 'flex border-b border-[--color-border-primary]',
        tab: 'px-4 py-2 font-medium text-sm rounded-t-lg focus:outline-none transition-colors',
        active: 'border-b-2 border-[--color-primary-500] text-[--color-primary-600]',
        inactive: 'border-transparent text-[--color-text-secondary] hover:text-[--color-text-primary] hover:border-[--color-border-secondary]'
      },
      boxed: {
        tabList: 'flex',
        tab: 'px-4 py-2 font-medium text-sm focus:outline-none transition-colors border',
        active: 'border-[--color-primary-500] bg-[--color-primary-50] text-[--color-primary-600]',
        inactive: 'border-[--color-border-primary] text-[--color-text-secondary] hover:bg-[--color-secondary-50]'
      },
      pill: {
        tabList: 'flex',
        tab: 'px-4 py-2 font-medium text-sm focus:outline-none transition-colors rounded-full',
        active: 'bg-[--color-primary-500] text-[--color-text-inverse]',
        inactive: 'text-[--color-text-secondary] hover:bg-[--color-secondary-100]'
      }
    };

    return variantClasses[variant];
  }

  static getTabClasses(
    variant: TabGroupVariant, 
    isActive: boolean, 
    isDisabled: boolean,
    baseTabClass: string = '',
    activeTabClass: string = '',
    inactiveTabClass: string = ''
  ): string {
    const variantClasses = this.getVariantClasses(variant);
    const baseClasses = variantClasses.tab;
    const stateClasses = isActive 
      ? `${variantClasses.active} ${activeTabClass}`
      : `${variantClasses.inactive} ${inactiveTabClass}`;
    
    const disabledClass = isDisabled 
      ? 'opacity-50 cursor-not-allowed' 
      : 'cursor-pointer';

    return `${baseClasses} ${stateClasses} ${disabledClass} ${baseTabClass}`;
  }

  static getTabListClasses(variant: TabGroupVariant, baseClass: string = ''): string {
    const variantClasses = this.getVariantClasses(variant);
    return `${variantClasses.tabList} ${baseClass}`;
  }

  static getPanelClasses(baseClass: string = ''): string {
    return `mt-4 ${baseClass}`;
  }

  static getWrapperClasses(baseClass: string = ''): string {
    return `w-full ${baseClass}`;
  }

  static getAllClasses(
    variant: TabGroupVariant,
    wrapperClass: string = '',
    tabListClass: string = '',
    tabClass: string = '',
    activeTabClass: string = '',
    inactiveTabClass: string = '',
    panelClass: string = ''
  ): {
    wrapper: string;
    tabList: string;
    tab: string;
    panel: string;
  } {
    const wrapperClasses = this.getWrapperClasses(wrapperClass);
    const tabListClasses = this.getTabListClasses(variant, tabListClass);
    const panelClasses = this.getPanelClasses(panelClass);

    return {
      wrapper: wrapperClasses,
      tabList: tabListClasses,
      tab: tabClass, // tab classes are calculated individually for each tab
      panel: panelClasses
    };
  }
}
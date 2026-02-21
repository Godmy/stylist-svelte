export class PrivacySettingsStyleManager {
  static getContainerClass(extraClasses: string = ''): string {
    const baseClass = 'c-privacy-settings bg-white rounded-lg shadow p-6';
    return `${baseClass} ${extraClasses}`.trim();
  }

  static getTitleClass(): string {
    return 'text-xl font-bold mb-4';
  }

  static getSettingsContainerClass(): string {
    return 'space-y-4';
  }

  static getSettingItemClass(): string {
    return 'flex items-start justify-between p-3 border rounded-lg';
  }

  static getSettingContentClass(): string {
    return '';
  }

  static getSettingLabelClass(): string {
    return 'font-medium';
  }

  static getSettingDescriptionClass(): string {
    return 'text-sm text-gray-600';
  }

  static getToggleContainerClass(): string {
    return 'relative inline-flex items-center cursor-pointer';
  }

  static getToggleInputClass(): string {
    return 'sr-only';
  }

  static getToggleTrackClass(isEnabled: boolean): string {
    return `block w-11 h-6 rounded-full ${isEnabled ? 'bg-blue-500' : 'bg-gray-300'}`;
  }

  static getToggleThumbClass(isEnabled: boolean): string {
    return `absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${isEnabled ? 'transform translate-x-5' : ''}`;
  }

  static getSaveButtonContainerClass(): string {
    return 'mt-6';
  }

  static getSaveButtonClass(): string {
    return 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
  }
}
import { cn } from '$stylist/information/function/cn/index';
import { CardStyleManager } from '$stylist/information/class/style-manager/card';

export class PrivacySettingsStyleManager {
  static getContainerClass(extraClasses: string = ''): string {
    return cn(
      'c-privacy-settings border border-[var(--color-border-primary)] p-6 shadow-sm',
      CardStyleManager.getBaseClasses(),
      extraClasses
    );
  }

  static getTitleClass(): string {
    return 'mb-4 text-xl font-bold text-[var(--color-text-primary)]';
  }

  static getSettingsContainerClass(): string {
    return 'space-y-4';
  }

  static getSettingItemClass(): string {
    return 'flex items-start justify-between rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-3';
  }

  static getSettingContentClass(): string {
    return '';
  }

  static getSettingLabelClass(): string {
    return 'font-medium text-[var(--color-text-primary)]';
  }

  static getSettingDescriptionClass(): string {
    return 'text-sm text-[var(--color-text-secondary)]';
  }

  static getToggleContainerClass(): string {
    return 'relative inline-flex items-center cursor-pointer';
  }

  static getToggleInputClass(): string {
    return 'sr-only';
  }

  static getToggleTrackClass(isEnabled: boolean): string {
    return `block h-6 w-11 rounded-full ${isEnabled ? 'bg-[var(--color-primary-500)]' : 'bg-[var(--color-neutral-300)]'}`;
  }

  static getToggleThumbClass(isEnabled: boolean): string {
    return `absolute left-1 top-1 h-4 w-4 rounded-full bg-[var(--color-background-primary)] transition-transform ${isEnabled ? 'translate-x-5' : ''}`;
  }

  static getSaveButtonContainerClass(): string {
    return 'mt-6';
  }

  static getSaveButtonClass(): string {
    return 'rounded bg-[var(--color-primary-500)] px-4 py-2 text-[var(--color-text-inverse)] hover:bg-[var(--color-primary-600)]';
  }
}



/** Domain facade: consolidated presets for factory layer. */

import { getInputGroupButtonClass, getInputGroupContainerClass, getInputGroupInputClass } from '$stylist/utils/input';
import { cn } from '../../utils/classnames';
import { TOKEN_TOGGLE_HANDLE_SIZE_CLASSES, TOKEN_TOGGLE_SIZE_CLASSES, type TokenToggleSize } from '../../tokens/toggles';
import type { CompactSize } from '../../tokens/sizes';
import type { InputVariant } from '../../tokens/variants';

import {
  BUTTON_PRESET,
  CHARACTER_COUNT_PRESET,
  CLOSE_BUTTON_PRESET,
  COPY_BUTTON_PRESET,
  FORM_ERROR_MESSAGE_PRESET,
  FORM_HELPER_TEXT_PRESET,
  ICON_BUTTON_PRESET,
  INPUT_ADDON_PRESET,
  INPUT_FIELD_PRESET,
  INPUT_HELPER_PRESET,
  PAGE_BUTTON_PRESET,
  PIN_INPUT_DIGIT_PRESET,
  SPLIT_BUTTON_PRESET
} from './interaction-canonical-adapter';

export interface Preset<V extends string, S extends string> {
  variants: readonly V[];
  sizes: readonly S[];
  defaults: {
    variant: V;
    size: S;
    disabled: boolean;
    block?: boolean;
  };
  classes: {
    base: string;
    size: Record<S, string>;
    variant: Record<V, string>;
    state: Record<string, string>;
    focusVisible?: string;
  };
  loaderSize?: Record<S, string>;
}

export type InputSize = CompactSize;

export interface InputPreset<V extends string = InputVariant, S extends string = InputSize> extends Preset<V, S> {
  classes: Preset<V, S>['classes'] & {
    error?: string;
  };
}

export interface InputStateOptions<V extends string = InputVariant, S extends string = InputSize> {
  variant?: V;
  size?: S;
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;
  block?: boolean;
  class?: string;
  ariaLabel?: string;
}

// Недостающие StyleManager типы для компонентов
export interface AlertStyleManager {
  getContainerClass: (disabled?: boolean) => string;
  getContentClass: () => string;
  getDescriptionClass: () => string;
  getIconClass: () => string;
  getTitleClass: () => string;
}

export interface LoaderStyleManager {
  getContainerClass: () => string;
  getSpinnerClass: (size?: string) => string;
  getLabelClass: () => string;
}

export interface SkeletonStyleManager {
  getContainerClass: (variant?: string) => string;
  getElementClass: () => string;
}

export interface SpinnerStyleManager {
  getContainerClass: () => string;
  getSpinnerClass: (size?: string, variant?: string) => string;
}

export interface ProgressBarStyleManager {
  getContainerClass: () => string;
  getFillClass: (value: number, max: number) => string;
  getLabelClass: () => string;
}

export interface ProgressCircleStyleManager {
  getContainerClass: () => string;
  getCircleClass: (strokeWidth: number) => string;
  getFillClass: (value: number, max: number) => string;
  getLabelClass: () => string;
}

export interface StepConnectorStyleManager {
  getContainerClass: (active?: boolean, completed?: boolean) => string;
  getLineClass: (active?: boolean, completed?: boolean) => string;
}

export interface BreadcrumbStyleManager {
  getContainerClass: () => string;
  getItemClass: (current?: boolean) => string;
  getSeparatorClass: () => string;
}

export interface BreadcrumbLinkStyleManager {
  getLinkClass: (current?: boolean) => string;
  getContainerClass: () => string;
}

export interface BreadcrumbsStyleManager {
  getContainerClass: () => string;
  getListClass: () => string;
  getItemClass: () => string;
}

export interface AccountProgressTrackerStyleManager {
  getContainerClass: () => string;
  getStepClass: (active?: boolean, completed?: boolean) => string;
  getProgressClass: () => string;
}

export const getInputGroupContainerClasses = () => getInputGroupContainerClass();
export const getInputGroupInputClasses = (className = '') => getInputGroupInputClass(className);
export const getInputGroupButtonClasses = () => getInputGroupButtonClass();

type ToggleSize = TokenToggleSize;
const DEFAULT_SWITCH_SIZE: ToggleSize = 'md';
const DEFAULT_TOGGLE_SIZE: ToggleSize = 'md';

export const getSwitchInputClasses = (disabled = false) => cn('peer sr-only', disabled ? 'cursor-not-allowed' : '');

export const getSwitchTrackClasses = (
  switchSizeOrClass: ToggleSize | string = DEFAULT_SWITCH_SIZE,
  disabled = false,
  checked?: boolean
) => {
  if (typeof switchSizeOrClass === 'string' && !['sm', 'md', 'lg'].includes(switchSizeOrClass)) {
    return cn('relative inline-flex h-6 w-11 rounded-full transition-colors', switchSizeOrClass, disabled ? 'opacity-50' : '');
  }

  const size = switchSizeOrClass as ToggleSize;
  const sizeClass = size === 'sm' ? 'h-4 w-8' : size === 'lg' ? 'h-6 w-12' : 'h-5 w-10';
  const state = checked === undefined ? 'bg-[--color-border-primary]' : checked ? 'bg-[--color-primary-500]' : 'bg-[--color-border-primary]';
  return cn('relative inline-flex cursor-pointer rounded-full border-2 border-transparent transition-colors', sizeClass, state, disabled ? 'opacity-50 cursor-not-allowed' : '');
};

export const getSwitchKnobClasses = (switchSize: ToggleSize = DEFAULT_SWITCH_SIZE, disabled = false, checked?: boolean) => {
  const sizeClasses = TOKEN_TOGGLE_HANDLE_SIZE_CLASSES[switchSize];
  const state = checked === undefined ? 'translate-x-0' : checked ? 'translate-x-5' : 'translate-x-0';
  return cn('pointer-events-none block rounded-full bg-[--color-background-primary] shadow-lg ring-0 transition-transform', sizeClasses, state, disabled ? 'opacity-50' : '');
};

export const getToggleContainerClasses = (className = '') => cn('relative inline-flex items-center', className);

export const getToggleTrackClasses = (disabled = false, checked?: boolean) => {
  const base = 'relative inline-flex h-6 w-11 cursor-pointer rounded-full transition-colors duration-200 ease-in-out';
  const state = checked === undefined ? 'bg-[--color-border-primary]' : checked ? 'bg-[--color-primary-500]' : 'bg-[--color-border-primary]';
  return cn(base, state, disabled ? 'opacity-50 cursor-not-allowed' : '');
};

export const getToggleThumbClasses = (size: ToggleSize = DEFAULT_TOGGLE_SIZE, disabled = false, checked?: boolean) => {
  const base = 'pointer-events-none inline-block transform rounded-full bg-[--color-background-primary] shadow-lg ring-0 transition duration-200 ease-in-out';
  const sizeClasses = TOKEN_TOGGLE_HANDLE_SIZE_CLASSES[size];
  const state = checked === undefined ? 'translate-x-0.5' : checked ? 'translate-x-5' : 'translate-x-0.5';
  return cn(base, sizeClasses, state, disabled ? 'opacity-50 cursor-not-allowed' : '');
};

export const getToggleSizeClasses = (size: ToggleSize = DEFAULT_TOGGLE_SIZE) => TOKEN_TOGGLE_SIZE_CLASSES[size];

export const getToggleDisabledClass = (disabled = true) => (disabled ? 'opacity-50 cursor-not-allowed' : '');

export const getToggleGroupItemClasses = (isActive: boolean, disabled: boolean) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';
  const activeClasses = isActive
    ? 'bg-primary text-primary-foreground shadow-sm'
    : 'text-muted-foreground hover:bg-muted hover:text-foreground';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return cn(baseClasses, activeClasses, disabledClasses);
};

export const INTERACTION_PRESETS = {
  controls: {
    BUTTON_PRESET,
    CLOSE_BUTTON_PRESET,
    COPY_BUTTON_PRESET,
    ICON_BUTTON_PRESET,
    PAGE_BUTTON_PRESET,
    SPLIT_BUTTON_PRESET
  },
  input: {
    INPUT_FIELD_PRESET,
    INPUT_HELPER_PRESET,
    PIN_INPUT_DIGIT_PRESET,
    INPUT_ADDON_PRESET,
    FORM_HELPER_TEXT_PRESET,
    FORM_ERROR_MESSAGE_PRESET,
    CHARACTER_COUNT_PRESET
  }
} as const;

import { STATE_CLASSES, TRANSITION_CLASSES } from '../tokens/classes';

// Общий хелпер для получения классов по варианту компонента
export const getVariantClasses = (
  variant: string,
  variantClassesMap: Record<string, string>,
  defaultVariantClass: string = ''
): string => {
  return variantClassesMap[variant] || defaultVariantClass;
};

// Общий хелпер для получения классов по размеру компонента
export const getSizeClasses = (
  size: string,
  sizeClassesMap: Record<string, string>,
  defaultSizeClass: string = ''
): string => {
  return sizeClassesMap[size] || defaultSizeClass;
};

// Общий хелпер для получения классов состояния компонента
export const getStateClasses = (
  stateFlags: {
    disabled?: boolean;
    loading?: boolean;
    error?: boolean;
    readonly?: boolean;
    block?: boolean;
    [key: string]: any;
  },
  customStateClasses?: Record<string, string>
): string => {
  const classes: string[] = [];

  // Добавляем стандартные классы состояний
  if (stateFlags.disabled) classes.push(STATE_CLASSES.disabled);
  if (stateFlags.loading) classes.push(STATE_CLASSES.loading);
  if (stateFlags.block) classes.push(STATE_CLASSES.block);
  if (stateFlags.readonly) classes.push(STATE_CLASSES.readonly);

  // Добавляем пользовательские классы состояний
  if (customStateClasses) {
    Object.entries(stateFlags).forEach(([key, value]) => {
      if (value && customStateClasses[key]) {
        classes.push(customStateClasses[key]);
      }
    });
  }

  return classes.join(' ');
};

// Общий хелпер для получения комплексных классов компонента
export const getComponentClasses = (
  baseClass: string,
  variant?: string,
  size?: string,
  stateFlags: { [key: string]: any } = {},
  variantClassesMap?: Record<string, string>,
  sizeClassesMap?: Record<string, string>,
  customStateClasses?: Record<string, string>,
  additionalClass: string = ''
): string => {
  const classes: string[] = [baseClass];

  if (variant && variantClassesMap) {
    classes.push(getVariantClasses(variant, variantClassesMap));
  }

  if (size && sizeClassesMap) {
    classes.push(getSizeClasses(size, sizeClassesMap));
  }

  if (Object.keys(stateFlags).length > 0) {
    classes.push(getStateClasses(stateFlags, customStateClasses));
  }

  if (additionalClass) {
    classes.push(additionalClass);
  }

  return classes.filter(Boolean).join(' ');
};
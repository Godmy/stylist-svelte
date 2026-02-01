import type { ChipProps } from '$stylist/design-system/interaction/controls/chip';
import type { PictureToolbarProps } from '$stylist/design-system/interaction/controls/picture-toolbar';
import type { SliderTickProps } from '$stylist/design-system/interaction/controls/sliders/slider-tick';
import type { TagProps } from '$stylist/design-system/interaction/controls/tag';

// Состояние для чипа
export function createChipState(props: ChipProps) {
  const label = $derived(props.label ?? '');
  const variant = $derived(props.variant ?? 'primary');
  const size = $derived(props.size ?? 'md');
  const disabled = $derived(props.disabled ?? false);
  const closable = $derived(props.closable ?? false);
  const classes = $derived(
    `inline-flex items-center rounded-full font-medium ${
      size === 'sm' ? 'px-2 py-0.5 text-xs' :
      size === 'md' ? 'px-3 py-1 text-sm' : 'px-4 py-1.5 text-base'
    } ${
      variant === 'primary' ? 'bg-indigo-100 text-indigo-800' :
      variant === 'secondary' ? 'bg-gray-100 text-gray-800' :
      variant === 'success' ? 'bg-green-100 text-green-800' :
      variant === 'warning' ? 'bg-yellow-100 text-yellow-800' :
      'bg-red-100 text-red-800'
    } ${
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-default'
    } ${props.class ?? ''}`.trim()
  );
  const closeButtonClasses = $derived(
    `ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      variant === 'primary' ? 'focus:ring-indigo-500 hover:bg-indigo-200' :
      variant === 'secondary' ? 'focus:ring-gray-500 hover:bg-gray-200' :
      variant === 'success' ? 'focus:ring-green-500 hover:bg-green-200' :
      variant === 'warning' ? 'focus:ring-yellow-500 hover:bg-yellow-200' :
      'focus:ring-red-500 hover:bg-red-200'
    }`.trim()
  );
  const closeButtonIconClasses = $derived(
    size === 'sm' ? 'w-3 h-3 ml-1' :
    size === 'md' ? 'w-3.5 h-3.5 ml-1' : 'w-4 h-4 ml-1'
  );

  return {
    get label() {
      return label;
    },
    get classes() {
      return classes;
    },
    get closable() {
      return closable;
    },
    get disabled() {
      return disabled;
    },
    get closeButtonClasses() {
      return closeButtonClasses;
    },
    get closeButtonIconClasses() {
      return closeButtonIconClasses;
    }
  };
}

// Состояние для тега
export function createTagState(props: TagProps) {
  const text = $derived(props.text ?? '');
  const variant = $derived(props.variant ?? 'neutral');
  const size = $derived(props.size ?? 'md');
  const disabled = $derived(props.disabled ?? false);
  const closable = $derived(props.closable ?? false);
  const classes = $derived(
    `inline-flex items-center border rounded-full font-medium ${
      variant === 'neutral' ? 'bg-gray-100 text-gray-700 border-gray-200' :
      variant === 'primary' ? 'bg-indigo-100 text-indigo-700 border-indigo-200' :
      variant === 'success' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' :
      variant === 'warning' ? 'bg-amber-100 text-amber-700 border-amber-200' :
      'bg-rose-100 text-rose-700 border-rose-200'
    } ${
      size === 'sm' ? 'text-xs px-2 py-0.5 gap-1' :
      'text-sm px-3 py-1 gap-1.5'
    } ${
      disabled ? 'opacity-60 cursor-not-allowed' : ''
    } ${props.class ?? ''}`.trim()
  );
  const closeButtonClasses = $derived(
    'ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500'
  );
  const closeButtonIconClasses = $derived('h-3 w-3');

  return {
    get text() {
      return text;
    },
    get classes() {
      return classes;
    },
    get closable() {
      return closable;
    },
    get disabled() {
      return disabled;
    },
    get closeButtonClasses() {
      return disabled
        ? `${closeButtonClasses} opacity-50`
        : closeButtonClasses;
    },
    get closeButtonIconClasses() {
      return closeButtonIconClasses;
    }
  };
}

// Состояние для ползунка
export function createSliderTickState(props: SliderTickProps) {
  const position = $derived(props.position ?? 0);
  const label = $derived(props.label ?? '');
  const active = $derived(props.active ?? false);
  const classes = $derived(
    `absolute transform -translate-x-1/2 bg-gray-200 rounded-full ${
      active ? 'bg-blue-500' : 'bg-gray-200'
    } ${props.class ?? ''}`.trim()
  );
  const style = $derived(`left: ${position}%;`);
  const value = $derived(props.value ?? position);

  return {
    get position() {
      return position;
    },
    get label() {
      return label;
    },
    get classes() {
      return classes;
    },
    get style() {
      return style;
    },
    get value() {
      return value;
    },
    get labelContainerClasses() {
      return 'absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium';
    }
  };
}

// Состояние для панели инструментов изображения
export function createPictureToolbarState(props: PictureToolbarProps) {
  const tools = $derived(props.tools ?? []);
  const activeTool = $derived(props.activeTool ?? '');
  const classes = $derived(
    `flex items-center bg-gray-100 p-2 rounded-lg ${
      props.class ?? ''
    }`.trim()
  );

  return {
    get tools() {
      return tools;
    },
    get activeTool() {
      return activeTool;
    },
    get classes() {
      return classes;
    },
    getButtonClasses: (isActive: boolean) => {
      return `p-2 rounded-md ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`;
    },
    get iconClasses() {
      return 'w-4 h-4';
    }
  };
}

// Состояние для чата
export function createChatPreviewState(props: any) {
  const classes = $derived(props.class ?? '');

  return {
    get classes() {
      return classes;
    }
  };
}

// Состояние для потока сообщений
export function createMessageThreadState(props: any) {
  const classes = $derived(props.class ?? '');

  return {
    get classes() {
      return classes;
    }
  };
}

// Состояние для сложного аккордеона
export function createComplexAccordionState(props: any) {
  const classes = $derived(props.class ?? '');
  const defaultValue = $derived(props.defaultValue ?? []);
  const multiple = $derived(props.multiple ?? false);

  return {
    get classes() {
      return classes;
    },
    get defaultValue() {
      return defaultValue;
    },
    get multiple() {
      return multiple;
    }
  };
}

// Состояние для заголовка аккордеона
export function createAccordionHeaderState(props: any, isOpen: boolean = false) {
  const classes = $derived(props.class ?? '');
  const chevronClasses = $derived('w-4 h-4 transition-transform duration-200');

  return {
    get classes() {
      return classes;
    },
    get chevronClasses() {
      return chevronClasses;
    }
  };
}

// Состояние для двойного заголовка аккордеона
export function createAccordionHeaderDoubleState(props: any) {
  const classes = $derived(props.class ?? '');
  const disabled = $derived(props.disabled ?? false);
  const open = $derived(props.open ?? false);

  return {
    get classes() {
      return classes;
    },
    get disabled() {
      return disabled;
    },
    get open() {
      return open;
    }
  };
}

// Состояние для элемента аккордеона
export function createAccordionItemState(props: any) {
  const classes = $derived(props.class ?? '');

  return {
    get classes() {
      return classes;
    }
  };
}

// Состояние для панели аккордеона
export function createAccordionPanelState(props: any, isSelected: boolean = false) {
  const classes = $derived(props.class ?? '');
  const contentClasses = $derived('overflow-hidden transition-all duration-300');

  return {
    get classes() {
      return classes;
    },
    get contentClasses() {
      return contentClasses;
    }
  };
}

// Состояние для вкладки
export function createTabState(props: any, isSelected: boolean = false) {
  const classes = $derived(props.class ?? '');
  const index = $derived(props.index ?? 0);
  const disabled = $derived(props.disabled ?? false);

  return {
    get classes() {
      return classes;
    },
    get index() {
      return index;
    },
    get disabled() {
      return disabled;
    }
  };
}

// Состояние для индикатора вкладки
export function createTabIndicatorState(props: any) {
  const classes = $derived(props.class ?? '');
  const activeIndex = $derived(props.activeIndex ?? 0);
  const tabCount = $derived(props.tabCount ?? 1);
  const style = $derived(`transform: translateX(${activeIndex * 100}%); width: calc(100% / ${tabCount});`);

  return {
    get classes() {
      return classes;
    },
    get activeIndex() {
      return activeIndex;
    },
    get tabCount() {
      return tabCount;
    },
    get style() {
      return style;
    }
  };
}

// Состояние для списка вкладок
export function createTabListState(props: any) {
  const classes = $derived(props.class ?? '');
  const orientation = $derived(props.orientation ?? 'horizontal');

  return {
    get classes() {
      return classes;
    },
    get orientation() {
      return orientation;
    }
  };
}

// Состояние для панели вкладки
export function createTabPanelState(props: any, isSelected: boolean = false) {
  const classes = $derived(props.class ?? '');

  return {
    get classes() {
      return classes;
    },
    get isSelected() {
      return isSelected;
    }
  };
}

// Состояние для панелей вкладок
export function createTabPanelsState(props: any) {
  const classes = $derived(props.class ?? '');
  const selectedIndex = $derived(props.selectedIndex ?? 0);

  return {
    get classes() {
      return classes;
    },
    get selectedIndex() {
      return selectedIndex;
    }
  };
}

// Состояние для вкладок
export function createTabsState(props: any) {
  const classes = $derived(props.class ?? '');
  const selectedIndex = $derived(props.selectedIndex ?? 0);
  const orientation = $derived(props.orientation ?? 'horizontal');
  const variant = $derived(props.variant ?? 'primary');
  const size = $derived(props.size ?? 'md');
  const disabled = $derived(props.disabled ?? false);

  return {
    get classes() {
      return classes;
    },
    get selectedIndex() {
      return selectedIndex;
    },
    get orientation() {
      return orientation;
    },
    get variant() {
      return variant;
    },
    get size() {
      return size;
    },
    get disabled() {
      return disabled;
    }
  };
}

// Состояние для продвинутого переключателя
export function createAdvancedToggleState(props: any) {
  const classes = $derived(props.class ?? '');
  const checked = $derived(props.checked ?? false);
  const disabled = $derived(props.disabled ?? false);
  const label = $derived(props.label ?? '');
  const containerClasses = $derived('flex items-center justify-between');
  const labelWrapperClasses = $derived('flex items-center cursor-pointer');
  const toggleContainerClasses = $derived('relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none');
  const hiddenInputClasses = $derived('sr-only');
  const toggleBackgroundClasses = $derived(checked ? 'bg-blue-600' : 'bg-gray-200');
  const toggleHandleClasses = $derived('pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform');
  const labelTextClasses = $derived('ml-3 text-sm font-medium text-gray-700');

  return {
    get classes() {
      return classes;
    },
    get checked() {
      return checked;
    },
    get disabled() {
      return disabled;
    },
    get label() {
      return label;
    },
    get containerClasses() {
      return containerClasses;
    },
    get labelWrapperClasses() {
      return labelWrapperClasses;
    },
    get toggleContainerClasses() {
      return toggleContainerClasses;
    },
    get hiddenInputClasses() {
      return hiddenInputClasses;
    },
    get toggleBackgroundClasses() {
      return toggleBackgroundClasses;
    },
    get toggleHandleClasses() {
      return toggleHandleClasses;
    },
    get labelTextClasses() {
      return labelTextClasses;
    }
  };
}

// Состояние для чекбокса
export function createCheckboxState(props: any) {
  const classes = $derived(props.class ?? '');
  const checked = $derived(props.checked ?? false);
  const disabled = $derived(props.disabled ?? false);
  const indeterminate = $derived(props.indeterminate ?? false);
  const containerClasses = $derived('flex items-start');
  const wrapperClasses = $derived('flex items-center h-5');
  const checkboxWrapperClasses = $derived('relative flex items-start');
  const checkboxClasses = $derived('h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500');
  const labelWrapperClasses = $derived('ml-3 text-sm');
  const labelClasses = $derived('font-medium text-gray-700');
  const descriptionClasses = $derived('text-gray-500');
  const errorClasses = $derived('mt-2 text-sm text-red-600');
  const errorId = $derived('checkbox-error');
  const hasError = $derived(!!props.errors?.length);
  const errors = $derived(props.errors ?? []);
  const required = $derived(props.required ?? false);

  return {
    get classes() {
      return classes;
    },
    get checked() {
      return checked;
    },
    get disabled() {
      return disabled;
    },
    get indeterminate() {
      return indeterminate;
    },
    get containerClasses() {
      return containerClasses;
    },
    get wrapperClasses() {
      return wrapperClasses;
    },
    get checkboxWrapperClasses() {
      return checkboxWrapperClasses;
    },
    get checkboxClasses() {
      return checkboxClasses;
    },
    get labelWrapperClasses() {
      return labelWrapperClasses;
    },
    get labelClasses() {
      return labelClasses;
    },
    get descriptionClasses() {
      return descriptionClasses;
    },
    get errorClasses() {
      return errorClasses;
    },
    get errorId() {
      return errorId;
    },
    get hasError() {
      return hasError;
    },
    get errors() {
      return errors;
    },
    get required() {
      return required;
    }
  };
}

// Состояние для переключателя темного режима
export function createDarkModeToggleState(props: any) {
  const classes = $derived(props.class ?? '');
  const checked = $derived(props.checked ?? false);
  const disabled = $derived(props.disabled ?? false);
  const darkMode = $derived(checked);

  return {
    get classes() {
      return classes;
    },
    get checked() {
      return checked;
    },
    get disabled() {
      return disabled;
    },
    get darkMode() {
      return darkMode;
    }
  };
}

// Состояние для радио-кнопки
export function createRadioState(props: any) {
  const classes = $derived(props.class ?? '');
  const checked = $derived(props.checked ?? false);
  const disabled = $derived(props.disabled ?? false);
  const value = $derived(props.value ?? '');
  const containerClasses = $derived('flex items-center');
  const radioClasses = $derived(
    `h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 ${
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`
  );
  const labelClasses = $derived('ml-3 block text-sm font-medium text-gray-700');

  return {
    get classes() {
      return classes;
    },
    get checked() {
      return checked;
    },
    get disabled() {
      return disabled;
    },
    get value() {
      return value;
    },
    get containerClasses() {
      return containerClasses;
    },
    get radioClasses() {
      return radioClasses;
    },
    get labelClasses() {
      return labelClasses;
    }
  };
}

// Состояние для группы радио-кнопок
export function createRadioButtonGroupState(props: any) {
  const classes = $derived(props.class ?? '');
  const value = $derived(props.value ?? '');
  const disabled = $derived(props.disabled ?? false);
  const containerClass = $derived('space-y-2');
  const options = $derived(props.options ?? []);
  const getOptionClass = $derived((isOptionDisabled: boolean) =>
    `flex items-center ${isOptionDisabled ? 'opacity-50 cursor-not-allowed' : ''}`
  );
  const name = $derived(props.name ?? '');
  const radioInputClass = $derived('');
  const required = $derived(props.required ?? false);
  const optionLabelClass = $derived('ml-2');

  return {
    get classes() {
      return classes;
    },
    get value() {
      return value;
    },
    get disabled() {
      return disabled;
    },
    get containerClass() {
      return containerClass;
    },
    get options() {
      return options;
    },
    get getOptionClass() {
      return getOptionClass;
    },
    get name() {
      return name;
    },
    get radioInputClass() {
      return radioInputClass;
    },
    get required() {
      return required;
    },
    get optionLabelClass() {
      return optionLabelClass;
    }
  };
}

// Состояние для переключателя
export function createSwitchState(props: any) {
  const classes = $derived(props.class ?? '');
  const checked = $derived(props.checked ?? false);
  const disabled = $derived(props.disabled ?? false);
  const labelClasses = $derived('flex items-center cursor-pointer group');
  const trackClasses = $derived(
    `relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
      checked ? 'bg-blue-600' : 'bg-gray-200'
    } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`
  );
  const inputClasses = $derived('sr-only');
  const knobClasses = $derived(
    `pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
      checked ? 'translate-x-5' : 'translate-x-0'
    }`
  );
  const labelTextClasses = $derived('ml-3 text-sm font-medium text-gray-700');
  const labelTitleClasses = $derived('block text-sm font-medium text-gray-700');
  const labelDescriptionClasses = $derived('block text-sm text-gray-500');
  const requiredMarkerClasses = $derived('text-red-500');
  const required = $derived(props.required ?? false);

  return {
    get classes() {
      return classes;
    },
    get checked() {
      return checked;
    },
    get disabled() {
      return disabled;
    },
    get labelClasses() {
      return labelClasses;
    },
    get trackClasses() {
      return trackClasses;
    },
    get inputClasses() {
      return inputClasses;
    },
    get knobClasses() {
      return knobClasses;
    },
    get labelTextClasses() {
      return labelTextClasses;
    },
    get labelTitleClasses() {
      return labelTitleClasses;
    },
    get labelDescriptionClasses() {
      return labelDescriptionClasses;
    },
    get requiredMarkerClasses() {
      return requiredMarkerClasses;
    },
    get required() {
      return required;
    }
  };
}

// Состояние для тумблера
export function createToggleState(props: any) {
  const classes = $derived(props.class ?? '');
  const checked = $derived(props.checked ?? false);
  const disabled = $derived(props.disabled ?? false);
  const containerClasses = $derived('relative inline-flex items-center');
  const inputClasses = $derived('sr-only');
  const trackClasses = $derived(
    `relative inline-flex h-6 w-11 cursor-pointer rounded-full bg-gray-200 transition-colors duration-200 ease-in-out ${
      checked ? 'bg-blue-600' : 'bg-gray-200'
    } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`
  );
  const thumbClasses = $derived(
    `pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
      checked ? 'translate-x-5' : 'translate-x-0.5'
    }`
  );
  const disabledClass = $derived(disabled ? 'opacity-50 cursor-not-allowed' : '');

  return {
    get classes() {
      return classes;
    },
    get checked() {
      return checked;
    },
    get disabled() {
      return disabled;
    },
    get containerClasses() {
      return containerClasses;
    },
    get inputClasses() {
      return inputClasses;
    },
    get trackClasses() {
      return trackClasses;
    },
    get thumbClasses() {
      return thumbClasses;
    },
    get disabledClass() {
      return disabledClass;
    }
  };
}

// Состояние для корня группы тумблеров
export function createToggleGroupRootState(props: any) {
  const classes = $derived(props.class ?? '');
  const value = $derived(props.value ?? '');
  const disabled = $derived(props.disabled ?? false);
  const orientation = $derived(props.orientation ?? 'horizontal');
  const type = $derived(props.type ?? 'single');

  return {
    get classes() {
      return classes;
    },
    get value() {
      return value;
    },
    get disabled() {
      return disabled;
    },
    get orientation() {
      return orientation;
    },
    get type() {
      return type;
    }
  };
}

// Состояние для сортировки продуктов
export function createProductSortState(props: any) {
  const classes = $derived(props.class ?? '');
  const selectedOption = $derived(props.selectedOption ?? (props.options?.[0]?.value || ''));
  const options = $derived(props.options ?? []);

  return {
    get classes() {
      return classes;
    },
    get selectedOption() {
      return selectedOption;
    },
    get options() {
      return options;
    },
    get labelClasses() {
      return 'mr-2 font-medium text-gray-700';
    },
    get selectClasses() {
      return 'border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500';
    }
  };
}
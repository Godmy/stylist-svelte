import type { ButtonControlProps } from '$stylist/design-system/attributes';
import { BUTTON_PRESET } from '$stylist/design-system/presets';
import { createState as createButtonPresetState } from './buttons/state.svelte';

export const createButtonState = (props: ButtonControlProps) => {
  const state = createButtonPresetState(BUTTON_PRESET, props as any);

  return {
    size: state.size,
    variant: state.variant,
    disabled: state.disabled,
    classes: state.classes
  };
};

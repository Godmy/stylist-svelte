import { createInputState as createBaseInputState } from '$stylist/design-system/factory/interaction/input-factory';
import { CHARACTER_COUNT_PRESET, FORM_ERROR_MESSAGE_PRESET, FORM_HELPER_TEXT_PRESET, INPUT_ADDON_PRESET, INPUT_HELPER_PRESET, PIN_INPUT_DIGIT_PRESET } from '$stylist/design-system/presets';
import type { InputStateOptions } from '$stylist/design-system/presets';
import { getCharacterCountState } from '$stylist/utils/input';

type InputVariant = (typeof INPUT_HELPER_PRESET.variants)[number];
type InputSize = (typeof INPUT_HELPER_PRESET.sizes)[number];

export const createInputHelpersState = (
  props: InputStateOptions<InputVariant, InputSize> & Record<string, unknown>
) => createBaseInputState(INPUT_HELPER_PRESET as any, props);

type InputAddonVariant = Extract<(typeof INPUT_ADDON_PRESET.variants)[number], string>;
type FormHelperVariant = Extract<(typeof FORM_HELPER_TEXT_PRESET.variants)[number], string>;
type FormErrorVariant = Extract<(typeof FORM_ERROR_MESSAGE_PRESET.variants)[number], string>;
type CharacterCountVariant = Extract<(typeof CHARACTER_COUNT_PRESET.variants)[number], string>;
type PinDigitVariant = Extract<(typeof PIN_INPUT_DIGIT_PRESET.variants)[number], string>;

export const createInputAddonState = (
  props: InputStateOptions<InputAddonVariant, InputSize> & Record<string, unknown>
) => createBaseInputState(INPUT_ADDON_PRESET, props);

export const createFormHelperTextState = (
  props: InputStateOptions<FormHelperVariant, InputSize> & Record<string, unknown>
) => createBaseInputState(FORM_HELPER_TEXT_PRESET, props);

export const createFormErrorMessageState = (
  props: InputStateOptions<FormErrorVariant, InputSize> & Record<string, unknown>
) => createBaseInputState(FORM_ERROR_MESSAGE_PRESET, props);

export const createCharacterCountState = (
  ratio: number,
  props: InputStateOptions<CharacterCountVariant, InputSize> & Record<string, unknown>
) => {
  const state = createBaseInputState(CHARACTER_COUNT_PRESET, props);
  const semanticVariant = getCharacterCountState(ratio);
  const colorClass = CHARACTER_COUNT_PRESET.classes.variant[semanticVariant];
  return {
    ...state,
    colorClass
  };
};

export const createPinInputDigitState = (
  props: InputStateOptions<PinDigitVariant, InputSize> & Record<string, unknown>
) => createBaseInputState(PIN_INPUT_DIGIT_PRESET, props);

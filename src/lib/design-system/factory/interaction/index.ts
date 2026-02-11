/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */

import type { Preset } from '../../classes/interaction';
import { ACCESSIBILITY_CLASSES, BASE_CLASSES, STATE_CLASSES } from '../../classes/classes';
import { DEFAULT_FLAGS } from '../../tokens/flags';
import { INTERACTIVE_VARIANTS, VARIANT_CLASSES } from '../../classes/interaction';
import type { ComponentSize } from '../../tokens/sizes';
import { COMPONENT_SIZE_SCALE } from '../../tokens/sizes';
import { SIZE_CLASSES } from '../../classes/sizes';

type InteractivePreset = Preset<string, ComponentSize>;

export function createPreset(
	config: Partial<{
		variants: readonly string[];
		sizes: readonly ComponentSize[];
		defaults: Partial<InteractivePreset['defaults']>;
		classes: Partial<InteractivePreset['classes']>;
	}> = {}
): InteractivePreset {
	return {
		variants: config.variants ?? INTERACTIVE_VARIANTS,
		sizes: config.sizes ?? COMPONENT_SIZE_SCALE,
		defaults: {
			variant: 'primary' as string,
			size: 'md' as ComponentSize,
			disabled: DEFAULT_FLAGS.disabled,
			block: false,
			...config.defaults
		},
		classes: {
			base: BASE_CLASSES.interactive,
			variant: VARIANT_CLASSES,
			state: STATE_CLASSES,
			focusVisible: ACCESSIBILITY_CLASSES.focusVisible,
			size: SIZE_CLASSES,
			...config.classes
		}
	};
}

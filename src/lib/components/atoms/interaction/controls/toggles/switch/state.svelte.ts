import type { SwitchProps } from '$stylist/design-system/attributes';
import { TOKEN_TOGGLE_HANDLE_SIZE_CLASSES } from '$stylist/design-system/classes/toggles';
import { mergeClasses } from '$stylist/utils/classes';

export const createSwitchState = (props: SwitchProps) => {
	const trackClasses = $derived(
		mergeClasses(
			'relative inline-flex h-6 w-11 rounded-full transition-colors',
			props.class
		)
	);
	const knobClasses = $derived(
		mergeClasses(
			'pointer-events-none block rounded-full bg-[--color-background-primary] shadow-lg ring-0 transition-transform',
			TOKEN_TOGGLE_HANDLE_SIZE_CLASSES.md,
			'translate-x-0'
		)
	);
	const inputClasses = $derived('peer sr-only');
	return {
		get trackClasses() {
			return trackClasses;
		},
		get knobClasses() {
			return knobClasses;
		},
		get inputClasses() {
			return inputClasses;
		}
	};
};

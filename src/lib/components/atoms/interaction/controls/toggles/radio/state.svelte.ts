import type { RadioProps } from '$stylist/design-system/attributes';
import {
	TOKEN_TOGGLE_HANDLE_SIZE_CLASSES,
	TOKEN_TOGGLE_SIZE_CLASSES
} from '$stylist/design-system/classes/toggles';
import { mergeClasses } from '$stylist/utils/classes';

export const createRadioState = (props: RadioProps) => {
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const containerClasses = $derived(
		mergeClasses('relative inline-flex items-center', props.class)
	);
	const trackClasses = $derived(
		mergeClasses(
			'relative inline-flex h-6 w-11 cursor-pointer rounded-full transition-colors duration-200 ease-in-out',
			'bg-[--color-border-primary]'
		)
	);
	const thumbClasses = $derived(
		mergeClasses(
			'pointer-events-none inline-block transform rounded-full bg-[--color-background-primary] shadow-lg ring-0 transition duration-200 ease-in-out',
			TOKEN_TOGGLE_HANDLE_SIZE_CLASSES.md,
			'translate-x-0.5'
		)
	);
	const sizeClasses = $derived(TOKEN_TOGGLE_SIZE_CLASSES[size]);
	const disabledClass = $derived(disabled ? 'opacity-50 cursor-not-allowed' : '');

	return {
		get size() {
			return size;
		},
		get disabled() {
			return disabled;
		},
		get containerClasses() {
			return containerClasses;
		},
		get trackClasses() {
			return trackClasses;
		},
		get thumbClasses() {
			return thumbClasses;
		},
		get sizeClasses() {
			return sizeClasses;
		},
		get disabledClass() {
			return disabledClass;
		}
	};
};

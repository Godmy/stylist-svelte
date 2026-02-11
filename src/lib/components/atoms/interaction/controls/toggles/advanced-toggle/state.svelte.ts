import type { AdvancedToggleProps } from '$stylist/design-system/props';
import {
	TOKEN_TOGGLE_HANDLE_SIZE_CLASSES,
	TOKEN_TOGGLE_SIZE_CLASSES
} from '$stylist/design-system/classes/toggles';
import { mergeClasses } from '$stylist/utils/classes';

export const createAdvancedToggleState = (props: AdvancedToggleProps) => {
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const checked = $derived(props.checked ?? false);
	const label = $derived(props.label ?? '');

	const containerClasses = $derived(
		mergeClasses('relative inline-flex items-center', props.class)
	);
	const labelWrapperClasses = $derived(
		mergeClasses('flex items-center space-x-2')
	);
	const toggleContainerClasses = $derived(
		mergeClasses('relative inline-flex items-center', props.class)
	);
	const trackClasses = $derived(
		mergeClasses(
			'relative inline-flex h-6 w-11 cursor-pointer rounded-full transition-colors duration-200 ease-in-out',
			checked ? 'bg-[--color-primary]' : 'bg-[--color-border-primary]',
			disabled ? 'opacity-50 cursor-not-allowed' : ''
		)
	);
	const thumbClasses = $derived(
		mergeClasses(
			'pointer-events-none inline-block transform rounded-full bg-[--color-background-primary] shadow-lg ring-0 transition duration-200 ease-in-out',
			TOKEN_TOGGLE_HANDLE_SIZE_CLASSES.md,
			checked ? 'translate-x-5' : 'translate-x-0.5'
		)
	);
	const hiddenInputClasses = $derived(
		mergeClasses(
			'absolute left-0 top-0 opacity-0 w-full h-full cursor-pointer',
			disabled ? 'cursor-not-allowed' : ''
		)
	);
	const toggleBackgroundClasses = $derived(trackClasses);
	const toggleHandleClasses = $derived(thumbClasses);
	const sizeClasses = $derived(TOKEN_TOGGLE_SIZE_CLASSES[size]);
	const disabledClass = $derived(disabled ? 'opacity-50 cursor-not-allowed' : '');
	const labelTextClasses = $derived(
		mergeClasses('text-sm font-medium', disabled ? 'text-gray-400' : 'text-gray-700')
	);

	return {
		get size() {
			return size;
		},
		get disabled() {
			return disabled;
		},
		get checked() {
			return checked;
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
		get trackClasses() {
			return trackClasses;
		},
		get thumbClasses() {
			return thumbClasses;
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
		get sizeClasses() {
			return sizeClasses;
		},
		get disabledClass() {
			return disabledClass;
		},
		get labelTextClasses() {
			return labelTextClasses;
		}
	};
};


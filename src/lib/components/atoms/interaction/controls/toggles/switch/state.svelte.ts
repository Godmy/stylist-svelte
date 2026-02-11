import type { SwitchProps } from '$stylist/design-system/props';
import { TOKEN_TOGGLE_HANDLE_SIZE_CLASSES } from '$stylist/design-system/classes/toggles';
import { mergeClasses } from '$stylist/utils/classes';

export const createSwitchState = (props: SwitchProps) => {
	const disabled = props.disabled ?? false;
	const required = props.required ?? false;
	const className = props.class ?? '';

	const trackClasses = mergeClasses(
		'relative inline-flex h-6 w-11 rounded-full transition-colors',
		props.checked ? 'bg-[--color-primary-500]' : 'bg-[--color-border-primary]',
		disabled ? 'opacity-50 cursor-not-allowed' : '',
		className
	);
	const knobClasses = mergeClasses(
		'pointer-events-none block rounded-full bg-[--color-background-primary] shadow-lg ring-0 transition-transform',
		TOKEN_TOGGLE_HANDLE_SIZE_CLASSES.md,
		props.checked ? 'translate-x-5' : 'translate-x-0.5'
	);
	const inputClasses = 'peer sr-only';
	const containerClasses = mergeClasses('flex items-center', props.label || props.description ? 'space-x-3' : '');
	const labelTextClasses = 'flex flex-col';
	const labelTitleClasses = 'text-sm font-medium leading-5';
	const requiredMarkerClasses = 'text-[--color-danger-500] ml-1';
	const labelDescriptionClasses = 'text-xs text-[--color-text-secondary] mt-1';

	return {
		trackClasses,
		knobClasses,
		inputClasses,
		containerClasses,
		disabled,
		required,
		labelClasses: 'flex items-center gap-2',
		labelTextClasses,
		labelTitleClasses,
		requiredMarkerClasses,
		labelDescriptionClasses
	};
};


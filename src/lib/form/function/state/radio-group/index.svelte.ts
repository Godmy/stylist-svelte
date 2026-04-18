import type { RadioGroupProps } from '$stylist/form/type/struct/radio-group';
import { RADIO_GROUP_LAYOUT_CLASS } from '$stylist/form/const/map/radio-group-layout';
import type { SlotRadioGroupState } from '$stylist/form/interface/slot/radio-group-state';

export function createRadioGroupState(props: RadioGroupProps): SlotRadioGroupState {
	let internalValue = $state(props.value ?? '');

	const layoutClass = $derived(RADIO_GROUP_LAYOUT_CLASS[props.orientation ?? 'vertical'] ?? RADIO_GROUP_LAYOUT_CLASS.vertical);

	$effect(() => {
		if (props.value !== undefined) {
			internalValue = props.value;
		}
	});

	const rootClass = $derived('space-y-3');
	const labelClass = $derived('text-sm font-medium text-[var(--color-text-primary)]');
	const requiredMarkClass = $derived('text-[var(--color-danger-500)]');
	const descriptionClass = $derived('text-sm text-[var(--color-text-secondary)]');
	const optionsContainerClass = $derived(layoutClass);
	const optionLabelClass = $derived(`flex items-start gap-3 rounded-md border border-[var(--color-border-primary)] px-3 py-2 transition-colors duration-[var(--duration-150)] ${props.disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : 'cursor-pointer hover:border-[var(--color-primary-400)]'}`);
	const optionTextClass = $derived('text-sm font-medium text-[var(--color-text-primary)]');
	const optionDescriptionClass = $derived('text-xs text-[var(--color-text-secondary)]');
	const inputClass = $derived('peer absolute h-4 w-4 rounded-full border border-[var(--color-border-primary)] text-[var(--color-primary-600)] focus:ring-indigo-500 focus:outline-none');
	const indicatorClass = $derived('pointer-events-none inline-flex h-2 w-2 rounded-full bg-[var(--color-primary-600)] opacity-[var(--opacity-0)] transition-opacity duration-[var(--duration-150)] peer-checked:opacity-[var(--opacity-100)]');
	const errorClass = $derived('text-sm text-[var(--color-danger-600)]');

	return {
		get internalValue() { return internalValue; },
		set internalValue(v: string) { internalValue = v; },
		get layoutClass() { return layoutClass; },
		get rootClass() { return rootClass; },
		get labelClass() { return labelClass; },
		get requiredMarkClass() { return requiredMarkClass; },
		get descriptionClass() { return descriptionClass; },
		get optionsContainerClass() { return optionsContainerClass; },
		get optionLabelClass() { return optionLabelClass; },
		get optionTextClass() { return optionTextClass; },
		get optionDescriptionClass() { return optionDescriptionClass; },
		get inputClass() { return inputClass; },
		get indicatorClass() { return indicatorClass; },
		get errorClass() { return errorClass; }
	};
}

export default createRadioGroupState;

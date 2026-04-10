import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { RadioProps } from '$stylist/control/interface/component/toggles';
import { StyleManagerState } from '$stylist/architecture/class/style-manager/state/index';

export const createRadioState = (props: RadioProps) => {
	const id = props.id;
	const name = props.name;
	const value = props.value;
	const checked = props.checked ?? false;
	const label = props.label;
	const disabled = props.disabled ?? false;
	const required = props.required ?? false;
	const className = props.class ?? '';

	const containerClasses = joinClassNames('flex items-center space-x-2', className);
	const radioClasses = joinClassNames(
		'h-4 w-4 text-[--color-primary-500] focus:ring-[--color-primary-500]',
		'border-[--color-border-primary] focus:ring-offset-0',
		disabled ? StyleManagerState.classes.disabled : ''
	);
	const labelClasses = joinClassNames(
		'block text-sm font-medium leading-5',
		disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''
	);

	return {
		id,
		name,
		value,
		checked,
		label,
		disabled,
		required,
		containerClasses,
		radioClasses,
		labelClasses,
		handleChange(event: Event) {
			const target = event.target as HTMLInputElement;
			if (target.checked && props.onchange) {
				(props.onchange as (e: Event) => void)(event);
			}
		}
	};
};



export default createRadioState;






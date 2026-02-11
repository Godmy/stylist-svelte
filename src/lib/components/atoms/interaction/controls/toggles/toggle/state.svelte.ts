import type { ToggleProps } from '$stylist/design-system/props';
import { mergeClasses } from '$stylist/utils/classes';

export const createToggleState = (props: ToggleProps) => {
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const checked = $derived(props.checked ?? false);
	
	const containerClasses = $derived(
		mergeClasses(
			'relative inline-flex items-center',
			props.class
		)
	);
	
	const inputClasses = $derived(
		mergeClasses(
			'absolute opacity-0 w-0 h-0 peer'
		)
	);
	
	const trackClasses = $derived(
		mergeClasses(
			'relative w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full transition-colors duration-200 ease-in-out',
			checked ? 'bg-blue-500' : 'bg-gray-300',
			disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
		)
	);
	
	const thumbClasses = $derived(
		mergeClasses(
			'absolute left-0.5 top-0.5 bg-white border border-gray-300 rounded-full h-5 w-5 transition-transform duration-200 ease-in-out',
			'peer-checked:translate-x-5',
			'peer-focus:ring-2 peer-focus:ring-blue-500'
		)
	);
	
	const disabledClass = $derived(disabled ? 'opacity-50' : '');

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
};

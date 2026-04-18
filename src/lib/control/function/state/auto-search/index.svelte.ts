import { AutoSearchStyleManager } from '$stylist/control/class/style-manager/auto-search';
import type { SlotAutoSearch as AutoSearchProps } from '$stylist/control/interface/slot/auto-search';

export function createAutoSearchState(props: AutoSearchProps) {
	let localValue = $state(props.value ?? '');
	let rootClass = $derived(AutoSearchStyleManager.root(props.class ?? ''));
	let inputClass = $derived(AutoSearchStyleManager.input());
	let iconWrapperClass = $derived(AutoSearchStyleManager.iconWrapper());

	$effect(() => {
		localValue = props.value ?? '';
	});

	const handleInput = (event: Event) => {
		const target = event.target as HTMLInputElement;
		localValue = target.value;
		props.onValueInput?.(localValue);
		props.onValueChange?.(localValue);
		props.onInput?.(localValue);
	};

	return {
		get localValue() {
			return localValue;
		},
		get rootClass() {
			return rootClass;
		},
		get inputClass() {
			return inputClass;
		},
		get iconWrapperClass() {
			return iconWrapperClass;
		},
		handleInput
	};
}

export default createAutoSearchState;

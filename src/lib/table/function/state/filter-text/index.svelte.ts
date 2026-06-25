import type { SlotFilterText } from '$stylist/table/interface/slot/filter-text';

export function createFilterTextState(props: SlotFilterText) {
	let value = $state(props.value ?? '');

	$effect(() => { value = props.value ?? ''; });

	const handleInput = (e: Event) => {
		value = (e.target as HTMLInputElement).value;
		props.onSearch?.(value);
	};

	return {
		get value() { return value; },
		handleInput
	};
}

export default createFilterTextState;

import { createButtonState as createButtonStateImpl } from '$stylist/button/function/state/button/index.svelte';

export function createSplitButtonState(...args: Parameters<typeof createButtonStateImpl>) {
	const [props] = args as [Record<string, any>];
	const buttonState = createButtonStateImpl(...args);
	let isOpen = $state(false);
	const buttonId = `split-button-${Math.random().toString(36).slice(2, 11)}`;

	const variant = $derived(buttonState.variant);
	const size = $derived(buttonState.size);

	$effect(() => {
		if (!isOpen) {
			return;
		}

		const handleClickOutside = (event: Event) => {
			if (!event.composedPath().some((el) => el instanceof Element && el.id === buttonId)) {
				isOpen = false;
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});

	function toggleDropdown() {
		if (!(props.contract?.disabled ?? props.disabled)) {
			isOpen = !isOpen;
		}
	}

	function closeDropdown() {
		isOpen = false;
	}

	function handleItemClick(onClick: () => void) {
		onClick();
		closeDropdown();
	}

	return {
		...buttonState,
		get isOpen() {
			return isOpen;
		},
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		buttonId,
		toggleDropdown,
		closeDropdown,
		handleItemClick
	};
}

export default createSplitButtonState;

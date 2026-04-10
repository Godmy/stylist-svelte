import { createButtonState as createButtonStateImpl } from '$stylist/control/function/state/button';

export function createSplitButtonState(
	...args: Parameters<typeof createButtonStateImpl>
) {
	const [props] = args;
	const buttonState = createButtonStateImpl(...args);
	let isOpen = $state(false);
	const buttonId = `split-button-${Math.random().toString(36).slice(2, 11)}`;

	const baseButtonClasses = $derived(
		[buttonState.classes, 'split-button__button'].filter(Boolean).join(' ')
	);
	const primaryButtonClasses = $derived(`${baseButtonClasses} rounded-r-none border-r-0`.trim());
	const toggleButtonClasses = $derived(`${baseButtonClasses} rounded-l-none border-l-0`.trim());
	const wrapperClasses = $derived(
		`relative inline-flex items-center rounded-md overflow-hidden ${('html' in props ? props.html?.class : props.class) ?? ''}`.trim()
	);
	const menuClasses = $derived(
		[
			'split-button-menu',
			'absolute z-[var(--z-index-docked)] mt-1 w-48 rounded-md',
			'border border-[var(--color-border-primary)]',
			'bg-[var(--color-background-primary)] text-[var(--color-text-primary)]',
			'shadow-[0_10px_15px_-3px_color-mix(in srgb, var(--color-text-primary) 20%, transparent),0_4px_6px_-2px_color-mix(in srgb, var(--color-text-primary) 12%, transparent)]',
			'outline-none'
		].join(' ')
	);

	const menuItemBaseClasses =
		'split-button-menu__item w-full px-4 py-2 text-sm text-left rounded-md bg-transparent text-[inherit] transition-colors duration-[var(--duration-150)] focus-visible:outline-none hover:bg-[var(--color-secondary-100)] focus-visible:bg-[var(--color-secondary-100)]';
	const menuItemDisabledClasses =
		'split-button-menu__item--disabled opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none';

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
		if (!('contract' in props ? props.contract?.disabled : props.disabled)) {
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
		buttonId,
		get wrapperClasses() {
			return wrapperClasses;
		},
		get baseButtonClasses() {
			return baseButtonClasses;
		},
		get primaryButtonClasses() {
			return primaryButtonClasses;
		},
		get toggleButtonClasses() {
			return toggleButtonClasses;
		},
		get menuClasses() {
			return menuClasses;
		},
		menuItemBaseClasses,
		menuItemDisabledClasses,
		toggleDropdown,
		closeDropdown,
		handleItemClick
	};
}

export default createSplitButtonState;








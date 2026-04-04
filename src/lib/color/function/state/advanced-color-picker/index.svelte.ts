import { ObjectManagerAdvancedColorPicker } from '$stylist/color/class/object-manager/advanced-color-picker';
import { StyleManagerAdvancedColorPicker } from '$stylist/color/class/style-manager/advanced-color-picker';
import type { ThemeAdvancedColorPickerRecipe } from '$stylist/color/interface/recipe/advanced-color-picker';

export function createAdvancedColorPickerState(props: ThemeAdvancedColorPickerRecipe) {
	let isOpen = $state(false);
	let internalValue = $state(
		ObjectManagerAdvancedColorPicker.resolveValue(props.value)
	);

	$effect(() => {
		internalValue = ObjectManagerAdvancedColorPicker.resolveValue(props.value);
	});

	const palette = $derived(ObjectManagerAdvancedColorPicker.resolvePalette());
	const rootClass = $derived(StyleManagerAdvancedColorPicker.root(props.class));
	const triggerClass = $derived(StyleManagerAdvancedColorPicker.trigger());
	const panelClass = $derived(StyleManagerAdvancedColorPicker.panel());
	const previewClass = $derived(StyleManagerAdvancedColorPicker.preview());
	const textInputClass = $derived(StyleManagerAdvancedColorPicker.textInput());
	const paletteClass = $derived(StyleManagerAdvancedColorPicker.palette());
	const paletteButtonClass = $derived(StyleManagerAdvancedColorPicker.paletteButton());
	const acceptButtonClass = $derived(StyleManagerAdvancedColorPicker.acceptButton());
	const restProps = $derived.by(() => {
		const {
			value: _value,
			disabled: _disabled,
			showInput: _showInput,
			showPalette: _showPalette,
			class: _class,
			onInput: _onInput,
			onChange: _onChange,
			...rest
		} = props;
		return rest;
	});

	function setOpen(nextValue: boolean): void {
		isOpen = nextValue;
	}

	function toggleOpen(): void {
		if (!props.disabled) {
			isOpen = !isOpen;
		}
	}

	function setColor(color: string): void {
		internalValue = color;
		props.onInput?.(color);
		props.onChange?.(color);
	}

	function handleInput(): void {
		props.onInput?.(internalValue);
	}

	function handleChange(): void {
		props.onChange?.(internalValue);
	}

	return {
		get isOpen() {
			return isOpen;
		},
		get internalValue() {
			return internalValue;
		},
		set internalValue(value: string) {
			internalValue = value;
		},
		get palette() {
			return palette;
		},
		get rootClass() {
			return rootClass;
		},
		get triggerClass() {
			return triggerClass;
		},
		get panelClass() {
			return panelClass;
		},
		get previewClass() {
			return previewClass;
		},
		get textInputClass() {
			return textInputClass;
		},
		get paletteClass() {
			return paletteClass;
		},
		get paletteButtonClass() {
			return paletteButtonClass;
		},
		get acceptButtonClass() {
			return acceptButtonClass;
		},
		get restProps() {
			return restProps;
		},
		setOpen,
		toggleOpen,
		setColor,
		handleInput,
		handleChange
	};
}

export default createAdvancedColorPickerState;

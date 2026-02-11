<script lang="ts">
	import type { RadioButtonGroupProps } from '$stylist/design-system/props';
	import { createRadioButtonGroupState } from './state.svelte';

	let props: RadioButtonGroupProps = $props();

	const radioGroupState = createRadioButtonGroupState(props);

	let selectedValue = $state(radioGroupState.value);

	$effect(() => {
		if (selectedValue !== radioGroupState.value) {
			selectedValue = radioGroupState.value;
		}
	});

	function handleInput(optionValue: string) {
		selectedValue = optionValue;
		props.onInput?.(optionValue);
	}

	function handleChange(optionValue: string) {
		selectedValue = optionValue;
		props.onChange?.(optionValue);
	}

	// Extract only HTML-compatible props for the container div
	const htmlProps = $derived((() => {
		const {
			options: _options,
			value: _value,
			name: _name,
			disabled: _disabled,
			required: _required,
			orientation: _orientation,
			class: _class,
			optionClass: _optionClass,
			labelClass: _labelClass,
			radioClass: _radioClass,
			onInput: _onInput,
			onChange: _onChange,
			// Exclude attributes that don't belong on div elements
			// Input-specific attributes
			accept: _accept,
			alt: _alt,
			autocomplete: _autocomplete,
			autofocus: _autofocus,
			capture: _capture,
			checked: _checked,
			crossorigin: _crossorigin,
			files: _files,
			form: _form,
			formaction: _formaction,
			formenctype: _formenctype,
			formmethod: _formmethod,
			formnovalidate: _formnovalidate,
			formtarget: _formtarget,
			height: _height,
			inputmode: _inputmode,
			list: _list,
			max: _max,
			maxlength: _maxlength,
			min: _min,
			minlength: _minlength,
			multiple: _multiple,
			pattern: _pattern,
			placeholder: _placeholder,
			readonly: _readonly,
			selectionDirection: _selectionDirection,
			selectionEnd: _selectionEnd,
			selectionStart: _selectionStart,
			size: _size,
			src: _src,
			step: _step,
			type: _type,
			useMap: _useMap,
			width: _width,
			wrap: _wrap,
			// Event handlers that are specific to inputs
			onBeforeInput: _onBeforeInput,
			onInvalid: _onInvalid,
			onSelect: _onSelect,
			// Clipboard event handlers
			onCopy: _onCopy,
			onCut: _onCut,
			onPaste: _onPaste,
			...filteredProps
		} = {
			...props
		};
		return filteredProps;
	})());
</script>

<div class={radioGroupState.containerClass} {...htmlProps}>
	{#each radioGroupState.options as option}
		<label class={radioGroupState.getOptionClass(!!option.disabled)}>
			<input
				type="radio"
				name={radioGroupState.name}
				class={radioGroupState.radioInputClass}
				bind:group={selectedValue}
				value={option.value}
				oninput={() => handleInput(option.value)}
				onchange={() => handleChange(option.value)}
				disabled={option.disabled || radioGroupState.disabled}
				required={radioGroupState.required}
			/>
			<span class={radioGroupState.optionLabelClass}>{option.label}</span>
		</label>
	{/each}
</div>


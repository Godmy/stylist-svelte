<script lang="ts">
	import type { RadioButtonGroupProps } from '$stylist/design-system/props';
	import { createRadioButtonGroupState } from '$stylist/design-system/models/radio-button-group.svelte';

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
		props.oninput?.(optionValue);
	}

	function handleChange(optionValue: string) {
		selectedValue = optionValue;
		props.onchange?.(optionValue);
	}

	// Extract only HTML-compatible props for the container div
	// Create a new object with only the safe properties by picking them explicitly
	const htmlProps = $derived(() => {
		const result = {} as Record<string, any>;
		
		// Manually copy only the properties that are safe to use on a div element
		for (const [key, value] of Object.entries(props)) {
			// Skip properties that are specific to input elements or that cause type conflicts
			if (![
				'options', 'value', 'name', 'disabled', 'required', 'orientation', 
				'class', 'optionClass', 'labelClass', 'radioClass', 'oninput', 'onchange',
				'accept', 'alt', 'autocomplete', 'autofocus', 'capture', 'checked', 
				'crossOrigin', 'files', 'form', 'formAction', 'formEncType', 'formMethod', 
				'formNoValidate', 'formTarget', 'height', 'inputMode', 'list', 'max', 
				'maxLength', 'min', 'minLength', 'multiple', 'pattern', 'placeholder', 
				'readOnly', 'selectionDirection', 'selectionEnd', 'selectionStart', 'size', 
				'src', 'step', 'type', 'useMap', 'width', 'wrap'
			].includes(key)) {
				result[key] = value;
			}
		}
		
		return result;
	});
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


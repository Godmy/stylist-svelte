<script lang="ts">
	import type { RecipeRadioButtonGroupProps as RecipeRadioButtonGroupProps } from '$stylist/control/interface/recipe/radio-button-group-props';
	import { createRadioButtonGroupState } from '$stylist/control/function/state/radio-button-group';

	let props: RecipeRadioButtonGroupProps = $props();

	const state = createRadioButtonGroupState(props);

	// Extract only HTML-compatible props for the container div
	// Create a new object with only the safe properties by picking them explicitly
	const htmlProps = $derived(() => {
		const result = {} as Record<string, any>;
		
		// Manually copy only the properties that are safe to use on a div element
		for (const [key, value] of Object.entries(props)) {
			// Skip properties that are specific to input elements or that cause type conflicts
			if (![
				'options', 'value', 'name', 'disabled', 'required', 'orientation', 
				'class', 'optionClass', 'labelClass', 'radioClass', 'onValueInput', 'onValueChange',
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

<div class={state.containerClass} {...htmlProps}>
	{#each state.options as option}
		<label class={state.getOptionClass(!!option.disabled)}>
			<input
				type="radio"
				name={state.name}
				class={state.radioInputClass}
				checked={state.value === option.value}
				value={option.value}
				oninput={() => state.handleInput(option.value)}
				onchange={() => state.handleChange(option.value)}
				disabled={option.disabled || state.disabled}
				required={state.required}
			/>
			<span class={state.optionLabelClass}>{option.label}</span>
		</label>
	{/each}
</div>



<script lang="ts">
	import { InputText } from '$stylist/components/atoms';
	import type { IInputFieldProps } from '$stylist/design-system/props';

	/**
	 * Enhanced Input Field component with helper text and error handling
	 *
	 * This component wraps the base Input component and adds support for
	 * helper text that appears below the input when there are no errors.
	 *
	 * @param {string} [helperText] - Optional helper text to display below the input
	 * @param {string[]} [errors] - Array of error messages to display
	 * @param {string} id - Unique identifier for the input field (required)
	 * @param {string} label - Label text for the input field (required)
	 * @param {string} [type='text'] - Input type ('text', 'email', 'password', etc.)
	 * @param {string} [value] - Current value of the input (supports two-way binding)
	 * @param {boolean} [required=false] - Whether the field is required
	 * @param {boolean} [disabled=false] - Whether the input is disabled
	 * @param {string} [placeholder] - Placeholder text for the input
	 * @param {number} [min] - Minimum value for numeric inputs
	 * @param {number} [max] - Maximum value for numeric inputs
	 * @param {number} [step] - Step increment for numeric inputs
	 * @returns {HTMLElement} A styled input field with label, error display, and optional helper text
	 */
	let {
		helperText,
		errors = [],
		value = $bindable<string>(),
		...rest
	}: IInputFieldProps = $props();

	let containerClasses = $derived('input-field-container');
	let helperTextClasses = $derived('input-field-helper-text');
</script>

<div class={containerClasses}>
	<InputText {...rest} {value} {errors} />

	{#if helperText && errors.length === 0}
		<p class={helperTextClasses}>{helperText}</p>
	{/if}
</div>





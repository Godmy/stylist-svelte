<script lang="ts">
	import { INPUT_FIELD_PRESET } from '$stylist/design-system/presets';
	import { createInputFieldState } from '../state.svelte';
	import type { IInputProps } from '$stylist/design-system/attributes';
	import type { HTMLInputAttributes } from 'svelte/elements';

	/**
	 * Input component - A styled input field with label and error handling
	 *
	 * SOLID Principles applied:
	 *
	 * Single Responsibility Principle: This component is responsible only for displaying a styled input field with label and error handling.
	 * Open/Closed Principle: The component is closed for modification but open for extension via CSS classes.
	 * Liskov Substitution Principle: Input can be substituted with other input components without breaking functionality.
	 * Interface Segregation Principle: IInputProps provides a focused interface for the component.
	 * Dependency Inversion Principle: Component depends on abstractions (styles manager and types) rather than concretions.
	 */
	type InputVariant = (typeof INPUT_FIELD_PRESET.variants)[number];
	type InputSize = (typeof INPUT_FIELD_PRESET.sizes)[number];

	let {
		id,
		label,
		type = 'text',
		value = $bindable<string>(),
		errors = [],
		required = false,
		disabled = false,
		error = false,
		variant = INPUT_FIELD_PRESET.defaults.variant,
		size = INPUT_FIELD_PRESET.defaults.size,
		class: className = '',
		placeholder,
		min,
		max,
		step,
		...restProps
	}: IInputProps & {
		error?: boolean;
		variant?: InputVariant;
		size?: InputSize;
	} & HTMLInputAttributes = $props();

	// Calculate derived values
	const hasError = $derived(error || errors.length > 0);
	const errorId = $derived(`${id}-error`);
	const state = $derived(
		createInputFieldState({
			variant,
			size,
			disabled,
			error: hasError,
			class: className
		})
	);

	const containerClass = 'mb-[--spacing-md]';
	const labelClass = 'block text-sm font-medium text-[--color-text-primary] mb-[--spacing-xs]';
	const errorClass = 'mt-[--spacing-xs] text-sm text-[--color-danger-600]';
	const requiredClass = 'text-[--color-danger-500]';
</script>

<div class={containerClass}>
	<label for={id} class={labelClass}>
		{label}
		{#if required}
			<span class={requiredClass}>*</span>
		{/if}
	</label>

	<input
		{id}
		{type}
		bind:value
		class={state.classes}
		{disabled}
		{placeholder}
		{required}
		{min}
		{max}
		{step}
		aria-describedby={hasError ? errorId : undefined}
		aria-invalid={hasError}
		aria-required={required}
		{...restProps}
	/>

	{#if hasError}
		<p id={errorId} class={errorClass}>
			{#each errors as error, i}
				{error}{i < errors.length - 1 ? ' ' : ''}
			{/each}
		</p>
	{/if}
</div>

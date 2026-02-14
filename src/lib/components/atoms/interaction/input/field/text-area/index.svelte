<script lang="ts">
	import { createTextAreaState as createInputFieldState, INPUT_FIELD_PRESET } from '$stylist/design-system/models/text-area.svelte';
	import type { ITextareaProps } from '$stylist/design-system/props';
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	/**
	 * Textarea component - A styled textarea field with label and error handling
	 *
	 * SOLID Principles applied:
	 *
	 * Single Responsibility Principle: This component is responsible only for displaying a styled textarea field with label and error handling.
	 * Open/Closed Principle: The component is closed for modification but open for extension via CSS classes.
	 * Liskov Substitution Principle: Textarea can be substituted with other textarea components without breaking functionality.
	 * Interface Segregation Principle: ITextareaProps provides a focused interface for the component.
	 * Dependency Inversion Principle: Component depends on abstractions (styles manager and types) rather than concretions.
	 */
	type InputVariant = (typeof INPUT_FIELD_PRESET.variants)[number];
	type InputSize = (typeof INPUT_FIELD_PRESET.sizes)[number];

	let {
		id,
		label,
		value = $bindable<string>(), // Use $bindable for two-way binding
		errors = [],
		required = false,
		disabled = false,
		error = false,
		variant = INPUT_FIELD_PRESET.defaults.variant,
		size = INPUT_FIELD_PRESET.defaults.size,
		class: className = '',
		placeholder,
		rows = 3,
		maxlength,
		...restProps
	}: ITextareaProps & {
		error?: boolean;
		variant?: InputVariant;
		size?: InputSize;
	} & HTMLTextareaAttributes = $props();

	// Calculate derived values
	const hasError = $derived(error || errors.length > 0);
	const errorId = $derived(`${id}-error`);
	const length = $derived(value?.length || 0);
	const showCounter = $derived(maxlength !== undefined);
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
	const labelWrapperClass = 'flex justify-between';
	const labelClass = 'block text-sm font-medium text-[--color-text-primary] mb-[--spacing-xs]';
	const counterClass = 'text-sm text-[--color-text-secondary]';
	const errorClass = 'mt-[--spacing-xs] text-sm text-[--color-danger-600]';
	const requiredClass = 'text-[--color-danger-500]';
</script>

<div class={containerClass}>
	<div class={labelWrapperClass}>
		<label for={id} class={labelClass}>
			{label}
			{#if required}
				<span class={requiredClass}>*</span>
			{/if}
		</label>

		{#if showCounter}
			<span class={counterClass}>
				{length}/{maxlength}
			</span>
		{/if}
	</div>

	<textarea
		{id}
		bind:value
		class={state.classes}
		{disabled}
		{placeholder}
		{required}
		{rows}
		{maxlength}
		aria-describedby={hasError ? errorId : undefined}
		{...restProps}
	></textarea>

	{#if hasError}
		<p id={errorId} class={errorClass}>
			{#each errors as error, i}
				{error}{i < errors.length - 1 ? ' ' : ''}
			{/each}
		</p>
	{/if}
</div>






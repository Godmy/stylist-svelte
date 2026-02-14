<script lang="ts">
	import { createInputTextState as createInputFieldState, INPUT_FIELD_PRESET } from '$stylist/design-system/models/input-text.svelte';
	import type { InputFieldBaseProps, InputValueProps, InputValidationProps, InputAttributesBase, IInputProps } from '$stylist/design-system/props';
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
		label,
		value = $bindable<string>(),
		error,
		variant,
		size,
		...restProps
	} = $props<Omit<IInputProps, 'label' | 'value'> & {
		label?: string;
		value?: string;
		error?: boolean;
		variant?: InputVariant;
		size?: InputSize;
	} & HTMLInputAttributes>();

	// Calculate derived values
	const hasError = $derived((error ?? false) || (restProps.errors?.length ?? 0) > 0);
	const errorId = $derived(`${restProps.id}-error`);
	const inputState = $derived(
		createInputFieldState({
			variant: variant ?? INPUT_FIELD_PRESET.defaults.variant,
			size: size ?? INPUT_FIELD_PRESET.defaults.size,
			disabled: restProps.disabled ?? false,
			error: hasError,
			class: restProps.class ?? ''
		})
	);

	const containerClass = 'mb-[--spacing-md]';
	const labelClass = 'block text-sm font-medium text-[--color-text-primary] mb-[--spacing-xs]';
	const errorClass = 'mt-[--spacing-xs] text-sm text-[--color-danger-600]';
	const requiredClass = 'text-[--color-danger-500]';
</script>

<div class={containerClass}>
	<label for={restProps.id} class={labelClass}>
		{label}
		{#if restProps.required}
			<span class={requiredClass}>*</span>
		{/if}
	</label>

	<input
		id={restProps.id}
		type={restProps.type ?? 'text'}
		bind:value
		class={inputState.classes}
		disabled={restProps.disabled}
		placeholder={restProps.placeholder}
		required={restProps.required}
		min={restProps.min}
		max={restProps.max}
		step={restProps.step}
		aria-describedby={hasError ? errorId : undefined}
		aria-invalid={hasError}
		aria-required={restProps.required}
		{...restProps}
	/>

	{#if hasError}
		<p id={errorId} class={errorClass}>
			{#each restProps.errors || [] as error_msg, i}
				{error_msg}{i < (restProps.errors?.length ?? 0) - 1 ? ' ' : ''}
			{/each}
		</p>
	{/if}
</div>






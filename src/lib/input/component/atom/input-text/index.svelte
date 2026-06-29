<script lang="ts">
	import { onMount } from 'svelte';
	import createInputTextState from '$stylist/input/function/state/input-text/index.svelte';
	import type { SlotInputBase as IInputBaseProps } from '$stylist/input/interface/slot/input-base';
	import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
	import type { TokenSize } from '$stylist/layout/type/alias/size';

	let {
		variant = 'default',
		size = 'md',
		disabled = false,
		error = false,
		block = false,
		class: className = '',
		label,
		id,
		showRequiredIndicator = true,
		errors = [],
		showErrors = true,
		helperText,
		showHelperWhenError = false,
		value = $bindable<string>(''),
		type = 'text',
		placeholder,
		name,
		required = false,
		readonly = false,
		autofocus = false,
		autocomplete,
		pattern,
		minlength,
		maxlength,
		min,
		max,
		step,
		...restProps
	}: IInputBaseProps<TokenAppearance, TokenSize> = $props();

	const state = createInputTextState({
		variant,
		size,
		disabled,
		error: error || errors.length > 0,
		block,
		class: className,
		id,
		helperText,
		showHelperWhenError
	});

	let inputElement: HTMLInputElement | null = null;
	onMount(() => {
		if (autofocus) inputElement?.focus();
	});
</script>

<div class={state.containerClasses}>
	{#if label}
		<label
			for={id}
			class={state.labelClasses}
			id={state.labelId}
			data-size={size}
			data-disabled={disabled ? 'true' : 'false'}
		>
			{label}
			{#if required && showRequiredIndicator}
				<span class={state.requiredIndicatorClasses} aria-hidden="true">*</span>
			{/if}
		</label>
	{/if}

	<input
		{id}
		{type}
		{name}
		bind:value
		{placeholder}
		{required}
		{readonly}
		{disabled}
		bind:this={inputElement}
		{autocomplete}
		{pattern}
		{minlength}
		{maxlength}
		{min}
		{max}
		{step}
		class={state.classes}
		aria-describedby={state.hasError && showErrors
			? state.errorId
			: helperText
				? undefined
				: undefined}
		aria-invalid={state.hasError ? 'true' : 'false'}
		aria-required={required ? 'true' : 'false'}
		{...restProps}
	/>

	{#if state.hasError && showErrors && errors.length > 0}
		<p id={state.errorId} class={state.errorTextClasses} role="alert">
			{#each errors as error_msg, i}
				{error_msg}{i < errors.length - 1 ? ' ' : ''}
			{/each}
		</p>
	{:else if state.showHelper}
		<p class={state.helperTextClasses}>{helperText}</p>
	{/if}
</div>

<style>
	.input-field-container {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.input-field-label {
		display: block;
		margin-block-end: 0.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.input-field-label[data-size='xs'] {
		font-size: var(--text-size-xs, 0.75rem);
	}

	.input-field-label[data-size='sm'],
	.input-field-label[data-size='1/3'],
	.input-field-label[data-size='2/5'] {
		font-size: var(--text-size-sm, 0.875rem);
	}

	.input-field-label[data-size='md'],
	.input-field-label[data-size='1/2'],
	.input-field-label[data-size='3/5'] {
		font-size: var(--text-size-md, 1rem);
	}

	.input-field-label[data-size='lg'],
	.input-field-label[data-size='2/3'] {
		font-size: var(--text-size-lg, 1.125rem);
	}

	.input-field-label[data-size='xl'],
	.input-field-label[data-size='3/4'] {
		font-size: var(--text-size-xl, 1.25rem);
	}

	.input-field-label[data-size='2xl'],
	.input-field-label[data-size='full'] {
		font-size: var(--text-size-2xl, 1.5rem);
	}

	.input-field-label[data-disabled='true'] {
		color: var(--color-text-tertiary);
		cursor: not-allowed;
	}

	.input-field-required {
		margin-inline-start: 0.25rem;
		color: var(--color-danger-500);
	}

	.input-field-helper-text {
		margin-block-start: 0.25rem;
		font-size: var(--text-size-xs, 0.75rem);
		color: var(--color-text-secondary);
	}

	.input-field-error-text {
		margin-block-start: 0.25rem;
		font-size: var(--text-size-xs, 0.75rem);
		color: var(--color-danger-600);
	}
</style>

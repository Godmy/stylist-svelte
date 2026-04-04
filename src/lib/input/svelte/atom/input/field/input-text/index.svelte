<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
import { onMount } from 'svelte';
import { createInputTextState } from '$stylist/input/function/state/input-text';
import { InputStyleManager } from '$stylist/input/class/style-manager/input';
	import type { IInputBaseProps } from '$stylist/input/interface/component/input/other';
import type { TokenAppearance } from '$stylist';
import type { TokenSize } from '$stylist/layout/type/enum/size';

	/**
	 * InputText component - Базовый текстовый input с поддержкой variant, size, error states
	 *
	 * @example
	 * ```svelte
	 * <InputText
	 *   label="Email"
	 *   bind:value={email}
	 *   variant="default"
	 *   size="md"
	 *   error={hasError}
	 *   errors={['Некорректный email']}
	 *   helperText="Введите ваш email"
	 * />
	 * ```
	 */

	type Props = IInputBaseProps<TokenAppearance, TokenSize> &
		Omit<HTMLInputAttributes, 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'>;

	let {
		// Core props
		variant = 'default',
		size = 'md',
		disabled = false,
		error = false,
		block = false,
		class: className = '',

		// Label props
		label,
		id,
		showRequiredIndicator = true,

		// Validation props
		errors = [],
		showErrors = true,

		// Helper props
		helperText,
		showHelperWhenError = false,

		// Native input props
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

		// Rest props
		...restProps
	}: Props = $props();

	// Derived values
	const hasError = $derived(error || errors.length > 0);
	const errorId = $derived(id ? `${id}-error` : undefined);
	const labelId = $derived(id ? `${id}-label` : undefined);

	// Input state using design system model
	const inputState = $derived(
		createInputTextState({
			variant,
			size,
			disabled,
			error: hasError,
			block,
			class: className
		})
	);

	// Container classes
	const containerClasses = $derived(InputStyleManager.getContainerClass(''));
	const labelClasses = $derived(InputStyleManager.getLabelClass(''));
	const helperTextClasses = $derived(InputStyleManager.getHelperTextClass(''));
	const errorTextClasses = $derived(InputStyleManager.getErrorTextClass(''));
	const requiredIndicatorClasses = $derived(InputStyleManager.getRequiredIndicatorClass(''));

	// Show helper text logic
	const showHelper = $derived(
		helperText && (showHelperWhenError || !hasError)
	);

	let inputElement: HTMLInputElement | null = null;
	onMount(() => {
		if (autofocus) inputElement?.focus();
	});
</script>

<div class={containerClasses}>
	{#if label}
		<label for={id} class={labelClasses} id={labelId}>
			{label}
			{#if required && showRequiredIndicator}
				<span class={requiredIndicatorClasses} aria-hidden="true">*</span>
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
		class={inputState.classes}
		aria-describedby={hasError && showErrors ? errorId : helperText ? undefined : undefined}
		aria-invalid={hasError ? 'true' : 'false'}
		aria-required={required ? 'true' : 'false'}
		{...restProps}
	/>

	{#if hasError && showErrors && errors.length > 0}
		<p id={errorId} class={errorTextClasses} role="alert">
			{#each errors as error_msg, i}
				{error_msg}{i < errors.length - 1 ? ' ' : ''}
			{/each}
		</p>
	{:else if showHelper}
		<p class={helperTextClasses}>{helperText}</p>
	{/if}
</div>













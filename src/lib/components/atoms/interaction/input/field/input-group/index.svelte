<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { onMount } from 'svelte';
	import { createInputTextState } from '../../../../../../design-system/models/interaction/input-text.svelte';
	import { InputStyleManager } from '$stylist/design-system/styles/interaction/input';
	import type { IInputGroupProps } from '$stylist/design-system/contracts';
	import { Button } from '$stylist/components/atoms';

	/**
	 * InputGroup component - Input с кнопкой справа
	 *
	 * @example
	 * ```svelte
	 * <InputGroup
	 *   label="Поиск"
	 *   bind:value={searchQuery}
	 *   buttonLabel="Найти"
	 *   onButtonClick={handleSearch}
	 * />
	 * ```
	 */

	type Props = IInputGroupProps &
		Omit<HTMLInputAttributes, 'type' | 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'>;

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

		// Input-specific props
		value = $bindable<string>(''),
		placeholder,
		autocomplete,
		name,
		required = false,
		readonly = false,
		autofocus = false,
		pattern,
		minlength,
		maxlength,

		// Button props
		buttonLabel = 'Действие',
		buttonVariant = 'primary',
		buttonDisabled = false,
		onButtonClick,
		onValueInput,
		onValueChange,

		// Rest props
		...restProps
	}: Props = $props();

	// Derived values
	const hasError = $derived(error || errors.length > 0);
	const errorId = $derived(id ? `${id}-error` : undefined);
	const labelId = $derived(id ? `${id}-label` : undefined);

	// Input state
	const inputState = $derived(
		createInputTextState({
			variant,
			size,
			disabled,
			error: hasError,
			block: false, // Input в группе не может быть block
			class: className
		})
	);

	// Container classes
	const containerClasses = $derived(InputStyleManager.getContainerClass(''));
	const labelClasses = $derived(InputStyleManager.getLabelClass(''));
	const helperTextClasses = $derived(InputStyleManager.getHelperTextClass(''));
	const errorTextClasses = $derived(InputStyleManager.getErrorTextClass(''));
	const requiredIndicatorClasses = $derived(InputStyleManager.getRequiredIndicatorClass(''));
	const groupContainerClasses = $derived(InputStyleManager.getInputGroupContainerClass('flex items-stretch'));
	const groupInputClasses = $derived(InputStyleManager.getInputGroupInputClass(''));
	const groupButtonClasses = $derived(InputStyleManager.getInputGroupButtonClass(''));

	// Show helper text logic
	const showHelper = $derived(
		helperText && (showHelperWhenError || !hasError)
	);

	function handleInput(e: Event) {
		const target = e.target as HTMLInputElement;
		onValueInput?.(target.value);
	}

	function handleChange(e: Event) {
		const target = e.target as HTMLInputElement;
		onValueChange?.(target.value);
	}

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

	<div class={groupContainerClasses}>
		<input
			{id}
			type="text"
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
			class={`${inputState.classes} ${groupInputClasses} rounded-r-none border-r-0`}
			oninput={handleInput}
			onchange={handleChange}
			aria-describedby={hasError && showErrors ? errorId : helperText ? undefined : undefined}
			aria-invalid={hasError ? 'true' : 'false'}
			aria-required={required ? 'true' : 'false'}
			{...restProps}
		/>

		<Button
			variant={buttonVariant}
			size={size}
			disabled={buttonDisabled || disabled}
			onclick={onButtonClick}
			class={`${groupButtonClasses} rounded-l-none`}
		>
			{buttonLabel}
		</Button>
	</div>

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










<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import { onMount } from 'svelte';
	import { createInputTextState } from '../../../../../../design-system/models/interaction/input-text.svelte';
	import { InputStyleManager } from '$stylist/design-system/styles/interaction/input';
	import type { IInputLongProps } from '$stylist/design-system/contracts';

	/**
	 * InputLong component - Многострочный input для длинного текста
	 *
	 * @example
	 * ```svelte
	 * <InputLong
	 *   label="Комментарий"
	 *   bind:value={comment}
	 *   rows={4}
	 *   autoResize={true}
	 *   maxlength={500}
	 * />
	 * ```
	 */

	type Props = IInputLongProps &
		Omit<HTMLTextareaAttributes, 'class' | 'autocomplete' | 'id' | 'disabled'>;

	let {
		// Core props
		variant = 'default',
		size = 'md',
		disabled = false,
		error = false,
		block = true,
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
		minlength,
		maxlength,

		// Long input-specific props
		rows = 4,
		autoResize = false,
		maxHeight = '300px',

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

	// Auto-resize logic
	let textareaElement: HTMLTextAreaElement | null = null;
	onMount(() => {
		if (autofocus) textareaElement?.focus();
	});

	function autoResizeTextarea() {
		if (autoResize && textareaElement) {
			textareaElement.style.height = 'auto';
			const newHeight = Math.min(textareaElement.scrollHeight, parseFloat(maxHeight));
			textareaElement.style.height = `${newHeight}px`;
		}
	}

	$effect(() => {
		if (autoResize && value) {
			autoResizeTextarea();
		}
	});

	function handleInput(e: Event) {
		if (autoResize) {
			autoResizeTextarea();
		}
	}
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

	<textarea
		{id}
		{name}
		bind:value
		{placeholder}
		{required}
		{readonly}
		{disabled}
		{autocomplete}
		{minlength}
		{maxlength}
		{rows}
		bind:this={textareaElement}
		class={`${inputState.classes} resize-y`}
		style="max-height: {maxHeight};"
		oninput={handleInput}
		aria-describedby={hasError && showErrors ? errorId : helperText ? undefined : undefined}
		aria-invalid={hasError ? 'true' : 'false'}
		aria-required={required ? 'true' : 'false'}
		{...restProps}
	></textarea>

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










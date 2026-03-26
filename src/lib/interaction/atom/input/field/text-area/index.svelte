<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import { onMount } from 'svelte';
	import { createTextareaState } from '$stylist/interaction/state/text-area';
	import { InputStyleManager } from '$stylist/interaction/class/style-manager/input';
	import type { ITextareaProps } from '$stylist';

	/**
	 * Textarea component - Многострочное текстовое поле
	 *
	 * @example
	 * ```svelte
	 * <Textarea
	 *   label="Сообщение"
	 *   bind:value={message}
	 *   variant="default"
	 *   size="md"
	 *   rows={5}
	 *   maxlength={1000}
	 *   showCharacterCount={true}
	 * />
	 * ```
	 */

	type Props = ITextareaProps &
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

		// Textarea-specific props
		value = $bindable<string>(''),
		placeholder,
		name,
		required = false,
		readonly = false,
		autofocus = false,
		autocomplete,
		minlength,
		maxlength,
		rows = 4,
		autoResize = false,

		// Rest props
		...restProps
	}: Props = $props();

	// Derived values
	const hasError = $derived(error || errors.length > 0);
	const errorId = $derived(id ? `${id}-error` : undefined);
	const labelId = $derived(id ? `${id}-label` : undefined);
	const currentLength = $derived(value?.length || 0);
	const remainingChars = $derived(maxlength ? maxlength - currentLength : null);

	// Textarea state
	const textareaState = $derived(
		createTextareaState({
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
			textareaElement.style.height = `${textareaElement.scrollHeight}px`;
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
		class={`${textareaState.classes} resize-y`}
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

	{#if maxlength}
		<p class="text-xs text-[var(--color-text-secondary)] mt-1">
			{currentLength} / {maxlength}
			{#if remainingChars !== null && remainingChars <= 10}
				<span class="text-orange-600 ml-2">Осталось символов: {remainingChars}</span>
			{/if}
		</p>
	{/if}
</div>












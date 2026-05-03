<script lang="ts">
	import { onMount } from 'svelte';
	import { createInputTextState } from '$stylist/input/function/state/input-text';
	import type { SlotInputBase as IInputBaseProps } from '$stylist/input/interface/slot/input-base';
	import type { TokenAppearance } from '$stylist/interaction';
	import type { TokenSize } from '$stylist/layout/type/enum/size';

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
		<label for={id} class={state.labelClasses} id={state.labelId}>
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
		aria-describedby={state.hasError && showErrors ? state.errorId : helperText ? undefined : undefined}
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

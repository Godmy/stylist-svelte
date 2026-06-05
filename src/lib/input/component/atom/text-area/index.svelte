<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import { onMount } from 'svelte';
	import type { SlotTextarea as ITextareaProps } from '$stylist/input/interface/slot/textarea';
	import createTextareaState from '$stylist/input/function/state/text-area/index.svelte';

	let props: ITextareaProps &
		Omit<HTMLTextareaAttributes, 'class' | 'autocomplete' | 'id' | 'disabled'> = $props();
	const state = createTextareaState(props);

	let textareaElement: HTMLTextAreaElement | null = null;
	onMount(() => {
		if (props.autofocus) textareaElement?.focus();
	});

	$effect(() => {
		if (props.autoResize && props.value) {
			state.autoResizeTextarea(textareaElement);
		}
	});
</script>

<div class={state.containerClasses}>
	{#if props.label}
		<label
			for={props.id}
			class={state.labelClasses}
			id={state.labelId}
			data-size={props.size ?? 'md'}
			data-disabled={props.disabled ? 'true' : 'false'}
		>
			{props.label}
			{#if props.required && (props.showRequiredIndicator ?? true)}
				<span class={state.requiredIndicatorClasses} aria-hidden="true">*</span>
			{/if}
		</label>
	{/if}

	<textarea
		id={props.id}
		name={props.name}
		bind:value={props.value}
		placeholder={props.placeholder}
		required={props.required ?? false}
		readonly={props.readonly ?? false}
		disabled={props.disabled ?? false}
		autocomplete={props.autocomplete}
		minlength={props.minlength}
		maxlength={props.maxlength}
		rows={props.rows ?? 4}
		bind:this={textareaElement}
		class={`${state.classes} resize-y`}
		oninput={() => state.handleInput(textareaElement)}
		aria-describedby={state.hasError && (props.showErrors ?? true)
			? state.errorId
			: props.helperText
				? undefined
				: undefined}
		aria-invalid={state.hasError ? 'true' : 'false'}
		aria-required={props.required ? 'true' : 'false'}
	></textarea>

	{#if state.hasError && (props.showErrors ?? true) && (props.errors?.length ?? 0) > 0}
		<p id={state.errorId} class={state.errorTextClasses} role="alert">
			{#each props.errors ?? [] as error_msg, i}
				{error_msg}{i < (props.errors?.length ?? 0) - 1 ? ' ' : ''}
			{/each}
		</p>
	{:else if state.showHelper}
		<p class={state.helperTextClasses}>{props.helperText}</p>
	{/if}

	{#if props.maxlength}
		<p class="text-area-counter">
			{state.currentLength} / {props.maxlength}
			{#if state.remainingChars !== null && state.remainingChars <= 10}
				<span class="text-area-counter__warning">Осталось символов: {state.remainingChars}</span>
			{/if}
		</p>
	{/if}
</div>

<style>
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

	.text-area-counter {
		margin-block-start: 0.25rem;
		font-size: var(--text-size-xs, 0.75rem);
		color: var(--color-text-secondary);
	}

	.text-area-counter__warning {
		margin-inline-start: 0.5rem;
		color: var(--color-warning-600, #ea580c);
	}
</style>

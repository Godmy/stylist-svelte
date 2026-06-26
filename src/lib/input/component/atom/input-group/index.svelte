<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { onMount } from 'svelte';
	import type { SlotInputGroup as IInputGroupProps } from '$stylist/input/interface/slot/input-group';
	import createInputGroupState from '$stylist/input/function/state/input-group/index.svelte';
	import Button from '$stylist/control/component/atom/button/index.svelte';

	let props: IInputGroupProps &
		Omit<HTMLInputAttributes, 'type' | 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'> =
		$props();
	const state = createInputGroupState(props);

	let inputElement: HTMLInputElement | null = null;
	onMount(() => {
		if (props.autofocus) inputElement?.focus();
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

	<div class={state.groupContainerClasses}>
		<input
			id={props.id}
			type="text"
			name={props.name}
			bind:value={props.value}
			placeholder={props.placeholder}
			required={props.required ?? false}
			readonly={props.readonly ?? false}
			disabled={props.disabled ?? false}
			bind:this={inputElement}
			autocomplete={props.autocomplete}
			pattern={props.pattern}
			minlength={props.minlength}
			maxlength={props.maxlength}
			class={`${state.inputClasses} ${state.groupInputClasses}`}
			oninput={state.handleInput}
			onchange={state.handleChange}
			aria-describedby={state.hasError && (props.showErrors ?? true)
				? state.errorId
				: props.helperText
					? undefined
					: undefined}
			aria-invalid={state.hasError ? 'true' : 'false'}
			aria-required={props.required ? 'true' : 'false'}
		/>
		<Button
			variant={props.buttonVariant ?? 'primary'}
			size={props.size ?? 'md'}
			disabled={(props.buttonDisabled ?? false) || (props.disabled ?? false)}
			onclick={props.onButtonClick}
			class={state.groupButtonClasses}
		>
			{props.buttonLabel ?? 'Action'}
		</Button>
	</div>

	{#if state.hasError && (props.showErrors ?? true) && (props.errors?.length ?? 0) > 0}
		<p id={state.errorId} class={state.errorTextClasses} role="alert">
			{#each props.errors ?? [] as error_msg, i}
				{error_msg}{i < (props.errors?.length ?? 0) - 1 ? ' ' : ''}
			{/each}
		</p>
	{:else if state.showHelper}
		<p class={state.helperTextClasses}>{props.helperText}</p>
	{/if}
</div>

<style>
	.input-field-container {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.input-group-container {
		display: flex;
		align-items: stretch;
		gap: 0;
	}

	.input-group-input {
		flex: 1;
		border-start-end-radius: 0;
		border-end-end-radius: 0;
		border-inline-end: none;
	}

	.input-group-button {
		border-start-start-radius: 0;
		border-end-start-radius: 0;
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

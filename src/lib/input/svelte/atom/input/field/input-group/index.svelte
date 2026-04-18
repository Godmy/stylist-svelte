<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { onMount } from 'svelte';
	import type { SlotInputGroup as IInputGroupProps } from '$stylist/input/interface/slot/input-group';
	import { createInputGroupState } from '$stylist/input/function/state/input-group';
	import { Button } from '$stylist';

	let props: IInputGroupProps &
		Omit<HTMLInputAttributes, 'type' | 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'> = $props();
	const state = createInputGroupState(props);

	let inputElement: HTMLInputElement | null = null;
	onMount(() => {
		if (props.autofocus) inputElement?.focus();
	});
</script>

<div class={state.containerClasses}>
	{#if props.label}
		<label for={props.id} class={state.labelClasses} id={state.labelId}>
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
			class={`${state.inputClasses} ${state.groupInputClasses} rounded-r-none border-r-0`}
			oninput={state.handleInput}
			onchange={state.handleChange}
			aria-describedby={state.hasError && (props.showErrors ?? true) ? state.errorId : props.helperText ? undefined : undefined}
			aria-invalid={state.hasError ? 'true' : 'false'}
			aria-required={props.required ? 'true' : 'false'}
		/>
		<Button
			variant={props.buttonVariant ?? 'primary'}
			size={props.size ?? 'md'}
			disabled={(props.buttonDisabled ?? false) || (props.disabled ?? false)}
			onclick={props.onButtonClick}
			class={`${state.groupButtonClasses} rounded-l-none`}
		>
			{props.buttonLabel ?? 'Действие'}
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

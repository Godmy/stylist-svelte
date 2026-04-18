<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import { onMount } from 'svelte';
	import type { SlotInputLong as IInputLongProps } from '$stylist/input/interface/slot/input-long';
	import { createInputLongState } from '$stylist/input/function/state/input-long';

	let props: IInputLongProps &
		Omit<HTMLTextareaAttributes, 'class' | 'autocomplete' | 'id' | 'disabled'> = $props();
	const state = createInputLongState(props);

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
		<label for={props.id} class={state.labelClasses} id={state.labelId}>
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
		class={`${state.inputClasses} resize-y`}
		style={`max-height: ${props.maxHeight ?? '300px'};`}
		oninput={() => state.handleInput(textareaElement)}
		aria-describedby={state.hasError && (props.showErrors ?? true) ? state.errorId : props.helperText ? undefined : undefined}
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
</div>

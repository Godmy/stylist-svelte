<script lang="ts">
	import { InputText } from '$stylist';
	import type { IInputFieldProps } from '$stylist/input/interface/component/input/other';
	import { createInputFieldState } from '$stylist/input/function/state/input-field';

	let props: IInputFieldProps = $props();
	const state = createInputFieldState(props);
</script>

<div class={state.containerClasses}>
	<InputText
		label={props.label}
		id={props.id}
		showRequiredIndicator={props.showRequiredIndicator}
		errors={props.errors ?? []}
		showErrors={props.showErrors}
		showHelperWhenError={props.showHelperWhenError}
		variant={props.variant}
		size={props.size}
		disabled={props.disabled}
		error={props.error}
		block={props.block}
		class={props.class}
		bind:value={props.value}
		type={props.type}
		placeholder={props.placeholder}
		name={props.name}
		required={props.required}
		readonly={props.readonly}
		autofocus={props.autofocus}
		autocomplete={props.autocomplete}
		pattern={props.pattern}
		minlength={props.minlength}
		maxlength={props.maxlength}
		min={props.min}
		max={props.max}
		step={props.step}
	/>
	{#if state.showHelper}
		<p class={state.helperTextClasses}>{props.helperText}</p>
	{/if}
</div>

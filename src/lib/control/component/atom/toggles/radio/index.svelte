<script lang="ts">
	import type { SlotRadio as RadioProps } from '$stylist/control/interface/slot/radio-toggles';
	import { createRadioState } from '$stylist/control/function/state/radio';

	let props: RadioProps = $props();

	const state = createRadioState(props);

	const restProps = $derived.by(() => {
		const {
			id: _id,
			name: _name,
			value: _value,
			checked: _checked,
			disabled: _disabled,
			label: _label,
			required: _required,
			class: _class,
			size: _size,
			...rest
		} = props;
		return rest;
	});
</script>

<div class={state.containerClasses}>
	<input
		id={props.id}
		type="radio"
		name={props.name}
		value={props.value}
		checked={state.checked}
		onchange={state.handleChange}
		disabled={state.disabled}
		required={props.required}
		class={state.radioClasses}
		{...restProps}
	/>
	{#if props.label}
		<label for={props.id} class={state.labelClasses}>
			{props.label}
		</label>
	{/if}
</div>







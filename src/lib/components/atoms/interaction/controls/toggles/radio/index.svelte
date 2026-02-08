<script lang="ts">
	import type { RadioProps } from '$stylist/design-system/attributes';
	import { createRadioState } from '../../state.svelte';

	let props: RadioProps = $props();

	const state = createRadioState(props);

	function handleChange(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target.checked && props.onchange) {
			(props.onchange as (e: Event) => void)(e);
		}
	}

	const restProps = $derived(
		(() => {
			const {
				id: _id,
				name: _name,
				value: _value,
				checked: _checked,
				disabled: _disabled,
				label: _label,
				required: _required,
				class: _class,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div class={state.containerClasses}>
	<input
		id={props.id}
		type="radio"
		name={props.name}
		value={props.value}
		checked={state.checked}
		onchange={handleChange}
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

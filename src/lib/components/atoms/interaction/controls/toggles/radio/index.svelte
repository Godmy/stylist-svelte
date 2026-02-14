<script lang="ts">
	import type { RadioProps } from '$stylist/design-system/props';
	import { createRadioState } from '$stylist/design-system/models/radio.svelte';

	let props: RadioProps = $props();

	const radioState = createRadioState(props);

	function handleChange(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target.checked && props.onchange) {
			(props.onchange as (e: Event) => void)(e);
		}
	}

	// Extract only HTML-compatible props for the input element
	let htmlProps = $state({});
	$effect(() => {
		const {
			id: _id,
			name: _name,
			value: _value,
			checked: _checked,
			disabled: _disabled,
			label: _label,
			required: _required,
			class: _class,
			size: _size, // Exclude custom size prop to avoid conflict with HTML size attribute
			...filteredProps
		} = props;
		htmlProps = filteredProps;
	});
</script>

<div class={radioState.containerClasses}>
	<input
		id={props.id}
		type="radio"
		name={props.name}
		value={props.value}
		checked={radioState.checked}
		onchange={handleChange}
		disabled={radioState.disabled}
		required={props.required}
		class={radioState.radioClasses}
		{...htmlProps}
	/>
	{#if props.label}
		<label for={props.id} class={radioState.labelClasses}>
			{props.label}
		</label>
	{/if}
</div>





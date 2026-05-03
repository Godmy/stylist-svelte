<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { ToggleProps } from '$stylist/control/type/struct/toggle-props';
	import { createToggleState } from '$stylist/control/function/state/toggle';

	let props: ToggleProps & HTMLInputAttributes = $props();
	const state = createToggleState(props);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			size: _size,
			disabled: _disabled,
			checked: _checked,
			ariaLabel: _ariaLabel,
			id: _id,
			name: _name,
			...rest
		} = props;
		return rest;
	});
</script>

<div class={state.containerClasses}>
	<input
		id={props.id}
		name={props.name}
		type="checkbox"
		bind:checked={props.checked}
		disabled={state.disabled}
		class={state.inputClasses}
		aria-label={state.ariaLabel}
		role="switch"
		aria-checked={state.checked ? 'true' : 'false'}
		{...restProps}
	/>

	<span class={state.trackClasses}>
		<span class={state.thumbClasses}></span>
	</span>
</div>

<script lang="ts">
	import type { ToggleProps } from '$stylist/design-system/props';
	import { createToggleState } from './state.svelte';

	let props: ToggleProps = $props();

	let checked = $state(props.checked ?? false);

	$effect(() => {
		// Update local state when props change
		if (props.checked !== undefined) {
			checked = props.checked;
		}
	});

	const toggleComponentState = createToggleState(props);

	// Extract only HTML-compatible props for the input element
	let htmlProps = $state({});
	$effect(() => {
		const {
			checked: _checked,
			disabled: _disabled,
			toggleSize: _toggleSize,
			class: _class,
			size: _size, // Exclude custom size prop to avoid conflict with HTML size attribute
			...filteredProps
		} = props;
		htmlProps = filteredProps;
	});
</script>

<div class={toggleComponentState.containerClasses}>
	<input
		type="checkbox"
		bind:checked
		disabled={toggleComponentState.disabled}
		class={toggleComponentState.inputClasses}
		{...htmlProps}
	/>

	<div class={toggleComponentState.trackClasses} class:opacity-50={toggleComponentState.disabledClass}>
		<div class={toggleComponentState.thumbClasses}></div>
	</div>
</div>


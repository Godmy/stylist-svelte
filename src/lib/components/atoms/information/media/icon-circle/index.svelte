<script lang="ts">
	import type { IconCircleProps } from '$stylist/design-system';
	import { createIconCircleState } from '$stylist/design-system/models/icon-circle.svelte';

	let props: IconCircleProps = $props();
	const state = createIconCircleState(props);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				variant: _variant,
				size: _size,
				filled: _filled,
				disabled: _disabled,
				icon: _icon,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div class={state.classes} {...restProps}>
	{#if props.icon}
		{@render props.icon()}
	{/if}
</div>

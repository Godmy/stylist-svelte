<script lang="ts">
	import { Icon } from '$stylist/components/atoms';
	import type { ListItemMarkerProps } from '$stylist/design-system';
	import { createListItemMarkerState } from '$stylist/design-system/models/list-item-marker.svelte';

	let props: ListItemMarkerProps = $props();

	const state = createListItemMarkerState(props);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				type: _type,
				value: _value,
				color: _color,
				size: _size,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<span class={state.classes} {...restProps}>
	{#if state.type === 'bullet'}
		<span class={state.bulletClasses}></span>
	{:else if state.type === 'number'}
		{state.value}
	{:else if typeof state.value === 'string'}
		<Icon name={state.value} size={state.size} />
	{/if}
</span>

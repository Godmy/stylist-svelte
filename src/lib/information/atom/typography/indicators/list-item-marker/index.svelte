<script lang="ts">
	import { Icon } from '$stylist';
	import type { IconSize } from '$stylist/information/atom/media/icon/index.svelte';
	import type { ListItemMarkerProps } from '$stylist/information/interface/indicators';
	import { createListItemMarkerState } from '$stylist/information/state/list-item-marker';

	let props: ListItemMarkerProps = $props();

	const state = createListItemMarkerState(props);
	const iconSize = $derived<IconSize>(
		({
			xs: 'xs',
			sm: 'sm',
			md: 'md',
			lg: 'lg',
			xl: 'xl',
			'2xl': '2xl',
			'1/4': 'xs',
			'1/3': 'sm',
			'2/5': 'sm',
			'1/2': 'md',
			'3/5': 'md',
			'2/3': 'lg',
			'3/4': 'xl',
			full: 'xl'
		} as const)[state.size]
	);

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
		<Icon name={state.value} size={iconSize} />
	{/if}
</span>



<script lang="ts">
	import type { Idef0PortLabelProps } from '$stylist/design-system';
	import { createIdef0PortLabelState } from '$stylist/design-system/models/information/idef0.svelte';

	let props: Idef0PortLabelProps = $props();
	const state = createIdef0PortLabelState(props);
</script>

<text
	class={state.classes}
	x={props.x}
	y={props.y}
	text-anchor={props.anchor ?? 'middle'}
	fill={props.color ?? 'var(--color-text-secondary)'}
>
	{props.text}
</text>

<script lang="ts">
	import type { Idef0FunctionBoxProps } from '$stylist/design-system';
	import { createIdef0FunctionBoxState } from '$stylist/design-system/models/information/idef0.svelte';

	let props: Idef0FunctionBoxProps = $props();
	const state = createIdef0FunctionBoxState(props);

	const x = $derived(props.x ?? 0);
	const y = $derived(props.y ?? 0);
	const width = $derived(props.width ?? 320);
	const height = $derived(props.height ?? 220);
</script>

<g class={state.groupClasses}>
	<rect class={state.rectClasses} {x} {y} {width} {height} rx="10" ry="10" stroke-width="1.5" />
	<text class={state.titleClasses} x={x + width / 2} y={y + height / 2 - (props.subtitle ? 10 : 0)} text-anchor="middle">
		{props.title}
	</text>
	{#if props.subtitle}
		<text class={state.subtitleClasses} x={x + width / 2} y={y + height / 2 + 14} text-anchor="middle">
			{props.subtitle}
		</text>
	{/if}
</g>

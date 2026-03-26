<script lang="ts">
	import type { Idef0ConnectorProps } from '$stylist';
	import { createIdef0ConnectorState } from '$stylist/information/state/idef0';
	import Idef0PortLabel from '$stylist/information/atom/data-display/diagrams/idef-zero-port-label/index.svelte';

	let props: Idef0ConnectorProps = $props();
	const state = createIdef0ConnectorState(props);

	const showArrow = $derived(props.showArrow ?? true);
	const isInput = $derived(props.direction === 'input');
	const arrow = $derived.by(() => {
		if (!showArrow) return '';
		if (isInput) {
			return `${props.x2},${props.y2} ${props.x2 - 8},${props.y2 - 5} ${props.x2 - 8},${props.y2 + 5}`;
		}
		return `${props.x2},${props.y2} ${props.x2 + 8},${props.y2 - 5} ${props.x2 + 8},${props.y2 + 5}`;
	});

	const labelX = $derived(isInput ? props.x1 + 6 : props.x2 - 6);
	const labelAnchor = $derived(isInput ? 'start' : 'end');
</script>

<g class={state.groupClasses}>
	<line
		class={state.lineClasses}
		x1={props.x1}
		y1={props.y1}
		x2={props.x2}
		y2={props.y2}
		stroke={props.color ?? 'var(--color-text-secondary)'}
		stroke-width="1.5"
	/>
	{#if showArrow}
		<polygon points={arrow} fill={props.color ?? 'var(--color-text-secondary)'} />
	{/if}
	<Idef0PortLabel
		text={props.label}
		x={labelX}
		y={props.y1 - 6}
		anchor={labelAnchor}
		color={props.color}
		class={state.labelClasses}
	/>
</g>




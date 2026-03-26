<script lang="ts">
	import type { Idef0DiagramProps } from '$stylist';
	import { createIdef0DiagramState } from '$stylist/information/state/idef0';
	import Idef0BlackBox from '$stylist/architecture/molecule/canvas/diagrams/idef-zero-black-box/index.svelte';

	let props: Idef0DiagramProps = $props();
	const state = createIdef0DiagramState(props);
</script>

<section class={state.containerClasses}>
	{#if props.title}
		<h3 class="text-sm font-semibold text-[--color-text-primary]">{props.title}</h3>
	{/if}
	<svg class={state.svgClasses} width={state.width} height={state.height} role="img" aria-label={props.model.title}>
		<Idef0BlackBox
			title={props.model.title}
			subtitle={props.model.subtitle}
			inputs={props.model.inputs}
			outputs={props.model.outputs}
			width={state.width}
			height={state.height}
		/>
	</svg>
</section>




<script lang="ts">
	import type { Idef0DiagramRecipe } from '$stylist/information/interface/recipe/idef0-diagram';
	import { createIdef0DiagramState } from '$stylist/information/function/state/idef0';
	import Idef0BlackBox from '$stylist/science/svelte/molecule/diagrams/idef-zero-black-box/index.svelte';

	type Idef0Port = { id: string; label?: string; color?: string };
	type Idef0Model = {
		title: string;
		subtitle?: string;
		inputs: Idef0Port[];
		outputs: Idef0Port[];
	};
	type Idef0DiagramProps = Idef0DiagramRecipe & {
		model: Idef0Model;
	};

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




<script lang="ts">
	type Idef0Port = { id: string; label?: string; color?: string };
	type Idef0BlackBoxProps = {
		title?: string;
		subtitle?: string;
		inputs: Idef0Port[];
		outputs: Idef0Port[];
		width?: number;
		height?: number;
	};
	import { createIdef0BlackBoxState } from '$stylist/information/function/state/idef0';
	import Idef0FunctionBox from '$stylist/information/svelte/atom/data-display/diagrams/idef-zero-function-box/index.svelte';
	import Idef0Inputs from '$stylist/science/svelte/molecule/diagrams/idef-zero-inputs/index.svelte';
	import Idef0Outputs from '$stylist/science/svelte/molecule/diagrams/idef-zero-outputs/index.svelte';

	let props: Idef0BlackBoxProps = $props();
	const state = createIdef0BlackBoxState(props);

	const leftMargin = $derived(40);
	const rightMargin = $derived(40);
</script>

<g>
	<Idef0Inputs
		ports={props.inputs}
		boxX={state.boxX}
		boxY={state.boxY}
		boxHeight={state.boxHeight}
		startX={leftMargin}
	/>

	<Idef0FunctionBox
		title={props.title}
		subtitle={props.subtitle}
		x={state.boxX}
		y={state.boxY}
		width={state.boxWidth}
		height={state.boxHeight}
	/>

	<Idef0Outputs
		ports={props.outputs}
		boxX={state.boxX}
		boxWidth={state.boxWidth}
		boxY={state.boxY}
		boxHeight={state.boxHeight}
		endX={state.width - rightMargin}
	/>
</g>




<script lang="ts">
	import type { Idef0BlackBoxProps } from '$stylist/design-system';
	import { createIdef0BlackBoxState } from '$stylist/design-system/models/information/idef0.svelte';
	import Idef0FunctionBox from '$stylist/components/atoms/information/data-display/diagrams/idef-zero-function-box/index.svelte';
	import Idef0Inputs from '$stylist/components/molecules/architecture/canvas/diagrams/idef-zero-inputs/index.svelte';
	import Idef0Outputs from '$stylist/components/molecules/architecture/canvas/diagrams/idef-zero-outputs/index.svelte';

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




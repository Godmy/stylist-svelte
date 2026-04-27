<script lang="ts">
	import type { Idef0BlackBoxProps } from '$stylist/science/type/struct/idef-zero';
	import { createIdef0BlackBoxState } from '$stylist/science/function/state/idef0-black-box';
	import Idef0FunctionBox from '$stylist/science/component/atom/diagrams/idef-zero-function-box/index.svelte';
	import Idef0Inputs from '$stylist/science/component/molecule/diagrams/idef-zero-inputs/index.svelte';
	import Idef0Outputs from '$stylist/science/component/molecule/diagrams/idef-zero-outputs/index.svelte';

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




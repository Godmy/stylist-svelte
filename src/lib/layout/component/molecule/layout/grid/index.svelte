<script lang="ts">
	import { createGridMoleculeState } from '$stylist/layout/function/state/grid-molecule';
	import type { GridMoleculeProps } from '$stylist/layout/type/struct/layout-extended';

	let props: GridMoleculeProps = $props();
	const state = createGridMoleculeState(props);
</script>

<div class={state.classes} {...state.restProps}>
	{#if props.children}{@render props.children()}{/if}
</div>

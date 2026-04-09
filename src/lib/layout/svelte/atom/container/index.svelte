<script lang="ts">
	import type { ContainerProps } from '$stylist/layout/type/struct/container';
	import { createContainerState } from '$stylist/layout/function/state/container';

	let props: ContainerProps = $props();
	const state = createContainerState(props);
</script>

<div class={state.classes} {...state.restProps}>
	{#if props.children}
		{@render props.children?.()}
	{/if}
</div>






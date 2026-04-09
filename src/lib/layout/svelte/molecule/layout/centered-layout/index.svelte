<script lang="ts">
	import { createCenteredLayoutState } from '$stylist/layout/function/state/centered-layout';
	import type { CenteredLayoutProps } from '$stylist/layout/type/struct/layout-extended';

	let props: CenteredLayoutProps = $props();
	const state = createCenteredLayoutState(props);
</script>

<div class={state.classes} {...state.restProps}>
	{#if state.maxWidth}
		<div class={state.innerClass}>
			{@render props.children()}
		</div>
	{:else}
		{@render props.children()}
	{/if}
</div>

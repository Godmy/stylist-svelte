<script lang="ts">
	import { createPopoverState } from '$stylist/layout/function/state/popover';
	import type { PopoverProps } from '$stylist/layout/interface/recipe/popover';

	let props: PopoverProps = $props();
	const state = createPopoverState(props);
</script>

<div class={state.rootClass}>
	<div bind:this={state.triggerElement}>
		{@render props.trigger()}
	</div>

	{#if state.isVisible}
		<div
			bind:this={state.popoverElement}
			class={state.popoverClass}
		>
			{#if props.title}
				<h3 class={state.titleClass}>{props.title}</h3>
			{/if}
			<div>
				{@render props.content()}
			</div>
		</div>
	{/if}
</div>







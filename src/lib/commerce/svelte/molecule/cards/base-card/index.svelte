<script lang="ts">
	import type { BaseCardProps } from '$stylist/commerce/type/struct/base-card-props';
	import { createBaseCardState } from '$stylist/commerce/function/state/base-card';

	let props: BaseCardProps = $props();
	const state = createBaseCardState(props);
</script>

<div class={state.containerClasses} {...props}>
	{#if state.hasHeader}
		<div class={state.headerClasses}>
			{#if props.title}
				<h3 class="text-lg font-semibold">{props.title}</h3>
			{/if}
			{#if props.description}
				<p class="text-sm text-[var(--color-text-secondary)]">{props.description}</p>
			{/if}
		</div>
	{/if}
	
	<div class={state.bodyClasses}>
		{#if props.children}
			{@render props.children()}
		{/if}
	</div>
</div>

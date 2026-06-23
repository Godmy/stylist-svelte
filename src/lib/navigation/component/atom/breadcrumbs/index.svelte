<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		children,
		class: className,
		...restProps
	}: { children?: Snippet; class?: string } & HTMLAttributes<HTMLElement> & SlotInteraction = $props();
</script>

<nav aria-label="Breadcrumb" class={className ?? ''} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</nav>

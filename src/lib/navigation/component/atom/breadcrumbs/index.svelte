<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

	let {
		children,
		class: className,
		...restProps
	}: { children?: Snippet; class?: string } & InteractionHTMLAttributes<HTMLElement> = $props();
</script>

<nav aria-label="Breadcrumb" class={className ?? ''} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</nav>

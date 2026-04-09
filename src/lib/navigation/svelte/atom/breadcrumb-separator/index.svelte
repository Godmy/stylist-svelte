<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
	type Props = {
		class?: string;
		children?: Snippet;
	} & InteractionHTMLAttributes<HTMLSpanElement>;
	let { class: className = '', children = undefined, ...restProps } = $props() as Props;

	// This component is automatically the default export in Svelte
</script>

<span class={`mx-2 text-[var(--color-text-tertiary)] ${className}`} aria-hidden="true" {...restProps}>
	{#if children}
		{@render children?.()}
	{:else}
		/
	{/if}
</span>







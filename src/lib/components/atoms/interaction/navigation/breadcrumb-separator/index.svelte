<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	type Props = {
		class?: string;
		children?: Snippet;
	} & HTMLAttributes<HTMLSpanElement>;
	let { class: className = '', children = undefined, ...restProps } = $props() as Props;

	// This component is automatically the default export in Svelte
</script>

<span class={`mx-2 text-gray-400 ${className}`} aria-hidden="true" {...restProps}>
	{#if children}
		{@render children?.()}
	{:else}
		/
	{/if}
</span>




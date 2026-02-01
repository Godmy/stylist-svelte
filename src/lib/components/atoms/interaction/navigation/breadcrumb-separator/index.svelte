<script lang="ts">
	import type { Snippet } from 'svelte';
	let { class: className = '', children = undefined } = $props<{ class?: string; children?: Snippet }>();

	// This component is automatically the default export in Svelte
</script>

<span class={`mx-2 text-gray-400 ${className}`} aria-hidden="true">
	{#if children}
		{@render children()}
	{:else}
		/
	{/if}
</span>

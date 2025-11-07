<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		ratio = 1,
		class: className = ''
	} = $props<{
		children: Snippet;
		ratio?: number;
		class?: string;
	}>();
</script>

<div
	style:--aspect-ratio={ratio}
	class={`relative w-full [aspect-ratio:var(--aspect-ratio)] ${className}`}
>
	{@render children()}
</div>

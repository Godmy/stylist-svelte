<script lang="ts">
	import type { Snippet } from 'svelte';

	type ThemeConsumerProps = {
		children: Snippet;
	};

	let { children }: ThemeConsumerProps = $props();
</script>

{@render children()}

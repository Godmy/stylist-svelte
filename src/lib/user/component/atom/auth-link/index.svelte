<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		href: string;
		class?: string;
		children?: Snippet;
	};

	let { href, class: cls, children }: Props = $props();
</script>

<a {href} class="c-auth-link {cls ?? ''}">
	{#if children}
		{@render children()}
	{/if}
</a>

<style>
	.c-auth-link {
		color: var(--color-primary-600, #4f46e5);
		font-size: 0.875rem;
		font-weight: 500;
		text-decoration: none;
		transition: color 0.15s;
	}

	.c-auth-link:hover {
		color: var(--color-primary-700, #4338ca);
		text-decoration: underline;
	}
</style>

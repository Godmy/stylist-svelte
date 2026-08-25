<script lang="ts">
	import type { RecipeDomainListHeader } from '$stylist/domain/interface/recipe/domain-list-header';

	let { label = 'Entities', count }: RecipeDomainListHeader = $props();
</script>

<div class="c-domain-list-header">
	<strong class="header-label">{label}</strong>
	{#if count != null}
		<span class="header-count">{count}</span>
	{/if}
</div>

<style>
	.c-domain-list-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 44px;
		padding: 0 1.05rem 0 0.35rem;
		border-bottom: 1px solid var(--color-border-primary);
	}

	.header-label {
		font-size: 13px;
	}

	.header-count {
		font-family: var(--font-mono, monospace);
		font-size: 12px;
		color: var(--color-text-secondary);
	}
</style>

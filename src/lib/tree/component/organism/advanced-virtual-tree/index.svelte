<script lang="ts">
	import type { RecipeTree } from '$stylist/tree/interface/recipe/tree';
	import createTreeExpansionState from '$stylist/tree/function/state/tree-expansion/index.svelte';
	let { nodes = [], class: className = '', ...restProps }: RecipeTree = $props();
	const state = createTreeExpansionState();
	const rootClass = $derived(['c-advanced-virtual-tree', className].filter(Boolean).join(' '));
</script>

<div class={rootClass} {...restProps}>
	<ul class="c-tree__list">
		{#each nodes as node}
			<li>
				<button type="button" class="c-tree__item-btn" onclick={() => state.toggle(node.id)}
					>{node.children?.length ? (state.isOpen(node) ? '-' : '+') : ''} {node.label}</button
				>
				{#if node.children?.length && state.isOpen(node)}
					<ul class="c-tree__children">
						{#each node.children as child}
							<li class="c-tree__child-item">
								{child.label}
							</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
</div>

<style>
	.c-advanced-virtual-tree {
		display: block;
	}
	.c-tree__list {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.c-tree__item-btn {
		width: 100%;
		border-radius: 0.25rem;
		padding: 0.25rem 0.5rem;
		text-align: left;
		background: transparent;
		border: none;
		cursor: pointer;
		color: var(--color-text-primary);
		transition: background-color var(--duration-120, 120ms);
	}
	.c-tree__item-btn:hover {
		background: var(--color-background-secondary);
	}
	.c-tree__item-btn:focus-visible {
		outline: 2px solid var(--color-primary-500);
		outline-offset: -2px;
	}
	.c-tree__children {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		list-style: none;
		margin-top: 0.25rem;
		margin-left: 1.25rem;
		padding: 0;
	}
	.c-tree__child-item {
		border-radius: 0.25rem;
		background: var(--color-background-secondary);
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
		color: var(--color-text-primary);
	}
</style>

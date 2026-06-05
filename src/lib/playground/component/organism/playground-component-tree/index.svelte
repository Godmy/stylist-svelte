<script lang="ts">
	import RecipePlaygroundTreeNode from '../playground-tree-node/index.svelte';
	import type { PlaygroundComponentTreeProps } from '$stylist/playground/type/struct/playground-component-tree-props';
	import createPlaygroundComponentTreeState from '$stylist/playground/function/state/playground-component-tree/index.svelte';

	let props: PlaygroundComponentTreeProps = $props();
	const state = createPlaygroundComponentTreeState(props);
</script>

<div
	bind:this={state.treeContainer}
	class="tree-container"
	tabindex="0"
	onkeydown={state.handleKeyDown}
	role="tree"
	aria-label="Component tree"
>
	<div class="tree-shell">
		<header class="tree-shell__header">
			<p class="tree-shell__eyebrow">Catalog</p>
			<h3 class="tree-shell__title">Component Tree</h3>
			<p class="tree-shell__description">
				Browse domains, folders, and stories from one navigation rail.
			</p>
		</header>

		<nav class="tree-shell__nav space-y-1">
			{#each state.tree as categoryNode}
				<RecipePlaygroundTreeNode
					node={categoryNode}
					level={0}
					expandedNodes={state.expandedNodes}
					categoryConfig={state.categoryConfig}
					onToggle={state.toggleNode}
					onComponentClick={state.handleComponentClick}
					selectedStoryId={props.selectedStoryId}
					focusedPath={state.focusedPath}
				/>
			{/each}
		</nav>
	</div>
</div>

<style>
	.tree-container {
		height: 100%;
		min-height: var(--size-0);
		overflow-y: scroll !important;
		overflow-x: hidden !important;
		-webkit-overflow-scrolling: touch;
		padding: 1rem;
		background:
			radial-gradient(
				circle at top right,
				color-mix(in srgb, var(--playground-accent, var(--color-warning-500)) 8%, transparent),
				transparent 40%
			),
			linear-gradient(
				180deg,
				color-mix(in srgb, var(--color-background-primary) 97%, white 3%),
				var(--color-background-primary)
			);
	}

	.tree-shell {
		display: grid;
		gap: 1rem;
		min-height: 100%;
		padding: 1rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 82%, transparent);
		border-radius: 1.5rem;
		background: color-mix(in srgb, var(--color-background-primary) 92%, transparent);
		box-shadow: var(--shadow-sm, 0 10px 24px rgb(15 23 42 / 0.06));
	}

	.tree-shell__header {
		display: grid;
		gap: 0.35rem;
		padding-bottom: 0.9rem;
		border-bottom: 1px solid color-mix(in srgb, var(--color-border-primary) 76%, transparent);
	}

	.tree-shell__eyebrow {
		margin: 0;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--color-text-tertiary);
	}

	.tree-shell__title {
		margin: 0;
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.tree-shell__description {
		margin: 0;
		font-size: 0.88rem;
		line-height: 1.5;
		color: var(--color-text-secondary);
	}

	.tree-container:focus {
		outline: none;
	}

	/* Custom scrollbar */
	.tree-container::-webkit-scrollbar {
		width: var(--spacing-2);
	}

	.tree-container::-webkit-scrollbar-track {
		background: color-mix(in srgb, var(--color-text-primary) 5%, transparent);
	}

	.tree-container::-webkit-scrollbar-thumb {
		background: color-mix(in srgb, var(--color-text-secondary) 50%, transparent);
		border-radius: var(--border-radius-base);
	}

	.tree-container::-webkit-scrollbar-thumb:hover {
		background: color-mix(in srgb, var(--color-text-secondary) 70%, transparent);
	}

	:global(.dark) .tree-container::-webkit-scrollbar-track {
		background: color-mix(in srgb, var(--color-background-primary) 5%, transparent);
	}

	:global(.dark) .tree-container::-webkit-scrollbar-thumb {
		background: color-mix(in srgb, var(--color-border-primary) 50%, transparent);
	}

	:global(.dark) .tree-container::-webkit-scrollbar-thumb:hover {
		background: color-mix(in srgb, var(--color-border-primary) 70%, transparent);
	}
</style>

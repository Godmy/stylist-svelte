<script lang="ts">
	import IconButton from '$stylist/control/component/atom/icon-button/index.svelte';
	import InputText from '$stylist/input/component/molecule/input-text/index.svelte';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';
	import Separator from '$stylist/layout/component/atom/separator/index.svelte';
	import createNodePaletteState from '$stylist/workspace/function/state/node-palette/index.svelte';
	import type { RecipeNodePalette as NodePaletteProps } from '$stylist/workspace/interface/recipe/node-palette';

	let {
		items = [],
		isOpen = true,
		x = 0,
		y = 0,
		width = 320,
		height = 480,
		searchQuery = '',
		viewMode = 'list',
		selectedCategory = 'all',
		categories = ['all', 'default', 'source', 'processor', 'output', 'gateway', 'custom'],
		dismissible = true,
		onSearch,
		onNodeSelect,
		onClose,
		onViewModeChange,
		onCategorySelect,
		class: className = '',
		children,
		...restProps
	}: NodePaletteProps = $props();

	const state = createNodePaletteState({
		items,
		isOpen,
		x,
		y,
		width,
		height,
		searchQuery,
		viewMode,
		selectedCategory,
		categories,
		dismissible,
		onSearch,
		onNodeSelect,
		onClose,
		onViewModeChange,
		onCategorySelect,
		children,
		class: className
	});
</script>

{#if isOpen}
	<div class={state.rootClass} style={state.paletteStyle} {...restProps}>
		<div class="node-palette__header">
			<div class="node-palette__header-title">
				<h3 class="node-palette__title">Node Palette</h3>
				{#if dismissible}
					<IconButton
						variant="ghost"
						size="sm"
						aria-label="Close palette"
						onclick={state.handleClose}
					>
						<Icon name="x" size={16} />
					</IconButton>
				{/if}
			</div>

			<div class="node-palette__search">
				<InputText
					placeholder="Search nodes..."
					value={searchQuery}
					size="sm"
					oninput={(event: Event) => state.handleSearch((event.target as HTMLInputElement).value)}
				/>
			</div>

			<div class="node-palette__actions">
				<IconButton
					variant={viewMode === 'list' ? 'primary' : 'ghost'}
					size="sm"
					aria-label="List view"
					title="List view"
					onclick={() => { if (viewMode !== 'list') state.handleViewModeToggle(); }}
				>
					<Icon name="list" size={16} />
				</IconButton>
				<IconButton
					variant={viewMode === 'grid' ? 'primary' : 'ghost'}
					size="sm"
					aria-label="Grid view"
					title="Grid view"
					onclick={() => { if (viewMode !== 'grid') state.handleViewModeToggle(); }}
				>
					<Icon name="grid-3x3" size={16} />
				</IconButton>
			</div>
		</div>

		<div class="node-palette__categories">
			{#each state.categories as category}
				<button
					type="button"
					class={`node-palette__category${category === selectedCategory ? ' node-palette__category--active' : ''}`}
					onclick={() => state.handleCategorySelect(category)}
				>
					{state.getCategoryLabel(category)}
				</button>
			{/each}
		</div>

		<Separator orientation="horizontal" />

		<div class="node-palette__content">
			{#if state.filteredItems.length === 0}
				<div class="node-palette__empty">
					{#if searchQuery}
						<p>No nodes found for "{searchQuery}"</p>
					{:else}
						<p>No nodes available</p>
					{/if}
				</div>
			{:else}
				{#each Object.entries(state.groupedItems) as [category, categoryItems]}
					{#if viewMode === 'list'}
						<div class="node-palette__group">
							{#if category !== 'all'}
								<h4 class="node-palette__group-title">{category}</h4>
							{/if}
							{#each categoryItems as item}
								<button
									type="button"
									class="node-palette__item"
									onclick={() => state.handleNodeClick(item)}
								>
									<div
										class="node-palette__item-icon"
										style={`background-color: ${item.color ?? 'var(--color-primary-500)'};`}
									></div>
									<div class="node-palette__item-info">
										<span class="node-palette__item-title">{item.title}</span>
										{#if item.description}
											<span class="node-palette__item-description">{item.description}</span>
										{/if}
									</div>
								</button>
							{/each}
						</div>
					{:else}
						<div class="node-palette__grid">
							{#each categoryItems as item}
								<button
									type="button"
									class="node-palette__grid-item"
									onclick={() => state.handleNodeClick(item)}
								>
									<div
										class="node-palette__grid-item-icon"
										style={`background-color: ${item.color ?? 'var(--color-primary-500)'};`}
									></div>
									<span class="node-palette__grid-item-title">{item.title}</span>
								</button>
							{/each}
						</div>
					{/if}
				{/each}
			{/if}

			{#if children}{@render children()}{/if}
		</div>
	</div>
{/if}

<style>
	.node-palette {
		position: absolute;
		top: var(--palette-y, 0px);
		left: var(--palette-x, 0px);
		width: var(--palette-width, 320px);
		max-height: var(--palette-height, 480px);
		display: flex;
		flex-direction: column;
		background: var(--color-background-primary);
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		box-shadow: var(--layout-box-shadow-custom42, 0 10px 15px -3px rgb(0 0 0 / 0.1));
		z-index: 100;
		overflow: hidden;
	}
	.node-palette__header {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 1rem;
		background: var(--color-background-secondary);
		border-bottom: 1px solid var(--color-border-primary);
	}
	.node-palette__header-title {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.node-palette__title {
		margin: 0;
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	.node-palette__search { flex: 1 1 auto; }
	.node-palette__actions { display: flex; gap: 0.25rem; }
	.node-palette__categories {
		display: flex;
		gap: 0.25rem;
		padding: 0.75rem 1rem;
		overflow-x: auto;
		background: var(--color-background-tertiary);
	}
	.node-palette__category {
		padding: 0.25rem 0.75rem;
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-text-secondary);
		background: var(--color-background-secondary);
		border: 1px solid var(--color-border-primary);
		border-radius: 0.25rem;
		cursor: pointer;
		white-space: nowrap;
		transition: all 120ms ease;
	}
	.node-palette__category:hover {
		color: var(--color-text-primary);
		background: var(--color-border-primary);
	}
	.node-palette__category--active {
		color: var(--color-text-primary);
		background: var(--color-primary-500);
		border-color: var(--color-primary-500);
	}
	.node-palette__content {
		flex: 1 1 auto;
		overflow-y: auto;
		padding: 0.75rem;
	}
	.node-palette__empty {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		min-height: 200px;
	}
	.node-palette__empty p {
		margin: 0;
		font-size: 0.75rem;
		color: var(--color-text-tertiary);
		text-align: center;
	}
	.node-palette__group { margin-bottom: 1rem; }
	.node-palette__group:last-child { margin-bottom: 0; }
	.node-palette__group-title {
		margin: 0 0 0.5rem 0;
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	.node-palette__item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem;
		background: var(--color-background-tertiary);
		border: 1px solid transparent;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: all 120ms ease;
		margin-bottom: 0.5rem;
		width: 100%;
		text-align: left;
	}
	.node-palette__item:last-child { margin-bottom: 0; }
	.node-palette__item:hover {
		background: var(--color-background-secondary);
		border-color: var(--color-border-primary);
		transform: translateX(2px);
	}
	.node-palette__item:focus-visible {
		outline: 2px solid var(--color-primary-500);
		outline-offset: 2px;
	}
	.node-palette__item-icon {
		width: 2rem;
		height: 2rem;
		border-radius: 0.5rem;
		flex-shrink: 0;
	}
	.node-palette__item-info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		min-width: 0;
		flex: 1 1 auto;
	}
	.node-palette__item-title {
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.node-palette__item-description {
		font-size: 0.75rem;
		color: var(--color-text-secondary);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.node-palette__grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
		gap: 0.75rem;
	}
	.node-palette__grid-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem;
		background: var(--color-background-tertiary);
		border: 1px solid transparent;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: all 120ms ease;
	}
	.node-palette__grid-item:hover {
		background: var(--color-background-secondary);
		border-color: var(--color-border-primary);
		transform: translateY(-2px);
	}
	.node-palette__grid-item-icon {
		width: 3rem;
		height: 3rem;
		border-radius: 0.5rem;
	}
	.node-palette__grid-item-title {
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 100%;
	}
	.node-palette__content::-webkit-scrollbar { width: 0.5rem; }
	.node-palette__content::-webkit-scrollbar-track { background: var(--color-background-primary); }
	.node-palette__content::-webkit-scrollbar-thumb {
		background: var(--color-border-secondary);
		border-radius: 0.25rem;
	}
	.node-palette__content::-webkit-scrollbar-thumb:hover { background: var(--color-text-tertiary); }
	.node-palette__categories::-webkit-scrollbar { height: 0.5rem; }
	.node-palette__categories::-webkit-scrollbar-thumb {
		background: var(--color-border-secondary);
		border-radius: 0.125rem;
	}
</style>

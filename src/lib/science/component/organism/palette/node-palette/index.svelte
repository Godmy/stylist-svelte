<script lang="ts">
	import { IconButton, Icon, InputText, Separator } from '$stylist';
	import { NodePaletteStyleManager } from '$stylist/science/class/style-manager/node-palette';
	import { createNodePaletteState } from '$stylist/science/function/state/node-palette';
	import type { SlotNodePalette as NodePaletteProps } from '$stylist/science/interface/slot/node-palette';

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
		<div class={NodePaletteStyleManager.header()}>
			<div class={NodePaletteStyleManager.headerTitle()}>
				<h3 class={NodePaletteStyleManager.title()}>Node Palette</h3>
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

			<div class={NodePaletteStyleManager.search()}>
				<InputText
					placeholder="Search nodes..."
					value={searchQuery}
					size="sm"
					oninput={(event: Event) =>
						state.handleSearch((event.target as HTMLInputElement).value)}
				/>
			</div>

			<div class={NodePaletteStyleManager.actions()}>
				<IconButton
					variant={viewMode === 'list' ? 'primary' : 'ghost'}
					size="sm"
					aria-label="List view"
					title="List view"
					onclick={state.handleViewModeToggle}
				>
					<Icon name="list" size={16} />
				</IconButton>
				<IconButton
					variant={viewMode === 'grid' ? 'primary' : 'ghost'}
					size="sm"
					aria-label="Grid view"
					title="Grid view"
					onclick={state.handleViewModeToggle}
				>
					<Icon name="grid-3x3" size={16} />
				</IconButton>
			</div>
		</div>

		<div class={NodePaletteStyleManager.categories()}>
			{#each state.categories as category}
				<button
					type="button"
					class={NodePaletteStyleManager.category(category === selectedCategory)}
					onclick={() => state.handleCategorySelect(category)}
				>
					{state.getCategoryLabel(category)}
				</button>
			{/each}
		</div>

		<Separator orientation="horizontal" />

		<div class={NodePaletteStyleManager.content()}>
			{#if state.filteredItems.length === 0}
				<div class={NodePaletteStyleManager.empty()}>
					{#if searchQuery}
						<p>No nodes found for "{searchQuery}"</p>
					{:else}
						<p>No nodes available</p>
					{/if}
				</div>
			{:else}
				{#each Object.entries(state.groupedItems) as [category, categoryItems]}
					{#if viewMode === 'list' && category !== 'all'}
						<div class={NodePaletteStyleManager.group()}>
							<h4 class={NodePaletteStyleManager.groupTitle()}>{category}</h4>
							{#each categoryItems as item}
								<button
									type="button"
									class={NodePaletteStyleManager.item()}
									onclick={() => state.handleNodeClick(item)}
								>
									<div
										class={NodePaletteStyleManager.itemIcon()}
										style={`background-color: ${item.color ?? 'var(--color-primary-500)'};`}
									></div>
									<div class={NodePaletteStyleManager.itemInfo()}>
										<span class={NodePaletteStyleManager.itemTitle()}>{item.title}</span>
										{#if item.description}
											<span class={NodePaletteStyleManager.itemDescription()}>{item.description}</span>
										{/if}
									</div>
								</button>
							{/each}
						</div>
					{:else}
						<div class={NodePaletteStyleManager.grid()}>
							{#each categoryItems as item}
								<button
									type="button"
									class={NodePaletteStyleManager.gridItem()}
									onclick={() => state.handleNodeClick(item)}
								>
									<div
										class={NodePaletteStyleManager.gridItemIcon()}
										style={`background-color: ${item.color ?? 'var(--color-primary-500)'};`}
									></div>
									<span class={NodePaletteStyleManager.gridItemTitle()}>{item.title}</span>
								</button>
							{/each}
						</div>
					{/if}
				{/each}
			{/if}

			{#if children}
				{#if children}{#if children}{@render children()}{/if}{/if}
			{/if}
		</div>
	</div>
{/if}

<style>
	:global(.node-palette) {
		position: absolute;
		top: var(--palette-y, 0px);
		left: var(--palette-x, 0px);
		width: var(--palette-width, 320px);
		max-height: var(--palette-height, 480px);
		display: flex;
		flex-direction: column;
		background: var(--color-background-primary);
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-lg);
		box-shadow: var(--shadow-custom42);
		z-index: var(--z-index-layer100);
		overflow: hidden;
	}

	:global(.node-palette__header) {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-3);
		padding: var(--spacing-4);
		background: var(--color-background-secondary);
		border-bottom: 1px solid var(--color-border-primary);
	}

	:global(.node-palette__header-title) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	:global(.node-palette__title) {
		margin: 0;
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-semibold);
		color: var(--color-text-primary);
	}

	:global(.node-palette__search) {
		flex: 1 1 auto;
	}

	:global(.node-palette__actions) {
		display: flex;
		gap: var(--spacing-1);
	}

	:global(.node-palette__categories) {
		display: flex;
		gap: var(--spacing-1);
		padding: var(--spacing-3) var(--spacing-4);
		overflow-x: auto;
		background: var(--color-background-tertiary);
	}

	:global(.node-palette__category) {
		padding: var(--spacing-1) var(--spacing-3);
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-medium);
		color: var(--color-text-secondary);
		background: var(--color-background-secondary);
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-base);
		cursor: pointer;
		white-space: nowrap;
		transition: all var(--duration-120) var(--animation-ease);
	}

	:global(.node-palette__category:hover) {
		color: var(--color-text-primary);
		background: var(--color-border-primary);
	}

	:global(.node-palette__category--active) {
		color: var(--color-text-primary);
		background: var(--color-primary-500);
		border-color: var(--color-primary-500);
	}

	:global(.node-palette__content) {
		flex: 1 1 auto;
		overflow-y: auto;
		padding: var(--spacing-3);
	}

	:global(.node-palette__empty) {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		min-height: 200px;
	}

	:global(.node-palette__empty p) {
		margin: 0;
		font-size: var(--font-size-3);
		color: var(--color-text-tertiary);
		text-align: center;
	}

	:global(.node-palette__group) {
		margin-bottom: var(--spacing-4);
	}

	:global(.node-palette__group:last-child) {
		margin-bottom: 0;
	}

	:global(.node-palette__group-title) {
		margin: 0 0 var(--spacing-2) 0;
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-semibold);
		color: var(--color-text-secondary);
		text-transform: uppercase;
		letter-spacing: var(--letter-spacing-wider);
	}

	:global(.node-palette__item) {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
		padding: var(--spacing-2);
		background: var(--color-background-tertiary);
		border: 1px solid transparent;
		border-radius: var(--border-radius-lg);
		cursor: pointer;
		transition: all var(--duration-120) var(--animation-ease);
		margin-bottom: var(--spacing-2);
		width: 100%;
		text-align: left;
	}

	:global(.node-palette__item:last-child) {
		margin-bottom: 0;
	}

	:global(.node-palette__item:hover) {
		background: var(--color-background-secondary);
		border-color: var(--color-border-primary);
		transform: translateX(2px);
	}

	:global(.node-palette__item:focus-visible) {
		outline: 2px solid var(--color-primary-500);
		outline-offset: 2px;
	}

	:global(.node-palette__item-icon) {
		width: var(--spacing-8);
		height: var(--spacing-8);
		border-radius: var(--border-radius-lg);
		flex-shrink: 0;
	}

	:global(.node-palette__item-info) {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-1);
		min-width: var(--size-0);
		flex: 1 1 auto;
	}

	:global(.node-palette__item-title) {
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-medium);
		color: var(--color-text-primary);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	:global(.node-palette__item-description) {
		font-size: var(--font-size-3);
		color: var(--color-text-secondary);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	:global(.node-palette__grid) {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
		gap: var(--spacing-3);
	}

	:global(.node-palette__grid-item) {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-2);
		padding: var(--spacing-3);
		background: var(--color-background-tertiary);
		border: 1px solid transparent;
		border-radius: var(--border-radius-lg);
		cursor: pointer;
		transition: all var(--duration-120) var(--animation-ease);
	}

	:global(.node-palette__grid-item:hover) {
		background: var(--color-background-secondary);
		border-color: var(--color-border-primary);
		transform: translateY(-2px);
	}

	:global(.node-palette__grid-item-icon) {
		width: var(--spacing-12);
		height: var(--spacing-12);
		border-radius: var(--border-radius-lg);
	}

	:global(.node-palette__grid-item-title) {
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-medium);
		color: var(--color-text-primary);
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 100%;
	}

	:global(.node-palette__content::-webkit-scrollbar) {
		width: var(--spacing-2);
	}

	:global(.node-palette__content::-webkit-scrollbar-track) {
		background: var(--color-background-primary);
	}

	:global(.node-palette__content::-webkit-scrollbar-thumb) {
		background: var(--color-border-secondary);
		border-radius: var(--border-radius-base);
	}

	:global(.node-palette__content::-webkit-scrollbar-thumb:hover) {
		background: var(--color-text-tertiary);
	}

	:global(.node-palette__categories::-webkit-scrollbar) {
		height: var(--spacing-2);
	}

	:global(.node-palette__categories::-webkit-scrollbar-thumb) {
		background: var(--color-border-secondary);
		border-radius: var(--border-radius-sm);
	}
</style>

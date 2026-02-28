<script lang="ts">
	import type { Snippet } from 'svelte';
	import { IconButton, Icon, InputText, Separator } from '$stylist/components/atoms';

	type NodePaletteItem = {
		id: string;
		type: string;
		title: string;
		description?: string;
		icon?: string;
		color?: string;
		category: string;
	};

	type Props = {
		items?: readonly NodePaletteItem[];
		isOpen?: boolean;
		x?: number;
		y?: number;
		width?: number;
		height?: number;
		searchQuery?: string;
		viewMode?: 'grid' | 'list';
		selectedCategory?: string;
		categories?: readonly string[];
		dismissible?: boolean;
		onSearch?: (query: string) => void;
		onNodeSelect?: (item: NodePaletteItem) => void;
		onClose?: () => void;
		onViewModeChange?: (mode: 'grid' | 'list') => void;
		onCategorySelect?: (category: string) => void;
		children?: Snippet;
		class?: string;
	};

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
	}: Props = $props();

	// Фильтрация элементов
	const filteredItems = $derived(() => {
		let result = items;

		if (selectedCategory !== 'all') {
			result = result.filter((item) => item.category === selectedCategory);
		}

		if (searchQuery.trim()) {
			const query = searchQuery.toLowerCase();
			result = result.filter(
				(item) =>
					item.title.toLowerCase().includes(query) ||
					item.description?.toLowerCase().includes(query) ||
					item.type.toLowerCase().includes(query)
			);
		}

		return result;
	});

	const groupedItems = $derived(() => {
		if (viewMode === 'list') {
			const groups: Record<string, typeof items[number][]> = {};
			const itemsList = items;
			itemsList.forEach((item) => {
				if (!groups[item.category]) {
					groups[item.category] = [];
				}
				groups[item.category].push(item);
			});
			return groups;
		}
		return { all: items };
	});

	function handleSearch(value: string) {
		if (onSearch) {
			onSearch(value);
		}
	}

	function handleNodeClick(item: NodePaletteItem) {
		if (onNodeSelect) {
			onNodeSelect(item);
		}
	}

	function handleClose() {
		if (onClose) {
			onClose();
		}
	}

	function handleViewModeToggle() {
		if (onViewModeChange) {
			onViewModeChange(viewMode === 'grid' ? 'list' : 'grid');
		}
	}

	function handleCategorySelect(category: string) {
		if (onCategorySelect) {
			onCategorySelect(category);
		}
	}
</script>

{#if isOpen}
	<div
		class={`node-palette ${className ?? ''}`}
		style={`--palette-x: ${x}px; --palette-y: ${y}px; --palette-width: ${width}px; --palette-height: ${height}px;`}
		{...restProps}
	>
		<!-- Header -->
		<div class="node-palette__header">
			<div class="node-palette__header-title">
				<h3 class="node-palette__title">Node Palette</h3>
				{#if dismissible}
					<IconButton
						variant="ghost"
						size="sm"
						aria-label="Close palette"
						onclick={handleClose}
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
					oninput={(e) => handleSearch((e.target as HTMLInputElement).value)}
				/>
			</div>

			<div class="node-palette__actions">
				<IconButton
					variant={viewMode === 'list' ? 'primary' : 'ghost'}
					size="sm"
					aria-label="List view"
					title="List view"
					onclick={handleViewModeToggle}
				>
					<Icon name="list" size={16} />
				</IconButton>
				<IconButton
					variant={viewMode === 'grid' ? 'primary' : 'ghost'}
					size="sm"
					aria-label="Grid view"
					title="Grid view"
					onclick={handleViewModeToggle}
				>
					<Icon name="grid-3x3" size={16} />
				</IconButton>
			</div>
		</div>

		<!-- Categories -->
		<div class="node-palette__categories">
			{#each categories as category}
				<button
					type="button"
					class={`node-palette__category ${category === selectedCategory ? 'node-palette__category--active' : ''}`}
					onclick={() => handleCategorySelect(category)}
				>
					{category === 'all' ? 'All' : category}
				</button>
			{/each}
		</div>

		<Separator orientation="horizontal" />

		<!-- Content -->
		<div class="node-palette__content">
			{#if filteredItems.length === 0}
				<div class="node-palette__empty">
					{#if searchQuery}
						<p>No nodes found for "{searchQuery}"</p>
					{:else}
						<p>No nodes available</p>
					{/if}
				</div>
			{:else}
				{#each Object.entries(groupedItems) as [category, categoryItems]}
					{#if viewMode === 'list' && category !== 'all'}
						<div class="node-palette__group">
							<h4 class="node-palette__group-title">{category}</h4>
							{#each categoryItems as item}
								<button
									type="button"
									class="node-palette__item"
									onclick={() => handleNodeClick(item)}
								>
									<div
										class="node-palette__item-icon"
										style={`background-color: ${item.color ?? '#3b82f6'};`}
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
									onclick={() => handleNodeClick(item)}
								>
									<div
										class="node-palette__grid-item-icon"
										style={`background-color: ${item.color ?? '#3b82f6'};`}
									></div>
									<span class="node-palette__grid-item-title">{item.title}</span>
								</button>
							{/each}
						</div>
					{/if}
				{/each}
			{/if}

			{#if children}
				{@render children?.()}
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
		background: #1e1e1e;
		border: 1px solid #374151;
		border-radius: 8px;
		box-shadow: 0 8px 16px rgb(0 0 0 / 0.4);
		z-index: 100;
		overflow: hidden;
	}

	/* Header */
	:global(.node-palette__header) {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 1rem;
		background: #2d2d2d;
		border-bottom: 1px solid #374151;
	}

	:global(.node-palette__header-title) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	:global(.node-palette__title) {
		margin: 0;
		font-size: 0.875rem;
		font-weight: 600;
		color: #f8fafc;
	}

	:global(.node-palette__search) {
		flex: 1 1 auto;
	}

	:global(.node-palette__actions) {
		display: flex;
		gap: 0.25rem;
	}

	/* Categories */
	:global(.node-palette__categories) {
		display: flex;
		gap: 0.25rem;
		padding: 0.75rem 1rem;
		overflow-x: auto;
		background: #252525;
	}

	:global(.node-palette__category) {
		padding: 0.375rem 0.75rem;
		font-size: 0.75rem;
		font-weight: 500;
		color: #9ca3af;
		background: #2d2d2d;
		border: 1px solid #374151;
		border-radius: 4px;
		cursor: pointer;
		white-space: nowrap;
		transition: all 120ms ease;
	}

	:global(.node-palette__category:hover) {
		color: #f8fafc;
		background: #374151;
	}

	:global(.node-palette__category--active) {
		color: #f8fafc;
		background: #3b82f6;
		border-color: #3b82f6;
	}

	/* Content */
	:global(.node-palette__content) {
		flex: 1 1 auto;
		overflow-y: auto;
		padding: 0.75rem;
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
		font-size: 0.75rem;
		color: #6b7280;
		text-align: center;
	}

	/* List view */
	:global(.node-palette__group) {
		margin-bottom: 1rem;
	}

	:global(.node-palette__group:last-child) {
		margin-bottom: 0;
	}

	:global(.node-palette__group-title) {
		margin: 0 0 0.5rem 0;
		font-size: 0.6875rem;
		font-weight: 600;
		color: #9ca3af;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	:global(.node-palette__item) {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.625rem;
		background: #252525;
		border: 1px solid transparent;
		border-radius: 6px;
		cursor: pointer;
		transition: all 120ms ease;
		margin-bottom: 0.375rem;
		width: 100%;
		text-align: left;
	}

	:global(.node-palette__item:last-child) {
		margin-bottom: 0;
	}

	:global(.node-palette__item:hover) {
		background: #2d2d2d;
		border-color: #374151;
		transform: translateX(2px);
	}

	:global(.node-palette__item:focus-visible) {
		outline: 2px solid #3b82f6;
		outline-offset: 2px;
	}

	:global(.node-palette__item-icon) {
		width: 32px;
		height: 32px;
		border-radius: 6px;
		flex-shrink: 0;
	}

	:global(.node-palette__item-info) {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
		min-width: 0;
		flex: 1 1 auto;
	}

	:global(.node-palette__item-title) {
		font-size: 0.8125rem;
		font-weight: 500;
		color: #f8fafc;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	:global(.node-palette__item-description) {
		font-size: 0.6875rem;
		color: #9ca3af;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/* Grid view */
	:global(.node-palette__grid) {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
		gap: 0.75rem;
	}

	:global(.node-palette__grid-item) {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem;
		background: #252525;
		border: 1px solid transparent;
		border-radius: 8px;
		cursor: pointer;
		transition: all 120ms ease;
	}

	:global(.node-palette__grid-item:hover) {
		background: #2d2d2d;
		border-color: #374151;
		transform: translateY(-2px);
	}

	:global(.node-palette__grid-item-icon) {
		width: 48px;
		height: 48px;
		border-radius: 8px;
	}

	:global(.node-palette__grid-item-title) {
		font-size: 0.6875rem;
		font-weight: 500;
		color: #f8fafc;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 100%;
	}

	/* Scrollbar */
	:global(.node-palette__content::-webkit-scrollbar) {
		width: 8px;
	}

	:global(.node-palette__content::-webkit-scrollbar-track) {
		background: #1e1e1e;
	}

	:global(.node-palette__content::-webkit-scrollbar-thumb) {
		background: #4b5563;
		border-radius: 4px;
	}

	:global(.node-palette__content::-webkit-scrollbar-thumb:hover) {
		background: #6b7280;
	}

	:global(.node-palette__categories::-webkit-scrollbar) {
		height: 6px;
	}

	:global(.node-palette__categories::-webkit-scrollbar-thumb) {
		background: #4b5563;
		border-radius: 3px;
	}
</style>

<script lang="ts">
	import NodePalette from './index.svelte';

	type NodePaletteItem = {
		id: string;
		type: string;
		title: string;
		description?: string;
		icon?: string;
		color?: string;
		category: string;
	};

	interface StoryProps {
		class?: string;
		isOpen?: boolean;
		viewMode?: 'grid' | 'list';
	}

	const sampleItems: readonly NodePaletteItem[] = [
		{
			id: '1',
			type: 'source',
			title: 'Data Source',
			description: 'Input data source node',
			icon: 'database',
			color: 'var(--color-primary-500)',
			category: 'source'
		},
		{
			id: '2',
			type: 'processor',
			title: 'Data Processor',
			description: 'Process and transform data',
			icon: 'cpu',
			color: 'var(--color-warning-500)',
			category: 'processor'
		},
		{
			id: '3',
			type: 'output',
			title: 'Data Output',
			description: 'Output data destination',
			icon: 'export',
			color: 'var(--color-success-500)',
			category: 'output'
		},
		{
			id: '4',
			type: 'gateway',
			title: 'API Gateway',
			description: 'External API connection',
			icon: 'cloud',
			color: 'var(--color-info-500)',
			category: 'gateway'
		},
		{
			id: '5',
			type: 'custom',
			title: 'Custom Node',
			description: 'User-defined node',
			icon: 'settings',
			color: 'var(--color-purple-500)',
			category: 'custom'
		}
	];

	let {
		class: className = '',
		isOpen = true,
		viewMode = 'list',
		...restProps
	}: StoryProps = $props();

	function handleSearch(query: string) {
		console.log('Search query:', query);
	}

	function handleNodeSelect(item: NodePaletteItem) {
		console.log('Node selected:', item);
	}

	function handleClose() {
		console.log('Palette closed');
	}

	function onViewModeChange(mode: 'grid' | 'list') {
		console.log('View mode changed:', mode);
	}

	function handleCategorySelect(category: string) {
		console.log('Category selected:', category);
	}
</script>

<div class="story-container">
	<div class="story-preview">
		<NodePalette
			items={sampleItems}
			{isOpen}
			{viewMode}
			x={20}
			y={20}
			width={320}
			height={480}
			dismissible={true}
			onSearch={handleSearch}
			onNodeSelect={handleNodeSelect}
			onClose={handleClose}
			onViewModeChange={onViewModeChange}
			onCategorySelect={handleCategorySelect}
			{...restProps}
		/>
	</div>
</div>

<style>
	.story-container {
		position: relative;
		min-height: 600px;
		padding: var(--spacing-6);
		background: var(--color-background-secondary);
	}

	.story-preview {
		position: relative;
		width: 100%;
		height: 100%;
	}
</style>

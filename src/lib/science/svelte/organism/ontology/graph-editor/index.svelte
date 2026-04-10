<script lang="ts">
	import { LitegraphCanvas, NodePalette, NodePropertiesPanel, IconButton, Separator, Icon } from '$stylist';
	import type { GraphEditorProps } from '$stylist/science/type/struct/graph-editor-props';
	import { createGraphEditorState } from '$stylist/science/function/state/graph-editor';

	let props: GraphEditorProps = $props();
	const state = createGraphEditorState(props);
</script>

<svelte:window onresize={state.recalculatePalettePosition} />

<div bind:this={state.editorRef} class={`graph-editor ${props.class ?? ''}`} {...props}>
	<div class="graph-editor__main">
		<LitegraphCanvas
			nodes={props.nodes as any}
			connections={props.connections as any}
			selectedNodeIds={props.selectedNodeIds as any}
			zoom={props.zoom ?? 1}
			offset={props.offset ?? { x: 0, y: 0 }}
			showGrid={props.showGrid ?? true}
			showToolbar={props.showToolbar ?? true}
			showMiniMap={props.showMiniMap ?? true}
			toolbarItems={[...(props.toolbarItems ?? [])] as any}
			onNodeSelect={state.handleNodeSelect}
			onNodeDrag={state.handleNodeDrag}
			onNodeDelete={state.handleNodeDelete}
			onNodeDuplicate={state.handleNodeDuplicate}
			onNodeAdd={props.onNodeAdd as any}
			onZoomChange={props.onZoomChange}
			onOffsetChange={props.onOffsetChange}
			onSave={state.handleSave}
			onExport={props.onExport}
			onImport={props.onImport}
		>
			{#if props.children}
				{@render props.children?.()}
			{/if}
		</LitegraphCanvas>
	</div>

	{#if props.showNodePalette ?? true}
		<div class="graph-editor__palette">
			<NodePalette
				isOpen={state.isPaletteOpen}
				x={state.anchoredPalettePosition.x}
				y={state.anchoredPalettePosition.y}
				items={state.defaultPaletteNodes}
				searchQuery={state.paletteSearchQuery}
				selectedCategory={state.paletteSelectedCategory}
				viewMode="list"
				onSearch={(query: string) => state.paletteSearchQuery = query}
				onNodeSelect={state.handlePaletteNodeSelect}
				onClose={() => state.isPaletteOpen = false}
				onCategorySelect={(category: string) => state.paletteSelectedCategory = category}
			/>
		</div>
	{/if}

	{#if (props.showPropertiesPanel ?? true) && state.isPropertiesPanelOpen && state.selectedNode}
		<div class="graph-editor__properties">
			<NodePropertiesPanel
				id="properties-panel"
				nodeId={state.selectedNode.id}
				title="Node Properties"
				properties={state.selectedNode.properties ?? []}
				size="md"
				editable={true}
				showHeader={true}
				showClose={true}
				onPropertyChange={state.handlePropertyChange}
				onclose={() => state.isPropertiesPanelOpen = false}
			/>
		</div>
	{/if}

	<div class="graph-editor__quick-actions">
		<div class="graph-editor__quick-anchor" bind:this={state.addButtonAnchorRef}>
			<IconButton
				variant="primary"
				size="md"
				aria-label="Add node"
				title="Add Node"
				onclick={state.handleTogglePalette}
			>
				<Icon name="plus" size={20} />
			</IconButton>
		</div>

		<Separator orientation="vertical" />

		<IconButton
			variant="ghost"
			size="md"
			aria-label="Save graph"
			title="Save Graph"
			onclick={state.handleSave}
		>
			<Icon name="save" size={18} />
		</IconButton>

		<IconButton
			variant="ghost"
			size="md"
			aria-label="Export graph"
			title="Export Graph"
			onclick={props.onExport}
		>
			<Icon name="download" size={18} />
		</IconButton>

		<IconButton
			variant="ghost"
			size="md"
			aria-label="Import graph"
			title="Import Graph"
			onclick={() => props.onImport?.(null)}
		>
			<Icon name="upload" size={18} />
		</IconButton>

		<Separator orientation="vertical" />

		<IconButton
			variant="ghost"
			size="md"
			aria-label="Toggle properties panel"
			title="Toggle Properties"
			onclick={state.handleToggleProperties}
		>
			<Icon name="settings" size={18} />
		</IconButton>

		<IconButton
			variant="ghost"
			size="md"
			aria-label="Help"
			title="Help"
		>
			<Icon name="info" size={18} />
		</IconButton>
	</div>
</div>

<style>
	:global(.graph-editor) {
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: var(--color-background-primary);
	}

	:global(.graph-editor__main) {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	:global(.graph-editor__palette) {
		position: absolute;
		top: 0;
		left: 0;
		z-index: var(--z-index-layer50);
		pointer-events: none;
	}

	:global(.graph-editor__palette > *) {
		pointer-events: auto;
	}

	:global(.graph-editor__properties) {
		position: absolute;
		top: var(--spacing-4);
		right: var(--spacing-4);
		z-index: var(--z-index-layer50);
	}

	:global(.graph-editor__quick-actions) {
		position: absolute;
		bottom: var(--spacing-6);
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		padding: var(--spacing-3) var(--spacing-4);
		background: color-mix(in srgb, var(--color-background-primary) 95%, transparent);
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-xl);
		box-shadow: var(--shadow-custom42);
		z-index: var(--z-index-layer50);
		backdrop-filter: blur(8px);
	}

	:global(.graph-editor__quick-actions .separator) {
		height: var(--spacing-6);
		margin: 0 var(--spacing-1);
	}

	:global(.graph-editor__quick-anchor) {
		display: inline-flex;
	}
</style>

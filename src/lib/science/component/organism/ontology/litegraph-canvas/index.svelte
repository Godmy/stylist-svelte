<script lang="ts">
	import type { LiteGraphPort as LitegraphPortRecipe } from '$stylist/science/type/struct/litegraph-port';
	import type { RecipeLitegraphCanvas as LitegraphCanvasContract } from '$stylist/science/interface/recipe/litegraph-canvas';
	import { GraphCanvas, GraphToolbar, ConnectionLine, Minimap } from '$stylist';
	import LitegraphNodeComponent from '$stylist/science/component/molecule/ontology/litegraph-node/index.svelte';
	import { createLitegraphCanvasState } from '$stylist/science/function/state/litegraph-canvas';

	let props: LitegraphCanvasContract = $props();
	const state = createLitegraphCanvasState(props);
</script>

<svelte:window onmousemove={state.handleCanvasMouseMove} onmouseup={state.handleCanvasMouseUp} />

<div class={`litegraph-canvas ${props.class ?? ''}`} {...props}>
	{#if props.showToolbar ?? true}
		<div class="litegraph-canvas__toolbar">
			<GraphToolbar id="litegraph-toolbar" items={state.allToolbarItems} orientation="horizontal" size="sm" onItemClick={state.handleToolbarItemClick}>
				{#if props.toolbarContent}
					{@render props.toolbarContent()}}
				{/if}
			</GraphToolbar>
		</div>
	{/if}

	<div class="litegraph-canvas__container" bind:this={state.canvasHostRef}>
		<GraphCanvas width={state.canvasSize.width} height={state.canvasSize.height} zoom={state.internalZoom} minZoom={0.1} maxZoom={3} offsetX={state.internalOffset.x} offsetY={state.internalOffset.y} gridMode={state.effectiveGridMode} gridColor={state.isGridVisible ? undefined : 'transparent'} panMode={state.effectivePanMode} snapToGrid={true} onzoomchange={state.updateZoom} onoffsetchange={state.updateOffset} oncanvasclick={state.handleCanvasClick} class="litegraph-canvas__canvas">
			<svg class="litegraph-canvas__connections" style="overflow: visible;">
				{#each props.connections ?? [] as connection}
					<ConnectionLine id={connection.id} startX={connection.startX ?? 0} startY={connection.startY ?? 0} endX={connection.endX ?? 0} endY={connection.endY ?? 0} type={connection.type} color={connection.color} active={connection.active} onclick={connection.onclick} />
				{/each}
				{#if state.isConnecting && state.connectionStartPosition && state.connectionCurrentPosition}
					<ConnectionLine id="connection-dragging" startX={state.connectionStartPosition.x} startY={state.connectionStartPosition.y} endX={state.connectionCurrentPosition.x} endY={state.connectionCurrentPosition.y} type="bezier" color="var(--color-primary-500)" active={true} showArrow={false} animated={true} />
				{/if}
			</svg>

			{#each props.nodes ?? [] as node}
				<LitegraphNodeComponent
					id={node.id}
					title={node.title}
					type={node.type as 'default' | 'custom' | 'source' | 'processor' | 'output' | 'gateway'}
					x={node.x ?? 0}
					y={node.y ?? 0}
					color={node.color}
					selected={(props.selectedNodeIds ?? []).includes(node.id)}
					inputs={node.inputs ? [...node.inputs] as LitegraphPortRecipe[] : undefined}
					outputs={node.outputs ? [...node.outputs] as LitegraphPortRecipe[] : undefined}
					properties={node.properties ? [...node.properties] as any : undefined}
					draggable={true}
					selectable={true}
					deletable={props.allowDeleteNodes ?? true}
					duplicable={props.allowDuplicateNodes ?? true}
					onNodeSelect={props.onNodeSelect ? (nodeId: string | undefined) => props.onNodeSelect?.(nodeId ?? '') : undefined}
					onNodeDrag={props.onNodeDrag ? (nodeId: string | undefined, position: { x: number; y: number }) => props.onNodeDrag?.(nodeId ?? '', position) : undefined}
					ondelete={props.onNodeDelete ? (nodeId: string | undefined) => props.onNodeDelete?.(nodeId ?? '') : undefined}
					onduplicate={props.onNodeDuplicate ? (nodeId: string | undefined) => props.onNodeDuplicate?.(nodeId ?? '') : undefined}
					onConnectionStart={state.handlePortConnectionStart}
					onConnectionEnd={state.handlePortConnectionEnd}
				/>
			{/each}

			{#if props.children}
				{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
			{/if}
		</GraphCanvas>

		{#if props.showMiniMap ?? false}
			<div class="litegraph-canvas__minimap" style="width: 220px; height: 150px;">
				<Minimap>{#if true}{/if}</Minimap>
			</div>
		{/if}
	</div>
</div>

<style>
	:global(.litegraph-canvas) { display: flex; flex-direction: column; height: 100%; background: var(--color-background-primary); border-radius: var(--border-radius-lg); overflow: hidden; }
	:global(.litegraph-canvas__toolbar) { display: flex; align-items: center; padding: var(--spacing-3); background: color-mix(in srgb, var(--color-background-primary) 90%, var(--color-background-secondary) 10%); border-bottom: 1px solid var(--color-border-primary); }
	:global(.litegraph-canvas__container) { position: relative; flex: 1 1 auto; display: flex; overflow: hidden; }
	:global(.litegraph-canvas__canvas) { flex: 1 1 auto; }
	:global(.litegraph-canvas__connections) { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: var(--z-index-layer5); }
	:global(.litegraph-canvas__connections > *) { pointer-events: stroke; }
	:global(.litegraph-canvas__minimap) { position: absolute; bottom: var(--spacing-4); right: var(--spacing-4); z-index: var(--z-index-docked); }
</style>

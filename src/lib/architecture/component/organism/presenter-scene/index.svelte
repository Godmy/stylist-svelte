<script lang="ts">
	import type { PresenterSceneContract } from '$stylist/architecture/type/struct/presenter-scene/presenter-scene-contract';
	import { PresenterSceneStyleManager } from '$stylist/architecture/class/style-manager/presenter-scene';
	import createPresenterSceneState from '$stylist/architecture/function/state/presenter-scene/index.svelte';
	import PresenterNodeShell from '$stylist/architecture/component/molecule/presenter-node-shell/index.svelte';

	const contract: PresenterSceneContract = $props();
	const state = createPresenterSceneState(contract);
	let viewportElement: HTMLDivElement | null = null;

	$effect(() => {
		state.syncCamera();
	});

	$effect(() => {
		state.syncSelectedNode();
	});

	$effect(() => {
		if (!viewportElement) return;

		const element = viewportElement;
		const syncViewportSize = () => {
			state.setViewportSize(element.clientWidth, element.clientHeight);
		};

		syncViewportSize();

		const observer = new ResizeObserver(() => {
			syncViewportSize();
		});

		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	});
</script>

<section class={PresenterSceneStyleManager.getSectionClass(String(contract.class ?? ''))}>
	{#if state.showHeader}
		<header class={PresenterSceneStyleManager.getHeaderClass()}>
			<div>
				<h2 class={PresenterSceneStyleManager.getTitleClass()}>{state.title}</h2>
				<p class={PresenterSceneStyleManager.getSubtitleClass()}>
					{contract.nodes?.length ?? 0} nodes, camera depth {state.camera.depth}, zoom {state.camera.zoom.toFixed(
						2
					)}
				</p>
			</div>

			{#if state.showDepthControls}
				<div class={PresenterSceneStyleManager.getControlsClass()}>
					<button
						type="button"
						class={PresenterSceneStyleManager.getControlClass()}
						onclick={() => state.stepDepth(80)}>Zoom out</button
					>
					<button
						type="button"
						class={PresenterSceneStyleManager.getControlClass()}
						onclick={() => state.stepDepth(-80)}>Zoom in</button
					>
					<button
						type="button"
						class={PresenterSceneStyleManager.getControlClass()}
						onclick={state.resetCamera}>Reset</button
					>
				</div>
			{/if}
		</header>
	{/if}

	<div
		class={PresenterSceneStyleManager.getViewportClass(state.isDragging)}
		bind:this={viewportElement}
		tabindex="0"
		role="button"
		aria-roledescription="pan and zoom scene viewport"
		aria-label="Interactive presenter scene"
		aria-keyshortcuts="ArrowLeft ArrowRight ArrowUp ArrowDown + - 0"
		data-camera-depth={state.camera.depth}
		data-camera-zoom={state.camera.zoom}
		data-camera-x={state.camera.x}
		data-camera-y={state.camera.y}
		data-selected-node-id={state.selectedNode?.id}
		data-selected-node-layer={state.selectedNode?.layer}
		onwheel={(event) => state.handleWheel(event, viewportElement?.getBoundingClientRect())}
		onpointerdown={state.handlePointerDown}
		onpointermove={state.handlePointerMove}
		onpointerup={state.handlePointerUp}
		onpointerleave={state.handlePointerUp}
		onkeydown={state.handleKeyDown}
	>
		{#if state.showGrid}
			<div class={PresenterSceneStyleManager.getGridClass()} aria-hidden="true"></div>
		{/if}
		{#if state.showLinks}
			<svg class={PresenterSceneStyleManager.getLinksClass()} aria-hidden="true">
				{#each state.sceneLinks as link (link.id)}
					<line
						x1={state.projectX(link.from.position.x)}
						y1={state.projectY(link.from.position.y)}
						x2={state.projectX(link.to.position.x)}
						y2={state.projectY(link.to.position.y)}
						stroke={link.to.accent}
						stroke-opacity="0.42"
						stroke-width="2"
						stroke-dasharray="6 8"
					/>
				{/each}
			</svg>
		{/if}

		{#each contract.nodes ?? [] as node (node.id)}
			<PresenterNodeShell
				{node}
				camera={state.camera}
				selected={node.id === state.selectedNodeId}
				onselect={state.focusNode}
			/>
		{/each}
	</div>

	{#if state.showInspector && state.selectedNode}
		<aside
			class={PresenterSceneStyleManager.getInspectorClass()}
			data-node-id={state.selectedNode.id}
			data-node-depth={state.selectedNode.depth}
			data-node-layer={state.selectedNode.layer}
		>
			<div class={PresenterSceneStyleManager.getBadgeClass()}>{state.selectedNode.title}</div>
			<div class={PresenterSceneStyleManager.getInspectorLineClass()}>
				Depth: {state.selectedNode.depth}
			</div>
			<div class={PresenterSceneStyleManager.getInspectorLineClass()}>
				Accent: {state.selectedNode.accent}
			</div>
			{#if state.selectedNode.description}
				<p class={PresenterSceneStyleManager.getDescriptionClass()}>
					{state.selectedNode.description}
				</p>
			{/if}
		</aside>
	{/if}
</section>

<style>
	.presenter-scene {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
		min-height: 480px;
		background: var(--color-background-primary);
		border-radius: var(--radius-xl, 1rem);
		border: 1px solid var(--color-border-primary);
		overflow: hidden;
	}

	.presenter-scene__header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 0.75rem 1rem;
		border-bottom: 1px solid var(--color-border-primary);
		background: var(--color-background-secondary);
		flex-shrink: 0;
	}

	.presenter-scene__title {
		margin: 0;
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.presenter-scene__subtitle {
		margin: 0.25rem 0 0;
		font-size: 0.8rem;
		color: var(--color-text-secondary);
	}

	.presenter-scene__controls {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		flex-shrink: 0;
	}

	.presenter-scene__control {
		padding: 0.35rem 0.7rem;
		border: 1px solid var(--color-border-primary);
		border-radius: var(--radius-md, 0.375rem);
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		font-size: 0.8rem;
		cursor: pointer;
	}

	.presenter-scene__control:hover {
		background: var(--color-background-secondary);
	}

	.presenter-scene__viewport {
		flex: 1;
		position: relative;
		overflow: hidden;
		cursor: grab;
		outline: none;
		user-select: none;
	}

	.presenter-scene__viewport.dragging {
		cursor: grabbing;
	}

	.presenter-scene__grid {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.presenter-scene__links {
		position: absolute;
		inset: 0;
		pointer-events: none;
		overflow: visible;
	}

	.presenter-scene__inspector {
		position: absolute;
		top: 1rem;
		right: 1rem;
		z-index: 10;
		min-width: 11rem;
		padding: 0.75rem;
		background: var(--color-background-primary);
		border: 1px solid var(--color-border-primary);
		border-radius: var(--radius-lg, 0.5rem);
		box-shadow: var(--shadow-md, 0 4px 6px -1px rgb(0 0 0 / 0.1));
		font-size: 0.8rem;
		color: var(--color-text-primary);
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.presenter-scene__badge {
		font-weight: 600;
		font-size: 0.85rem;
		padding-bottom: 0.4rem;
		border-bottom: 1px solid var(--color-border-secondary);
		margin-bottom: 0.2rem;
	}

	.presenter-scene__inspector-line {
		color: var(--color-text-secondary);
	}

	.presenter-scene__description {
		margin: 0.4rem 0 0;
		line-height: 1.5;
		color: var(--color-text-secondary);
	}
</style>

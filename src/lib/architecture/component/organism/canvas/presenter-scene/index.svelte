<script lang="ts">
	import type { PresenterSceneContract } from '$stylist/architecture/type/struct/presenter-scene';
	import { PresenterSceneStyleManager } from '$stylist/architecture/class/style-manager/presenter-scene';
	import { createPresenterSceneState } from '$stylist/architecture/function/state/presenter-scene';
	import PresenterNodeShell from '$stylist/architecture/component/molecule/canvas/presenter-node-shell/index.svelte';

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
					{contract.nodes?.length ?? 0} nodes, camera depth {state.camera.depth}, zoom {state.camera.zoom.toFixed(2)}
				</p>
			</div>

			{#if state.showDepthControls}
				<div class={PresenterSceneStyleManager.getControlsClass()}>
					<button type="button" class={PresenterSceneStyleManager.getControlClass()} onclick={() => state.stepDepth(80)}>Zoom out</button>
					<button type="button" class={PresenterSceneStyleManager.getControlClass()} onclick={() => state.stepDepth(-80)}>Zoom in</button>
					<button type="button" class={PresenterSceneStyleManager.getControlClass()} onclick={state.resetCamera}>Reset</button>
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
			<div class={PresenterSceneStyleManager.getInspectorLineClass()}>Depth: {state.selectedNode.depth}</div>
			<div class={PresenterSceneStyleManager.getInspectorLineClass()}>Accent: {state.selectedNode.accent}</div>
			{#if state.selectedNode.description}
				<p class={PresenterSceneStyleManager.getDescriptionClass()}>{state.selectedNode.description}</p>
			{/if}
		</aside>
	{/if}
</section>

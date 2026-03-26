<script lang="ts">
	import PresenterNodeShell from '$stylist/architecture/molecule/canvas/presenter-node-shell/index.svelte';
	import { useCamera } from '$stylist/architecture/state/camera';
	import type { SceneCamera, SceneCameraInput } from '$stylist/architecture/type/attribute/camera';
	import type { SceneNode } from '$stylist/architecture/type/attribute/scene-node';

	type Props = {
		nodes: SceneNode[];
		camera?: SceneCameraInput;
		title?: string;
		class?: string;
		onfocusnode?: (node: SceneNode) => void;
	};

	let {
		nodes = [],
		camera: cameraInput = {},
		title = 'Presenter Scene',
		class: className = '',
		onfocusnode
	}: Props = $props();

	let selectedNodeId = $state(nodes[0]?.id ?? '');
	let isDragging = $state(false);
	let dragOriginX = $state(0);
	let dragOriginY = $state(0);
	let viewportElement = $state<HTMLDivElement | null>(null);

	const cameraState = useCamera(cameraInput);
	const camera = $derived.by<SceneCamera>(() => cameraState.camera);

	const selectedNode = $derived(nodes.find((node) => node.id === selectedNodeId) ?? nodes[0] ?? null);
	const sceneLinks = $derived.by(() => {
		const links: { id: string; from: SceneNode; to: SceneNode }[] = [];

		for (const node of nodes) {
			for (const child of node.children ?? []) {
				const target = nodes.find((candidate) => candidate.id === child.id);

				if (!target) continue;

				links.push({
					id: `${node.id}->${target.id}`,
					from: node,
					to: target
				});
			}
		}

		return links;
	});

	$effect(() => {
		cameraState.setDepth(cameraInput.depth ?? 500);
		cameraState.setZoom(cameraInput.zoom ?? 1);
	});

	$effect(() => {
		selectedNodeId = nodes[0]?.id ?? '';
	});

	$effect(() => {
		if (!viewportElement) return;

		const element = viewportElement;

		const syncViewportSize = () => {
			cameraState.setViewportSize(element.clientWidth, element.clientHeight);
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

	function focusNode(node: SceneNode) {
		selectedNodeId = node.id;
		cameraState.focusNode(node);
		onfocusnode?.(node);
	}

	function stepDepth(delta: number) {
		cameraState.setDepth(camera.depth + delta);
	}

	function resetCamera() {
		cameraState.reset({
			depth: cameraInput.depth,
			zoom: cameraInput.zoom,
			viewportWidth: camera.viewportWidth,
			viewportHeight: camera.viewportHeight
		});
	}

	function handleWheel(event: WheelEvent) {
		event.preventDefault();
		const bounds = viewportElement?.getBoundingClientRect();
		if (!bounds) return;

		cameraState.zoomAtPoint(
			event.deltaY < 0 ? 0.12 : -0.12,
			event.clientX - bounds.left,
			event.clientY - bounds.top
		);
	}

	function handlePointerDown(event: PointerEvent) {
		isDragging = true;
		dragOriginX = event.clientX;
		dragOriginY = event.clientY;
		(event.currentTarget as HTMLElement | null)?.setPointerCapture?.(event.pointerId);
	}

	function handlePointerMove(event: PointerEvent) {
		if (!isDragging) return;

		const dx = (event.clientX - dragOriginX) / camera.zoom;
		const dy = (event.clientY - dragOriginY) / camera.zoom;

		cameraState.panBy(-dx, -dy);
		dragOriginX = event.clientX;
		dragOriginY = event.clientY;
	}

	function handlePointerUp() {
		isDragging = false;
	}

	function handleKeyDown(event: KeyboardEvent) {
		switch (event.key) {
			case 'ArrowLeft':
				event.preventDefault();
				cameraState.panBy(-60 / camera.zoom, 0);
				break;
			case 'ArrowRight':
				event.preventDefault();
				cameraState.panBy(60 / camera.zoom, 0);
				break;
			case 'ArrowUp':
				event.preventDefault();
				cameraState.panBy(0, -60 / camera.zoom);
				break;
			case 'ArrowDown':
				event.preventDefault();
				cameraState.panBy(0, 60 / camera.zoom);
				break;
			case '+':
			case '=':
				event.preventDefault();
				cameraState.zoomAtPoint(0.12, camera.viewportWidth / 2, camera.viewportHeight / 2);
				break;
			case '-':
			case '_':
				event.preventDefault();
				cameraState.zoomAtPoint(-0.12, camera.viewportWidth / 2, camera.viewportHeight / 2);
				break;
			case '0':
				event.preventDefault();
				resetCamera();
				break;
		}
	}

	function projectX(x: number) {
		return (x - camera.x) * camera.zoom;
	}

	function projectY(y: number) {
		return (y - camera.y) * camera.zoom;
	}
</script>

<section class={`presenter-scene ${className}`.trim()}>
	<header class="presenter-scene__header">
		<div>
			<h2 class="presenter-scene__title">{title}</h2>
			<p class="presenter-scene__subtitle">
				{nodes.length} nodes, camera depth {camera.depth}, zoom {camera.zoom.toFixed(2)}
			</p>
		</div>

		<div class="presenter-scene__controls">
			<button type="button" class="presenter-scene__control" onclick={() => stepDepth(80)}>Zoom out</button>
			<button type="button" class="presenter-scene__control" onclick={() => stepDepth(-80)}>Zoom in</button>
			<button type="button" class="presenter-scene__control" onclick={resetCamera}>Reset</button>
		</div>
	</header>

	<div
		class="presenter-scene__viewport"
		class:presenter-scene__viewport--dragging={isDragging}
		bind:this={viewportElement}
		tabindex="0"
		role="button"
		aria-roledescription="pan and zoom scene viewport"
		aria-label="Interactive presenter scene"
		aria-keyshortcuts="ArrowLeft ArrowRight ArrowUp ArrowDown + - 0"
		data-camera-depth={camera.depth}
		data-camera-zoom={camera.zoom}
		data-camera-x={camera.x}
		data-camera-y={camera.y}
		data-selected-node-id={selectedNode?.id}
		data-selected-node-layer={selectedNode?.layer}
		onwheel={handleWheel}
		onpointerdown={handlePointerDown}
		onpointermove={handlePointerMove}
		onpointerup={handlePointerUp}
		onpointerleave={handlePointerUp}
		onkeydown={handleKeyDown}
	>
		<div class="presenter-scene__grid" aria-hidden="true"></div>
		<svg class="presenter-scene__links" aria-hidden="true">
			{#each sceneLinks as link (link.id)}
				<line
					x1={projectX(link.from.position.x)}
					y1={projectY(link.from.position.y)}
					x2={projectX(link.to.position.x)}
					y2={projectY(link.to.position.y)}
					stroke={link.to.accent}
					stroke-opacity="0.42"
					stroke-width="2"
					stroke-dasharray="6 8"
				/>
			{/each}
		</svg>

		{#each nodes as node (node.id)}
			<PresenterNodeShell
				{node}
				{camera}
				selected={node.id === selectedNodeId}
				onselect={focusNode}
			/>
		{/each}
	</div>

	{#if selectedNode}
		<aside
			class="presenter-scene__inspector"
			data-node-id={selectedNode.id}
			data-node-depth={selectedNode.depth}
			data-node-layer={selectedNode.layer}
		>
			<div class="presenter-scene__badge">{selectedNode.title}</div>
			<div class="presenter-scene__inspector-line">Depth: {selectedNode.depth}</div>
			<div class="presenter-scene__inspector-line">Accent: {selectedNode.accent}</div>
			{#if selectedNode.description}
				<p class="presenter-scene__description">{selectedNode.description}</p>
			{/if}
		</aside>
	{/if}
</section>

<style>
	.presenter-scene {
		display: grid;
		gap: var(--spacing-4);
		padding: var(--spacing-5);
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-xl);
		background:
			radial-gradient(circle at top, color-mix(in srgb, var(--color-primary-500) 14%, transparent 86%), transparent 40%),
			linear-gradient(180deg, var(--color-background-primary), color-mix(in srgb, var(--color-background-primary) 84%, black 16%));
	}

	.presenter-scene__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--spacing-4);
	}

	.presenter-scene__title {
		margin: 0;
		font-size: var(--font-size-5);
	}

	.presenter-scene__subtitle {
		margin: var(--spacing-1) 0 0;
		color: var(--color-text-secondary);
	}

	.presenter-scene__controls {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-2);
	}

	.presenter-scene__control {
		padding: var(--spacing-2) var(--spacing-3);
		border: 1px solid var(--color-border-secondary);
		border-radius: var(--border-radius-md);
		background: color-mix(in srgb, var(--color-background-primary) 88%, white 12%);
		color: var(--color-text-primary);
		cursor: pointer;
	}

	.presenter-scene__viewport {
		position: relative;
		overflow: hidden;
		min-height: 34rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 72%, transparent 28%);
		border-radius: var(--border-radius-xl);
		background:
			radial-gradient(circle at center, color-mix(in srgb, var(--color-primary-500) 8%, transparent 92%), transparent 32%),
			color-mix(in srgb, var(--color-background-secondary) 88%, black 12%);
		cursor: grab;
		touch-action: none;
	}

	.presenter-scene__viewport--dragging {
		cursor: grabbing;
	}

	.presenter-scene__grid {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(to right, color-mix(in srgb, var(--color-border-primary) 42%, transparent 58%) 1px, transparent 1px),
			linear-gradient(to bottom, color-mix(in srgb, var(--color-border-primary) 42%, transparent 58%) 1px, transparent 1px);
		background-size: 3rem 3rem;
		opacity: 0.28;
	}

	.presenter-scene__links {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	.presenter-scene__inspector {
		display: grid;
		gap: var(--spacing-2);
		padding: var(--spacing-4);
		border-radius: var(--border-radius-lg);
		background: color-mix(in srgb, var(--color-background-primary) 92%, white 8%);
		border: 1px solid var(--color-border-primary);
	}

	.presenter-scene__badge {
		display: inline-flex;
		width: fit-content;
		padding: var(--spacing-1) var(--spacing-2);
		border-radius: 999px;
		background: color-mix(in srgb, var(--color-primary-500) 18%, transparent 82%);
		font-weight: 600;
	}

	.presenter-scene__inspector-line,
	.presenter-scene__description {
		color: var(--color-text-secondary);
	}
	
	@media (max-width: 768px) {
		.presenter-scene__header {
			flex-direction: column;
			align-items: stretch;
		}
	}
</style>


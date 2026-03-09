<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LiteGraphNodeProps } from '$stylist/design-system/contracts';
	import { IconButton, Icon } from '$stylist/components/atoms';

	type Viewport = {
		x: number;
		y: number;
		width: number;
		height: number;
	};

	type Props = {
		nodes?: readonly LiteGraphNodeProps[];
		zoom?: number;
		offset?: { x: number; y: number };
		width?: number;
		height?: number;
		miniMapZoom?: number;
		showZoomControls?: boolean;
		showViewport?: boolean;
		nodeColor?: string;
		activeNodeColor?: string;
		viewportColor?: string;
		backgroundColor?: string;
		gridColor?: string;
		onOffsetChange?: (offset: { x: number; y: number }) => void;
		onZoomChange?: (zoom: number) => void;
		onMapClick?: (position: { x: number; y: number }) => void;
		children?: Snippet;
		class?: string;
	};

	let {
		nodes = [],
		zoom = 1,
		offset = { x: 0, y: 0 },
		width = 200,
		height = 150,
		miniMapZoom = 0.1,
		showZoomControls = true,
		showViewport = true,
		nodeColor = '#3b82f6',
		activeNodeColor = '#60a5fa',
		viewportColor = 'rgba(59, 130, 246, 0.3)',
		backgroundColor = '#1e1e1e',
		gridColor = 'rgba(128, 128, 128, 0.2)',
		onOffsetChange,
		onZoomChange,
		onMapClick,
		class: className = '',
		children,
		...restProps
	}: Props = $props();

	// Вычисляем границы всех узлов
	const bounds = $derived({
		minX: nodes.length === 0 ? 0 : Math.min(...nodes.map((node) => node.x)),
		minY: nodes.length === 0 ? 0 : Math.min(...nodes.map((node) => node.y)),
		maxX: nodes.length === 0 ? 800 : Math.max(...nodes.map((node) => node.x + (node.width ?? 200))),
		maxY: nodes.length === 0 ? 600 : Math.max(...nodes.map((node) => node.y + (typeof node.height === 'number' ? node.height : 100)))
	});

	// Viewport на мини-карте
	const viewport = $derived<Viewport>({
		x: (-offset.x / miniMapZoom) * (width / 800),
		y: (-offset.y / miniMapZoom) * (height / 600),
		width: (800 / zoom) * (width / 800),
		height: (600 / zoom) * (height / 600)
	});

	function handleMapClick(event: MouseEvent) {
		if (!onOffsetChange) return;

		const rect = (event.target as SVGElement).getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		const canvasX = ((x - width / 2) / width) * (bounds.maxX - bounds.minX);
		const canvasY = ((y - height / 2) / height) * (bounds.maxY - bounds.minY);

		onOffsetChange({
			x: -canvasX * miniMapZoom,
			y: -canvasY * miniMapZoom
		});

		if (onMapClick) {
			onMapClick({ x: canvasX, y: canvasY });
		}
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			const mockMouseEvent = {
				...event,
				clientX: (event.target as SVGElement).getBoundingClientRect().left + (event.target as SVGElement).clientWidth / 2,
				clientY: (event.target as SVGElement).getBoundingClientRect().top + (event.target as SVGElement).clientHeight / 2
			} as unknown as MouseEvent;
			handleMapClick(mockMouseEvent);
		}
	}

	function handleZoomIn() {
		if (onZoomChange) {
			onZoomChange(Math.min(zoom + 0.2, 3));
		}
	}

	function handleZoomOut() {
		if (onZoomChange) {
			onZoomChange(Math.max(zoom - 0.2, 0.1));
		}
	}

	function handleZoomToFit() {
		if (!onZoomChange || !onOffsetChange) return;

		const contentWidth = bounds.maxX - bounds.minX;
		const contentHeight = bounds.maxY - bounds.minY;

		const scaleX = width / contentWidth;
		const scaleY = height / contentHeight;
		const newZoom = Math.min(scaleX, scaleY, 1);

		onZoomChange(newZoom);
		onOffsetChange({
			x: -bounds.minX - contentWidth / 2,
			y: -bounds.minY - contentHeight / 2
		});
	}

	function getNodePosition(node: LiteGraphNodeProps) {
		const nodeWidth = node.width ?? 200;
		const nodeHeight = typeof node.height === 'number' ? node.height : 100;

		return {
			x: ((node.x - bounds.minX) / (bounds.maxX - bounds.minX || 1)) * (width - 20) + 10,
			y: ((node.y - bounds.minY) / (bounds.maxY - bounds.minY || 1)) * (height - 20) + 10,
			width: (nodeWidth / (bounds.maxX - bounds.minX || 1)) * (width - 20),
			height: (nodeHeight / (bounds.maxY - bounds.minY || 1)) * (height - 20)
		};
	}
</script>

<div
	class={`minimap ${className ?? ''}`}
	style={`--minimap-width: ${width}px; --minimap-height: ${height}px;`}
	{...restProps}
>
	<!-- MiniMap Canvas -->
	<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_noninteractive_element_interactions a11y_no_noninteractive_tabindex -->
	<svg
		class="minimap__canvas"
		width={width}
		height={height}
		onclick={handleMapClick}
		onkeydown={handleKeyDown}
		role="button"
		aria-label="Mini map navigation"
		tabindex="0"
	>
		<!-- Background -->
		<rect
			width={width}
			height={height}
			fill={backgroundColor}
			rx={8}
		/>

		<!-- Grid -->
		<pattern
			id="minimap-grid"
			width={20 * miniMapZoom}
			height={20 * miniMapZoom}
			patternUnits="userSpaceOnUse"
		>
			<circle
				cx={1}
				cy={1}
				r={1}
				fill={gridColor}
			/>
		</pattern>
		<rect
			width={width}
			height={height}
			fill="url(#minimap-grid)"
		/>

		<!-- Nodes -->
		{#each nodes as node}
			{@const pos = getNodePosition(node)}
			<rect
				x={pos.x}
				y={pos.y}
				width={Math.max(pos.width, 8)}
				height={Math.max(pos.height, 6)}
				fill={node.selected ? activeNodeColor : nodeColor}
				rx={2}
				class="minimap__node"
				data-node-id={node.id}
			/>
		{/each}

		<!-- Viewport indicator -->
		{#if showViewport}
			<rect
				x={viewport.x}
				y={viewport.y}
				width={viewport.width}
				height={viewport.height}
				fill="none"
				stroke={viewportColor}
				stroke-width={2}
				rx={4}
				class="minimap__viewport"
			/>
		{/if}
	</svg>

	<!-- Zoom Controls -->
	{#if showZoomControls}
		<div class="minimap__controls">
			<IconButton
				variant="ghost"
				size="sm"
				aria-label="Zoom in"
				title="Zoom in"
				onclick={handleZoomIn}
			>
				<Icon name="zoom-in" size={14} />
			</IconButton>
			<IconButton
				variant="ghost"
				size="sm"
				aria-label="Zoom out"
				title="Zoom out"
				onclick={handleZoomOut}
			>
				<Icon name="zoom-out" size={14} />
			</IconButton>
			<IconButton
				variant="ghost"
				size="sm"
				aria-label="Zoom to fit"
				title="Zoom to fit"
				onclick={handleZoomToFit}
			>
				<Icon name="maximize" size={14} />
			</IconButton>
		</div>
	{/if}

	{#if children}
		{@render children?.()}
	{/if}
</div>

<style>
	:global(.minimap) {
		position: relative;
		display: inline-block;
	}

	:global(.minimap__canvas) {
		border: 1px solid #374151;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgb(0 0 0 / 0.3);
		cursor: pointer;
		transition: border-color 120ms ease;
	}

	:global(.minimap__canvas:hover) {
		border-color: #4b5563;
	}

	:global(.minimap__node) {
		transition: fill 120ms ease;
		cursor: pointer;
	}

	:global(.minimap__node:hover) {
		fill: #60a5fa;
		filter: brightness(1.2);
	}

	:global(.minimap__viewport) {
		cursor: move;
		transition: all 120ms ease;
		animation: minimap-viewport-pulse 2s ease-in-out infinite;
	}

	@keyframes minimap-viewport-pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.7; }
	}

	:global(.minimap__controls) {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		background: rgb(30 30 30 / 0.9);
		border-radius: 4px;
		padding: 0.25rem;
		backdrop-filter: blur(4px);
	}
</style>

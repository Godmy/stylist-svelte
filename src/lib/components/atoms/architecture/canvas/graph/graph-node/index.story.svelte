<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import GraphNode from './index.svelte';
	import GraphEdge from '../graph-edge/index.svelte';
	import type { GraphNodeSize } from '$stylist/design-system/contracts';
	import { amber, blue, slate, teal } from '$stylist/design-system/tokens';

	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';

	type Position = { x: number; y: number };
	type NodeKind = 'source' | 'gateway' | 'target';
	type DemoNode = {
		id: string;
		label: string;
		type: NodeKind;
		color: string;
		position: Position;
	};

	const NODE_SIZE_PX: Record<GraphNodeSize, number> = {
		sm: 24,
		md: 32,
		lg: 40
	};

	const GRID_SIZE = 20;
	const CANVAS_WIDTH = 620;
	const CANVAS_HEIGHT = 300;

	const controls: ControlConfig[] = [
		{
			name: 'mainLabel',
			type: 'text',
			defaultValue: 'Primary'
		},
		{
			name: 'mainColor',
			type: 'color',
			defaultValue: blue[500]
		},
		{
			name: 'mainType',
			type: 'select',
			options: ['source', 'gateway', 'target'],
			defaultValue: 'source'
		},
		{
			name: 'size',
			type: 'select',
			options: ['sm', 'md', 'lg'],
			defaultValue: 'md'
		},
		{
			name: 'snapToGrid',
			type: 'boolean',
			defaultValue: true
		},
		{
			name: 'showEdges',
			type: 'boolean',
			defaultValue: true
		},
		{
			name: 'directed',
			type: 'boolean',
			defaultValue: true
		}
	];

	let nodes = $state<DemoNode[]>([
		{ id: 'node-1', label: 'Primary', type: 'source', color: blue[500], position: { x: 80, y: 130 } },
		{ id: 'node-2', label: 'Gateway', type: 'gateway', color: amber[500], position: { x: 290, y: 70 } },
		{ id: 'node-3', label: 'Target', type: 'target', color: teal[500], position: { x: 490, y: 180 } }
	]);

	let selectedNodeId = $state('node-1');
	let draggingNodeId = $state<string | null>(null);
	let dragOffset = $state<Position>({ x: 0, y: 0 });

	const links = [
		{ id: 'n-edge-1', from: 'node-1', to: 'node-2' },
		{ id: 'n-edge-2', from: 'node-2', to: 'node-3' }
	] as const;

	function getNodeSize(size: GraphNodeSize): number {
		return NODE_SIZE_PX[size] ?? NODE_SIZE_PX.md;
	}

	function clamp(value: number, min: number, max: number): number {
		return Math.min(max, Math.max(min, value));
	}

	function snap(value: number): number {
		return Math.round(value / GRID_SIZE) * GRID_SIZE;
	}

	function findNode(nodeId: string): DemoNode | undefined {
		return nodes.find((node) => node.id === nodeId);
	}

	function resolveCanvasRect(target: EventTarget | null): DOMRect | null {
		if (!(target instanceof HTMLElement)) {
			return null;
		}

		const canvas = target.closest('[data-graph-canvas="node-story"]');
		if (!(canvas instanceof HTMLElement)) {
			return null;
		}

		return canvas.getBoundingClientRect();
	}

	function centerOf(node: DemoNode, size: GraphNodeSize): Position {
		const nodeSize = getNodeSize(size);
		const radius = nodeSize / 2;
		return {
			x: node.position.x + radius,
			y: node.position.y + radius
		};
	}

	function edgeStyle(from: DemoNode, to: DemoNode, size: GraphNodeSize): Record<string, string> {
		const fromCenter = centerOf(from, size);
		const toCenter = centerOf(to, size);
		const dx = toCenter.x - fromCenter.x;
		const dy = toCenter.y - fromCenter.y;
		const length = Math.sqrt(dx * dx + dy * dy);
		const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

		return {
			'--edge-left': `${fromCenter.x}px`,
			'--edge-top': `${fromCenter.y}px`,
			'--edge-length': `${length}px`,
			'--edge-angle': `${angle}deg`,
			'--edge-color': slate[500],
			'--edge-thickness': '2px',
			'--edge-label-display': 'none'
		};
	}

	function startDrag(event: PointerEvent, nodeId: string): void {
		const node = findNode(nodeId);
		if (!node) {
			return;
		}
		const canvasRect = resolveCanvasRect(event.currentTarget);
		if (!canvasRect) {
			return;
		}

		selectedNodeId = nodeId;
		draggingNodeId = nodeId;
		dragOffset = {
			x: event.clientX - canvasRect.left - node.position.x,
			y: event.clientY - canvasRect.top - node.position.y
		};
	}

	function dragNode(event: PointerEvent, snapToGrid: boolean, size: GraphNodeSize): void {
		if (!draggingNodeId) {
			return;
		}

		const canvas = event.currentTarget as HTMLElement;
		const rect = canvas.getBoundingClientRect();
		const nodeSize = getNodeSize(size);

		let nextX = event.clientX - rect.left - dragOffset.x;
		let nextY = event.clientY - rect.top - dragOffset.y;

		nextX = clamp(nextX, 0, CANVAS_WIDTH - nodeSize);
		nextY = clamp(nextY, 0, CANVAS_HEIGHT - nodeSize);

		if (snapToGrid) {
			nextX = clamp(snap(nextX), 0, CANVAS_WIDTH - nodeSize);
			nextY = clamp(snap(nextY), 0, CANVAS_HEIGHT - nodeSize);
		}

		nodes = nodes.map((node) =>
			node.id === draggingNodeId ? { ...node, position: { x: nextX, y: nextY } } : node
		);
	}

	function stopDrag(): void {
		draggingNodeId = null;
	}

</script>

<Story
	{controls}
	component={GraphNode}
	title="GraphNode Component"
	description="Interactive graph nodes with selection, drag-and-drop and keyboard movement."
>
	{#snippet children(values: any)}
		{@const nodeSize = (values.size as GraphNodeSize) ?? 'md'}
		<div class="rounded-lg border border-slate-300 bg-white p-4 shadow-sm">
			<div class="mb-3 flex flex-wrap gap-2 text-xs text-slate-600">
				<span class="rounded-full border border-slate-200 bg-slate-50 px-2 py-1">
					click to select, drag to move
				</span>
			</div>

			<div
				data-graph-canvas="node-story"
				class="relative overflow-hidden rounded border border-slate-300 bg-[radial-gradient(circle_at_1px_1px,#cbd5e1_1px,transparent_0)] [background-size:20px_20px]"
				style={`width:${CANVAS_WIDTH}px;height:${CANVAS_HEIGHT}px;`}
				onpointermove={(event) => dragNode(event, Boolean(values.snapToGrid), nodeSize)}
				onpointerup={stopDrag}
				onpointerleave={stopDrag}
			>
				{#if values.showEdges}
					{#each links as link (link.id)}
						{@const from = findNode(link.from)}
						{@const to = findNode(link.to)}
						{#if from && to}
							<GraphEdge
								fromNodeId={from.id}
								toNodeId={to.id}
								type="line"
								directed={Boolean(values.directed)}
								style={edgeStyle(from, to, nodeSize)}
							/>
						{/if}
					{/each}
				{/if}

				{#each nodes as node (node.id)}
					<GraphNode
						id={node.id}
						x={node.position.x}
						y={node.position.y}
						label={node.id === 'node-1' ? String(values.mainLabel ?? node.label) : node.label}
						type={node.id === 'node-1' ? (values.mainType as NodeKind) : node.type}
						size={nodeSize}
						color={node.id === 'node-1' ? String(values.mainColor ?? node.color) : node.color}
						selected={selectedNodeId === node.id}
						interactive={true}
						onclick={() => (selectedNodeId = node.id)}
						onpointerdown={(event) => startDrag(event, node.id)}
					/>
				{/each}
			</div>

			<div class="mt-3 text-xs text-slate-600">
				selected: <span class="font-semibold text-slate-800">{selectedNodeId}</span>
				{#if values.snapToGrid}
					<span class="ml-2 rounded bg-slate-100 px-2 py-0.5">snap: {GRID_SIZE}px</span>
				{/if}
			</div>
		</div>
	{/snippet}
</Story>

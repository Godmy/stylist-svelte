<script lang="ts">
	import { Story } from '$stylist/playground/component/molecule/story';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import GraphCanvas from './index.svelte';
	import SlotGraphNode from '../graph-node/index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'gridMode', type: 'select', defaultValue: 'dot', options: ['dot', 'number', 'letter', 'check', 'x'] },
		{ name: 'panMode', type: 'select', defaultValue: 'drag', options: ['drag', 'space', 'always'] },
		{ name: 'zoom', type: 'number', defaultValue: 1 },
		{ name: 'gridSize', type: 'number', defaultValue: 20 },
		{ name: 'snapToGrid', type: 'boolean', defaultValue: false },
		{ name: 'width', type: 'number', defaultValue: 720 },
		{ name: 'height', type: 'number', defaultValue: 320 }
	];
</script>

<Story
	{controls}
	component={GraphCanvas}
	title="Graph Canvas"
	category="Atoms/Architecture/Canvas"
	description="Viewport shell for graph content. Use it to inspect grid modes, pan behavior and zoom while keeping node placement readable."
	tags={['graph', 'canvas', 'grid']}
>
	{#snippet children(values: any)}
		<div style="display:grid; gap:1rem; background:#0f172a; padding:var(--spacing-5); border-radius:var(--border-radius-lg);">
			<div style="display:flex; flex-wrap:wrap; gap:0.5rem; color:#cbd5e1; font-size:0.78rem;">
				<span style="padding:0.35rem 0.6rem; border-radius:999px; background:rgba(15,23,42,0.88); border:1px solid rgba(148,163,184,0.18);">grid: {values.gridMode}</span>
				<span style="padding:0.35rem 0.6rem; border-radius:999px; background:rgba(15,23,42,0.88); border:1px solid rgba(148,163,184,0.18);">pan: {values.panMode}</span>
				<span style="padding:0.35rem 0.6rem; border-radius:999px; background:rgba(15,23,42,0.88); border:1px solid rgba(148,163,184,0.18);">zoom: {values.zoom}</span>
				<span style="padding:0.35rem 0.6rem; border-radius:999px; background:rgba(15,23,42,0.88); border:1px solid rgba(148,163,184,0.18);">grid size: {values.gridSize}</span>
			</div>
			<GraphCanvas
				gridMode={values.gridMode}
				panMode={values.panMode}
				zoom={values.zoom}
				gridSize={values.gridSize}
				snapToGrid={values.snapToGrid}
				width={values.width}
				height={values.height}
				backgroundColor="#1e1e1e"
				gridColor="rgba(128, 128, 128, 0.2)"
			>
				<div style="position: absolute; left: 100px; top: 100px;">
					<SlotGraphNode id="node1" x={0} y={0} label="IN" type="source" color="#0f766e" size="lg" />
				</div>
				<div style="position: absolute; left: 360px; top: 140px;">
					<SlotGraphNode id="node2" x={0} y={0} label="GW" type="gateway" color="#b45309" size="lg" selected={true} />
				</div>
				<div style="position: absolute; left: 240px; top: 220px;">
					<SlotGraphNode id="node3" x={0} y={0} label="OUT" type="target" color="#1d4ed8" size="lg" />
				</div>
			</GraphCanvas>
		</div>
	{/snippet}

	{#snippet variants()}
		<div style="display:grid; gap:var(--spacing-5); background:#0f172a; padding:var(--spacing-5); border-radius:var(--border-radius-lg);">
			<div style="display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:var(--spacing-5);">
				<div>
					<h4 style="color:#fff; margin-bottom:10px;">Dot</h4>
					<GraphCanvas gridMode="dot" width={300} height={180} />
				</div>
				<div>
					<h4 style="color:#fff; margin-bottom:10px;">Number</h4>
					<GraphCanvas gridMode="number" width={300} height={180} />
				</div>
				<div>
					<h4 style="color:#fff; margin-bottom:10px;">Letter</h4>
					<GraphCanvas gridMode="letter" width={300} height={180} />
				</div>
				<div>
					<h4 style="color:#fff; margin-bottom:10px;">Check</h4>
					<GraphCanvas gridMode="check" width={300} height={180} />
				</div>
			</div>

			<div>
				<h4 style="color:#fff; margin-bottom:10px;">Pan Mode Comparison</h4>
				<div style="display:grid; grid-template-columns:repeat(3, minmax(0, 1fr)); gap:var(--spacing-4);">
					<div>
						<h5 style="color:#cbd5e1; margin:0 0 8px; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">drag</h5>
						<GraphCanvas gridMode="dot" panMode="drag" width={220} height={140}>
							<div style="position:absolute; left:70px; top:44px;"><SlotGraphNode id="drag-node" x={0} y={0} label="D" type="source" color="#0f766e" size="md" /></div>
						</GraphCanvas>
					</div>
					<div>
						<h5 style="color:#cbd5e1; margin:0 0 8px; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">space</h5>
						<GraphCanvas gridMode="dot" panMode="space" width={220} height={140}>
							<div style="position:absolute; left:70px; top:44px;"><SlotGraphNode id="space-node" x={0} y={0} label="S" type="gateway" color="#b45309" size="md" /></div>
						</GraphCanvas>
					</div>
					<div>
						<h5 style="color:#cbd5e1; margin:0 0 8px; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">always</h5>
						<GraphCanvas gridMode="dot" panMode="always" width={220} height={140}>
							<div style="position:absolute; left:70px; top:44px;"><SlotGraphNode id="always-node" x={0} y={0} label="A" type="target" color="#1d4ed8" size="md" /></div>
						</GraphCanvas>
					</div>
				</div>
			</div>
		</div>
	{/snippet}
</Story>

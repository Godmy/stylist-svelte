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
		{ name: 'snapToGrid', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	{controls}
	component={GraphCanvas}
	title="Graph Canvas"
	category="Atoms/Architecture/Canvas"
	description="Интерактивный canvas с сеткой, масштабированием и примером узлов."
	tags={['graph', 'canvas', 'grid']}
>
	{#snippet children(values: any)}
		<div style="background: #0f0f0f; padding: var(--spacing-5); border-radius: var(--border-radius-lg);">
			<GraphCanvas
				gridMode={values.gridMode}
				panMode={values.panMode}
				zoom={values.zoom}
				gridSize={values.gridSize}
				snapToGrid={values.snapToGrid}
				width={720}
				height={320}
				backgroundColor="#1e1e1e"
				gridColor="rgba(128, 128, 128, 0.2)"
			>
				<div style="position: absolute; left: 100px; top: 100px;">
					<SlotGraphNode id="node1" x={0} y={0} label="Node 1" />
				</div>
				<div style="position: absolute; left: 360px; top: 140px;">
					<SlotGraphNode id="node2" x={0} y={0} label="Node 2" />
				</div>
				<div style="position: absolute; left: 240px; top: 220px;">
					<SlotGraphNode id="node3" x={0} y={0} label="Node 3" />
				</div>
			</GraphCanvas>
		</div>
	{/snippet}

	{#snippet variants()}
		<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--spacing-5); background: #0f0f0f; padding: var(--spacing-5); border-radius: var(--border-radius-lg);">
			<div>
				<h4 style="color: #fff; margin-bottom: 10px;">Dot</h4>
				<GraphCanvas gridMode="dot" width={300} height={180} />
			</div>
			<div>
				<h4 style="color: #fff; margin-bottom: 10px;">Number</h4>
				<GraphCanvas gridMode="number" width={300} height={180} />
			</div>
			<div>
				<h4 style="color: #fff; margin-bottom: 10px;">Letter</h4>
				<GraphCanvas gridMode="letter" width={300} height={180} />
			</div>
			<div>
				<h4 style="color: #fff; margin-bottom: 10px;">Check</h4>
				<GraphCanvas gridMode="check" width={300} height={180} />
			</div>
		</div>
	{/snippet}
</Story>



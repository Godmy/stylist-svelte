<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import type { SceneNode } from '$stylist/architecture/type/struct/scene-node';
	import PreziScene from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'showGrid', type: 'boolean', defaultValue: true },
		{ name: 'showMinimap', type: 'boolean', defaultValue: true },
		{ name: 'showInspector', type: 'boolean', defaultValue: true },
		{ name: 'panMode', type: 'select', defaultValue: 'drag', options: ['drag', 'space', 'always'] }
	];

	const nodes: SceneNode[] = [
		{
			id: 'intro',
			title: 'Intro',
			label: 'Problem',
			description: 'Context and framing',
			iconText: 'IN',
			position: { x: -220, y: -80 },
			depth: 0,
			accent: '#0ea5e9'
		},
		{
			id: 'system',
			title: 'System',
			label: 'Architecture',
			description: 'Main relationships',
			iconText: 'AR',
			position: { x: 40, y: -10 },
			depth: 1,
			accent: '#2563eb'
		},
		{
			id: 'stories',
			title: 'Stories',
			label: 'Coverage',
			description: 'Quality demos and states',
			iconText: 'ST',
			position: { x: 280, y: 120 },
			depth: 2,
			accent: '#10b981'
		}
	];

	let selectedNodeId = $state<string | null>('system');
</script>

<Story
	{controls}
	component={PreziScene}
	title="PreziScene"
	description="Zoomable scene with semantic depth, minimap, and inspector."
>
	{#snippet children(values: any)}
		<div class="rounded-3xl border border-slate-200 bg-slate-950 p-3">
			<PreziScene
				nodes={nodes}
				title="Story Coverage Map"
				subtitle="Pan, zoom, and inspect presentation nodes."
				showGrid={Boolean(values.showGrid)}
				showMinimap={Boolean(values.showMinimap)}
				showInspector={Boolean(values.showInspector)}
				panMode={values.panMode as 'drag' | 'space' | 'always'}
				initialCamera={{ x: 0, y: 0, zoom: 1 }}
				initialDepth={0}
				selectedNodeId={selectedNodeId}
				onNodeSelect={(node) => {
					selectedNodeId = node?.id ?? null;
				}}
				class="h-[34rem] rounded-2xl"
			/>
		</div>
	{/snippet}
</Story>

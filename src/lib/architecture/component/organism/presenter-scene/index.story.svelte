<script lang="ts">
	import type { SceneNode } from '$stylist/architecture/type/struct/scene-node/scene-node';
	import PresenterScene from './index.svelte';
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import { TOKEN_CONTROLLER_TYPE } from '$stylist/interaction/const/map/controller-type';

	const controls = [
		{
			name: 'title',
			type: TOKEN_CONTROLLER_TYPE.TEXT,
			defaultValue: 'Presenter Scene'
		},
		{
			name: 'depth',
			type: TOKEN_CONTROLLER_TYPE.RANGE,
			min: 0,
			max: 1000,
			step: 20,
			defaultValue: 500
		},
		{
			name: 'zoom',
			type: TOKEN_CONTROLLER_TYPE.RANGE,
			min: 0.4,
			max: 1.8,
			step: 0.1,
			defaultValue: 1
		}
	];

	const sceneNodes: SceneNode[] = [
		{
			id: 'scene-core',
			title: 'Scene Core',
			label: 'Scene Core',
			description: 'Root node for the presenter runtime scene.',
			position: { x: 640, y: 220 },
			depth: 540,
			accent: '#38bdf8',
			layer: 'layer30',
			children: [
				{ id: 'camera', title: 'Camera', position: { x: 0, y: 0 }, depth: 430, accent: '#f97316' },
				{
					id: 'semantic-zoom',
					title: 'Semantic Zoom',
					position: { x: 0, y: 0 },
					depth: 360,
					accent: '#22c55e'
				}
			]
		},
		{
			id: 'camera',
			title: 'Camera',
			label: 'Camera',
			description: 'Controls viewport position, pan and depth.',
			position: { x: 340, y: 420 },
			depth: 430,
			accent: '#f97316',
			layer: 'layer20'
		},
		{
			id: 'semantic-zoom',
			title: 'Semantic Zoom',
			label: 'Semantic Zoom',
			description: 'Transitions representation stages from dot to screen.',
			position: { x: 650, y: 530 },
			depth: 360,
			accent: '#22c55e',
			layer: 'overlay'
		},
		{
			id: 'node-shell',
			title: 'Presenter Node Shell',
			label: 'Node Shell',
			description: 'Stage-aware node wrapper with aligned DOM vocabulary.',
			position: { x: 940, y: 390 },
			depth: 250,
			accent: '#a855f7',
			layer: 'overlay'
		},
		{
			id: 'fullscreen',
			title: 'Fullscreen Detail',
			label: 'Fullscreen Detail',
			description: 'Maximum detail state for the selected node.',
			position: { x: 760, y: 720 },
			depth: 48,
			accent: '#eab308',
			layer: 'modal'
		}
	];
</script>

<Story
	{controls}
	title="PresenterScene"
	category="Organisms/Architecture/Canvas"
	description="Interactive presenter scene with camera pan, zoom and semantic zoom stages."
	tags={['presenter', 'scene', 'camera', 'semantic-zoom', 'canvas']}
>
	{#snippet children(values: any)}
		<PresenterScene
			title={values.title}
			nodes={sceneNodes}
			camera={{
				x: 0,
				y: 0,
				depth: values.depth,
				zoom: values.zoom,
				viewportWidth: 1280,
				viewportHeight: 720
			}}
		/>
	{/snippet}
</Story>

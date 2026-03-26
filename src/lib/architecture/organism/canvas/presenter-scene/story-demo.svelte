<script lang="ts">
	import PresenterScene from './index.svelte';
	import type { SceneNode } from '$stylist/architecture/type/attribute/scene-node';

	type Props = {
		title?: string;
		depth?: number;
		zoom?: number;
	};

	let { title = 'Presenter Scene', depth = 500, zoom = 1 }: Props = $props();

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
				{ id: 'semantic-zoom', title: 'Semantic Zoom', position: { x: 0, y: 0 }, depth: 360, accent: '#22c55e' }
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

<PresenterScene
	{title}
	nodes={sceneNodes}
	camera={{
		depth,
		zoom,
		viewportWidth: 1280,
		viewportHeight: 720
	}}
/>


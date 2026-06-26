<script lang="ts">
	import ZwickyScene from '$stylist/graph/component/organism/zwicky-scene/index.svelte';
	import type { GraphJsonInput } from '$stylist/graph/type/struct/graph-json-input';

	// Inline a small demo dataset; swap for the full JSON import in production.
	const demoData: GraphJsonInput = {
		dependencies: {
			'animation\\class\\manager\\motion': [
				'animation\\const\\object\\easing',
				'animation\\interface\\behavior\\animate',
				'animation\\type\\enum\\animation'
			],
			'animation\\component\\atom\\animated': [
				'animation\\function\\state\\animated',
				'animation\\interface\\recipe\\animated'
			],
			'graph\\class\\manager\\instanced-graph': [
				'graph\\const\\value\\zwicky-layout-scale',
				'graph\\function\\script\\parse-zwicky-graph',
				'graph\\function\\script\\layout-zwicky-nodes'
			],
			'graph\\function\\script\\parse-zwicky-graph': [
				'graph\\const\\record\\zwicky-domain-color',
				'graph\\type\\struct\\zwicky-node'
			],
			'graph\\function\\script\\layout-zwicky-nodes': [
				'graph\\const\\value\\zwicky-layout-scale',
				'graph\\type\\struct\\zwicky-node'
			],
			'graph\\component\\organism\\zwicky-scene': [
				'graph\\class\\manager\\instanced-graph',
				'graph\\function\\state\\zwicky-scene',
				'graph\\component\\molecule\\graph-legend',
				'graph\\type\\struct\\zwicky-scene-props'
			],
			'graph\\component\\molecule\\graph-legend': [
				'graph\\component\\atom\\graph-dot',
				'graph\\const\\record\\zwicky-domain-color'
			],
			'graph\\type\\struct\\zwicky-node': ['graph\\type\\alias\\zwicky-level'],
			'graph\\type\\struct\\zwicky-scene-props': ['graph\\type\\struct\\graph-json-input'],
			'calendar\\component\\atom\\mini-calendar': [
				'calendar\\function\\state\\mini-calendar',
				'calendar\\interface\\recipe\\mini-calendar'
			],
			'layout\\function\\script\\merge-class-names': [],
			'theme\\const\\record\\material-palette': [],
			'animation\\const\\object\\easing': [],
			'animation\\interface\\behavior\\animate': [],
			'animation\\type\\enum\\animation': [],
			'animation\\function\\state\\animated': ['animation\\interface\\recipe\\animated'],
			'animation\\interface\\recipe\\animated': ['animation\\interface\\behavior\\animate'],
			'graph\\type\\alias\\zwicky-level': [],
			'graph\\type\\struct\\graph-json-input': [],
			'graph\\const\\value\\zwicky-layout-scale': [],
			'graph\\const\\record\\zwicky-domain-color': [],
			'graph\\component\\atom\\graph-dot': [],
			'graph\\function\\state\\zwicky-scene': [
				'graph\\class\\manager\\instanced-graph',
				'graph\\function\\script\\parse-zwicky-graph',
				'graph\\function\\script\\layout-zwicky-nodes'
			],
			'calendar\\function\\state\\mini-calendar': [],
			'calendar\\interface\\recipe\\mini-calendar': []
		}
	};

	let selectedPath = $state('');

	function handleSelect(nodeId: string, path: string) {
		selectedPath = path;
	}
</script>

<div style="width:100%;height:100vh;display:flex;flex-direction:column;background:#050810">
	<ZwickyScene
		title="Morphological Box · Zwicky"
		data={demoData}
		onNodeSelect={handleSelect}
	/>
</div>

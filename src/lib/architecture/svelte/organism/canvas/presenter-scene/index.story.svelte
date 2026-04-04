<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import PresenterSceneStoryDemo from './story-demo.svelte';
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
</script>

<Story
	{controls}
	component={PresenterSceneStoryDemo}
	title="PresenterScene"
	category="Organisms/Architecture/Canvas"
	description="Interactive presenter scene with camera pan, zoom and semantic zoom stages."
	tags={['presenter', 'scene', 'camera', 'semantic-zoom', 'canvas']}
/>


<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import TurtlePhotoToMark from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'progress', type: 'range', defaultValue: 0.72, min: 0, max: 1, step: 0.05 },
		{ name: 'reducedMotion', type: 'boolean', defaultValue: false }
	];

	const frames = [
		'/landing/slider/scroll/logo-morph/02-turtle-01.png',
		'/landing/slider/scroll/logo-morph/02-turtle-02.png',
		'/landing/slider/scroll/logo-morph/02-turtle-03.png',
		'/landing/slider/scroll/logo-morph/02-turtle-04.png',
		'/landing/slider/scroll/logo-morph/02-turtle-05.png'
	];
</script>

<Story
	id="travel-commerce-molecules-turtle-photo-to-mark"
	title="Travel Commerce / TurtlePhotoToMark"
	component={TurtlePhotoToMark}
	category="Travel Commerce/Molecules"
	description="Photo turtle to vector mark morph layer."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_stage">
			<TurtlePhotoToMark
				progress={Number(values.progress)}
				{frames}
				reducedMotion={Boolean(values.reducedMotion)}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._stage {
		position: relative;
		height: min(70svh, 560px);
		min-height: 360px;
		overflow: hidden;
		background: linear-gradient(180deg, #d6eef0, #ffffff);
	}
</style>

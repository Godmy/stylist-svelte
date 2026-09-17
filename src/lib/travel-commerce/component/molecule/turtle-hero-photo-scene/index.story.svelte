<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import TurtleHeroPhotoScene from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'progress', type: 'range', defaultValue: 0.25, min: 0, max: 1, step: 0.05 },
		{ name: 'reducedMotion', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	id="travel-commerce-molecules-turtle-hero-photo-scene"
	title="Travel Commerce / TurtleHeroPhotoScene"
	component={TurtleHeroPhotoScene}
	category="Travel Commerce/Molecules"
	description="Layered hero photo scene used by the turtle morph sequence."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_stage">
			<TurtleHeroPhotoScene progress={Number(values.progress)} reducedMotion={Boolean(values.reducedMotion)} />
		</div>
	{/snippet}
</Story>

<style>
	._stage {
		position: relative;
		height: min(70svh, 560px);
		min-height: 360px;
		overflow: hidden;
		background: #d6eef0;
	}
</style>

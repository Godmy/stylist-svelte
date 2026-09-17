<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import TurtleHeroWordmark from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'progress', type: 'range', defaultValue: 0.95, min: 0, max: 1, step: 0.05 },
		{ name: 'reducedMotion', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	id="travel-commerce-molecules-turtle-hero-wordmark"
	title="Travel Commerce / TurtleHeroWordmark"
	component={TurtleHeroWordmark}
	category="Travel Commerce/Molecules"
	description="Animated LankaTur wordmark reveal for the turtle hero."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_stage">
			<TurtleHeroWordmark progress={Number(values.progress)} reducedMotion={Boolean(values.reducedMotion)} />
		</div>
	{/snippet}
</Story>

<style>
	._stage {
		position: relative;
		height: 360px;
		overflow: hidden;
		background: linear-gradient(180deg, #ffffff, #d6eef0);
	}
</style>

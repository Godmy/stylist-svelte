<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import ParallaxLayer from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'progress', type: 'range', defaultValue: 0.35, min: 0, max: 1, step: 0.05 },
		{ name: 'depth', type: 'range', defaultValue: 1, min: 0.25, max: 2, step: 0.25 }
	];
</script>

<Story
	id="travel-commerce-molecules-parallax-layer"
	title="Travel Commerce / ParallaxLayer"
	component={ParallaxLayer}
	category="Travel Commerce/Molecules"
	description="Absolute parallax layer driven by scroll progress and depth."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_stage">
			<ParallaxLayer progress={Number(values.progress)} depth={Number(values.depth)}>
				<div class="_island">Parallax content</div>
			</ParallaxLayer>
		</div>
	{/snippet}
</Story>

<style>
	._stage {
		position: relative;
		height: 260px;
		overflow: hidden;
		background: linear-gradient(180deg, #cdeef0, #f7f3ec);
	}
	._island {
		position: absolute;
		left: 50%;
		top: 56%;
		width: min(420px, 72%);
		padding: 32px;
		transform: translate(-50%, -50%);
		border-radius: 8px;
		background: rgba(255, 255, 255, 0.82);
		text-align: center;
		font-weight: 700;
		color: #17231f;
		box-shadow: 0 24px 70px rgba(20, 36, 31, 0.18);
	}
</style>

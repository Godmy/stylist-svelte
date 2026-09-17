<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import TurtleHeroMorph from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'progress', type: 'range', defaultValue: 0, min: 0, max: 1, step: 0.01 }
	];
</script>

<Story
	{controls}
	component={TurtleHeroMorph}
	title="TurtleHeroMorph"
	category="Organisms/Travel Commerce"
	description="Cinematic scroll hero: a live turtle in a photoreal Sri Lanka scene morphs into the ЛанкаТур graphic mark as the background dissolves to white, revealing the wordmark and the booking form. Drag the progress control to scrub the sequence, or drop the component on a real page and scroll — it pins itself for 320vh."
	tags={['hero', 'scroll', 'morph', 'webgl']}
>
	{#snippet children(values: any)}
		<div class="preview">
			<TurtleHeroMorph progress={Number(values.progress) || 0} />
		</div>
	{/snippet}
</Story>

<style>
	.preview {
		width: min(100%, 60rem);
		height: 32rem;
		overflow: hidden;
		border: 1px solid var(--color-border-primary, #d1d5db);
		border-radius: 0.5rem;
	}

	.preview :global(.tc-turtle-hero) {
		height: 100% !important;
	}

	.preview :global(.tc-turtle-hero__stage) {
		position: relative !important;
		height: 100% !important;
	}
</style>

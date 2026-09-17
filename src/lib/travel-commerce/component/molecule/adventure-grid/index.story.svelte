<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import AdventureGrid from './index.svelte';

	const controls: SlotStory[] = [];

	let selected = $state<string[]>(['mirissa-whales']);
</script>

<Story
	id="travel-commerce-molecules-adventure-grid"
	title="Travel Commerce / AdventureGrid"
	component={AdventureGrid}
	category="Travel Commerce/Molecules"
	description="Множественный выбор приключений чипами (ExperienceFilterChip) со своей векторной иконкой на каждом — данные по умолчанию SAMPLE_EXCURSIONS (демо, не реальный D1-каталог)."
	{controls}
>
	{#snippet children()}
		<div class="_surface">
			<AdventureGrid {selected} onChange={(next) => (selected = next)} />
			<p class="_selected">Выбрано: {selected.length ? selected.join(', ') : 'ничего'}</p>
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		display: grid;
		gap: 14px;
		width: 480px;
		max-width: 100%;
		padding: 24px;
		background: #f7f3ec;
	}
	._selected {
		margin: 0;
		font-size: 0.85rem;
		color: rgba(23, 35, 31, 0.62);
	}
</style>

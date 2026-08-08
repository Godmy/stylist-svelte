<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import NameHeroMediaItems from './index.svelte';

	const controls: SlotStory[] = [];
	const items: [string, string][] = [
		['3 rounds', 'enough structure to reduce noise and reveal stable consensus'],
		['P10-P90', 'decision ranges instead of one decorative precise number'],
		['Anonymous', 'experts can name risks without career pressure']
	];
</script>

<Story
	{controls}
	component={NameHeroMediaItems}
	title="NameHeroMediaItems"
	category="Molecules/Landing"
	description="Responsive row of named hero support items."
>
	{#snippet children()}
		<div class="preview">
			<NameHeroMediaItems {items} ariaLabel="Core method properties" />
		</div>
	{/snippet}
</Story>

<style>
	.preview {
		--name-hero-media-items-border: var(--color-border-primary);
		--name-hero-media-items-background: var(--color-background-secondary);
		--name-hero-media-items-name: var(--color-text-primary);
		--name-hero-media-items-text: var(--color-text-secondary);
		container-type: inline-size;
		padding: 1rem;
	}
</style>

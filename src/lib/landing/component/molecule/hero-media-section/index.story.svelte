<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import HeroMediaSection from './index.svelte';

	const controls: SlotStory[] = [];
</script>

<Story
	{controls}
	component={HeroMediaSection}
	title="HeroMediaSection"
	category="Molecules/Landing"
	description="Responsive hero section with text first and media second on mobile, text left and media right on desktop."
>
	{#snippet children()}
		<div class="preview">
			<HeroMediaSection
				title="Expert consensus for decisions where mistakes are expensive"
				lead="WeOracle gathers independent estimates from domain experts, exposes disagreement, and turns uncertainty into ranges, priorities, and a committee-ready decision."
				imageSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23111a20'/%3E%3Ctext x='50%25' y='50%25' fill='%23a8d7b3' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3EHero media%3C/text%3E%3C/svg%3E"
				imageAlt="Hero media placeholder"
			/>
		</div>
	{/snippet}
</Story>

<style>
	.preview {
		--hero-media-section-heading: var(--color-text-primary);
		--hero-media-section-lead: var(--color-text-secondary);
		--hero-media-section-border: var(--color-border-primary);
		--hero-media-section-media: var(--color-background-secondary);
		--hero-media-section-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.16);
		container-type: inline-size;
		padding: 1rem;
	}
</style>

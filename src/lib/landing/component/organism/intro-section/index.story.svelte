<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import IntroSection from './index.svelte';

	const controls: SlotStory[] = [];
	const imageSrc =
		"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23111a20'/%3E%3Ctext x='50%25' y='50%25' fill='%23a8d7b3' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3EIntro%3C/text%3E%3C/svg%3E";
</script>

<Story
	{controls}
	component={IntroSection}
	title="IntroSection"
	category="Organisms/Landing"
	description="Introductory landing section with media and supporting body copy."
	tags={['landing', 'intro', 'media']}
>
	{#snippet children()}
		<div class="preview">
			<IntroSection
				ariaLabel="Introduction"
				eyebrow="Why it matters"
				title="The cost of certainty theatre is paid later"
				body="This block gives the reader context before the workflow, using one focused paragraph below the media pair."
				{imageSrc}
				imageAlt="Intro placeholder"
			/>
		</div>
	{/snippet}
</Story>

<style>
	.preview {
		--intro-section-border: var(--color-border-primary, #d1d5db);
		--intro-section-accent: var(--color-primary-600, #2563eb);
		--intro-section-heading: var(--color-text-primary, #111827);
		--intro-section-text: var(--color-text-secondary, #4b5563);
		--intro-section-media-bg: var(--color-background-secondary, #f9fafb);
		container-type: inline-size;
		padding: 1rem;
	}
</style>

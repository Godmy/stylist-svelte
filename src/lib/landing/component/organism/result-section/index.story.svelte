<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import ResultSection from './index.svelte';

	const controls: SlotStory[] = [];
	const imageSrc =
		"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23111a20'/%3E%3Ctext x='50%25' y='50%25' fill='%23a8d7b3' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3EResult%3C/text%3E%3C/svg%3E";
</script>

<Story
	{controls}
	component={ResultSection}
	title="ResultSection"
	category="Organisms/Landing"
	description="Landing result section with media, copy, and CTA."
	tags={['landing', 'result', 'cta']}
>
	{#snippet children()}
		<div class="preview">
			<ResultSection
				ariaLabel="Result"
				eyebrow="Output"
				title="A decision packet people can inspect"
				body="The final artifact shows ranges, disagreement, assumptions, and the next review trigger in one place."
				cta="Open workspace"
				ctaHref="/workspace"
				{imageSrc}
				imageAlt="Result placeholder"
			/>
		</div>
	{/snippet}
</Story>

<style>
	.preview {
		--result-section-border: var(--color-border-primary, #d1d5db);
		--result-section-media-bg: var(--color-background-secondary, #f9fafb);
		--result-section-text: var(--color-text-secondary, #4b5563);
		--result-section-cta-bg: var(--color-primary-600, #2563eb);
		--result-section-cta-text: #ffffff;
		--section-heading-eyebrow-color: var(--color-primary-600, #2563eb);
		--section-heading-title-color: var(--color-text-primary, #111827);
		container-type: inline-size;
		padding: 1rem;
	}
</style>

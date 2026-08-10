<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import CasesSection from './index.svelte';

	const controls: SlotStory[] = [];
	const image =
		"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23111a20'/%3E%3Ctext x='50%25' y='50%25' fill='%23a8d7b3' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3ECase media%3C/text%3E%3C/svg%3E";
	const items = [
		{
			kicker: 'Capital allocation',
			title: 'When a single forecast is too fragile',
			body: 'Compare independent ranges before committing budget to one scenario.',
			result: 'Result: clearer downside and trigger points.',
			image,
			alt: 'Abstract case preview'
		},
		{
			kicker: 'Policy',
			title: 'When expert disagreement matters',
			body: 'Make uncertainty visible instead of smoothing it into a false average.',
			result: 'Result: decisions that preserve dissent.',
			image,
			alt: 'Abstract policy preview'
		},
		{
			kicker: 'Research',
			title: 'When evidence changes quickly',
			body: 'Track assumptions and update the decision range as new signals arrive.',
			result: 'Result: repeatable review cadence.',
			image,
			alt: 'Abstract research preview'
		}
	];
</script>

<Story
	{controls}
	component={CasesSection}
	title="CasesSection"
	category="Organisms/Landing"
	description="Landing section for case cards with images, body copy, and outcomes."
	tags={['landing', 'cases', 'cards']}
>
	{#snippet children()}
		<div class="preview">
			<CasesSection
				ariaLabel="Use cases"
				eyebrow="Use cases"
				title="Where structured expert judgment helps"
				{items}
			/>
		</div>
	{/snippet}
</Story>

<style>
	.preview {
		--cases-section-border: var(--color-border-primary, #d1d5db);
		--cases-section-panel-bg: var(--color-background-primary, #ffffff);
		--cases-section-accent: var(--color-primary-600, #2563eb);
		--cases-section-heading: var(--color-text-primary, #111827);
		--cases-section-text: var(--color-text-secondary, #4b5563);
		--cases-section-result: var(--color-text-primary, #111827);
		container-type: inline-size;
		padding: 1rem;
	}
</style>

<script lang="ts">
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import Blockquote from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'quote',
			label: 'Quote',
			description: 'Quoted text content.',
			type: 'text',
			defaultValue: 'Design is the silent ambassador of your brand.'
		},
		{
			name: 'sourceLabel',
			label: 'Source Label',
			description: 'Visible attribution footer text.',
			type: 'text',
			defaultValue: 'Paul Rand'
		},
		{
			name: 'citeUrl',
			label: 'Cite URL',
			description: 'Optional semantic cite URL.',
			type: 'text',
			defaultValue: 'https://example.com/paul-rand-quote'
		},
		{
			name: 'footerPrefix',
			label: 'Footer Prefix',
			description: 'Prefix before the source label.',
			type: 'text',
			defaultValue: 'Source: '
		},
		{
			name: 'withBorder',
			label: 'Border',
			description: 'Accent quote border.',
			type: 'boolean',
			defaultValue: true
		},
		{
			name: 'withBackground',
			label: 'Background',
			description: 'Surface treatment for emphasized quotes.',
			type: 'boolean',
			defaultValue: true
		}
	];

	const curatedQuotes = [
		{
			quote: 'Simplicity is about subtracting the obvious and adding the meaningful.',
			sourceLabel: 'John Maeda',
			border: true,
			background: true
		},
		{
			quote: 'Details make perfection, and perfection is not a detail.',
			sourceLabel: 'Leonardo da Vinci',
			border: true,
			background: false
		},
		{
			quote: 'Experience is the product.',
			sourceLabel: 'Brian Chesky',
			border: false,
			background: true
		}
	];
</script>

<Story
	{controls}
	component={Blockquote}
	title="Blockquote"
	category="Atoms/Typography"
	description="Quoted content with optional cite URL, footer prefix, source label, border, and surface treatment."
	tags={['information', 'typography', 'blockquote', 'content']}
>
	{#snippet children(values: any)}
		<section class="_c1">
			<div class="_c2">
				<p class="_c3 tracking-[0.24em]">Editorial Preview</p>
				<h3 class="_c4">Quoted content block</h3>
				<div class="_c5">
					<Blockquote
						sourceLabel={values.sourceLabel as string}
						citeUrl={values.citeUrl as string}
						footerPrefix={values.footerPrefix as string}
						withBorder={values.withBorder as boolean}
						withBackground={values.withBackground as boolean}
						class="_c6"
					>
						{values.quote as string}
					</Blockquote>
				</div>

				<div class="_c7">
					sourceLabel: {values.sourceLabel}
					<br />
					citeUrl: {values.citeUrl}
				</div>
			</div>

			<div class="_c8">
				<div class="_c9">
					<h3 class="_c10">Specimen Gallery</h3>
					<div class="_c11">
						{#each curatedQuotes as example}
							<div class="_c12">
								<Blockquote
									sourceLabel={example.sourceLabel}
									footerPrefix="By "
									withBorder={example.border}
									withBackground={example.background}
									class="_c13"
								>
									{example.quote}
								</Blockquote>
							</div>
						{/each}
					</div>
				</div>

				<div class="_c14">
					<h3 class="_c10">Usage Note</h3>
					<p class="_c15">
						Use `Blockquote` when quoted content should remain a semantic block, not just italicized
						text with a decorative border.
					</p>
				</div>
			</div>
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		width: 100%;
		gap: 2rem;
	}
	@media (min-width: 1280px) {
		._c1 {
			grid-template-columns: minmax(0, 1.08fr) minmax(20rem, 0.92fr);
		}
	}
	._c10 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c11 {
		margin-top: 1rem;
		display: grid;
		gap: 1rem;
		border-radius: 1.5rem;
		background-color: var(--color-background-primary);
		padding: 1.25rem;
	}
	._c12 {
		border-radius: 0.75rem;
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}
	._c13 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-primary);
	}
	._c14 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c15 {
		margin-top: 0.75rem;
		color: var(--color-text-secondary);
	}
	._c2 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.75rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c3 {
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 600;
		color: var(--color-text-tertiary);
		text-transform: uppercase;
	}
	._c4 {
		margin-top: 0.5rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c5 {
		margin-top: 1.5rem;
		border-radius: 1.5rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.25rem;
	}
	._c6 {
		line-height: 1.625;
		color: var(--color-text-primary);
	}
	._c7 {
		margin-top: 1.5rem;
		border-radius: 1.5rem;
		background-color: var(--color-background-secondary);
		padding: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c8 {
		display: grid;
		gap: 1.5rem;
	}
	._c9 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
</style>

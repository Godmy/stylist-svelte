<script lang="ts">
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import Blockquote from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
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
		<section class="grid w-full gap-8 xl:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)]">
			<div
				class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-7 shadow-sm"
			>
				<p class="text-xs font-semibold tracking-[0.24em] text-[--color-text-tertiary] uppercase">
					Editorial Preview
				</p>
				<h3 class="mt-2 text-xl font-semibold text-[--color-text-primary]">Quoted content block</h3>
				<div
					class="mt-6 rounded-[1.5rem] border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-5"
				>
					<Blockquote
						sourceLabel={values.sourceLabel as string}
						citeUrl={values.citeUrl as string}
						footerPrefix={values.footerPrefix as string}
						withBorder={values.withBorder as boolean}
						withBackground={values.withBackground as boolean}
						class="leading-relaxed text-[var(--color-text-primary)]"
					>
						{values.quote as string}
					</Blockquote>
				</div>

				<div
					class="mt-6 rounded-[1.5rem] bg-[--color-background-secondary] p-4 text-sm text-[--color-text-secondary]"
				>
					sourceLabel: {values.sourceLabel}
					<br />
					citeUrl: {values.citeUrl}
				</div>
			</div>

			<div class="grid gap-6">
				<div
					class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm"
				>
					<h3 class="text-base font-semibold text-[--color-text-primary]">Specimen Gallery</h3>
					<div class="mt-4 grid gap-4 rounded-[1.5rem] bg-[--color-background-primary] p-5">
						{#each curatedQuotes as example}
							<div class="rounded-xl bg-[--color-background-secondary] p-4">
								<Blockquote
									sourceLabel={example.sourceLabel}
									footerPrefix="By "
									withBorder={example.border}
									withBackground={example.background}
									class="text-sm text-[var(--color-text-primary)]"
								>
									{example.quote}
								</Blockquote>
							</div>
						{/each}
					</div>
				</div>

				<div
					class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm"
				>
					<h3 class="text-base font-semibold text-[--color-text-primary]">Usage Note</h3>
					<p class="mt-3 text-[--color-text-secondary]">
						Use `Blockquote` when quoted content should remain a semantic block, not just italicized
						text with a decorative border.
					</p>
				</div>
			</div>
		</section>
	{/snippet}
</Story>

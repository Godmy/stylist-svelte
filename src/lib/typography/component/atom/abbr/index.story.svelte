<script lang="ts">
	import Abbr from './index.svelte';
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'label',
			label: 'Abbreviation',
			description: 'Visible short form.',
			type: 'text',
			defaultValue: 'API'
		},
		{
			name: 'title',
			label: 'Expansion',
			description: 'Full term exposed via the title attribute.',
			type: 'text',
			defaultValue: 'Application Programming Interface'
		},
		{
			name: 'emphasize',
			label: 'Emphasize',
			description: 'Applies accent emphasis in the live preview.',
			type: 'boolean',
			defaultValue: false
		}
	];

	const glossary = [
		{ label: 'CI/CD', title: 'Continuous Integration & Continuous Delivery' },
		{ label: 'DX', title: 'Developer Experience' },
		{ label: 'A11y', title: 'Accessibility' }
	];
</script>

<Story
	{controls}
	component={Abbr}
	title="Abbr"
	category="Atoms/Typography"
	description="Accessible abbreviation with dotted underline hinting at hover/click tooltips."
	tags={['abbreviation', 'typography', 'accessibility']}
>
	{#snippet children(values: any)}
		<section class="grid w-full gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
			<div
				class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-7 shadow-sm"
			>
				<p class="text-xs font-semibold tracking-[0.24em] text-[--color-text-tertiary] uppercase">
					Editorial Preview
				</p>
				<h3 class="mt-2 text-xl font-semibold text-[--color-text-primary]">Abbreviation in copy</h3>
				<div
					class="mt-6 rounded-[1.5rem] border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-5"
				>
					<p class="text-base leading-8 text-[--color-text-primary]">
						Build brilliant experiences by connecting your
						<Abbr
							title={values.title}
							class={values.emphasize ? 'font-semibold text-[var(--color-primary-600)]' : ''}
						>
							{values.label}
						</Abbr>
						with product storytelling. Hover or focus the abbreviation to reveal the expansion.
					</p>
				</div>

				<div
					class="mt-6 rounded-[1.5rem] bg-[--color-background-secondary] p-4 text-sm text-[--color-text-secondary]"
				>
					Visible token: <strong class="text-[--color-text-primary]">{values.label}</strong>
					<br />
					Expansion: {values.title}
				</div>
			</div>

			<div class="grid gap-6">
				<div
					class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm"
				>
					<h3 class="text-base font-semibold text-[--color-text-primary]">Glossary Shelf</h3>
					<div
						class="mt-4 flex flex-wrap gap-3 rounded-[1.5rem] bg-[--color-background-primary] p-5"
					>
						{#each glossary as term}
							<Abbr
								title={term.title}
								class="rounded-full bg-[var(--color-background-secondary)] px-3 py-2 text-sm font-medium"
							>
								{term.label}
							</Abbr>
						{/each}
					</div>
				</div>

				<div
					class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm"
				>
					<h3 class="text-base font-semibold text-[--color-text-primary]">Usage Note</h3>
					<p class="mt-3 text-[--color-text-secondary]">
						Keep `Abbr` for real abbreviations and acronyms with a meaningful full form. It works
						best as a micro-semantic token inside otherwise plain copy.
					</p>
				</div>
			</div>
		</section>
	{/snippet}
</Story>

<script lang="ts">
	import Abbr from './index.svelte';
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	const controls: SlotStory[] = [
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
		<section class="_c1">
			<div class="_c2">
				<p class="_c3 tracking-[0.24em]">Editorial Preview</p>
				<h3 class="_c4">Abbreviation in copy</h3>
				<div class="_c5">
					<p class="_c6">
						Build brilliant experiences by connecting your
						<Abbr title={values.title} class={values.emphasize ? 'abbr-story--emphasize' : ''}>
							{values.label}
						</Abbr>
						with product storytelling. Hover or focus the abbreviation to reveal the expansion.
					</p>
				</div>

				<div class="_c7">
					Visible token: <strong class="_c8">{values.label}</strong>
					<br />
					Expansion: {values.title}
				</div>
			</div>

			<div class="_c9">
				<div class="_c10">
					<h3 class="_c11">Glossary Shelf</h3>
					<div class="_c12">
						{#each glossary as term}
							<Abbr title={term.title} class="_c13">
								{term.label}
							</Abbr>
						{/each}
					</div>
				</div>

				<div class="_c14">
					<h3 class="_c11">Usage Note</h3>
					<p class="_c15">
						Keep `Abbr` for real abbreviations and acronyms with a meaningful full form. It works
						best as a micro-semantic token inside otherwise plain copy.
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
			grid-template-columns: minmax(0, 1.05fr) minmax(20rem, 0.95fr);
		}
	}
	._c10 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c11 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c12 {
		margin-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		border-radius: 1.5rem;
		background-color: var(--color-background-primary);
		padding: 1.25rem;
	}
	._c13 {
		border-radius: 9999px;
		background-color: var(--color-background-secondary);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
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
		font-size: 1rem;
		line-height: 2rem;
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
		color: var(--color-text-primary);
	}
	._c9 {
		display: grid;
		gap: 1.5rem;
	}

	.abbr-story--emphasize {
		font-weight: 600;
		color: var(--color-primary-600);
	}
</style>

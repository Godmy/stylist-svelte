<script lang="ts">
	import Abbr from './index.svelte';
	import Story from '$stylist/interaction/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'API' },
		{ name: 'title', type: 'text', defaultValue: 'Application Programming Interface' },
		{ name: 'emphasize', type: 'boolean', defaultValue: false }
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
	category="Atoms/Information/Typography/Inline"
	description="Accessible abbreviation with dotted underline hinting at hover/click tooltips."
	tags={['abbreviation', 'typography', 'accessibility']}
>
	{#snippet children(values: any)}
		<div class="space-y-6">
			<div
				class="rounded-2xl border border-[var(--color-border-primary)]/80 bg-[var(--color-background-primary)]/80 p-5 shadow-sm dark:border-[var(--color-border-primary)] dark:bg-[var(--color-neutral-900)]/40"
			>
				<p class="text-base leading-relaxed text-[var(--color-text-primary)] dark:text-[var(--color-neutral-200)]">
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

			<div class="rounded-2xl border border-dashed border-[var(--color-border-primary)]/80 p-4 dark:border-[var(--color-border-primary)]">
				<p class="mb-3 text-sm font-semibold text-[var(--color-text-secondary)] dark:text-[var(--color-text-tertiary)]">Glossary</p>
				<div class="flex flex-wrap gap-4 text-sm text-[var(--color-text-primary)] dark:text-[var(--color-neutral-200)]">
					{#each glossary as term}
						<Abbr title={term.title} class="rounded-full bg-[var(--color-background-secondary)] px-2 py-1 dark:bg-[var(--color-neutral-800)]">
							{term.label}
						</Abbr>
					{/each}
				</div>
			</div>
		</div>
	{/snippet}
</Story>











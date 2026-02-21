<script lang="ts">
	import Abbr from './index.svelte';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';

	const controls: ControlConfig[] = [
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
				class="rounded-2xl border border-gray-200/80 bg-white/80 p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/40"
			>
				<p class="text-base leading-relaxed text-gray-700 dark:text-gray-200">
					Build brilliant experiences by connecting your
					<Abbr
						title={values.title}
						class={values.emphasize ? 'font-semibold text-indigo-600' : ''}
					>
						{values.label}
					</Abbr>
					with product storytelling. Hover or focus the abbreviation to reveal the expansion.
				</p>
			</div>

			<div class="rounded-2xl border border-dashed border-gray-200/80 p-4 dark:border-gray-700">
				<p class="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-300">Glossary</p>
				<div class="flex flex-wrap gap-4 text-sm text-gray-700 dark:text-gray-200">
					{#each glossary as term}
						<Abbr title={term.title} class="rounded-full bg-gray-100 px-2 py-1 dark:bg-gray-800">
							{term.label}
						</Abbr>
					{/each}
				</div>
			</div>
		</div>
	{/snippet}
</Story>






<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/defaults/interaction/controls';
	import DefinitionTerm from './index.svelte';
	import { DefinitionDescription } from '../../../typography/inline/definition-description';

	const controls: ControlConfig[] = [
		{ name: 'term', type: 'text', defaultValue: 'North Star Metric' },
		{
			name: 'description',
			type: 'text',
			defaultValue: 'Singular KPI that captures the core value delivered to your best customers.'
		},
		{ name: 'highlight', type: 'boolean', defaultValue: true }
	];

	const definitions = [
		{
			term: 'Activation rate',
			description: 'Percentage of new users that reach an aha-moment within the first session.'
		},
		{
			term: 'Time to value',
			description: 'Duration between signup and the first realized outcome.'
		},
		{
			term: 'Feature adoption',
			description: 'Share of active accounts that use a specific feature in the last 30 days.'
		}
	];
</script>

<Story
	{controls}
	component={DefinitionTerm}
	title="DefinitionTerm"
	category="Atoms/Information/Typography/Inline"
	description="Bold heading for definition lists, typically paired with DefinitionDescription."
	tags={['definition', 'term', 'typography']}
>
	{#snippet children(values: any)}
		<div class="space-y-6">
			<dl
				class="rounded-2xl border border-[var(--color-border-primary)]/80 bg-[var(--color-background-primary)]/80 p-5 shadow-sm dark:border-[var(--color-border-primary)] dark:bg-[var(--color-neutral-900)]/40"
			>
				<DefinitionTerm class={values.highlight ? 'text-[var(--color-primary-600)]' : ''}>
					{values.term}
				</DefinitionTerm>
				<DefinitionDescription class="text-sm leading-relaxed">
					{values.description}
				</DefinitionDescription>
			</dl>

			<dl
				class="space-y-4 rounded-2xl border border-dashed border-[var(--color-border-primary)]/80 p-5 text-sm dark:border-[var(--color-border-primary)]"
			>
				{#each definitions as item}
					<div class="space-y-1">
						<DefinitionTerm>{item.term}</DefinitionTerm>
						<DefinitionDescription>{item.description}</DefinitionDescription>
					</div>
				{/each}
			</dl>
		</div>
	{/snippet}
</Story>











<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import DefinitionDescription from './index.svelte';
	import { DefinitionTerm } from '../../../typography/inline/definition-term';
	import { CONTROL_TYPES } from '$stylist/design-system/tokens/controls';

	const controls = [
		{
			name: 'description',
			type: CONTROL_TYPES.TEXT,
			defaultValue: 'Clarifies context with secondary text styling and generous spacing.'
		},
		{ name: 'muted', type: CONTROL_TYPES.BOOLEAN, defaultValue: false }
	];

	const workflows = [
		{
			term: 'Design review',
			description: 'Async Figma review with Loom walk-through, tracked in Linear.'
		},
		{
			term: 'Release cadence',
			description: 'Weekly release train every Thursday with automated changelog.'
		},
		{
			term: 'Support rotation',
			description: 'Dedicated engineer on-call for customer escalations.'
		}
	];
</script>

<Story
	{controls}
	component={DefinitionDescription}
	title="DefinitionDescription"
	category="Atoms/Information/Typography/Inline"
	description="Body copy for definition lists that pairs with DefinitionTerm."
	tags={['definition', 'description', 'typography']}
>
	{#snippet children(values: any)}
		<div class="space-y-6">
			<dl
				class="rounded-2xl border border-gray-200/70 bg-white/80 p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/40"
			>
				<DefinitionTerm>Documentation snippet</DefinitionTerm>
				<DefinitionDescription class={values.muted ? 'text-gray-400' : 'text-gray-700'}>
					{values.description}
				</DefinitionDescription>
			</dl>

			<dl
				class="space-y-4 rounded-2xl border border-dashed border-gray-200/60 p-5 dark:border-gray-700"
			>
				{#each workflows as flow}
					<div class="space-y-1">
						<DefinitionTerm>{flow.term}</DefinitionTerm>
						<DefinitionDescription>{flow.description}</DefinitionDescription>
					</div>
				{/each}
			</dl>
		</div>
	{/snippet}
</Story>


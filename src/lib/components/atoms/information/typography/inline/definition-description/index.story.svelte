<script lang="ts">
	import DefinitionDescription from './index.svelte';
	import { DefinitionTerm } from '../../../typography/inline/definition-term';
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';

	type DefinitionDescriptionStoryProps = {
		description: string;
		muted: boolean;
	};

	const controls: ControlConfig[] = [
		{
			name: 'description',
			type: 'text',
			defaultValue: 'Clarifies context with secondary text styling and generous spacing.'
		},
		{ name: 'muted', type: 'boolean', defaultValue: false }
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
	id="atoms-definition-description"
	title="DefinitionDescription"
	component={DefinitionDescription}
	category="Atoms"
	description="Body copy for definition lists that pairs with DefinitionTerm."
	tags={['typography', 'description']}
	{controls}
>
	{#snippet children(props: any)}
		<div class="space-y-6">
			<dl
				class="rounded-2xl border border-gray-200/70 bg-white/80 p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/40"
			>
				<DefinitionTerm>Documentation snippet</DefinitionTerm>
				<DefinitionDescription class={props.muted ? 'text-gray-400' : 'text-gray-700'}>
					{props.description}
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


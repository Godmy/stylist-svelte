<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import DefinitionDescription from './index.svelte';
	import { DefinitionTerm } from '../../../typography/inline/definition-term';

	const controls: InterfaceControllerSettings[] = [
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
				class="rounded-2xl border border-[var(--color-border-primary)]/70 bg-[var(--color-background-primary)]/80 p-5 shadow-sm dark:border-[var(--color-border-primary)] dark:bg-[var(--color-neutral-900)]/40"
			>
				<DefinitionTerm>Documentation snippet</DefinitionTerm>
				<DefinitionDescription class={values.muted ? 'text-[var(--color-text-tertiary)]' : 'text-[var(--color-text-primary)]'}>
					{values.description}
				</DefinitionDescription>
			</dl>

			<dl
				class="space-y-4 rounded-2xl border border-dashed border-[var(--color-border-primary)]/60 p-5 dark:border-[var(--color-border-primary)]"
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












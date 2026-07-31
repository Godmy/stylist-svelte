<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import RoundStatusBadge from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'status',
			type: 'select',
			defaultValue: 'collecting',
			options: ['kickoff', 'collecting', 'discussing', 'closed', 'finalized']
		}
	];
</script>

<Story
	{controls}
	component={RoundStatusBadge}
	title="RoundStatusBadge"
	category="Atoms/Wbd"
	description="Status indicator for a Wideband Delphi estimation round."
>
	{#snippet children(values: any)}
		<RoundStatusBadge status={values.status} />
	{/snippet}
</Story>

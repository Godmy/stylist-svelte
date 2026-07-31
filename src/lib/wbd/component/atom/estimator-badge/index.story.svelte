<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import EstimatorBadge from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'displayName', type: 'text', defaultValue: 'Jordan Lee' },
		{
			name: 'role',
			type: 'select',
			defaultValue: 'estimator',
			options: ['coordinator', 'estimator', 'observer']
		}
	];
</script>

<Story
	{controls}
	component={EstimatorBadge}
	title="EstimatorBadge"
	category="Atoms/Wbd"
	description="Anonymized chip identifying a Delphi round participant."
>
	{#snippet children(values: any)}
		<EstimatorBadge
			participant={{
				id: 'p1',
				displayName: values.displayName as string,
				role: values.role as 'coordinator' | 'estimator' | 'observer'
			}}
		/>
	{/snippet}
</Story>

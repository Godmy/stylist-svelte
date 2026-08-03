<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import PermissionDeniedPanel from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Coordinator access required' },
		{ name: 'description', type: 'text', defaultValue: 'This area contains aggregate controls for session owners.' },
		{ name: 'actionLabel', type: 'text', defaultValue: 'Back to sessions' }
	];

	function handleGoBack(): void {
		console.info('WBD go back requested');
	}
</script>

<Story
	title="Permission Denied Panel"
	component={PermissionDeniedPanel}
	category="Organisms/Wbd"
	description="Access-control state for unavailable WBD surfaces."
	{controls}
>
	{#snippet children(values: any)}
		<PermissionDeniedPanel
			title={values.title}
			description={values.description}
			actionLabel={values.actionLabel}
			onGoBack={handleGoBack}
		/>
	{/snippet}
</Story>

<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import ErrorStatePanel from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Could not load session' },
		{ name: 'description', type: 'text', defaultValue: 'The backend returned a validation error.' },
		{ name: 'retryLabel', type: 'text', defaultValue: 'Try again' }
	];

	function handleRetry(): void {
		console.info('WBD retry requested');
	}
</script>

<Story
	title="Error State Panel"
	component={ErrorStatePanel}
	category="Organisms/Wbd"
	description="Recoverable error state with a retry action."
	{controls}
>
	{#snippet children(values: any)}
		<ErrorStatePanel
			title={values.title}
			description={values.description}
			retryLabel={values.retryLabel}
			onRetry={handleRetry}
		/>
	{/snippet}
</Story>

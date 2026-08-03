<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdMutationStatus } from '$stylist/wbd/type/struct/mutation-status';
	import MutationStatusToast from './index.svelte';

	const controls: SlotStory[] = [];
	const statuses: StructWbdMutationStatus[] = [
		{ id: 'saving', message: 'Saving answer draft', status: 'saving' },
		{ id: 'saved', message: 'Round snapshot updated', status: 'saved' },
		{ id: 'error', message: 'Invite email failed', status: 'error' }
	];

	function handleDismissStatus(statusId: string): void {
		console.info('WBD status dismissed', statusId);
	}
</script>

<Story
	title="Mutation Status Toast"
	component={MutationStatusToast}
	category="Organisms/Wbd"
	description="Stack of mutation status messages for WBD workflows."
	{controls}
>
	{#snippet children()}
		<MutationStatusToast {statuses} onDismissStatus={handleDismissStatus} />
	{/snippet}
</Story>

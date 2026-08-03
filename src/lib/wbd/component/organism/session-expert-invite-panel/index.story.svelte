<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdSessionExpert } from '$stylist/wbd/type/struct/session-expert';
	import SessionExpertInvitePanel from './index.svelte';

	const controls: SlotStory[] = [];
	const experts: StructWbdSessionExpert[] = [
		{ id: 'e-1', email: 'green@example.com', name: 'Green Expert', alias: 'Expert Green', status: 'joined', invitedAt: '2026-08-01T09:10:00Z', joinedAt: '2026-08-01T10:00:00Z' },
		{ id: 'e-2', email: 'blue@example.com', alias: 'Expert Blue', status: 'invited', invitedAt: '2026-08-01T09:15:00Z' },
		{ id: 'e-3', email: 'gray@example.com', status: 'pending' }
	];

	function handleInviteExpert(email: string): void {
		console.info('WBD invite expert', email);
	}

	function handleRemoveExpert(expertId: string): void {
		console.info('WBD remove expert', expertId);
	}

	function handleResendInvite(expertId: string): void {
		console.info('WBD resend invite', expertId);
	}
</script>

<Story
	title="Session Expert Invite Panel"
	component={SessionExpertInvitePanel}
	category="Organisms/Wbd"
	description="Coordinator panel for inviting and managing session experts."
	{controls}
>
	{#snippet children()}
		<SessionExpertInvitePanel
			{experts}
			onInviteExpert={handleInviteExpert}
			onRemoveExpert={handleRemoveExpert}
			onResendInvite={handleResendInvite}
		/>
	{/snippet}
</Story>

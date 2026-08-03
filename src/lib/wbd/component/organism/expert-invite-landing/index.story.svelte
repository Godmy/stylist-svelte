<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import ExpertInviteLanding from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'sessionTitle', type: 'text', defaultValue: 'Resource base forecast 2026' },
		{ name: 'alias', type: 'text', defaultValue: 'Expert Green' }
	];

	function handleAcceptInvite(): void {
		console.info('WBD invite accepted');
	}

	function handleDeclineInvite(): void {
		console.info('WBD invite declined');
	}
</script>

<Story
	title="Expert Invite Landing"
	component={ExpertInviteLanding}
	category="Organisms/Wbd"
	description="Anonymous expert invitation landing state."
	{controls}
>
	{#snippet children(values: any)}
		<ExpertInviteLanding
			sessionTitle={values.sessionTitle}
			expertEmail="expert@example.com"
			alias={values.alias}
			expiresAt="2026-08-07T18:00:00Z"
			onAcceptInvite={handleAcceptInvite}
			onDeclineInvite={handleDeclineInvite}
		/>
	{/snippet}
</Story>

<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import InviteEmailPreview from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'recipientEmail', type: 'text', defaultValue: 'expert@example.com' },
		{ name: 'alias', type: 'text', defaultValue: 'Expert Green' }
	];

	function handleSendPreview(): void {
		console.info('WBD invite preview sent');
	}
</script>

<Story
	title="Invite Email Preview"
	component={InviteEmailPreview}
	category="Organisms/Wbd"
	description="Preview of an anonymous expert invitation email."
	{controls}
>
	{#snippet children(values: any)}
		<InviteEmailPreview
			sessionTitle="Resource base forecast 2026"
			recipientEmail={values.recipientEmail}
			alias={values.alias}
			inviteUrl="https://weoracle.online/invite/demo-token"
			onSendPreview={handleSendPreview}
		/>
	{/snippet}
</Story>

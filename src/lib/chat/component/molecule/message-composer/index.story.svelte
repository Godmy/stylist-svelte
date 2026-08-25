<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import MessageComposer from './index.svelte';

	let lastSent = $state('none');
	let attachmentClicks = $state(0);
	let voiceClicks = $state(0);

	const controls: SlotStory[] = [
		{ name: 'placeholder', type: 'text', defaultValue: 'Type a message...' },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'showAttachmentButton', type: 'boolean', defaultValue: true },
		{ name: 'showVoiceButton', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	id="molecules-message-composer"
	title="Molecules / Information / Messages / MessageComposer"
	component={MessageComposer}
	category="Molecules/Information/Messages"
	description="Message input with send, attach and voice actions."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<MessageComposer
				placeholder={args.placeholder}
				disabled={args.disabled}
				showAttachmentButton={args.showAttachmentButton}
				showVoiceButton={args.showVoiceButton}
				onSendMessage={(text: string) => (lastSent = text)}
				onAttachmentClick={() => (attachmentClicks += 1)}
				onVoiceClick={() => (voiceClicks += 1)}
			/>
			<p class="_c2">Last sent: {lastSent}</p>
			<p class="_c2">
				Attachment: {attachmentClicks} | Voice: {voiceClicks}
			</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.75rem;
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
	}
	._c1 > * + * {
		margin-top: 0.75rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>

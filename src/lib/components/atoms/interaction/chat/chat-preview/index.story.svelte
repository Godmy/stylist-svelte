<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import ChatPreview from './index.svelte';
	import type { ChatPreviewProps } from '$stylist/design-system/props/interaction/chat-preview';

	const baseData: ChatPreviewProps = {
		title: 'AI Team Chat',
		participants: ['Claude', 'Qwen', 'Gemini'],
		maxMessages: 3,
		showAvatars: true,
		messages: [
			{ text: 'SAMO analysis is complete.', sender: 'Claude', timestamp: '2 min ago', isOwn: false, status: 'read' },
			{ text: 'Implemented the missing controls.', sender: 'Qwen', timestamp: '1 min ago', isOwn: true, status: 'read' },
			{ text: 'Preview looks good now.', sender: 'Gemini', timestamp: 'just now', isOwn: false, status: 'delivered' }
		]
	};

	const controls: ControlConfig[] = [
		{ name: 'title', type: 'text', defaultValue: 'AI Team Chat' },
		{ name: 'maxMessages', type: 'number', defaultValue: 3, min: 1, max: 10 },
		{ name: 'showAvatars', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	{controls}
	component={ChatPreview}
	title="ChatPreview"
	category="Atoms/Interaction/Chat"
	description="Compact preview of recent chat messages"
>
	{#snippet children(values: any)}
		<ChatPreview
			{...baseData}
			title={values.title as string}
			maxMessages={Number(values.maxMessages) || 3}
			showAvatars={values.showAvatars as boolean}
		/>
	{/snippet}
</Story>

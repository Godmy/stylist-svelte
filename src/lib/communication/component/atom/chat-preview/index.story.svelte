<script lang="ts">
	import { Story } from '$stylist/playground/component/molecule/story';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ChatPreview from './index.svelte';
	import type { ChatPreviewProps } from '$stylist/communication/type/struct/chat-preview';

	const baseData: ChatPreviewProps = {
		title: 'AI Team Chat',
		participants: ['Claude', 'Qwen', 'Gemini'],
		maxMessages: 3,
		showAvatars: true,
		messages: [
			{ text: 'SAMO analysis is complete.', author: 'Claude', timestamp: '2 min ago' },
			{ text: 'Implemented the missing controls.', author: 'Qwen', timestamp: '1 min ago' },
			{ text: 'Preview looks good now.', author: 'Gemini', timestamp: 'just now' }
		]
	};

	const controls: InterfaceControllerSettings[] = [
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





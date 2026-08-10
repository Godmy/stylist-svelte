<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import ChatPreview from './index.svelte';

	const baseData: {
		title: string;
		participants: string[];
		messages: { text: string; author: string; timestamp: string }[];
		maxMessages: number;
		showAvatars: boolean;
	} = {
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

	const controls: SlotStory[] = [
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

<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import ChatPreview from './index.svelte';
	import type { ChatPreviewProps } from '$stylist/design-system/props/chat-preview';

	// Example data for ChatPreview
	const chatPreviewData: ChatPreviewProps = {
		title: 'AI Team Chat',
		participants: ['Claude', 'Qwen', 'Gemini'],
		maxMessages: 3,
		showAvatars: true,
		messages: [
			{
				text: "I've completed the SAMO analysis of the component library.",
				sender: 'Claude',
				timestamp: '2 min ago',
				isOwn: false,
				avatar: '/avatars/claude.svg',
				status: 'read'
			},
			{
				text: 'Great! I implemented the new components based on the guidelines.',
				sender: 'Qwen',
				timestamp: '1 min ago',
				isOwn: true,
				avatar: '/avatars/qwen.svg',
				status: 'read'
			},
			{
				text: 'The new components are already live on the staging site.',
				sender: 'Gemini',
				timestamp: 'Just now',
				isOwn: false,
				avatar: '/avatars/gemini.svg',
				status: 'delivered'
			}
		]
	};

	let title: string = 'AI Team Chat';
	let maxMessages: number = 3;
	let showAvatars: boolean = true;

	const controls: ControlConfig[] = [
		{
			name: 'title',
			type: 'text',
			defaultValue: 'AI Team Chat',
			description: 'Title of the chat'
		},
		{
			name: 'maxMessages',
			type: 'number',
			defaultValue: 3,
			min: 1,
			max: 10,
			description: 'Maximum number of messages to display'
		},
		{
			name: 'showAvatars',
			type: 'boolean',
			defaultValue: true,
			description: 'Whether to show avatars'
		}
	];
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Chat Preview Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Chat Preview</h2>
		<div class="p-4">
			<ChatPreview
				{...chatPreviewData}
				title={title}
				maxMessages={maxMessages}
				showAvatars={showAvatars}
			/>
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div>
				<label for="chat-preview-title" class="mb-1 block text-sm">Title:</label>
				<input
					id="chat-preview-title"
					type="text"
					bind:value={title}
					class="rounded border p-1"
				/>
			</div>

			<div>
				<label for="chat-preview-max-messages" class="mb-1 block text-sm">Max Messages:</label>
				<input
					id="chat-preview-max-messages"
					type="number"
					bind:value={maxMessages}
					class="rounded border p-1 w-20"
					min="1"
					max="10"
				/>
			</div>

			<div class="flex items-end">
				<label for="chat-preview-show-avatars" class="flex items-center gap-1">
					<input
						id="chat-preview-show-avatars"
						type="checkbox"
						bind:checked={showAvatars}
					/>
					Show Avatars
				</label>
			</div>
		</div>
	</div>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Chat Preview Variants</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<div>
				<h3 class="mb-2 text-lg font-semibold">With Avatars</h3>
				<ChatPreview {...chatPreviewData} showAvatars={true} />
			</div>
			<div>
				<h3 class="mb-2 text-lg font-semibold">Without Avatars</h3>
				<ChatPreview {...chatPreviewData} showAvatars={false} />
			</div>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Different Message Counts</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			<div>
				<h3 class="mb-2 text-lg font-semibold">1 Message</h3>
				<ChatPreview {...chatPreviewData} maxMessages={1} />
			</div>
			<div>
				<h3 class="mb-2 text-lg font-semibold">2 Messages</h3>
				<ChatPreview {...chatPreviewData} maxMessages={2} />
			</div>
			<div>
				<h3 class="mb-2 text-lg font-semibold">3 Messages</h3>
				<ChatPreview {...chatPreviewData} maxMessages={3} />
			</div>
		</div>
	</div>
</div>




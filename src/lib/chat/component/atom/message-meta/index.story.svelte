<script lang="ts">
	import MessageMeta from './index.svelte';
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { SlotMessage as Message } from '$stylist/chat/interface/slot/message';
	import { TOKEN_CONTROLLER_TYPE } from '$stylist/interaction/const/map/controller-type';

	const message = {
		id: '1',
		senderId: 'user1',
		content: 'Test message',
		timestamp: new Date(2023, 5, 15, 14, 30),
		status: 'read'
	};

	const controls = [
		{
			name: 'showTimestamp',
			type: TOKEN_CONTROLLER_TYPE.BOOLEAN,
			defaultValue: true
		},
		{
			name: 'showStatus',
			type: TOKEN_CONTROLLER_TYPE.BOOLEAN,
			defaultValue: true
		}
	];
</script>

<Story
	{controls}
	component={MessageMeta}
	title="MessageMeta"
	category="Atoms/Information/Messages"
	description="Displays metadata for a message including timestamp and status."
	tags={['message', 'meta', 'timestamp', 'status']}
>
	{#snippet children(values: any)}
		<div class="p-4">
			<h1 class="mb-4 text-lg font-semibold">MessageMeta Component</h1>

			<div class="mb-6 rounded border p-4">
				<h2 class="text-md mb-2 font-semibold">Interactive MessageMeta</h2>
				<MessageMeta
					{message}
					showTimestamp={values.showTimestamp}
					showStatus={values.showStatus}
				/>
			</div>

			<div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
				<div class="rounded border p-4">
					<h2 class="text-md mb-2 font-semibold">With Timestamp Only</h2>
					<MessageMeta {message} showTimestamp={true} showStatus={false} />
				</div>

				<div class="rounded border p-4">
					<h2 class="text-md mb-2 font-semibold">With Status Only</h2>
					<MessageMeta {message} showTimestamp={false} showStatus={true} />
				</div>

				<div class="rounded border p-4">
					<h2 class="text-md mb-2 font-semibold">Without Meta Info</h2>
					<MessageMeta {message} showTimestamp={false} showStatus={false} />
				</div>

				<div class="rounded border p-4">
					<h2 class="text-md mb-2 font-semibold">Default MessageMeta</h2>
					<MessageMeta {message} showTimestamp={true} showStatus={true} />
				</div>
			</div>
		</div>
	{/snippet}
</Story>

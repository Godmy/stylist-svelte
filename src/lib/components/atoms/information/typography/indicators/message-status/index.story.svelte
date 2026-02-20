<script lang="ts">
	import MessageStatus from './index.svelte';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import { CONTROL_TYPES } from '$stylist/design-system/tokens/controls';

	const statusOptions = ['sent', 'delivered', 'read'];
	const sizeOptions = ['sm', 'md'];

	const controls = [
		{
			name: 'status',
			type: CONTROL_TYPES.SELECT,
			options: statusOptions,
			defaultValue: 'sent'
		},
		{
			name: 'size',
			type: CONTROL_TYPES.SELECT,
			options: sizeOptions,
			defaultValue: 'sm'
		}
	];
</script>

<Story
	{controls}
	component={MessageStatus}
	title="MessageStatus"
	category="Atoms/Information/Typography/Indicators"
	description="MessageStatus component for showing status of a message."
	tags={['message', 'status', 'indicator', 'communication']}
>
	{#snippet children(values: any)}
		<div class="p-4">
			<div class="flex items-center space-x-2">
				<span>Message Status:</span>
				<MessageStatus
					status={props.status}
					size={props.size}
				/>
			</div>

			<h3 class="mt-8 mb-4 text-lg font-bold">Different Status Types</h3>
			<div class="flex flex-wrap items-center gap-4">
				<div class="flex items-center space-x-2">
					<span>Sent:</span>
					<MessageStatus status="sent" size="sm" />
					<MessageStatus status="sent" size="md" />
				</div>
				<div class="flex items-center space-x-2">
					<span>Delivered:</span>
					<MessageStatus status="delivered" size="sm" />
					<MessageStatus status="delivered" size="md" />
				</div>
				<div class="flex items-center space-x-2">
					<span>Read:</span>
					<MessageStatus status="read" size="sm" />
					<MessageStatus status="read" size="md" />
				</div>
			</div>
		</div>
	{/snippet}
</Story>

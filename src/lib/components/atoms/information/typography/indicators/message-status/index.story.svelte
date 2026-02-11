<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import MessageStatus from './index.svelte';

	type MessageStatusStoryProps = {
		status: 'sent' | 'delivered' | 'read';
		size: 'sm' | 'md';
	};

	const statusOptions = ['sent', 'delivered', 'read'];
	const sizeOptions = ['sm', 'md'];

	const controls: ControlConfig[] = [
		{
			name: 'status',
			type: 'select',
			defaultValue: 'sent',
			options: statusOptions
		},
		{
			name: 'size',
			type: 'select',
			defaultValue: 'sm',
			options: sizeOptions
		}
	];
</script>

<Story
	id="atoms-message-status"
	title="MessageStatus"
	component={MessageStatus}
	category="Atoms"
	description="MessageStatus component for showing status of a message."
	tags={['indicator', 'message', 'status']}
	{controls}
>
	{#snippet children(props: Record<string, unknown>)}
		<div class="flex items-center space-x-2">
			<span>Message Status:</span>
			<MessageStatus status={props.status as 'sent' | 'delivered' | 'read'} size={props.size as 'sm' | 'md'} />
		</div>
	{/snippet}
</Story>

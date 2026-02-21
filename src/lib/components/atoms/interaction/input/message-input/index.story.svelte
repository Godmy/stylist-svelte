<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import MessageInput from './index.svelte';

	let sent = $state('');

	const controls: ControlConfig[] = [
		{ name: 'placeholder', type: 'text', defaultValue: 'Type your message...' },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'showAttachment', type: 'boolean', defaultValue: true },
		{ name: 'showEmoji', type: 'boolean', defaultValue: true },
		{ name: 'showSend', type: 'boolean', defaultValue: true }
	];
</script>

<Story component={MessageInput} title="MessageInput" description="Chat-like input with optional action buttons." {controls}>
	{#snippet children(values: any)}
		<div class="space-y-3">
			<MessageInput
				placeholder={values.placeholder}
				disabled={values.disabled}
				showAttachment={values.showAttachment}
				showEmoji={values.showEmoji}
				showSend={values.showSend}
				onSendMessage={(message) => (sent = message)}
			/>
			<p class="text-sm text-[--color-text-secondary]">Last sent: {sent || 'none'}</p>
		</div>
	{/snippet}
</Story>

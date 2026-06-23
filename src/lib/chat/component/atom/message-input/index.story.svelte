<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import MessageInput from './index.svelte';

	let sent = $state('');

	const controls: InterfaceControllerSettings[] = [
		{ name: 'placeholder', type: 'text', defaultValue: 'Type your message...' },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'showAttachment', type: 'boolean', defaultValue: true },
		{ name: 'showEmoji', type: 'boolean', defaultValue: true },
		{ name: 'showSend', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	component={MessageInput}
	title="MessageInput"
	description="Chat-like input with optional action buttons."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<MessageInput
				placeholder={values.placeholder}
				disabled={values.disabled}
				showAttachment={values.showAttachment}
				showEmoji={values.showEmoji}
				showSend={values.showSend}
				onSendMessage={(message: string) => (sent = message)}
			/>
			<p class="_c2">Last sent: {sent || 'none'}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 > * + * {
		margin-top: 0.75rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>

<script lang="ts">
	import type { SlotMessage as Message } from '$stylist/chat/interface/slot/message';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import MessageTimestamp from '$stylist/chat/component/atom/message-timestamp/index.svelte';
	import createMessageMetaState from '$stylist/chat/function/state/message-meta/index.svelte';

	let props: {
		message?: Message;
		showTimestamp?: boolean;
		showStatus?: boolean;
	} = $props();

	const state = createMessageMetaState(props);
</script>

{#if state.showTimestamp || state.showStatus}
	<div class={state.containerClasses}>
		{#if state.showTimestamp && state.timestamp}
			<MessageTimestamp timestamp={state.timestamp} formatStyle="time" />
		{/if}

		{#if state.showTimestamp && state.timestamp && state.showStatus}
			<span class={state.separatorClasses}>&middot;</span>
		{/if}

		{#if state.showStatus && state.displayStatus}
			<span class={state.statusTextClasses}>
				<BaseIcon name={state.statusIcon} class={state.statusIconClasses} />
				{state.displayStatus}
			</span>
		{/if}
	</div>
{/if}

<style>
	.message-meta {
		display: flex;
		align-items: center;
		gap: var(--spacing-1);
		margin-top: var(--spacing-1);
	}

	.meta-separator {
		color: var(--color-text-secondary);
		font-size: var(--font-size-3);
	}

	.message-meta__status-text {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		font-size: 0.6875rem;
		color: var(--color-text-secondary);
	}

	.message-meta__status-icon {
		width: 0.75rem;
		height: 0.75rem;
		color: var(--color-text-tertiary);
	}

	.message-meta__status-icon--read {
		color: var(--color-primary-600);
	}
</style>

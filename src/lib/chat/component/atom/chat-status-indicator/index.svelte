<script lang="ts">
	import createChatStatusIndicatorState from '$stylist/chat/function/state/chat-status-indicator/index.svelte';
	import type { SlotChatStatusIndicator as ChatStatusIndicatorContract } from '$stylist/chat/interface/slot/chat-status-indicator';

	let props: ChatStatusIndicatorContract = $props();

	const state = createChatStatusIndicatorState(props);
</script>

<span class={state.containerClasses} role="status" aria-label={`Status: ${state.status}`}>
	<span class={state.indicatorClasses}></span>
	{#if state.showLabel}
		<span class={state.labelClasses}>{state.statusText}</span>
	{/if}
</span>

<style>
	.c-chat-status {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}
	.c-chat-status__dot {
		display: inline-flex;
		border-radius: 9999px;
		box-shadow:
			0 0 0 2px var(--color-background-primary),
			0 1px 2px rgba(15, 23, 42, 0.12);
	}
	.c-chat-status__dot--sm {
		width: 0.5rem;
		height: 0.5rem;
	}
	.c-chat-status__dot--md {
		width: 0.625rem;
		height: 0.625rem;
	}
	.c-chat-status__dot--lg {
		width: 0.75rem;
		height: 0.75rem;
	}
	.c-chat-status__dot--online {
		background-color: var(--color-success-500, #10b981);
	}
	.c-chat-status__dot--away {
		background-color: var(--color-warning-500, #f59e0b);
	}
	.c-chat-status__dot--typing {
		background-color: var(--color-primary-500);
	}
	.c-chat-status__dot--offline {
		background-color: var(--color-neutral-400, #94a3b8);
	}
	.c-chat-status__label {
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-text-secondary);
	}
</style>

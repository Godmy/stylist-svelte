<script lang="ts">
	import type { SlotMessageThread as MessageThreadProps } from '$stylist/chat/interface/slot/message-thread';
	import createMessageThreadState from '$stylist/chat/function/state/message-thread/index.svelte';

	let props: MessageThreadProps = $props();

	const state = createMessageThreadState(props);
</script>

<div class={state.hostClasses} {...props}>
	{#if state.title}
		<header class={state.headerClasses}>
			<h3 class="mt-title">{state.title}</h3>
		</header>
	{/if}

	<div class={state.containerClasses}>
		{#if state.loading}
			<div class={state.loadingClasses}>
				<div class={state.spinnerClasses}></div>
			</div>
		{:else}
			<div class={state.messageContainerClasses}>
				{#each state.messages as message}
					<div class={`c-message-thread__item ${state.variantClass}`}>
						<p>{message.text}</p>
						<span class="mt-meta">
							{message.sender} - {message.timestamp}
						</span>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.c-message-thread {
		display: flex;
		flex-direction: column;
		height: 100%;
		max-height: 37.5rem;
		overflow: hidden;
		border-radius: 1.25rem;
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		box-shadow: 0 12px 28px -12px rgba(15, 23, 42, 0.18);
	}
	.c-message-thread__header {
		border-bottom: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 0.75rem 1rem;
	}
	.c-message-thread__body {
		flex: 1;
		overflow-y: auto;
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}
	.c-message-thread__messages {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.c-message-thread__item {
		background-color: var(--color-background-primary);
		border-radius: 0.75rem;
		padding: 0.75rem;
	}
	.c-message-thread__loading {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 8rem;
	}
	.c-message-thread__spinner {
		width: 2rem;
		height: 2rem;
		border-radius: 9999px;
		border: 2px solid transparent;
		border-bottom-color: var(--color-primary-500);
		animation: c-message-thread-spin 0.7s linear infinite;
	}
	@keyframes c-message-thread-spin {
		to {
			transform: rotate(360deg);
		}
	}
	.mt-title {
		font-size: 1.125rem;
		font-weight: 600;
	}
	.mt-meta {
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}
</style>

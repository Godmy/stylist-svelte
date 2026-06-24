<script lang="ts">
	import type { RecipePlaygroundAiAssistant } from '$stylist/playground/interface/recipe/playground-ai-assistant';
	import { createPlaygroundAiAssistantState } from '$stylist/playground/function/state/playground-ai-assistant/index.svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	let { ...props }: RecipePlaygroundAiAssistant = $props();
	const state = createPlaygroundAiAssistantState(props);
</script>

<div class={state.containerClass}>
	<div class={state.headerClass}>
		<div class="paa-header-inner">
			<div class="paa-status-dot"></div>
			<div>
				<h3 class="paa-name">{state.currentProviderName} AI</h3>
				<p class="paa-session">
					{#if state.aiClient.getSessionId()}
						Session: {state.aiClient.getSessionId()?.substring(0, 8)}...
					{:else}
						New session
					{/if}
				</p>
			</div>
		</div>
		<div class="paa-actions">
			<button onclick={state.clearChat} class="paa-action-btn" title="Clear chat">
				<BaseIcon name={state.Trash2} style="width:1rem;height:1rem" />
			</button>
			<button onclick={state.onClose} class="paa-action-btn" title="Close">
				<BaseIcon name={state.X} style="width:1.25rem;height:1.25rem" />
			</button>
		</div>
	</div>

	{#if state.error}
		<div class={state.errorBannerClass}>
			<strong>Error:</strong>
			{state.error}
		</div>
	{/if}

	<div bind:this={state.messagesContainer} class={state.messagesContainerClass}>
		{#each state.messages as message}
			<div class="playground-ai-assistant__TODO" data-TODO="was state.messageClass(...)">
				{message.content}
			</div>
		{/each}

		{#if state.isLoading}
			<div class={state.loadingIndicatorClass}>
				<BaseIcon name={state.Loader2} style="width:1rem;height:1rem" class="ai-spin" />
				<span>{state.currentProviderName} is thinking...</span>
			</div>
		{/if}
	</div>

	<div class={state.inputContainerClass}>
		<div class="paa-input-row">
			<textarea
				bind:value={state.inputMessage}
				onkeypress={state.handleKeyPress}
				placeholder="Введите сообщение..."
				rows="2"
				disabled={state.isLoading}
				class="paa-textarea"
			></textarea>
			<button
				onclick={state.sendMessage}
				disabled={!state.inputMessage.trim() || state.isLoading}
				class="paa-send-btn"
			>
				{#if state.isLoading}
					<BaseIcon name={state.Loader2} style="width:1.25rem;height:1.25rem" class="ai-spin" />
				{:else}
					<BaseIcon name={state.Send} style="width:1.25rem;height:1.25rem" />
				{/if}
			</button>
		</div>
		<p class="paa-hint">Press Enter to send, Shift+Enter for new line</p>
	</div>
</div>

<style>
	@keyframes paa-pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}
	.paa-header-inner {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
	.paa-status-dot {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 9999px;
		background: #22c55e;
		animation: paa-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
		flex-shrink: 0;
	}
	.paa-name {
		font-weight: 600;
		color: #111827;
	}
	@media (prefers-color-scheme: dark) {
		.paa-name {
			color: white;
		}
	}
	.paa-session {
		font-size: 0.75rem;
		color: #6b7280;
	}
	@media (prefers-color-scheme: dark) {
		.paa-session {
			color: #9ca3af;
		}
	}
	.paa-actions {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
	.paa-action-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;
		padding: 0.375rem;
		color: #6b7280;
		transition: background-color 0.15s;
		background: none;
		border: none;
		cursor: pointer;
	}
	.paa-action-btn:hover {
		background: #f3f4f6;
	}
	@media (prefers-color-scheme: dark) {
		.paa-action-btn:hover {
			background: #1f2937;
		}
	}
	.paa-input-row {
		display: flex;
		gap: 0.5rem;
	}
	.paa-textarea {
		flex: 1;
		resize: none;
		border-radius: 0.5rem;
		border: 1px solid #d1d5db;
		background: #f3f4f6;
		padding: 0.5rem 0.75rem;
		color: #111827;
		font-size: 0.875rem;
	}
	.paa-textarea::placeholder {
		color: #6b7280;
	}
	.paa-textarea:focus {
		outline: none;
		box-shadow: 0 0 0 2px #a855f7;
	}
	.paa-textarea:disabled {
		opacity: 0.5;
	}
	@media (prefers-color-scheme: dark) {
		.paa-textarea {
			border-color: #4b5563;
			background: #1f2937;
			color: white;
		}
		.paa-textarea::placeholder {
			color: #9ca3af;
		}
	}
	.paa-send-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 2.5rem;
		border-radius: 0.5rem;
		background: linear-gradient(to right, #9333ea, #7e22ce);
		padding: 0.5rem;
		color: white;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
		transition: all 0.15s;
		border: none;
		cursor: pointer;
	}
	.paa-send-btn:hover {
		background: linear-gradient(to right, #7e22ce, #6b21a8);
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
	}
	.paa-send-btn:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
	.paa-hint {
		margin-top: 0.5rem;
		font-size: 0.75rem;
		color: #6b7280;
	}
	@media (prefers-color-scheme: dark) {
		.paa-hint {
			color: #9ca3af;
		}
	}

	.playground-ai-assistant__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		border-bottom-width: 1px;
		border-style: solid;
		border-color: #e5e7eb;
	}
	@media (prefers-color-scheme: dark) {
		.playground-ai-assistant__header {
			border-color: #374151;
		}
	}

	.ai-spin {
		animation: spin 1s linear infinite;
	}
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>

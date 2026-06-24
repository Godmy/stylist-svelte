<script lang="ts">
	import type { RecipePlaygroundAiChat } from '$stylist/playground/interface/recipe/playground-ai-chat';
	import { createPlaygroundAiChatState } from '$stylist/playground/function/state/playground-ai-chat/index.svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	let { ...props }: RecipePlaygroundAiChat = $props();
	const state = createPlaygroundAiChatState(props);
</script>

<div class={state.containerClass}>
	<div class={state.headerClass}>
		<div class="pac-header-inner">
			<div class="pac-status-dot"></div>
			<h3 class="pac-title">AI Assistant</h3>
		</div>
		<button onclick={state.onClose} class="pac-close-btn">
			<BaseIcon name={state.X} style="width:1.25rem;height:1.25rem" />
		</button>
	</div>

	<div class={state.messagesContainerClass}>
		{#each state.messages as message}
			<div class="playground-ai-chat__TODO" data-TODO="was state.messageClass(...)">
				{message.content}
			</div>
		{/each}
	</div>

	<div class={state.inputContainerClass}>
		<div class="pac-input-row">
			<input
				type="text"
				bind:value={state.inputMessage}
				onkeypress={state.handleKeyPress}
				placeholder="Введите сообщение..."
				class="pac-input"
			/>
			<button
				onclick={state.sendMessage}
				disabled={!state.inputMessage.trim()}
				class="pac-send-btn"
			>
				<BaseIcon name={state.Send} style="width:1.25rem;height:1.25rem" />
			</button>
		</div>
		<p class="pac-hint">Press Enter to send, Shift+Enter for new line</p>
	</div>
</div>

<style>
	@keyframes pac-pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}
	.pac-header-inner {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.pac-status-dot {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 9999px;
		background: #22c55e;
		animation: pac-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
		flex-shrink: 0;
	}
	.pac-title {
		font-weight: 600;
		color: #111827;
	}
	@media (prefers-color-scheme: dark) {
		.pac-title {
			color: white;
		}
	}
	.pac-close-btn {
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
	.pac-close-btn:hover {
		background: #f3f4f6;
	}
	@media (prefers-color-scheme: dark) {
		.pac-close-btn:hover {
			background: #1f2937;
		}
	}
	.pac-input-row {
		display: flex;
		gap: 0.5rem;
	}
	.pac-input {
		flex: 1;
		border-radius: 0.5rem;
		border: 1px solid #d1d5db;
		background: #f3f4f6;
		padding: 0.5rem 0.75rem;
		color: #111827;
		font-size: 0.875rem;
	}
	.pac-input::placeholder {
		color: #6b7280;
	}
	.pac-input:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--playground-accent, #f97316);
	}
	@media (prefers-color-scheme: dark) {
		.pac-input {
			border-color: #4b5563;
			background: #1f2937;
			color: white;
		}
		.pac-input::placeholder {
			color: #9ca3af;
		}
	}
	.pac-send-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;
		background: var(--playground-accent, #f97316);
		padding: 0.5rem;
		color: white;
		transition: opacity 0.15s;
		border: none;
		cursor: pointer;
	}
	.pac-send-btn:hover {
		opacity: 0.9;
	}
	.pac-send-btn:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
	.pac-hint {
		margin-top: 0.5rem;
		font-size: 0.75rem;
		color: #6b7280;
	}
	@media (prefers-color-scheme: dark) {
		.pac-hint {
			color: #9ca3af;
		}
	}

	.playground-ai-chat__header {
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
		.playground-ai-chat__header {
			border-color: #374151;
		}
	}
</style>

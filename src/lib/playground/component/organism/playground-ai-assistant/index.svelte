<script lang="ts">
	import type { PlaygroundAiAssistantProps } from '$stylist/playground/type/struct/playground-ai-assistant-props';
	import createPlaygroundAiAssistantState from '$stylist/playground/function/state/playground-ai-assistant/index.svelte';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';

	let { ...props }: PlaygroundAiAssistantProps = $props();
	const state = createPlaygroundAiAssistantState(props);
</script>

<div class={state.containerClass}>
	<!-- Header -->
	<div class={state.headerClass}>
		<div class="flex items-center gap-3">
			<div class="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
			<div>
				<h3 class="font-semibold text-gray-900 dark:text-white">
					{state.currentProviderName} AI
				</h3>
				<p class="text-xs text-gray-500 dark:text-gray-400">
					{#if state.aiClient.getSessionId()}
						Session: {state.aiClient.getSessionId()?.substring(0, 8)}...
					{:else}
						New session
					{/if}
				</p>
			</div>
		</div>
		<div class="flex items-center gap-1">
			<button
				onclick={state.clearChat}
				class="rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
				title="Clear chat"
			>
				<BaseIcon name={state.Trash2} class="h-4 w-4" />
			</button>
			<button
				onclick={state.onClose}
				class="rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
				title="Close"
			>
				<BaseIcon name={state.X} class="h-5 w-5" />
			</button>
		</div>
	</div>

	<!-- Error banner -->
	{#if state.error}
		<div class={state.errorBannerClass}>
			<strong>Error:</strong>
			{state.error}
		</div>
	{/if}

	<!-- Messages -->
	<div bind:this={state.messagesContainer} class={state.messagesContainerClass}>
		{#each state.messages as message}
			<div class={state.messageClass(message.role)}>
				{message.content}
			</div>
		{/each}

		{#if state.isLoading}
			<div class={state.loadingIndicatorClass}>
				<BaseIcon name={state.Loader2} class="h-4 w-4 animate-spin" />
				<span>{state.currentProviderName} is thinking...</span>
			</div>
		{/if}
	</div>

	<!-- Input -->
	<div class={state.inputContainerClass}>
		<div class="flex gap-2">
			<textarea
				bind:value={state.inputMessage}
				onkeypress={state.handleKeyPress}
				placeholder="Введите сообщение..."
				rows="2"
				disabled={state.isLoading}
				class="flex-1 resize-none rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none disabled:opacity-[var(--opacity-50)] dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
			></textarea>
			<button
				onclick={state.sendMessage}
				disabled={!state.inputMessage.trim() || state.isLoading}
				class="h-10 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 p-2 text-white shadow-lg transition-all hover:from-purple-700 hover:to-purple-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-[var(--opacity-50)]"
			>
				{#if state.isLoading}
					<BaseIcon name={state.Loader2} class="h-5 w-5 animate-spin" />
				{:else}
					<BaseIcon name={state.Send} class="h-5 w-5" />
				{/if}
			</button>
		</div>
		<p class="mt-2 text-xs text-gray-500 dark:text-gray-400">
			Press Enter to send, Shift+Enter for new line
		</p>
	</div>
</div>

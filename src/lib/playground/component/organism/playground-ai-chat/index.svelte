<script lang="ts">
	import type { PlaygroundAiChatProps } from '$stylist/playground/type/struct/playground-ai-chat-props';
	import { createPlaygroundAiChatState } from '$stylist/playground/function/state/playground-ai-chat';
	import { Icon as BaseIcon } from '$stylist/media';

	let { ...props }: PlaygroundAiChatProps = $props();
	const state = createPlaygroundAiChatState(props);
</script>

<div class={state.containerClass}>
	<!-- Header -->
	<div class={state.headerClass}>
		<div class="flex items-center gap-2">
			<div class="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
			<h3 class="font-semibold text-gray-900 dark:text-white">AI Assistant</h3>
		</div>
		<button
			onclick={state.onClose}
			class="rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
		>
			<BaseIcon name={state.X} class="h-5 w-5" />
		</button>
	</div>

	<!-- Messages -->
	<div class={state.messagesContainerClass}>
		{#each state.messages as message}
			<div class={state.messageClass(message.role)}>
				{message.content}
			</div>
		{/each}
	</div>

	<!-- Input -->
	<div class={state.inputContainerClass}>
		<div class="flex gap-2">
			<input
				type="text"
				bind:value={state.inputMessage}
				onkeypress={state.handleKeyPress}
				placeholder="Введите сообщение..."
				class="flex-1 rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[var(--playground-accent)] focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
			/>
			<button
				onclick={state.sendMessage}
				disabled={!state.inputMessage.trim()}
				class="rounded-lg bg-[var(--playground-accent)] p-2 text-white transition-all hover:opacity-[var(--opacity-90)] disabled:cursor-not-allowed disabled:opacity-[var(--opacity-50)]"
			>
				<BaseIcon name={state.Send} class="h-5 w-5" />
			</button>
		</div>
		<p class="mt-2 text-xs text-gray-500 dark:text-gray-400">
			Press Enter to send, Shift+Enter for new line
		</p>
	</div>
</div>

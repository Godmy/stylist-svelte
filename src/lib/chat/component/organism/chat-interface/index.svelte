<script lang="ts">
	import type { AnyProperty } from '$stylist/layout/type/object/any-property';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import createChatInterfaceState from '$stylist/chat/function/state/chat-interface/index.svelte';

	let props: AnyProperty = $props();
	const state = createChatInterfaceState(props);

	$effect(() => {
		state.selectedProvider = props.currentProvider ?? '';
	});
</script>

<div class={state.containerClass} {...props}>
	<!-- Header -->
	<div class={state.headerClassComputed}>
		<div class="ci-header-left">
			<BaseIcon
				name={state.Bot}
				style="width:1.5rem;height:1.5rem;margin-right:0.5rem;color:var(--color-primary-500)"
			/>
			<h2 class="ci-title">{state.currentProviderName}</h2>
		</div>
		<div class="ci-header-right">
			{#if state.showProviderSelector && props.aiProviders && props.aiProviders.length > 1}
				<select class={state.providerSelectorClass} bind:value={state.selectedProvider}>
					{#each props.aiProviders as provider}
						<option value={provider.id}>{provider.name}</option>
					{/each}
				</select>
			{/if}
			{#if state.showSettings}
				<button type="button" class={state.settingsButtonClass}>
					<BaseIcon name={state.Settings} style="width:1.25rem;height:1.25rem" />
				</button>
			{/if}
			<button type="button" class={state.moreOptionsButtonClass}>
				<BaseIcon name={state.MoreVertical} style="width:1.25rem;height:1.25rem" />
			</button>
		</div>
	</div>

	<!-- Messages -->
	<div class={state.messageListContainerClass}>
		{#each props.messages as message}
			<div class={`ci-msg-row ${message.sender === 'user' ? 'ci-msg-row--user' : ''}`}>
				<div
					class={`ci-msg-bubble ${message.sender === 'user' ? state.userMessageClass : state.aiMessageClass}`}
				>
					<div class={state.messageContentWrapperClass}>
						{#if message.sender === 'ai'}
							<BaseIcon name={state.Bot} class={state.botIconClass} />
						{/if}
						<div>
							<p>{message.content}</p>
							<div
								class={`ci-msg-time ${message.sender === 'user' ? state.userTimestampClass : state.timestampClass}`}
							>
								{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
								{#if message.status}
									{#if message.status === 'sending'}
										вЂў Sending...
									{:else if message.status === 'delivered'}
										вЂў Delivered
									{:else if message.status === 'read'}
										вЂў Read
									{:else if message.status === 'error'}
										вЂў Error
									{/if}
								{/if}
							</div>
						</div>
						{#if message.sender === 'user'}
							<BaseIcon
								name={state.User}
								style="width:1rem;height:1rem;flex-shrink:0;margin-top:0.125rem;color:var(--color-primary-200)"
							/>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Input Area -->
	<div class={state.inputAreaClass}>
		<div class="ci-input-row">
			<div class="ci-input-wrap">
				<textarea
					class={state.messageInputClass}
					placeholder={state.placeholder}
					bind:value={state.newMessage}
					onkeydown={state.handleKeyDown}
					rows={1}
				></textarea>
			</div>
			<button
				type="button"
				class={state.sendButtonClass}
				onclick={state.sendMessage}
				disabled={!state.newMessage.trim()}
			>
				<BaseIcon name={state.Send} class={state.sendIconClass} />
			</button>
		</div>
	</div>
</div>

<style>
	.c-chat-interface {
		display: flex;
		flex-direction: column;
		height: var(--dimension-height-chat-container, 37.5rem);
		overflow: hidden;
		border-radius: 1.5rem;
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		box-shadow: 0 20px 40px -12px rgba(15, 23, 42, 0.18);
	}
	.c-chat-interface__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 0.75rem 1rem;
	}
	.c-chat-interface__messages {
		flex: 1;
		overflow-y: auto;
		background-color: var(--color-background-secondary);
		padding: 0.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.c-chat-interface__bubble {
		max-width: 80%;
		border-radius: 1.25rem;
		padding: 0.75rem;
		box-shadow: 0 8px 16px -8px rgba(15, 23, 42, 0.16);
	}
	.c-chat-interface__bubble--user {
		background-color: var(--color-primary-500);
		color: var(--color-text-inverse);
		border-bottom-right-radius: 0;
		margin-left: auto;
	}
	.c-chat-interface__bubble--ai {
		background-color: var(--color-background-primary);
		color: var(--color-text-primary);
		border-bottom-left-radius: 0;
	}
	.c-chat-interface__msg-content {
		display: flex;
		align-items: flex-start;
		gap: 0.5rem;
	}
	.c-chat-interface__msg-icon {
		width: 1rem;
		height: 1rem;
		margin-top: 0.125rem;
		flex-shrink: 0;
	}
	.c-chat-interface__msg-icon--bot {
		color: var(--color-text-secondary);
	}
	.c-chat-interface__msg-icon--user {
		color: var(--color-primary-200);
	}
	.c-chat-interface__time {
		margin-top: 0.25rem;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}
	.c-chat-interface__time--user {
		color: var(--color-primary-200);
	}
	.c-chat-interface__footer {
		border-top: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
	.c-chat-interface__textarea {
		width: 100%;
		resize: none;
		border-radius: 1rem;
		border: 1px solid transparent;
		background-color: var(--color-background-secondary);
		padding: 0.75rem 1rem;
		color: var(--color-text-primary);
		font: inherit;
	}
	.c-chat-interface__textarea:focus {
		outline: none;
		border-color: var(--color-primary-500);
		box-shadow: 0 0 0 2px var(--color-primary-500);
	}
	.c-chat-interface__send {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 9999px;
		border: none;
		background-color: var(--color-primary-500);
		color: var(--color-text-inverse);
		cursor: pointer;
		transition: background-color var(--duration-150, 150ms) var(--easing-smooth, ease-in-out);
	}
	.c-chat-interface__send:hover:not(:disabled) {
		background-color: var(--color-primary-600);
	}
	.c-chat-interface__send:focus-visible {
		outline: none;
		box-shadow: 0 0 0 2px var(--color-primary-500);
	}
	.c-chat-interface__send:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	.c-chat-interface__send-icon {
		width: 1.25rem;
		height: 1.25rem;
	}
	.c-chat-interface__provider-select {
		border-radius: 9999px;
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 0.25rem 0.75rem;
		font-size: 0.875rem;
		color: var(--color-text-primary);
	}
	.c-chat-interface__icon-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 9999px;
		border: 1px solid transparent;
		background: none;
		color: var(--color-text-secondary);
		cursor: pointer;
		transition: all var(--duration-150, 150ms) var(--easing-smooth, ease-in-out);
	}
	.c-chat-interface__icon-btn:hover {
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		color: var(--color-text-primary);
	}
	.ci-header-left {
		display: flex;
		align-items: center;
	}
	.ci-title {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	.ci-header-right {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.ci-msg-row {
		display: flex;
	}
	.ci-msg-row--user {
		justify-content: flex-end;
	}
	.ci-msg-bubble {
		max-width: 80%;
		border-radius: 0.5rem;
		padding: 0.75rem;
	}
	.ci-msg-time {
		margin-top: 0.25rem;
		font-size: 0.75rem;
	}
	.ci-input-row {
		display: flex;
		align-items: flex-end;
		gap: 0.5rem;
	}
	.ci-input-wrap {
		position: relative;
		flex: 1;
	}
</style>

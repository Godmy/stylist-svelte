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

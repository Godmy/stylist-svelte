<script lang="ts">
	import { createStateState } from '$stylist/notification/function/state/state';
	import { Icon } from '$stylist';

	const props = $props();
	const state = createStateState(props);
	const Inbox = 'inbox';
	const Plus = 'add';
</script>

<div class={state.containerClasses}>
	{#if props.children}
		{@render props.children?.()}
	{:else if props.icon}
		{@render props.icon()}
	{:else}
		<Icon name={Inbox} class={state.iconClasses} aria-hidden="true" />
	{/if}

	<h3 class={state.titleClasses}>{state.title}</h3>
	{#if state.description}
		<p class={state.descriptionClasses}>{state.description}</p>
	{/if}
	{#if state.action}
		<div class={state.actionContainerClasses}>
			<button
				type="button"
				onclick={state.action.onClick}
				class={state.actionButtonClasses}
			>
				<Icon name={Plus} class={state.actionIconClasses} />
				{state.action.label}
			</button>
		</div>
	{/if}
</div>

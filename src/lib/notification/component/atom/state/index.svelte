<script lang="ts">
	import createStateState from '$stylist/notification/function/state/state/index.svelte';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';

	const props = $props();
	const state = createStateState(props);
	const Inbox = 'inbox';
	const Plus = 'add';
</script>

<div class={state.containerClasses}>
	{#if props.children}
		{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
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
			<button type="button" onclick={state.action.onClick} class={state.actionButtonClasses}>
				<Icon name={Plus} class={state.actionIconClasses} />
				{state.action.label}
			</button>
		</div>
	{/if}
</div>

<style>
	.empty-state {
		text-align: center;
		padding-top: 3rem;
		padding-bottom: 3rem;
	}

	.empty-state__icon {
		margin: 0 auto;
		width: 3rem;
		height: 3rem;
		color: var(--color-text-tertiary);
	}

	.empty-state__title {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.empty-state__description {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		max-width: 28rem;
		margin-left: auto;
		margin-right: auto;
	}

	.empty-state__actions {
		margin-top: 1.5rem;
	}

	.empty-state__action-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.5rem 1rem;
		border: 1px solid transparent;
		box-shadow: var(--shadow-sm);
		font-size: 0.875rem;
		font-weight: 500;
		border-radius: var(--border-radius-base, 0.375rem);
		color: var(--color-text-inverse);
		background-color: var(--color-primary-600);
		cursor: pointer;
		transition: background-color 0.15s ease;
	}

	.empty-state__action-btn:hover {
		background-color: var(--color-primary-700);
	}

	.empty-state__action-btn:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--color-primary-300);
	}

	.empty-state__action-icon {
		margin-left: -0.25rem;
		margin-right: 0.5rem;
		width: 1.25rem;
		height: 1.25rem;
	}
</style>

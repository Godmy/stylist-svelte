<script lang="ts">
	import createStepIconState from '$stylist/notification/function/state/step-icon/index.svelte';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';

	const props = $props();
	const state = createStepIconState(props);
</script>

<span {...props} class={state.classes}>
	{#if props.children}
		{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
	{:else if state.content.type === 'icon'}
		<Icon name={state.content.icon} size={state.content.size} />
	{:else if state.content.type === 'number' && state.content.value !== undefined}
		{state.content.value}
	{/if}
</span>

<style>
	.step-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		font-weight: 500;
		flex-shrink: 0;
		transition:
			background-color 0.2s ease,
			border-color 0.2s ease;
	}

	/* Sizes */
	.step-icon.size-sm {
		width: 1.5rem;
		height: 1.5rem;
		font-size: 0.75rem;
	}
	.step-icon.size-md {
		width: 2rem;
		height: 2rem;
		font-size: 0.875rem;
	}
	.step-icon.size-lg {
		width: 2.5rem;
		height: 2.5rem;
		font-size: 1rem;
	}

	/* Statuses */
	.step-icon.status-pending {
		border: 2px solid var(--color-border-secondary);
		background-color: var(--color-background-primary);
		color: var(--color-text-secondary);
	}

	.step-icon.status-active {
		border: 2px solid var(--color-primary-500);
		background-color: var(--color-primary-50);
		color: var(--color-primary-600);
	}

	.step-icon.status-completed {
		border: 2px solid var(--color-primary-500);
		background-color: var(--color-primary-500);
		color: var(--color-text-inverse);
	}

	.step-icon.status-error {
		border: 2px solid var(--color-danger-500);
		background-color: var(--color-danger-50);
		color: var(--color-danger-600);
	}
</style>

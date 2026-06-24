<script lang="ts">
	import { createToastState } from '$stylist/notification/function/state/toast/index.svelte';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';

	const props = $props();
	const state = createToastState(props);
</script>

{#if state.internalVisible}
	<div class={state.classes} role="alert" {...props}>
		<div class="toast-content">
			{#if props.title}
				<div class="toast-title">
					{@render props.title()}
				</div>
			{/if}
			{#if props.description}
				<div class="toast-description">
					{@render props.description()}
				</div>
			{/if}
			{#if props.children}
				{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
			{/if}
		</div>
		<button type="button" class="toast-close-button" onclick={state.closeToast} aria-label="Close">
			<Icon name="x" size="sm" />
		</button>
	</div>
{/if}

<style>
	.toast {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		border: 1px solid transparent;
		border-radius: var(--border-radius-base, 0.375rem);
		padding: 1rem;
		margin-bottom: 0.5rem;
		transition: opacity 0.3s ease;
	}

	.toast--hidden {
		opacity: 0;
		max-height: 0;
		overflow: hidden;
		margin: 0;
	}

	.toast--visible {
		opacity: 1;
		max-height: 300px;
	}

	.toast--info,
	.toast--silent {
		background-color: var(--color-info-50);
		border-color: var(--color-info-200);
		color: var(--color-info-700);
	}

	.toast--success {
		background-color: var(--color-success-50);
		border-color: var(--color-success-200);
		color: var(--color-success-700);
	}

	.toast--warning {
		background-color: var(--color-warning-50);
		border-color: var(--color-warning-200);
		color: var(--color-warning-700);
	}

	.toast--error {
		background-color: var(--color-danger-50);
		border-color: var(--color-danger-200);
		color: var(--color-danger-700);
	}

	.toast-close-button {
		background: none;
		border: none;
		color: var(--color-text-secondary);
		cursor: pointer;
		padding: var(--spacing-1, 0.25rem);
		border-radius: var(--border-radius-base, 0.375rem);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.toast-close-button:hover {
		background-color: var(--color-secondary-100);
		color: var(--color-text-primary);
	}

	.toast-content {
		flex: 1;
		min-width: 0;
	}

	.toast-title {
		font-weight: var(--font-weight-semibold, 600);
		margin-bottom: var(--spacing-1, 0.25rem);
	}

	.toast-description {
		font-size: var(--font-size-3, 0.875rem);
	}
</style>

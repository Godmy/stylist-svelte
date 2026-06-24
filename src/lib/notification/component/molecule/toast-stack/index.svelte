<script lang="ts">
	import createToastStackState from '$stylist/notification/function/state/toast-stack/index.svelte';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';

	const props = $props();
	const state = createToastStackState(props);
</script>

{#if state.toasts.length > 0}
	<div class={state.containerClasses} {...props}>
		{#each state.toasts.slice(0, state.maxToasts) as toast}
			<div class={`${state.getToastColor(toast.type)} ${props.toastClass ?? ''}`}>
				<div class="toast-item__body">
					<div class="toast-item__icon-wrap">
						<Icon
							name={state.getToastIcon(toast.type)}
							class={state.getToastIconColor(toast.type)}
						/>
					</div>

					<div class="toast-item__content">
						{#if toast.title}
							<h3 class="toast-item__title">{toast.title}</h3>
						{/if}
						<p class="toast-item__message">{toast.message}</p>

						{#if toast.actions && toast.actions.length > 0}
							<div class="toast-item__actions">
								{#each toast.actions as action}
									<button type="button" class="toast-item__action-btn" onclick={action.onClick}>
										{action.label}
									</button>
								{/each}
							</div>
						{/if}
					</div>

					<div class="toast-item__dismiss">
						<button
							type="button"
							class="toast-item__dismiss-btn"
							onclick={() => toast.onDismiss && toast.onDismiss()}
							aria-label="Dismiss toast"
						>
							<Icon name={state.X} class="toast-item__dismiss-icon" />
						</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
{/if}

<style>
	.toast-stack {
		position: fixed;
		z-index: var(--z-index-modal, 1000);
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.toast-stack--top-right {
		top: 1rem;
		right: 1rem;
	}
	.toast-stack--top-left {
		top: 1rem;
		left: 1rem;
	}
	.toast-stack--bottom-right {
		bottom: 1rem;
		right: 1rem;
	}
	.toast-stack--bottom-left {
		bottom: 1rem;
		left: 1rem;
	}
	.toast-stack--top-center {
		top: 1rem;
		left: 50%;
		transform: translateX(-50%);
	}
	.toast-stack--bottom-center {
		bottom: 1rem;
		left: 50%;
		transform: translateX(-50%);
	}

	.toast-item {
		width: 100%;
		max-width: 20rem;
		border-radius: var(--border-radius-large, 0.5rem);
		border: 1px solid transparent;
		padding: 1rem;
		box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
	}

	.toast-item--success {
		background-color: var(--color-success-50);
		border-color: var(--color-success-200);
		color: var(--color-success-800);
	}

	.toast-item--warning {
		background-color: #fefce8;
		border-color: #fde68a;
		color: #92400e;
	}

	.toast-item--error {
		background-color: var(--color-danger-50);
		border-color: var(--color-danger-200);
		color: var(--color-danger-800);
	}

	.toast-item--info {
		background-color: var(--color-primary-50);
		border-color: var(--color-primary-200);
		color: var(--color-primary-800);
	}

	.toast-item__body {
		display: flex;
		align-items: flex-start;
	}

	.toast-item__icon-wrap {
		flex-shrink: 0;
	}

	.toast-item__icon {
		width: 1.25rem;
		height: 1.25rem;
	}

	.toast-item__icon--success {
		color: var(--color-success-500);
	}
	.toast-item__icon--warning {
		color: #eab308;
	}
	.toast-item__icon--error {
		color: var(--color-danger-500);
	}
	.toast-item__icon--info {
		color: var(--color-primary-500);
	}

	.toast-item__content {
		margin-left: 0.75rem;
		flex: 1;
	}

	.toast-item__title {
		font-size: 0.875rem;
		font-weight: 500;
		margin: 0;
	}

	.toast-item__message {
		margin-top: 0.25rem;
		font-size: 0.875rem;
	}

	.toast-item__actions {
		margin-top: 0.75rem;
		display: flex;
		gap: 0.5rem;
	}

	.toast-item__action-btn {
		display: inline-flex;
		align-items: center;
		border-radius: var(--border-radius-base, 0.375rem);
		border: 1px solid transparent;
		background-color: var(--color-primary-100);
		padding: 0.25rem 0.625rem;
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-primary-700);
		cursor: pointer;
		transition: background-color 0.15s ease;
	}

	.toast-item__action-btn:hover {
		background-color: var(--color-primary-200);
	}

	.toast-item__action-btn:focus {
		outline: none;
	}

	.toast-item__dismiss {
		margin-left: 1rem;
		flex-shrink: 0;
	}

	.toast-item__dismiss-btn {
		background: none;
		border: none;
		cursor: pointer;
		color: var(--color-text-tertiary);
		padding: 0;
		display: flex;
		align-items: center;
	}

	.toast-item__dismiss-btn:hover {
		color: var(--color-text-secondary);
	}

	.toast-item__dismiss-icon {
		width: 1.25rem;
		height: 1.25rem;
	}
</style>

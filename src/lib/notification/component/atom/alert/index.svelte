<script lang="ts">
	import { createAlertState } from '$stylist/notification/function/state/alert/index.svelte';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';

	const props = $props();
	const state = createAlertState(props);
</script>

{#if state.open}
	<div role="alert" class={state.alertClasses} aria-live="polite" aria-atomic="true">
		<div class={state.mainContainerClasses}>
			{#if props.icon}
				<div class={state.iconContainerClasses}>
					<Icon name={state.IconComponent} class={state.iconClasses} aria-hidden="true" />
				</div>
			{/if}
			<div class={state.textContainerClasses}>
				{#if props.title}
					<h3 class={state.titleClasses}>{props.title}</h3>
				{/if}
				<div class={state.contentContainerClasses}>
					<p>
						{#if props.content}
							{@render props.content()}
						{:else if props.children}
							{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
						{/if}
					</p>
				</div>
			</div>
			{#if props.closable}
				<div class={state.closeButtonContainerClasses}>
					<button
						type="button"
						class={state.closeButtonClasses}
						aria-label="Закрыть"
						onclick={state.handleClose}
					>
						<Icon name={state.XIcon} class="alert-close-icon" aria-hidden="true" />
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.alert-container {
		padding: 1rem;
		border-radius: var(--border-radius-base, 0.375rem);
		border: 1px solid transparent;
	}

	.alert-container.variant-info {
		background-color: var(--color-info-50);
		border-color: var(--color-info-200);
		color: var(--color-info-800);
	}

	.alert-container.variant-success {
		background-color: var(--color-success-50);
		border-color: var(--color-success-200);
		color: var(--color-success-800);
	}

	.alert-container.variant-warning {
		background-color: var(--color-warning-50);
		border-color: var(--color-warning-200);
		color: var(--color-warning-800);
	}

	.alert-container.variant-error,
	.alert-container.variant-danger {
		background-color: var(--color-danger-50);
		border-color: var(--color-danger-200);
		color: var(--color-danger-800);
	}

	.alert-container.variant-primary {
		background-color: var(--color-primary-50);
		border-color: var(--color-primary-200);
		color: var(--color-primary-800);
	}

	.alert-container.variant-secondary {
		background-color: var(--color-secondary-50);
		border-color: var(--color-secondary-200);
		color: var(--color-secondary-800);
	}

	.alert-content {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
	}

	.alert-icon {
		flex-shrink: 0;
		width: 1.25rem;
		height: 1.25rem;
	}

	.alert-icon.variant-info {
		color: var(--color-info-500);
	}
	.alert-icon.variant-success {
		color: var(--color-success-500);
	}
	.alert-icon.variant-warning {
		color: var(--color-warning-500);
	}
	.alert-icon.variant-error,
	.alert-icon.variant-danger {
		color: var(--color-danger-500);
	}
	.alert-icon.variant-primary {
		color: var(--color-primary-500);
	}
	.alert-icon.variant-secondary {
		color: var(--color-secondary-500);
	}

	.alert-title {
		font-size: 0.875rem;
		font-weight: 600;
		margin: 0 0 0.25rem;
	}

	.alert-description {
		font-size: 0.875rem;
	}

	.alert-close-icon {
		width: 1.25rem;
		height: 1.25rem;
	}
</style>

<script lang="ts">
	import type { NotificationStateProps } from '$stylist/management/interface/recipe/notification';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import createNotificationState from '$stylist/management/function/state/notification/index.svelte';

	let props: NotificationStateProps = $props();
	const state = createNotificationState(props);
</script>

{#if state.isVisible}
	<div
		class={`notification-atom__base notification-atom__position notification-atom__type--${state.visualType} ${state.containerClasses ?? ''}`}
		role="alert"
		{...state.restProps}
	>
		<div class="_c1">
			<div class="_c2">
				<BaseIcon name={state.iconComponent} class="_c3"></BaseIcon>
			</div>
			<div class="notification-atom__content">
				{#if state.title}
					<p class="notification-atom__header">
						{state.title}
					</p>
				{/if}
				{#if state.message}
					<p class="notification-atom__body">
						{state.message}
					</p>
				{/if}
				{#if props.children}
					<div class="notification-atom__body">
						{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
					</div>
				{/if}
			</div>
			{#if state.closable}
				<div class="_c4">
					<button
						type="button"
						class="notification-atom__close-button"
						onclick={state.handleClose}
						aria-label="Close"
					>
						<BaseIcon name="x" class="_c3" />
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	._c1 {
		display: flex;
		align-items: flex-start;
	}
	._c2 {
		flex-shrink: 0;
	}
	._c3 {
		height: 1.25rem;
		width: 1.25rem;
	}
	._c4 {
		margin-left: 1rem;
		display: flex;
		flex-shrink: 0;
	}

	.notification-atom__type--info {
		background-color: var(--color-info-50, var(--color-primary-50));
		border-color: var(--color-info-200, var(--color-primary-200));
		color: var(--color-info-800, var(--color-primary-800));
	}
	.notification-atom__type--success {
		background-color: var(--color-success-50, #ecfdf5);
		border-color: var(--color-success-200, #a7f3d0);
		color: var(--color-success-800, #065f46);
	}
	.notification-atom__type--warning {
		background-color: var(--color-warning-50, #fffbeb);
		border-color: var(--color-warning-200, #fde68a);
		color: var(--color-warning-800, #92400e);
	}
	.notification-atom__type--error {
		background-color: var(--color-danger-50, #fef2f2);
		border-color: var(--color-danger-200, #fecaca);
		color: var(--color-danger-800, #991b1b);
	}

	.notification-atom__position {
		top: 1rem;
		right: 1rem;
		left: 50%;
		bottom: 1rem;
		transform: translateX(-50%);
	}

	.notification-atom__base {
		position: fixed;
		width: 100%;
		padding: 1rem;
		border-radius: 0.5rem;
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
	}

	.notification-atom__content {
		margin-left: 0.75rem;
		width: 0;
		flex: 1 1 0%;
	}

	.notification-atom__header {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
	}

	.notification-atom__body {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.notification-atom__close-button {
		display: inline-flex;
		color: var(--color-text-secondary);
	}
	.notification-atom__close-button:hover {
		color: var(--color-text-primary);
	}
	.notification-atom__close-button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}
</style>

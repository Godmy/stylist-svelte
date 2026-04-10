<script lang="ts">
	import { createToastState } from '$stylist/notification/function/state/toast';
	import { Icon } from '$stylist';

	const props = $props();
	const state = createToastState(props);
</script>

{#if state.internalVisible}
	<div
		class={state.classes}
		role="alert"
		{...props}
	>
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
				{@render props.children?.()}
			{/if}
		</div>
		<button
			type="button"
			class="toast-close-button"
			onclick={state.closeToast}
			aria-label="Close"
		>
			<Icon name="x" size="sm" />
		</button>
	</div>
{/if}

<style>
.toast-base {
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
}

.toast-hidden {
	opacity: var(--opacity-0);
	max-height: var(--size-0);
	overflow: hidden;
	margin: 0;
}

.toast-visible {
	opacity: var(--opacity-100);
	max-height: 300px;
}

.toast-variant-info {
	background-color: var(--color-info-50) !important;
	border-color: var(--color-info-200) !important;
	color: var(--color-info-700) !important;
}

.toast-variant-success {
	background-color: var(--color-success-50) !important;
	border-color: var(--color-success-200) !important;
	color: var(--color-success-700) !important;
}

.toast-variant-warning {
	background-color: var(--color-warning-50) !important;
	border-color: var(--color-warning-200) !important;
	color: var(--color-warning-700) !important;
}

.toast-variant-error {
	background-color: var(--color-danger-50) !important;
	border-color: var(--color-danger-200) !important;
	color: var(--color-danger-700) !important;
}

.toast-close-button {
	background: none;
	border: none;
	color: var(--color-text-secondary);
	cursor: pointer;
	padding: var(--spacing-1);
	border-radius: var(--border-radius-base);
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
	min-width: var(--size-0);
}

.toast-title {
	font-weight: var(--font-weight-semibold);
	margin-bottom: var(--spacing-1);
}

.toast-description {
	font-size: var(--font-size-3);
}
</style>

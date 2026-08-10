<script lang="ts">
	import DashboardStatusPill from '$stylist/dashboard/component/atom/dashboard-status-pill/index.svelte';

	type DashboardRunButtonStatus = 'idle' | 'running' | 'ok' | 'warning' | 'error' | 'stale' | 'unknown';

	let {
		label,
		status = 'idle',
		disabled = true,
		pending = false,
		confirmRequired = false,
		title,
		class: className = '',
		onRun,
		onCancel
	}: {
		label: string;
		status?: DashboardRunButtonStatus;
		disabled?: boolean;
		pending?: boolean;
		confirmRequired?: boolean;
		title?: string;
		class?: string;
		onRun?: () => void;
		onCancel?: () => void;
	} = $props();

	const isDisabled = $derived(disabled || (!onRun && !pending));
	const displayStatus = $derived(pending ? 'running' : status);
</script>

<button
	type="button"
	class="c-dashboard-run-button {className}"
	class:c-dashboard-run-button--pending={pending}
	class:c-dashboard-run-button--confirm={confirmRequired}
	disabled={isDisabled}
	title={title ?? (isDisabled ? 'Pipeline commands require a server command boundary.' : label)}
	onclick={() => {
		if (pending) {
			onCancel?.();
		} else {
			onRun?.();
		}
	}}
>
	<span class="c-dashboard-run-button__label">{pending ? 'Running' : label}</span>
	<DashboardStatusPill status={displayStatus} label={confirmRequired ? 'confirm' : displayStatus} compact />
</button>

<style>
	.c-dashboard-run-button {
		box-sizing: border-box;
		display: inline-flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.65rem;
		min-width: 9.5rem;
		min-height: 2.35rem;
		padding: 0.45rem 0.65rem 0.45rem 0.8rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 88%, transparent);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		font: inherit;
		font-size: 0.8rem;
		font-weight: 700;
		cursor: pointer;
	}

	.c-dashboard-run-button:disabled {
		cursor: not-allowed;
		opacity: 0.64;
	}

	.c-dashboard-run-button--pending {
		border-color: color-mix(in srgb, var(--color-info-500, #0284c7) 36%, var(--color-border-primary));
	}

	.c-dashboard-run-button--confirm {
		border-color: color-mix(in srgb, var(--color-warning-500, #d97706) 36%, var(--color-border-primary));
	}

	.c-dashboard-run-button__label {
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>

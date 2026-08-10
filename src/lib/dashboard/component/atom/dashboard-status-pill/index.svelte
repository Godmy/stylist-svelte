<script lang="ts">
	type DashboardStatusPillStatus =
		| 'ok'
		| 'success'
		| 'warning'
		| 'error'
		| 'failed'
		| 'running'
		| 'idle'
		| 'info'
		| 'stale'
		| 'unknown'
		| 'no-data';

	let {
		status = 'unknown',
		label = status,
		tone,
		title,
		compact = false,
		class: className = ''
	}: {
		status?: DashboardStatusPillStatus;
		label?: string;
		tone?: DashboardStatusPillStatus;
		title?: string;
		compact?: boolean;
		class?: string;
	} = $props();

	const visualStatus = $derived(tone ?? status);
</script>

<span
	class="c-dashboard-status-pill c-dashboard-status-pill--{visualStatus} {className}"
	class:c-dashboard-status-pill--compact={compact}
	title={title ?? label}
	data-status={status}
>
	<span class="c-dashboard-status-pill__dot" aria-hidden="true"></span>
	<span class="c-dashboard-status-pill__label">{label}</span>
</span>

<style>
	.c-dashboard-status-pill {
		box-sizing: border-box;
		display: inline-flex;
		align-items: center;
		min-width: 0;
		max-width: 100%;
		min-height: 1.55rem;
		gap: 0.4rem;
		padding: 0.22rem 0.55rem;
		border: 1px solid var(--dashboard-pill-border, var(--color-border-primary));
		border-radius: 999px;
		background: var(--dashboard-pill-bg, var(--color-background-secondary));
		color: var(--dashboard-pill-color, var(--color-text-secondary));
		font-size: 0.72rem;
		font-weight: 700;
		line-height: 1;
		white-space: nowrap;
	}

	.c-dashboard-status-pill--compact {
		min-height: 1.25rem;
		padding: 0.14rem 0.42rem;
		font-size: 0.68rem;
	}

	.c-dashboard-status-pill__dot {
		flex: 0 0 auto;
		width: 0.45rem;
		height: 0.45rem;
		border-radius: 999px;
		background: currentColor;
	}

	.c-dashboard-status-pill__label {
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.c-dashboard-status-pill--ok,
	.c-dashboard-status-pill--success {
		--dashboard-pill-bg: color-mix(in srgb, var(--color-success-500, #16a34a) 12%, transparent);
		--dashboard-pill-border: color-mix(in srgb, var(--color-success-500, #16a34a) 36%, var(--color-border-primary));
		--dashboard-pill-color: var(--color-success-700, #15803d);
	}

	.c-dashboard-status-pill--warning {
		--dashboard-pill-bg: color-mix(in srgb, var(--color-warning-500, #d97706) 13%, transparent);
		--dashboard-pill-border: color-mix(in srgb, var(--color-warning-500, #d97706) 38%, var(--color-border-primary));
		--dashboard-pill-color: var(--color-warning-700, #b45309);
	}

	.c-dashboard-status-pill--error,
	.c-dashboard-status-pill--failed {
		--dashboard-pill-bg: color-mix(in srgb, var(--color-danger-500, #dc2626) 12%, transparent);
		--dashboard-pill-border: color-mix(in srgb, var(--color-danger-500, #dc2626) 38%, var(--color-border-primary));
		--dashboard-pill-color: var(--color-danger-700, #b91c1c);
	}

	.c-dashboard-status-pill--running {
		--dashboard-pill-bg: color-mix(in srgb, var(--color-info-500, #0284c7) 12%, transparent);
		--dashboard-pill-border: color-mix(in srgb, var(--color-info-500, #0284c7) 38%, var(--color-border-primary));
		--dashboard-pill-color: var(--color-info-700, #0369a1);
	}

	.c-dashboard-status-pill--info {
		--dashboard-pill-bg: color-mix(in srgb, var(--color-info-500, #0284c7) 9%, transparent);
		--dashboard-pill-border: color-mix(in srgb, var(--color-info-500, #0284c7) 28%, var(--color-border-primary));
		--dashboard-pill-color: var(--color-info-700, #0369a1);
	}

	.c-dashboard-status-pill--idle,
	.c-dashboard-status-pill--stale,
	.c-dashboard-status-pill--unknown,
	.c-dashboard-status-pill--no-data {
		--dashboard-pill-bg: color-mix(in srgb, var(--color-text-tertiary) 9%, transparent);
		--dashboard-pill-border: color-mix(in srgb, var(--color-text-tertiary) 24%, var(--color-border-primary));
		--dashboard-pill-color: var(--color-text-secondary);
	}
</style>

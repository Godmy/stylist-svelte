<script lang="ts">
	import type { RecipePerformanceMonitor } from '$stylist/management/interface/recipe/performance-monitor';
	import createPerformanceMonitorState from '$stylist/management/function/state/performance-monitor/index.svelte';

	let {
		label = '',
		value = 0,
		max = 100,
		unit = '%',
		status = 'normal',
		class: className = ''
	}: RecipePerformanceMonitor = $props();

	const state = createPerformanceMonitorState({
		label,
		value,
		max,
		unit,
		status,
		class: className
	});
</script>

<div class="performance-monitor">
	<div class="performance-monitor__header">
		<h3 class="performance-monitor__title">{state.label}</h3>
		<span class="performance-monitor__value">{state.percentage}{state.unit}</span>
	</div>
	<div class="performance-monitor__track">
		<div
			class={`performance-monitor__bar ${state.statusBarClass}`}
			style={`width: ${state.progressWidth}`}
		></div>
	</div>
</div>

<style>
	.performance-monitor {
		display: flex;
		flex-direction: column;
	}

	.performance-monitor__header {
		margin-bottom: 0.25rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.performance-monitor__title {
		font-weight: 500;
	}

	.performance-monitor__value {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.performance-monitor__track {
		height: 0.625rem;
		width: 100%;
		border-radius: 9999px;
		background-color: var(--color-background-tertiary);
	}

	.performance-monitor__bar {
		height: 0.625rem;
		border-radius: 9999px;
		background-color: var(--color-primary-500);
	}
	.performance-monitor__bar--normal {
		background-color: var(--color-success-500, #10b981);
	}
	.performance-monitor__bar--warning {
		background-color: var(--color-warning-500, #f59e0b);
	}
	.performance-monitor__bar--critical {
		background-color: var(--color-danger-500);
	}
</style>

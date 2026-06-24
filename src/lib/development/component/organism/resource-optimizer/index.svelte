<script lang="ts">
	import type { RecipeResourceOptimizer } from '$stylist/development/interface/recipe/resource-optimizer';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import { createResourceOptimizerState } from '$stylist/development/function/state/resource-optimizer/index.svelte';

	const HardDrive = 'hard-drive';
	const Zap = 'zap';
	const Image = 'image';
	const File = 'file';
	const Package = 'package';
	const Upload = 'upload';
	const Download = 'download';
	const Settings = 'settings';

	let {
		resources = [],
		suggestions = [],
		showResourceDetails = true,
		showOptimizationSuggestions = true,
		showPrioritization = true,
		showSizeComparison = true,
		onResourceOptimize,
		onApplySuggestions,
		title = 'Resource Optimizer',
		description,
		class: className = '',
		...restProps
	}: RecipeResourceOptimizer = $props();

	const state = createResourceOptimizerState({
		resources,
		suggestions,
		showResourceDetails,
		showOptimizationSuggestions,
		showPrioritization,
		showSizeComparison,
		onResourceOptimize,
		onApplySuggestions,
		title,
		description,
		class: className,
		...restProps
	});
</script>

<div class={`ro-container ${state.className}`} {...restProps}>
	<div class={`ro-header ${state.headerClass}`}>
		<div class="ro-header-inner">
			<BaseIcon name={Zap} style="width:1.5rem;height:1.5rem;margin-right:0.5rem;color:#6b7280" />
			<div>
				<h3 class="ro-title">{state.title}</h3>
				{#if state.description}
					<p class="ro-desc">{state.description}</p>
				{/if}
			</div>
		</div>
	</div>

	<div class="ro-body">
		<div class="ro-stats">
			<div class="ro-stat-card">
				<div class="ro-stat-value">{state.resources.length}</div>
				<div class="ro-stat-label">Total Resources</div>
			</div>
			<div class="ro-stat-card">
				<div class="ro-stat-value">{state.totalSize}</div>
				<div class="ro-stat-label">Total Size</div>
			</div>
		</div>

		<div class="ro-resource-list">
			{#each state.resources as resource (resource.id)}
				<div class="ro-resource-card">
					<div class="ro-resource-header">
						<div class="ro-resource-left">
							<BaseIcon
								name={state.getResourceTypeIcon(resource.type)}
								style="width:1.25rem;height:1.25rem;margin-right:0.5rem;color:#9ca3af"
							/>
							<span class="ro-resource-name">{resource.name}</span>
						</div>
						<span class="ro-resource-size">{state.formatBytes(resource.size)}</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.ro-container {
		overflow: hidden;
		border-radius: 0.5rem;
		border: 1px solid #e5e7eb;
		background: white;
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
	}
	.ro-header {
		border-bottom: 1px solid var(--color-border-primary);
		padding: 1.25rem 1.5rem;
	}
	.ro-header-inner {
		display: flex;
		align-items: center;
	}
	.ro-title {
		font-size: 1.125rem;
		font-weight: 500;
		color: #111827;
	}
	.ro-desc {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		color: #6b7280;
	}
	.ro-body {
		padding: 1.25rem 1.5rem;
	}
	.ro-stats {
		margin-bottom: 1.5rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}
	.ro-stat-card {
		border-radius: 0.25rem;
		background: #f9fafb;
		padding: 1rem;
	}
	.ro-stat-value {
		font-size: 1.5rem;
		font-weight: 600;
		color: #111827;
	}
	.ro-stat-label {
		font-size: 0.875rem;
		color: #6b7280;
	}
	.ro-resource-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.ro-resource-card {
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
		padding: 1rem;
	}
	.ro-resource-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.ro-resource-left {
		display: flex;
		align-items: center;
	}
	.ro-resource-name {
		font-weight: 500;
		color: #111827;
	}
	.ro-resource-size {
		font-size: 0.875rem;
		color: #6b7280;
	}
</style>

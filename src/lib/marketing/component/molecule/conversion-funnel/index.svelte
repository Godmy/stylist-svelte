<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import type { ConversionFunnelProps } from '$stylist/marketing/type/struct/conversion-funnel/conversionfunnel-props';
	import createConversionFunnelState from '$stylist/marketing/function/state/conversion-funnel/index.svelte';
	import { ConversionFunnelStyleManager } from '$stylist/marketing/class/style-manager/conversion-funnel';

	const BarChart3 = 'bar-chart-3';
	const ArrowRight = 'arrow-right';

	let props: ConversionFunnelProps = $props();
	const state = createConversionFunnelState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class={state.headerClasses}>
		<div class="cf-row">
			<BaseIcon
				name={BarChart3}
				style="margin-right:0.5rem;width:1.25rem;height:1.25rem;color:var(--color-text-secondary)"
			/>
			<h3 class="cf-title">{state.title}</h3>
		</div>
		{#if state.subtitle}
			<p class="cf-subtitle">{state.subtitle}</p>
		{/if}
	</div>

	<div class="cf-body">
		<div class="cf-steps">
			{#each state.steps as step, index}
				<div>
					<div class="cf-step-header">
						<div class="cf-row">
							<span class="cf-step-name">{step.name}</span>
							{#if state.showValues}
								<span class="cf-step-extra">({step.value})</span>
							{/if}
							{#if state.showPercentage}
								<span class="cf-step-extra"
									>({Math.round((step.value / state.steps[0].value) * 100)}% of initial)</span
								>
							{/if}
						</div>

						{#if state.showConversionRate && index > 0}
							<div class="cf-conversion">
								Conversion: {state.getConversionRate(index)}%
								{#if state.showTrend}
									<span class="cf-dropoff">(Dropoff: {state.getDropoff(index)}%)</span>
								{/if}
							</div>
						{/if}
					</div>

					<div class="cf-bar-wrapper">
						<div
							class={ConversionFunnelStyleManager.getFunnelStepVisualizationClass()}
							style={ConversionFunnelStyleManager.getFunnelStepVisualizationStyle(
								step.value,
								state.maxValue,
								step.color
							)}
						>
							<span class="cf-bar-label"
								>{step.value} ({Math.round((step.value / state.steps[0].value) * 100)}%)</span
							>
						</div>

						{#if state.showPercentage}
							<div
								class={ConversionFunnelStyleManager.getPercentageLabelClass()}
								style={`width: ${(step.value / state.maxValue) * 100}%;`}
							>
								{Math.round((step.value / state.steps[0].value) * 100)}%
							</div>
						{/if}
					</div>

					{#if index < state.steps.length - 1}
						<div class="cf-arrow">
							<BaseIcon
								name={ArrowRight}
								style="width:1.25rem;height:1.25rem;color:var(--color-text-tertiary)"
							/>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.cf-row {
		display: flex;
		align-items: center;
	}

	.cf-title {
		font-size: 1.125rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.cf-subtitle {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.cf-body {
		padding: 1.5rem;
	}

	.cf-steps {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.cf-step-header {
		margin-bottom: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.cf-step-name {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.cf-step-extra {
		margin-left: 0.5rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.cf-conversion {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.cf-dropoff {
		margin-left: 0.5rem;
		font-size: 0.75rem;
	}

	.cf-bar-wrapper {
		position: relative;
	}

	.cf-bar-label {
		margin-left: 0.75rem;
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-text-inverse);
	}

	.cf-arrow {
		margin-top: 1rem;
		display: flex;
		justify-content: center;
	}
</style>

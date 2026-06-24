<script lang="ts">
	import type { RecipeKPIIndicator } from '$stylist/management/interface/recipe/kpi-indicator';

	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	import createKPIIndicatorState from '$stylist/management/function/state/kpi-indicator/index.svelte';

	let props: RecipeKPIIndicator = $props();

	const state = createKPIIndicatorState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class="_c1">
		<div>
			<h3 class={state.titleClasses}>{state.label}</h3>

			<p class={state.valueClasses}>
				{state.currentValue}{state.unit}

				<span class="_c2">/ {state.targetValue}{state.unit}</span>
			</p>
		</div>

		<div class="_c3">
			<div class="_c4">
				<div class="_c5"></div>
			</div>

			<div class="_c3">
				<span class={state.trendColorClasses}>
					<BaseIcon name={state.trendIcon} class="_c6" />
				</span>

				{#if state.trendValue !== 0}
					<span class={`${state.trendColorClasses} _c9`}>
						{state.trendValue > 0 ? '+' : ''}{state.trendValue}%
					</span>
				{/if}
			</div>
		</div>
	</div>

	<div class="_c7">
		<div class="_c8">
			<span>{state.statusText}</span>

			<span>{state.percentage}%</span>
		</div>

		<div class={state.progressTrackClasses}>
			<div class={state.progressFillClasses} style={`width: ${state.percentage}%`}></div>
		</div>
	</div>
</div>

<style>
	._c1 {
		display: flex;

		align-items: center;

		justify-content: space-between;
	}

	._c2 {
		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 400;

		color: var(--stylist-kpi-subvalue-text);
	}

	._c3 {
		display: flex;

		align-items: center;
	}

	._c4 {
		margin-right: 0.75rem;
	}

	._c5 {
		height: 0.75rem;

		width: 0.75rem;

		border-radius: 9999px;
	}

	._c6 {
		height: 1.25rem;

		width: 1.25rem;
	}

	._c7 {
		margin-top: 0.75rem;
	}

	._c8 {
		margin-bottom: 0.25rem;

		display: flex;

		align-items: center;

		justify-content: space-between;

		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--stylist-kpi-status-text);
	}

	._c5 {
		background-color: currentColor;
	}

	._c9 {
		margin-left: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>

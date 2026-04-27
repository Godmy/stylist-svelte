<script lang="ts">
	import { createProgressBarState } from '$stylist/notification/function/state/progress-bar';

	const props = $props();
	const state = createProgressBarState(props);
</script>

<div class={state.containerClass} {...props}>
	{#if state.label || state.showPercentage}
		<div class={state.labelWrapperClass}>
			{#if state.label}
				<span class={state.labelClass}>{state.label}</span>
			{/if}
			{#if state.showPercentage}
				<span class={state.labelClass}>{state.percentage.toFixed(0)}%</span>
			{/if}
		</div>
	{/if}
	<div class={state.trackClass}>
		<div
			class={state.fillClass}
			style={state.fillStyle}
			role="progressbar"
			aria-valuenow={state.value}
			aria-valuemin={0}
			aria-valuemax={state.max}
			aria-label={state.label}
		></div>
	</div>
</div>







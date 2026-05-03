<script lang="ts">
	import { createProgressBarWithLabelState } from '$stylist/notification/function/state/progress-bar-with-label';

	const props = $props();
	const state = createProgressBarWithLabelState(props);
</script>

<div class={state.containerClasses} {...props}>
	{#if state.label}
		<div class={state.labelWrapperClasses}>
			<span class={state.labelClasses}>{state.label}</span>
			{#if state.showPercentage}
				<span class={state.labelClasses}>{state.percentage}%</span>
			{/if}
		</div>
	{/if}
	<div class={state.trackClasses}>
		<div
			class={state.fillClasses}
			style={`width: ${state.percentage}%`}
		></div>
	</div>
	{#if !state.label && state.showPercentage}
		<div class="mt-1 text-right">
			<span class="text-sm font-medium">{state.percentage}%</span>
		</div>
	{/if}
</div>








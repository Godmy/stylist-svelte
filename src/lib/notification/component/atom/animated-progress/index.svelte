<script lang="ts">
	import { createAnimatedProgressState } from '$stylist/notification/function/state/animated-progress';

	const props = $props();
	const state = createAnimatedProgressState(props);
</script>

<div class={state.containerClasses} {...props}>
	<div class="mb-1 flex justify-between">
		<span class={state.labelClasses}>{props.label ?? 'Progress'}</span>
		{#if props.showPercentage}
			<span class={state.labelClasses}>{state.percentage}%</span>
		{/if}
	</div>
	<div class={state.progressBarBgClasses}>
		<div class={state.progressFillClasses} style={`width: ${state.percentage}%`}></div>
	</div>
</div>







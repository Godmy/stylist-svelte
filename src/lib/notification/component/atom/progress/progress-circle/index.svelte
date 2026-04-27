<script lang="ts">
	import { createProgressCircleState } from '$stylist/notification/function/state/progress-circle';

	const props = $props();
	const state = createProgressCircleState(props);
</script>

<div class={state.containerClass} {...props}>
	<svg class={state.svgClass} viewBox="0 0 100 100">
		<circle
			cx="50"
			cy="50"
			r="45"
			fill="none"
			stroke="currentColor"
			stroke-width={state.strokeWidth}
			class={state.backgroundCircleClass}
		/>
		<circle
			cx="50"
			cy="50"
			r="45"
			fill="none"
			stroke="currentColor"
			stroke-width={state.strokeWidth}
			stroke-linecap="round"
			stroke-dasharray={state.circumference}
			stroke-dashoffset={state.strokeDashoffset}
			transform="rotate(-90 50 50)"
			class={state.progressCircleClass}
			style="transition-property: stroke-dashoffset, stroke"
		/>
	</svg>
	<span class={state.labelClass}>
		{state.normalizedProgress}%
	</span>
</div>

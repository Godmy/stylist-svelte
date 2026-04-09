<script lang="ts">
	import type { StageProps } from '$stylist/canvas/type/struct/stage/stage-props';
	import { createStageState } from '$stylist/canvas/function/state/stage';

	let props: StageProps = $props();
	const state = createStageState(props);
</script>

<div class={state.classes} style={state.worldStyle} {...state.restProps}>
	<div class={state.worldClass} style={state.transformStyle}>
		{@render props.children?.()}
	</div>
</div>

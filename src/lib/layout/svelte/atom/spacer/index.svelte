	<script lang="ts">
	import type { SpacerProps } from '$stylist/layout/type/struct/spacer/spacer-props';
	import { createSpacerState } from '$stylist/layout/function/state/spacer';

	let props: SpacerProps = $props();
	const state = createSpacerState(props);
</script>

<div
	class={state.classes}
	style="--spacer-size: {state.sizeValue}"
	aria-hidden="true"
	{...state.restProps}
></div>






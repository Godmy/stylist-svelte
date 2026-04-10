<script lang="ts">
	import { createStepConnectorState } from '$stylist/notification/function/state/step-connector';

	const props = $props();
	const state = createStepConnectorState(props);
</script>

<div {...props} class={state.classes}>
	{#if props.children}
		{@render props.children?.()}
	{/if}
</div>

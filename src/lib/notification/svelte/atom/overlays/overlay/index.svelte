<script lang="ts">
	import { createOverlayState } from '$stylist/notification/function/state/overlay';

	const props = $props();
	const state = createOverlayState(props);
</script>

{#if state.isLoading}
	<div class="loading-overlay">
		<div class="loading-content">
			<div class={state.spinnerClasses}></div>
			<div class="loading-message">{state.message}</div>
		</div>
	</div>
{/if}




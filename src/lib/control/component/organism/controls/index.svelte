<script lang="ts">
	import createControlsState from '$stylist/control/function/state/controls/index.svelte';

	let props = $props();
	const state = createControlsState(props);
</script>

<div class="sr-only" aria-hidden="true"></div>

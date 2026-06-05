<script lang="ts">
	import createResponseViewerState from '$stylist/notification/function/state/response-viewer/index.svelte';

	const props = $props();
	const state = createResponseViewerState(props);
</script>

<div class={state.containerClasses} {...props}>
	<div class={state.titleClasses}>{state.title}</div>
	<div class={state.statusClasses}>Status: {state.status}</div>
	<pre class={state.responsePreClasses}>{state.response}</pre>
</div>

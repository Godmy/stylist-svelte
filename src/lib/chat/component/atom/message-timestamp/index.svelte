<script lang="ts">
	import createMessageTimestampState from './state.svelte';
	import type { SlotMessageTimestamp as MessageTimestampContract } from '$stylist/chat/interface/slot/message-timestamp';

	let props: MessageTimestampContract = $props();

	const state = createMessageTimestampState(props);
</script>

<time class={state.classes} datetime={state.formattedDateTime}>
	{state.formattedTime}
</time>

<style>
</style>

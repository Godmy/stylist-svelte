<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { Check, CheckCheck } from 'lucide-svelte';
	import type { MessageStatusProps } from '$stylist/design-system';
	import { createMessageStatusState } from '$stylist/design-system/models/information/message-status.svelte';

	type Props = MessageStatusProps & HTMLAttributes<HTMLDivElement>;

	let props: Props = $props();

	const state = createMessageStatusState(props);
	const restProps = $derived(
		(() => {
			const { status: _status, size: _size, ...rest } = props;
			return rest;
		})()
	);
</script>

<div class={state.containerClasses} {...restProps}>
	{#if state.isDoubleCheck}
		<CheckCheck class={state.iconClasses} />
	{:else}
		<Check class={state.iconClasses} />
	{/if}
</div>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { Icon as BaseIcon } from '$stylist/components/atoms';
const Check = 'check';
const CheckCheck = 'check-check';

	import type { MessageStatusProps } from '$stylist/design-system/contracts/information/indicators';
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
		<BaseIcon name={CheckCheck} class={state.iconClasses} />
	{:else}
		<BaseIcon name={Check} class={state.iconClasses} />
	{/if}
</div>


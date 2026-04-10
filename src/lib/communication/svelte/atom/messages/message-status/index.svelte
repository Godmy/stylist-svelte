<script lang="ts">
	import type { TokenMessageStatus } from '$stylist/communication/type/enum/message-status';
	import { createMessageStatusState } from '$stylist/communication/function/state/message-status';

	interface Props {
		status?: TokenMessageStatus;
		size?: 'sm' | 'md' | 'lg';
		class?: string;
	}

	let { status = 'sent', size = 'sm', class: className = '' }: Props = $props();

	const state = createMessageStatusState({ status, size });
</script>

<span class={state.containerClasses} class:{className}>
	<svg class={state.iconClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		{#if state.isDoubleCheck}
			<path d="M1 13l5 5L17 7" />
			<path d="M7 13l5 5L23 7" />
		{:else}
			<path d="M4 12l6 6L20 6" />
		{/if}
	</svg>
</span>




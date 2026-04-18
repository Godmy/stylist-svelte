<script lang="ts">
	import type { TokenMessageStatus } from '$stylist/communication/type/enum/message-status';
	import type { RecipeMessageStatusProps as RecipeMessageStatusProps } from '$stylist/communication/interface/recipe/message-status-props';
	import { createMessageStatusState } from '$stylist/communication/function/state/message-status';

	let props: RecipeMessageStatusProps = $props();

	const state = createMessageStatusState({ status: props.status ?? 'sent', size: props.size ?? 'sm', class: props.class });
</script>

<span class={state.containerClasses} class:{props.class}>
	<svg class={state.iconClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		{#if state.isDoubleCheck}
			<path d="M1 13l5 5L17 7" />
			<path d="M7 13l5 5L23 7" />
		{:else}
			<path d="M4 12l6 6L20 6" />
		{/if}
	</svg>
</span>




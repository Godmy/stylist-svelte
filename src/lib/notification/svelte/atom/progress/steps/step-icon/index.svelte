<script lang="ts">
	import { createStepIconState } from '$stylist/notification/function/state/step-icon';
	import { Icon } from '$stylist';

	const props = $props();
	const state = createStepIconState(props);
</script>

<span {...props} class={state.classes}>
	{#if props.children}
		{@render props.children?.()}
	{:else if state.content.type === 'icon'}
		<Icon name={state.content.icon} size={state.content.size} />
	{:else if state.content.type === 'number' && state.content.value !== undefined}
		{state.content.value}
	{/if}
</span>

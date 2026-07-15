<script lang="ts">
	import type { SlotTabContainer as TabContainerProps } from '$stylist/navigation/interface/slot/tab-container';
	import createTabPanelsState from '$stylist/navigation/function/state/tab-panels/index.svelte';

	let props: TabContainerProps = $props();

	const state = createTabPanelsState(props);

	const restProps = $derived(
		(() => {
			const { disabled: _disabled, class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<div {...restProps} class="c-tab-panels" data-disabled={state.disabled ? '' : undefined}>
	{#if props.children}{@render props.children()}{/if}
</div>

<style>
	.c-tab-panels {
		margin-top: 1rem;
	}

	.c-tab-panels[data-disabled] {
		opacity: var(--opacity-50, 0.5);
	}
</style>

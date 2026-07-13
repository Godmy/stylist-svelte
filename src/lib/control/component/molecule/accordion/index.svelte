<script lang="ts">
	import { setContext } from 'svelte';
	import { createAccordionState } from '$stylist/control/function/state/accordion/index.svelte';
	import type { SlotAccordion } from '$stylist/control/interface/slot/accordion';

	let props: SlotAccordion = $props();
	const state = createAccordionState(props);

	setContext('accordion-context', {
		isPanelOpen: state.isPanelOpen,
		handleValueChange: state.handleValueChange
	});

	const restProps = $derived.by(() => {
		const { children: _c, defaultValue: _d, class: _cl, ...rest } = props;
		return rest;
	});
</script>

<div {...restProps} class={['c-accordion', props.class].filter(Boolean).join(' ')}>
	{#if props.children}{@render props.children()}{/if}
</div>

<style>
	.c-accordion {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		overflow: hidden;
	}
</style>

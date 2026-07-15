<script lang="ts">
	import { setContext } from 'svelte';
	import { createAccordionGroupState } from '$stylist/navigation/function/state/accordion-group/index.svelte';
	import type { SlotAccordionGroup } from '$stylist/navigation/interface/slot/accordion-group';

	let props: SlotAccordionGroup = $props();
	const state = createAccordionGroupState(props);

	setContext('accordion-context', {
		isPanelOpen: state.isPanelOpen,
		handleValueChange: state.handleValueChange
	});

	const restProps = $derived.by(() => {
		const {
			children: _c,
			defaultValues: _d,
			value: _v,
			onValueChange: _o,
			class: _cl,
			...rest
		} = props;
		return rest;
	});
</script>

<div {...restProps} class={['c-accordion-group', props.class].filter(Boolean).join(' ')}>
	{#if props.children}{@render props.children()}{/if}
</div>

<style>
	.c-accordion-group {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		overflow: hidden;
	}
</style>

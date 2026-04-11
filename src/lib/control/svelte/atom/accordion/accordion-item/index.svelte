<script lang="ts">
	import { getContext } from 'svelte';
	import { ACCORDION_ITEM_CONTEXT } from '$stylist/control/const/struct/accordion-item-context';
	import { createAccordionItemState } from '$stylist/control/function/state/accordion-item';
	import type { AccordionItemProps } from '$stylist/control/type/struct/accordion-item-props';

	let props: AccordionItemProps = $props();

	// Svelte context can only be accessed in components, pass to state function
	const context = getContext<typeof ACCORDION_ITEM_CONTEXT>('accordion-context') ?? ACCORDION_ITEM_CONTEXT;
	const state = createAccordionItemState({
		...props,
		accordionContext: context
	});

	const restProps = $derived(
		(() => {
			const { class: _class, value: _value, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<div {...restProps} id={state.uniqueId} class={state.classes}>
	{@render props.children?.()}
</div>







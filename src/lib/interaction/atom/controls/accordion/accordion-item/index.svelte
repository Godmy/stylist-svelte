<script lang="ts">
	import { getContext } from 'svelte';
	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
	import type { AccordionItemProps } from '$stylist';
	import { createAccordionItemState } from '$stylist/interaction/state/accordion-item';

	type Props = AccordionItemProps & InteractionHTMLAttributes<HTMLDivElement>;

	let props: Props = $props();

	const state = createAccordionItemState(props);

	const context = getContext<{
		accordionId: string;
		isPanelOpen: (panelId: string) => boolean;
		handleValueChange: (panelId: string) => void;
	}>('accordion-context') ?? {
		accordionId: '',
		isPanelOpen: () => false,
		handleValueChange: () => {}
	};

	let uniqueId = $derived(`${context.accordionId}-${props.value}`);

	const restProps = $derived(
		(() => {
			const { class: _class, value: _value, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<div {...restProps} id={uniqueId} class={state.classes}>
	{@render props.children?.()}
</div>







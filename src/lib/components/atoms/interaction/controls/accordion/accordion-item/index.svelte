<script lang="ts">
	import { getContext } from 'svelte';
	import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';
	import type { AccordionItemProps } from '$stylist/design-system/contracts';
	import { createAccordionItemState } from '$stylist/design-system/models/interaction/accordion-item.svelte';

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







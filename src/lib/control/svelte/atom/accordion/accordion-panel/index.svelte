<script lang="ts">
	import { getContext } from 'svelte';
	import { ACCORDION_PANEL_CONTEXT } from '$stylist/control/const/struct/accordion-panel-context';
	import { createAccordionPanelState } from '$stylist/control/function/state/accordion-panel';
	import type { AccordionPanelProps } from '$stylist/control/type/struct/accordion-panel-props';

	let props: AccordionPanelProps = $props();

	const accordionContext = getContext<typeof ACCORDION_PANEL_CONTEXT>('accordion-context') ?? ACCORDION_PANEL_CONTEXT;

	let isOpen = $derived(accordionContext.isPanelOpen(props.value));

	const state = createAccordionPanelState(props);

	const content = $derived(props.content);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				value: _value,
				content: _content,
				children: _children,
				paddingClass: _paddingClass,
				borderClass: _borderClass,
				bgClass: _bgClass,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div {...restProps} class={state.classes} aria-hidden={!isOpen}>
	<div class={state.contentClasses}>
		{#if content}
			{@render content()}
		{:else if children}
			{@render children?.()}
		{/if}
	</div>
</div>







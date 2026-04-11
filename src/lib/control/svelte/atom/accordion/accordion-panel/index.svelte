<script lang="ts">
	import { getContext } from 'svelte';
	import { ACCORDION_PANEL_CONTEXT } from '$stylist/control/const/struct/accordion-panel-context';
	import { createAccordionPanelState } from '$stylist/control/function/state/accordion-panel';
	import type { AccordionPanelProps } from '$stylist/control/type/struct/accordion-panel-props';

	let props: AccordionPanelProps = $props();

	// Svelte context can only be accessed in components, pass to state function
	const context = getContext<typeof ACCORDION_PANEL_CONTEXT>('accordion-context') ?? ACCORDION_PANEL_CONTEXT;
	const state = createAccordionPanelState({
		...props,
		accordionContext: context
	});

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

<div {...restProps} class={state.classes} aria-hidden={!state.isOpen}>
	<div class={state.contentClasses}>
		{#if state.content}
			{@render state.content()}
		{:else if children}
			{@render children?.()}
		{/if}
	</div>
</div>







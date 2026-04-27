<script lang="ts">
	import { getContext } from 'svelte';
	import { Icon as BaseIcon } from '$stylist';
	import { ACCORDION_HEADER_CONTEXT } from '$stylist/control/const/record/accordion-header-context';
	import { createAccordionHeaderState } from '$stylist/control/function/state/accordion-header';
	import type { AccordionHeaderProps } from '$stylist/control/type/struct/accordion-header-props';

	let props: AccordionHeaderProps = $props();

	// Svelte context can only be accessed in components, pass to state function
	const context = getContext<typeof ACCORDION_HEADER_CONTEXT>('accordion-context') ?? ACCORDION_HEADER_CONTEXT;
	const state = createAccordionHeaderState({
		...props,
		accordionContext: context
	});

	const restProps = $derived.by(() => {
		const {
			class: _class,
			value: _value,
			children: _children,
			paddingClass: _paddingClass,
			chevronSizeClass: _chevronSizeClass,
			...rest
		} = props;

		return rest;
	});
</script>

<button
	{...restProps}
	type="button"
	class={state.classes}
	onclick={state.handleClick}
	aria-expanded={state.open}
>
	<span>{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}</span>
	<BaseIcon name="chevron-down" class={state.chevronClasses} />
</button>



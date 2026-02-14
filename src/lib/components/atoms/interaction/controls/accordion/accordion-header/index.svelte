<script lang="ts">
	import { getContext } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { ChevronDown } from 'lucide-svelte';
	import type { AccordionHeaderProps } from '$stylist/design-system/props';
	import { createAccordionHeaderState } from '$stylist/design-system/models/accordion-header.svelte';

	type Props = AccordionHeaderProps & HTMLButtonAttributes;

	let props: Props = $props();

	const context = getContext<{
		accordionId: string;
		isPanelOpen: (panelId: string) => boolean;
		handleValueChange: (panelId: string) => void;
	}>('accordion-context');

	let isOpen = $derived(context.isPanelOpen(props.value));

	const state = createAccordionHeaderState(props);

	function handleClick() {
		context.handleValueChange(props.value);
	}

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				value: _value,
				children: _children,
				paddingClass: _paddingClass,
				chevronSizeClass: _chevronSizeClass,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<button
	{...restProps}
	type="button"
	class={state.classes}
	onclick={handleClick}
	aria-expanded={isOpen}
>
	<span>{@render props.children?.()}</span>
	<ChevronDown class={state.chevronClasses} />
</button>





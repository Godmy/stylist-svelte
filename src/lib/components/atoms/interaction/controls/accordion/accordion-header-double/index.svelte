<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { Icon as BaseIcon } from '$stylist/components/atoms';
const ChevronDown = 'chevron-down';

	import type { AccordionHeaderDoubleProps } from '$stylist/design-system/contracts';
	import { createAccordionHeaderDoubleState } from '$stylist/design-system/models/interaction/accordion-header-double.svelte';

	type Props = AccordionHeaderDoubleProps & HTMLButtonAttributes;

	let props: Props = $props();

	const state = createAccordionHeaderDoubleState(props);

	function handleClick(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		if (!state.disabled && props.onclick) {
			props.onclick(event);
		}
	}

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				value: _value,
				children: _children,
				open: _open,
				disabled: _disabled,
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
	aria-expanded={state.open}
	aria-disabled={state.disabled}
>
	{@render props.children?.()}
	<BaseIcon name={ChevronDown} class={state.chevronClasses} />
</button>








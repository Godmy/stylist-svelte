<script lang="ts">
	import { Icon as BaseIcon } from '$stylist';
const ChevronDown = 'chevron-down';

	import { createAccordionHeaderDoubleState } from '$stylist/control/function/state/accordion-header-double';
	import type { AccordionHeaderDoubleProps } from '$stylist/control/type/struct/accordion-header-double-props';

	let props: AccordionHeaderDoubleProps = $props();

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








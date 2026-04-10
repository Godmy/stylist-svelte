<script lang="ts">
	import { setContext } from 'svelte';
	import type { ComplexAccordionProps } from '$stylist/control/interface/component/accordion/other';
	import { createComplexAccordionState } from '$stylist/control/function/state/accordion-complex';

	let props: ComplexAccordionProps = $props();

	const state = createComplexAccordionState(props);

	setContext('accordion-context', {
		accordionId: state.accordionId,
		isPanelOpen: state.isPanelOpen,
		handleValueChange: state.handleValueChange
	});

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				multiple: _multiple,
				defaultValue: _defaultValue,
				value: _value,
				onValueChange: _onValueChange,
				content: _content,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div {...restProps} class={state.classes}>
	{#if props.content}
		{@render props.content()}
	{/if}
</div>




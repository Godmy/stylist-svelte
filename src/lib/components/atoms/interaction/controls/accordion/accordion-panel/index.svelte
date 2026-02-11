<script lang="ts">
	import { getContext } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { AccordionPanelProps } from '$stylist/design-system/props';
	import { createAccordionPanelState } from '../state.svelte';

	type Props = AccordionPanelProps & HTMLAttributes<HTMLDivElement>;

	let props: Props = $props();

	const context = getContext<{
		accordionId: string;
		isPanelOpen: (panelId: string) => boolean;
		handleValueChange: (panelId: string) => void;
	}>('accordion-context');

	let isOpen = $derived(context.isPanelOpen(props.value));

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
			{@render children()}
		{/if}
	</div>
</div>


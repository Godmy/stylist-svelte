<script lang="ts">
	import type { SlotAbbr as AbbrProps } from '$stylist/navigation/interface/slot/abbr';
	import { createAbbrState } from '$stylist/typography/function/state/abbr';

	let props: AbbrProps = $props();

	const state = createAbbrState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, title: _title, ...rest } = props;
			return rest;
		})()
	);
</script>

<abbr class={state.classes} title={state.title} {...restProps}>
	{#if children}
		{@render children?.()}
	{/if}
</abbr>



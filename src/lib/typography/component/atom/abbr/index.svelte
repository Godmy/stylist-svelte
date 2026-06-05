<script lang="ts">
	import type { SlotAbbr as AbbrProps } from '$stylist/typography/interface/slot/abbr';
	import createAbbrState from '$stylist/typography/function/state/abbr/index.svelte';

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
		{@render children()}
	{/if}
</abbr>

<style>
	.c-typography-abbr {
		text-decoration: underline dotted;
		text-underline-offset: 0.12em;
		cursor: help;
	}
</style>

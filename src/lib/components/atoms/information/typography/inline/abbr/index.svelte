<script lang="ts">
	import type { AbbrProps } from '$stylist/design-system';
	import { createAbbrState } from '$stylist/design-system/models/abbr.svelte';

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

<script lang="ts">
	import type { AbbrProps } from '$stylist';
	import { createAbbrState } from '$stylist/information/state/abbr';

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



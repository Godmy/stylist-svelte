<script lang="ts">
	import type { InlineBaseProps } from '$stylist';
	import { createDefinitionTermState } from '$stylist/information/state/definition-term';

	let props: InlineBaseProps<HTMLElement> = $props();

	const state = createDefinitionTermState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<dt class={state.classes} {...restProps}>
	{#if children}
		{@render children?.()}
	{/if}
</dt>




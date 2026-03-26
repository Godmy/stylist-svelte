<script lang="ts">
	import type { InlineBaseProps } from '$stylist';
	import { createDefinitionDescriptionState } from '$stylist/information/state/definition-description';

	let props: InlineBaseProps<HTMLElement> = $props();

	const state = createDefinitionDescriptionState(props);
	const children = $derived(props.children);

	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<dd class={state.classes} {...restProps}>
	{#if children}
		{@render children?.()}
	{/if}
</dd>




<script lang="ts">
	import type { HorizontalLayoutProps } from '$stylist/architecture/interface/layout-extended';
	import { createHorizontalLayoutState } from '$stylist/architecture/state/horizontal-layout';

	let props: HorizontalLayoutProps = $props();
	const state = createHorizontalLayoutState(props);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				children: _children,
				gap: _gap,
				alignItems: _alignItems,
				justifyContent: _justifyContent,
				wrap: _wrap,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div class={state.classes} {...restProps}>
	{#if props.children}
		{@render props.children?.()}
	{/if}
</div>




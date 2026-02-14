<script lang="ts">
	import type { HorizontalLayoutProps } from '$stylist/design-system';
	import { createHorizontalLayoutState } from '$stylist/design-system/models/horizontal-layout.svelte';

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
	{@render props.children()}
</div>

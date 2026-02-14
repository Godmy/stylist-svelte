<script lang="ts">
	import type { TabContainerProps } from '$stylist/design-system/props';
	import { createTabListState } from '$stylist/design-system/models/tab-list.svelte';

	let props: TabContainerProps = $props();

	const state = createTabListState(props);

	const restProps = $derived(
		(() => {
			const { disabled: _disabled, class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<div {...restProps} role="tablist" aria-orientation="horizontal" class={state.classes}>
	{@render props.children?.()}
</div>





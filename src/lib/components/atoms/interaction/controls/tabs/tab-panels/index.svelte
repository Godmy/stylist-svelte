<script lang="ts">
	import type { TabContainerProps } from '$stylist/design-system/props';
	import { createTabPanelsState } from '$stylist/design-system/models/tab-panels.svelte';

	let props: TabContainerProps = $props();

	const state = createTabPanelsState(props);

	const restProps = $derived(
		(() => {
			const { disabled: _disabled, class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<div {...restProps} class={state.classes}>
	{@render props.children?.()}
</div>





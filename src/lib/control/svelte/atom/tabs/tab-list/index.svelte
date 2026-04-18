<script lang="ts">
	import type { SlotTabContainer as TabContainerProps } from '$stylist/control/interface/slot/tab-container';
	import { createTabListState } from '$stylist/control/function/state/tab-list';

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







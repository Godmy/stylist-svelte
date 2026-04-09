<script lang="ts">
	import type { TabContainerProps } from '$stylist/control/interface/component/tabs/other';
	import { createTabPanelsState } from '$stylist/control/function/state/tab-panels';

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







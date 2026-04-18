<script lang="ts">
	import { setContext } from 'svelte';
	import type { SlotTabs as TabsProps } from '$stylist/control/interface/slot/tabs';
	import { createTabsState } from '$stylist/control/function/state/tabs';

	let props: TabsProps = $props();

	const state = createTabsState(props);

	setContext('tabs-context', {
		tabsId: state.tabsId,
		get selectedTabId() {
			return state.selectedTabId;
		},
		registerTab: state.registerTab,
		unregisterTab: state.unregisterTab,
		handleTabChange: state.handleTabChange,
		get variant() {
			return state.variant;
		},
		get size() {
			return state.size;
		},
		get disabled() {
			return state.disabled;
		}
	});

	const restProps = $derived(
		(() => {
			const {
				selectedId: _selectedId,
				onValueChange: _onValueChange,
				variant: _variant,
				size: _size,
				class: _class,
				children: _children,
				disabled: _disabled,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div {...restProps} class={state.classes}>
	{@render props.children?.()}
</div>




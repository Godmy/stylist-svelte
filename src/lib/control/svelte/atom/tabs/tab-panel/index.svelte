<script lang="ts">
	import { getContext } from 'svelte';
	import { TAB_PANEL_CONTEXT } from '$stylist/control/const/struct/tab-panel-context';
	import type { TabPanelProps } from '$stylist/control/interface/component/tabs/other';
	import { createTabPanelState } from '$stylist/control/function/state/tab-panel';

	let props: TabPanelProps = $props();

	const tabsContext = getContext<typeof TAB_PANEL_CONTEXT>('tabs-context') ?? TAB_PANEL_CONTEXT;

	let selectedTabId = $derived(tabsContext?.selectedTabId ?? '');
	let tabsId = $derived(tabsContext?.tabsId ?? '');
	let isSelected = $derived(selectedTabId === props.id);
	let tabId = $derived(`tab-${tabsId}-${props.id}`);
	let panelId = $derived(`panel-${tabsId}-${props.id}`);

	const state = createTabPanelState(props, () => isSelected);

	const restProps = $derived(
		(() => {
			const { id: _id, disabled: _disabled, class: _class, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<div {...restProps} id={panelId} role="tabpanel" aria-labelledby={tabId} class={state.classes}>
	{@render props.children?.()}
</div>







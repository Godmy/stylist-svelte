<script lang="ts">
	import { getContext } from 'svelte';
	import { TAB_PANEL_CONTEXT } from '$stylist/control/const/record/tab-panel-context';
	import type { SlotTabPanel as TabPanelProps } from '$stylist/control/interface/slot/tab-panel';
	import { createTabPanelState } from '$stylist/control/function/state/tab-panel';

	let props: TabPanelProps = $props();

	const context = getContext<typeof TAB_PANEL_CONTEXT>('tabs-context') ?? TAB_PANEL_CONTEXT;

	let selectedTabId = $derived(context?.selectedTabId ?? '');
	let tabsId = $derived(context?.tabsId ?? '');
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
	{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
</div>







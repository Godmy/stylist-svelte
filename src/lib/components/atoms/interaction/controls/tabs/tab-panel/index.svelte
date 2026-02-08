<script lang="ts">
	import { getContext } from 'svelte';
	import type { TabPanelProps } from '$stylist/design-system/attributes';
	import { createTabPanelState } from '../../state.svelte';

	let props: TabPanelProps = $props();

	const context = getContext<{
		tabsId: string;
		selectedTabId: string;
	}>('tabs-context');

	let isSelected = $derived(context.selectedTabId === props.id);
	let tabId = $derived(`tab-${context.tabsId}-${props.id}`);
	let panelId = $derived(`panel-${context.tabsId}-${props.id}`);

	const state = createTabPanelState(props);

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

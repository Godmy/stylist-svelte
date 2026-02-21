<script lang="ts">
	import { getContext } from 'svelte';
	import type { TabPanelProps } from '$stylist/design-system/props';
	import { createTabPanelState } from '$stylist/design-system/models/interaction/tab-panel.svelte';

	let props: TabPanelProps = $props();

	const context = getContext<{
		tabsId: string;
		selectedTabId: string;
	}>('tabs-context') ?? {
		tabsId: '',
		selectedTabId: ''
	};

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
	{@render props.children?.()}
</div>





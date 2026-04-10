<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte';
	import { TAB_CONTEXT } from '$stylist/control/const/struct/tab-context';
	import type { TabProps } from '$stylist/control/interface/component/tabs/other';
	import { createTabState } from '$stylist/control/function/state/tab';

	let props: TabProps = $props();

	const tabsContext = getContext<typeof TAB_CONTEXT>('tabs-context') ?? TAB_CONTEXT;

	onMount(() => {
		tabsContext.registerTab(props.id);
	});

	onDestroy(() => {
		tabsContext.unregisterTab(props.id);
	});

	let isSelected = $derived(tabsContext.selectedTabId === props.id);
	let tabId = $derived(`tab-${tabsContext.tabsId}-${props.id}`);
	let panelId = $derived(`panel-${tabsContext.tabsId}-${props.id}`);

	const state = createTabState({
		...props,
		variant: props.variant ?? tabsContext.variant,
		size: props.size ?? tabsContext.size,
		disabled: props.disabled ?? tabsContext.disabled
	});

	function handleClick() {
		if (!state.disabled) {
			tabsContext.handleTabChange(props.id);
		}
	}

	const restProps = $derived(
		(() => {
			const {
				id: _id,
				selected: _selected,
				variant: _variant,
				size: _size,
				class: _class,
				children: _children,
				ariaLabel: _ariaLabel,
				disabled: _disabled,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<button
	{...restProps}
	id={tabId}
	role="tab"
	aria-selected={isSelected}
	aria-controls={panelId}
	aria-label={props.ariaLabel || undefined}
	class={state.classes}
	disabled={state.disabled}
	onclick={handleClick}
>
	{@render props.children?.()}
</button>




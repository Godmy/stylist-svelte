<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte';
	import { TAB_CONTEXT } from '$stylist/control/const/struct/tab-context';
	import type { TabProps } from '$stylist/control/interface/component/tabs/other';
	import { createTabState } from '$stylist/control/function/state/tab';

	let props: TabProps = $props();

	const context = getContext<typeof TAB_CONTEXT>('tabs-context') ?? TAB_CONTEXT;

	onMount(() => {
		context.registerTab(props.id);
	});

	onDestroy(() => {
		context.unregisterTab(props.id);
	});

	let isSelected = $derived(context.selectedTabId === props.id);
	let tabId = $derived(`tab-${context.tabsId}-${props.id}`);
	let panelId = $derived(`panel-${context.tabsId}-${props.id}`);

	const state = createTabState({
		...props,
		variant: props.variant ?? context.variant,
		size: props.size ?? context.size,
		disabled: props.disabled ?? context.disabled
	});

	function handleClick() {
		if (!state.disabled) {
			context.handleTabChange(props.id);
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




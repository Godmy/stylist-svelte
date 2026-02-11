<script lang="ts">
	import { setContext } from 'svelte';
	import type { TabsProps } from '$stylist/design-system/props';
	import { createTabsState } from './state.svelte';

	let props: TabsProps = $props();

	const tabsState = createTabsState(props);

	const tabsId = Math.random().toString(36).substring(2, 9);
	let selectedTabId = $state<string>(props.selectedId || '');
	let tabs = $state<string[]>([]);

	function handleTabChange(id: string) {
		selectedTabId = id;
		props.onTabChange?.(id);
	}

	function registerTab(id: string) {
		if (!tabs.includes(id)) {
			tabs = [...tabs, id];
			if (tabs.length === 1 && !props.selectedId) {
				selectedTabId = id;
			}
		}
	}

	function unregisterTab(id: string) {
		tabs = tabs.filter((tabId) => tabId !== id);
	}

	setContext('tabs-context', {
		tabsId,
		get selectedTabId() {
			return selectedTabId;
		},
		registerTab,
		unregisterTab,
		handleTabChange,
		get variant() {
			return tabsState.variant;
		},
		get size() {
			return tabsState.size;
		},
		get disabled() {
			return tabsState.disabled;
		}
	});

	const restProps = $derived(
		(() => {
			const {
				selectedId: _selectedId,
				onTabChange: _onTabChange,
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

<div {...restProps} class={tabsState.classes}>
	{@render props.children?.()}
</div>


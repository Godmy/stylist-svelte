import type { RecipeTabGroup } from '$stylist/navigation/interface/recipe/tab-group';

export function createTabGroupState(props: RecipeTabGroup) {
	let currentTab = $state(props.activeTab ?? props.tabs?.[0]?.id ?? '');

	$effect(() => {
		if (props.tabs.length > 0 && !props.tabs.some((tab) => tab.id === currentTab)) {
			currentTab = props.tabs[0].id;
		}
	});

	$effect(() => {
		if (!props.activeTab && props.tabs.length > 0) {
			currentTab = props.tabs[0].id;
		} else if (props.activeTab) {
			currentTab = props.activeTab;
		}
	});

	const wrapperClasses = $derived(['c-tab-group', props.class].filter(Boolean).join(' '));
	const tabListClasses = $derived(
		['c-tab-group__list', props.tabListClass].filter(Boolean).join(' ')
	);
	const panelClasses = $derived(
		['c-tab-group__panels', props.panelClass].filter(Boolean).join(' ')
	);

	return {
		get currentTab() {
			return currentTab;
		},
		get wrapperClasses() {
			return wrapperClasses;
		},
		get tabListClasses() {
			return tabListClasses;
		},
		get panelClasses() {
			return panelClasses;
		},
		changeTab(tabId: string) {
			const tab = props.tabs.find((item) => item.id === tabId);
			if (tab && !tab.disabled) {
				currentTab = tabId;
				props.onValueInput?.(tabId);
				props.onValueChange?.(tabId);
				props.onChange?.(tabId);
			}
		}
	};
}

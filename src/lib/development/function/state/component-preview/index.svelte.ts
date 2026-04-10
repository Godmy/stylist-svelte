import type { Snippet } from 'svelte';
import { ComponentPreviewStyleManager } from '$stylist/development/class/style-manager/component-preview';

export type ComponentPreviewProps = {
	title: string;
	description?: string;
	code: string;
	language?: string;
	componentDemo: Snippet;
	showCode?: boolean;
	class?: string;
};

export function createComponentPreviewState(props: ComponentPreviewProps) {
	let activeTab = $state(props.showCode ? 'code' : 'preview');

	const classes = $derived(ComponentPreviewStyleManager.getBaseClasses(props.class ?? ''));
	const headerClasses = $derived(ComponentPreviewStyleManager.getHeaderClasses());
	const titleClasses = $derived(ComponentPreviewStyleManager.getTitleClasses());
	const descriptionClasses = $derived(ComponentPreviewStyleManager.getDescriptionClasses());
	const previewContainerClasses = $derived(ComponentPreviewStyleManager.getPreviewContainerClasses());
	const demoContainerClasses = $derived(ComponentPreviewStyleManager.getDemoContainerClasses());
	const codeContainerClasses = $derived(ComponentPreviewStyleManager.getCodeContainerClasses());
	const tabContainerClasses = $derived(ComponentPreviewStyleManager.getTabContainerClasses());
	const tabListClasses = $derived(ComponentPreviewStyleManager.getTabListClasses());
	const tabButtonClasses = (isActive: boolean) => ComponentPreviewStyleManager.getTabButtonClasses(isActive);

	function setPreviewTab(tab: 'preview' | 'code') {
		activeTab = tab;
	}

	return {
		get activeTab() {
			return activeTab;
		},
		get classes() {
			return classes;
		},
		get headerClasses() {
			return headerClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get descriptionClasses() {
			return descriptionClasses;
		},
		get previewContainerClasses() {
			return previewContainerClasses;
		},
		get demoContainerClasses() {
			return demoContainerClasses;
		},
		get codeContainerClasses() {
			return codeContainerClasses;
		},
		get tabContainerClasses() {
			return tabContainerClasses;
		},
		get tabListClasses() {
			return tabListClasses;
		},
		tabButtonClasses,
		setPreviewTab
	};
}

export default createComponentPreviewState;

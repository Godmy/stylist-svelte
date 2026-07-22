import type { BreadcrumbsProps } from '$stylist/navigation/type/struct/breadcrumbs-props/breadcrumbs-props';
import { getBreadcrumbDropdownItems } from '$stylist/navigation/function/script/get-breadcrumb-dropdown-items';
import { getBreadcrumbItems } from '$stylist/navigation/function/script/get-breadcrumb-items';

export function createBreadcrumbsState(props: BreadcrumbsProps) {
	let hoveredId = $state<string | null>(null);
	const visibleCrumbs = $derived(getBreadcrumbItems(props.crumbs ?? [], props.activeId));
	const totalCrumbs = $derived(visibleCrumbs.length);
	const listClass = 'c-breadcrumbs';
	const itemClass = 'c-breadcrumbs__item';
	const linkClusterClass = 'c-breadcrumbs__link-cluster';
	const separatorClass = 'c-breadcrumbs__separator';
	const activeLinkClass = 'c-breadcrumbs__link';
	const currentItemClass = 'c-breadcrumbs__current';

	function setHoveredId(id: string) {
		hoveredId = id;
	}

	function clearHoveredId() {
		hoveredId = null;
	}

	function handleNavigate(id: string, event?: MouseEvent) {
		event?.preventDefault();
		props.onNavigate?.(id);
	}

	function handleDropdownSelect(id: string) {
		props.onNavigate?.(id);
		hoveredId = null;
	}

	function getDropdownItems(id: string) {
		return getBreadcrumbDropdownItems(props.crumbs ?? [], id);
	}

	const restProps = $derived.by(() => {
		const { crumbs: _crumbs, activeId: _activeId, onNavigate: _onNavigate, ...rest } = props;
		return rest;
	});

	return {
		get visibleCrumbs() {
			return visibleCrumbs;
		},
		get totalCrumbs() {
			return totalCrumbs;
		},
		get listClass() {
			return listClass;
		},
		get itemClass() {
			return itemClass;
		},
		get linkClusterClass() {
			return linkClusterClass;
		},
		get separatorClass() {
			return separatorClass;
		},
		get activeLinkClass() {
			return activeLinkClass;
		},
		get currentItemClass() {
			return currentItemClass;
		},
		get hoveredId() {
			return hoveredId;
		},
		get restProps() {
			return restProps;
		},
		setHoveredId,
		clearHoveredId,
		handleNavigate,
		handleDropdownSelect,
		getDropdownItems
	};
}

export default createBreadcrumbsState;

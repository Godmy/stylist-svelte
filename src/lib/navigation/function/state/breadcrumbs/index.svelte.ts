import { SLASH_ICON } from '$stylist/navigation/const/value/slash-icon';
import type { BreadcrumbsProps } from '$stylist/navigation/type/struct/breadcrumbs-props';


export function createBreadcrumbsState(props: BreadcrumbsProps) {
	const totalCrumbs = $derived(props.crumbs?.length || 0);
	const listClass = 'breadcrumbs-list';
	const itemClass = 'breadcrumbs-item';
	const separatorClass = 'breadcrumbs-separator';
	const activeLinkClass = 'breadcrumbs-link';
	const currentItemClass = 'breadcrumbs-current';

	return {
		get totalCrumbs() {
			return totalCrumbs;
		},
		get listClass() {
			return listClass;
		},
		get itemClass() {
			return itemClass;
		},
		get separatorClass() {
			return separatorClass;
		},
		get activeLinkClass() {
			return activeLinkClass;
		},
		get currentItemClass() {
			return currentItemClass;
		}
	};
}

export default createBreadcrumbsState;

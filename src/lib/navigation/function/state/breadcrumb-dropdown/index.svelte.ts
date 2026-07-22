import type { RecipeBreadcrumbDropdown } from '$stylist/navigation/interface/recipe/breadcrumb-dropdown';
import type { BreadcrumbDropdownItem } from '$stylist/navigation/type/struct/breadcrumbs-props/breadcrumb-dropdown-item';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createBreadcrumbDropdownState(
	props: RecipeBreadcrumbDropdown & {
		open?: boolean;
		items?: BreadcrumbDropdownItem[];
		onSelect?: (targetId: string) => void;
		class?: string;
	}
) {
	const open = $derived(props.open ?? false);
	const items = $derived(props.items ?? []);
	const dropdownClass = $derived(
		joinClassNames('breadcrumb-dropdown', props.class ?? '')
	);
	const itemClass = $derived('breadcrumb-dropdown-item');
	const itemLabelClass = $derived('breadcrumb-dropdown-item__label');
	const itemDescriptionClass = $derived('breadcrumb-dropdown-item__description');

	function handleSelect(targetId: string) {
		props.onSelect?.(targetId);
	}

	const restProps = $derived.by(() => {
		const { open: _open, items: _items, onSelect: _onSelect, class: _class, ...rest } = props;

		return rest;
	});

	return {
		get open() {
			return open;
		},
		get items() {
			return items;
		},
		get dropdownClass() {
			return dropdownClass;
		},
		get itemClass() {
			return itemClass;
		},
		get itemLabelClass() {
			return itemLabelClass;
		},
		get itemDescriptionClass() {
			return itemDescriptionClass;
		},
		get restProps() {
			return restProps;
		},
		handleSelect
	};
}

export default createBreadcrumbDropdownState;

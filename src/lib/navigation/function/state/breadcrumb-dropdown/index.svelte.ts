import type { BreadcrumbDropdownRecipe } from '$stylist/navigation/interface/recipe/breadcrumb-dropdown';
import type { BreadcrumbDropdownItem } from '$stylist/navigation/type/struct/breadcrumbs-props/breadcrumb-dropdown-item';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createBreadcrumbDropdownState(
	props: BreadcrumbDropdownRecipe & {
		open?: boolean;
		items?: BreadcrumbDropdownItem[];
		onSelect?: (targetId: string) => void;
		class?: string;
	}
) {
	const open = $derived(props.open ?? false);
	const items = $derived(props.items ?? []);
	const dropdownClass = $derived(
		joinClassNames(
			'breadcrumb-dropdown absolute left-0 top-[calc(100%+0.5rem)] z-20 min-w-64 rounded-xl border border-[var(--color-border-secondary)] bg-[var(--color-background-primary)] p-2 shadow-xl',
			props.class ?? ''
		)
	);
	const itemClass = $derived(
		'breadcrumb-dropdown-item flex w-full flex-col rounded-lg px-3 py-2 text-left transition-colors hover:bg-[var(--color-background-secondary)]'
	);
	const itemLabelClass = $derived('text-sm font-semibold text-[var(--color-text-primary)]');
	const itemDescriptionClass = $derived('text-xs text-[var(--color-text-secondary)]');

	function handleSelect(targetId: string) {
		props.onSelect?.(targetId);
	}

	const restProps = $derived.by(() => {
		const {
			open: _open,
			items: _items,
			onSelect: _onSelect,
			class: _class,
			...rest
		} = props;

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

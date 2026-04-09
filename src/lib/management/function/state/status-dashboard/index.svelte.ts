import { StatusDashboardStyleManager } from '$stylist/management/class/style-manager/status-dashboard';
import type { StatusDashboardRecipe } from '$stylist/management/interface/recipe/status-dashboard';
import { ObjectManagerStatusDashboard } from '$stylist/management/class/object-manager/status-dashboard';

export interface StatusDashboardStateProps extends StatusDashboardRecipe {}

export function createStatusDashboardState(props: StatusDashboardStateProps) {
	const title = $derived(props.title);
	const subtitle = $derived(props.subtitle);
	const items = $derived(props.items ?? []);
	const layout = $derived(props.layout ?? 'horizontal');
	const size = $derived(props.size ?? 'md');
	const variant = $derived(props.variant ?? 'default');

	const className = $derived(props.class ?? '');
	const itemClass = $derived(props.itemClass ?? '');
	const headerClass = $derived(props.headerClass ?? '');

	const classNameStr = $derived(className == null ? undefined : String(className));
	const headerClassStr = $derived(headerClass == null ? undefined : String(headerClass));
	const itemClassStr = $derived(itemClass == null ? undefined : String(itemClass));

	const containerClass = $derived(StatusDashboardStyleManager.getContainerClass(variant, size, classNameStr));
	const headerClassComputed = $derived(StatusDashboardStyleManager.getHeaderClass(headerClassStr));
	const titleClass = StatusDashboardStyleManager.getTitleClass();
	const subtitleClass = StatusDashboardStyleManager.getSubtitleClass();
	const itemsGridClass = $derived(StatusDashboardStyleManager.getItemsGridClass(layout));
	const itemCardClass = $derived(StatusDashboardStyleManager.getItemCardClass(itemClassStr));
	const itemContentClass = StatusDashboardStyleManager.getItemContentClass();
	const itemHeaderClass = StatusDashboardStyleManager.getItemHeaderClass();
	const itemTitleClass = $derived(StatusDashboardStyleManager.getItemTitleClass(size));
	const itemValueClass = StatusDashboardStyleManager.getItemValueClass();
	const itemDescriptionClass = $derived(StatusDashboardStyleManager.getItemDescriptionClass(size));
	const itemFooterClass = StatusDashboardStyleManager.getItemFooterClass();
	const itemActionsClass = StatusDashboardStyleManager.getItemActionsClass();
	const statusIconWrapperClass = StatusDashboardStyleManager.getStatusIconWrapperClass();
	const statusIconClass = StatusDashboardStyleManager.getStatusIconClass();

	const restProps = $derived.by(() => {
		const {
			class: _class,
			title: _title,
			subtitle: _subtitle,
			items: _items,
			layout: _layout,
			size: _size,
			itemClass: _itemClass,
			headerClass: _headerClass,
			variant: _variant,
			...rest
		} = props;
		return rest;
	});

	return {
		get title() { return title; },
		get subtitle() { return subtitle; },
		get items() { return items; },
		get layout() { return layout; },
		get size() { return size; },
		get variant() { return variant; },
		get containerClass() { return containerClass; },
		get headerClassComputed() { return headerClassComputed; },
		get titleClass() { return titleClass; },
		get subtitleClass() { return subtitleClass; },
		get itemsGridClass() { return itemsGridClass; },
		get itemCardClass() { return itemCardClass; },
		get itemContentClass() { return itemContentClass; },
		get itemHeaderClass() { return itemHeaderClass; },
		get itemTitleClass() { return itemTitleClass; },
		get itemValueClass() { return itemValueClass; },
		get itemDescriptionClass() { return itemDescriptionClass; },
		get itemFooterClass() { return itemFooterClass; },
		get itemActionsClass() { return itemActionsClass; },
		get statusIconWrapperClass() { return statusIconWrapperClass; },
		get statusIconClass() { return statusIconClass; },
		get restProps() { return restProps; },
		resolveStatusPresentation: ObjectManagerStatusDashboard.resolveStatusPresentation.bind(ObjectManagerStatusDashboard)
	};
}

export default createStatusDashboardState;

import { ObjectManagerStatusDashboard } from '$stylist/management/class/object-manager/status-dashboard';
import type { StatusDashboardStateProps } from '$stylist/management/interface/recipe/status-dashboard-status-dashboard-state-props';

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
	const headerClassComputed = $derived(headerClassStr);

	const containerClass = $derived(['status-dashboard', classNameStr].filter(Boolean).join(' '));
	const titleClass = 'status-dashboard__title';
	const subtitleClass = 'status-dashboard__subtitle';
	const itemsGridClass = 'status-dashboard__items-grid';
	const itemCardClass = 'status-dashboard__item-card';
	const itemContentClass = 'status-dashboard__item-content';
	const itemHeaderClass = 'status-dashboard__item-header';
	const itemTitleClass = 'status-dashboard__item-title';
	const itemValueClass = 'status-dashboard__item-value';
	const itemDescriptionClass = 'status-dashboard__item-description';
	const itemFooterClass = 'status-dashboard__item-footer';
	const itemActionsClass = 'status-dashboard__item-actions';
	const statusIconWrapperClass = 'status-dashboard__status-icon-wrapper';
	const statusIconClass = 'status-dashboard__status-icon';

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
		get containerClass() {
			return containerClass;
		},
		get titleClass() {
			return titleClass;
		},
		get subtitleClass() {
			return subtitleClass;
		},
		get itemsGridClass() {
			return itemsGridClass;
		},
		get itemCardClass() {
			return itemCardClass;
		},
		get itemContentClass() {
			return itemContentClass;
		},
		get itemHeaderClass() {
			return itemHeaderClass;
		},
		get itemTitleClass() {
			return itemTitleClass;
		},
		get itemValueClass() {
			return itemValueClass;
		},
		get itemDescriptionClass() {
			return itemDescriptionClass;
		},
		get itemFooterClass() {
			return itemFooterClass;
		},
		get itemActionsClass() {
			return itemActionsClass;
		},
		get statusIconWrapperClass() {
			return statusIconWrapperClass;
		},
		get statusIconClass() {
			return statusIconClass;
		},
		get title() {
			return title;
		},
		get subtitle() {
			return subtitle;
		},
		get items() {
			return items;
		},
		get layout() {
			return layout;
		},
		get size() {
			return size;
		},
		get variant() {
			return variant;
		},
		get headerClassComputed() {
			return headerClassComputed;
		},
		get restProps() {
			return restProps;
		},
		resolveStatusPresentation: ObjectManagerStatusDashboard.resolveStatusPresentation.bind(
			ObjectManagerStatusDashboard
		)
	};
}

export default createStatusDashboardState;

import { Icon as BaseIcon } from '$stylist';
import { ObjectManagerStatsCard } from '$stylist/information/class/object-manager/stats-card';
import { StatsCardStyleManager } from '$stylist/information/class/style-manager/stats-card';
import type { StatsCardRecipe } from '$stylist/information/interface/recipe/stats-card';

export interface StatsCardStateProps extends StatsCardRecipe {
	class?: string;
}

export function createStatsCardState(props: StatsCardStateProps) {
	// Props with defaults
	const label = props.label;
	const value = props.value;
	const trend = props.trend ?? 'neutral';
	const trendValue = props.trendValue;
	const description = props.description;
	const icon = props.icon;
	const propClassName = props.class ?? '';

	// Classes
	const trendClasses = $derived(ObjectManagerStatsCard.resolveTrendClass(trend));
	const trendIconName = $derived(ObjectManagerStatsCard.resolveTrendIconName(trend));
	const containerClasses = $derived(StatsCardStyleManager.getContainerClasses(propClassName));
	const headerClasses = $derived(StatsCardStyleManager.getHeaderClasses());
	const labelClasses = $derived(StatsCardStyleManager.getLabelClasses());
	const valueClasses = $derived(StatsCardStyleManager.getValueClasses());
	const iconWrapperClasses = $derived(StatsCardStyleManager.getIconWrapperClasses());
	const footerClasses = $derived(StatsCardStyleManager.getFooterClasses());
	const trendContainerClasses = $derived(StatsCardStyleManager.getTrendClasses(trendClasses));
	const trendIconClasses = $derived(StatsCardStyleManager.getTrendIconClasses());
	const descriptionClasses = $derived(StatsCardStyleManager.getDescriptionClasses());

	// Rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			label: _label,
			value: _value,
			trend: _trend,
			trendValue: _trendValue,
			description: _description,
			icon: _icon,
			...rest
		} = props;
		return rest;
	});

	return {
		get label() {
			return label;
		},
		get value() {
			return value;
		},
		get trend() {
			return trend;
		},
		get trendValue() {
			return trendValue;
		},
		get description() {
			return description;
		},
		get icon() {
			return icon;
		},
		get trendClasses() {
			return trendClasses;
		},
		get trendIconName() {
			return trendIconName;
		},
		get containerClasses() {
			return containerClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get labelClasses() {
			return labelClasses;
		},
		get valueClasses() {
			return valueClasses;
		},
		get iconWrapperClasses() {
			return iconWrapperClasses;
		},
		get footerClasses() {
			return footerClasses;
		},
		get trendContainerClasses() {
			return trendContainerClasses;
		},
		get trendIconClasses() {
			return trendIconClasses;
		},
		get descriptionClasses() {
			return descriptionClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createStatsCardState;

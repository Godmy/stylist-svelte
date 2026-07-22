import { ObjectManagerStatsCard } from '$stylist/management/class/object-manager/stats-card';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeStatsCard } from '$stylist/management/interface/recipe/stats-card';

export function createStatsCardState(props: RecipeStatsCard) {
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
	const containerClasses = $derived(mergeClassNames('c-stats-card', propClassName));
	const headerClasses = $derived('c-stats-card__header');
	const labelClasses = $derived('c-stats-card__label');
	const valueClasses = $derived('c-stats-card__value');
	const iconWrapperClasses = $derived('c-stats-card__icon-wrap');
	const footerClasses = $derived('c-stats-card__footer');
	const trendContainerClasses = $derived(
		mergeClassNames('c-stats-card__trend', trendClasses)
	);
	const trendIconClasses = $derived('c-stats-card__trend-icon');
	const descriptionClasses = $derived('c-stats-card__description');

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

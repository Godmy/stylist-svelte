import { ClassNamesManager } from '$stylist/layout/class/manager/class-names';
import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeStatsCard } from '$stylist/management/interface/recipe/stats-card';
import { STATS_CARD_TREND_ICON } from '$stylist/management/const/record/stats-card-trend-icon';
import { STATS_CARD_TREND_CLASS } from '$stylist/management/const/record/stats-card-trend-class';

export function createStatsCardState(props: RecipeStatsCard & HTMLAttributes<HTMLDivElement>) {
	// Props with defaults
	const text = props.text;
	const value = props.value;
	const trend = props.trend ?? 'neutral';
	const trendValue = props.trendValue;
	const description = props.description;
	const icon = props.icon;
	const propClassName = props.class ?? '';

	// Classes
	const trendClasses = $derived(STATS_CARD_TREND_CLASS[trend]);
	const trendIconName = $derived(STATS_CARD_TREND_ICON[trend]);
	const containerClasses = $derived(ClassNamesManager.merge('c-stats-card', propClassName));
	const headerClasses = $derived('c-stats-card__header');
	const labelClasses = $derived('c-stats-card__label');
	const valueClasses = $derived('c-stats-card__value');
	const iconWrapperClasses = $derived('c-stats-card__icon-wrap');
	const footerClasses = $derived('c-stats-card__footer');
	const trendContainerClasses = $derived(ClassNamesManager.merge('c-stats-card__trend', trendClasses));
	const trendIconClasses = $derived('c-stats-card__trend-icon');
	const descriptionClasses = $derived('c-stats-card__description');

	// Rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			text: _text,
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
		get text() {
			return text;
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

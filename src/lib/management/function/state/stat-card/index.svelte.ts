import { StatCardStyleManager } from '$stylist/information/class/style-manager/stat-card';
import { ObjectManagerStatCard } from '$stylist/information/class/object-manager/stat-card';
import type { StatCardRecipe } from '$stylist/information/interface/recipe/stat-card';

export function createStatCardState(props: StatCardRecipe) {
	const label = $derived((props as any).label ?? '');
	const value = $derived((props as any).value);
	const icon = $derived((props as any).icon);
	const trend = $derived((props as any).trend);
	const trendValue = $derived((props as any).trendValue);
	const description = $derived((props as any).description);
	const variant = $derived((props as any).variant ?? 'default');
	const animated = $derived((props as any).animated ?? false);
	const numericValue = $derived(ObjectManagerStatCard.resolveNumericValue(value));
	const classNameStr = $derived(props.class == null ? undefined : String(props.class));
	const classes = $derived(StatCardStyleManager.getBaseClasses(variant, classNameStr));
	const titleClasses = $derived(StatCardStyleManager.getTitleClasses());
	const valueClasses = $derived(StatCardStyleManager.getValueClasses());
	const trendContainerClasses = $derived(StatCardStyleManager.getTrendContainerClasses());
	const trendTextClasses = $derived(StatCardStyleManager.getTrendTextClasses(trend));
	const trendIconClasses = $derived(StatCardStyleManager.getTrendIconClasses(trend));
	const descriptionClasses = $derived(StatCardStyleManager.getDescriptionClasses());
	const iconContainerClasses = $derived(StatCardStyleManager.getIconContainerClasses());
	const restProps = $derived.by(() => {
		const {
			class: _class,
			label: _label,
			value: _value,
			icon: _icon,
			trend: _trend,
			trendValue: _trendValue,
			description: _description,
			variant: _variant,
			animated: _animated,
			...rest
		} = props;
		return rest;
	});

	return {
		get label() { return label; },
		get value() { return value; },
		get icon() { return icon; },
		get trend() { return trend; },
		get trendValue() { return trendValue; },
		get description() { return description; },
		get variant() { return variant; },
		get animated() { return animated; },
		get numericValue() { return numericValue; },
		get classes() { return classes; },
		get titleClasses() { return titleClasses; },
		get valueClasses() { return valueClasses; },
		get trendContainerClasses() { return trendContainerClasses; },
		get trendTextClasses() { return trendTextClasses; },
		get trendIconClasses() { return trendIconClasses; },
		get descriptionClasses() { return descriptionClasses; },
		get iconContainerClasses() { return iconContainerClasses; },
		get restProps() { return restProps; }
	};
}

export default createStatCardState;







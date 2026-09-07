import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeStatCard } from '$stylist/management/interface/recipe/stat-card';

function resolveNumericValue(value: string | number): number | null {
	if (typeof value === 'number') {
		return value;
	}

	const parsedValue = parseFloat(value.replace(/[^\d.-]/g, ''));
	return Number.isNaN(parsedValue) ? null : parsedValue;
}

export function createStatCardState(props: RecipeStatCard & HTMLAttributes<HTMLDivElement>) {
	const text = $derived(props.text ?? '');
	const value = $derived((props as any).value);
	const icon = $derived((props as any).icon);
	const trend = $derived((props as any).trend);
	const trendValue = $derived((props as any).trendValue);
	const description = $derived((props as any).description);
	const variant = $derived((props as any).variant ?? 'default');
	const animated = $derived((props as any).animated ?? false);
	const numericValue = $derived(resolveNumericValue(value));
	const classNameStr = $derived(props.class == null ? undefined : String(props.class));
	const classes = $derived(classNameStr);
	const restProps = $derived.by(() => {
		const {
			class: _class,
			text: _text,
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
		get text() {
			return text;
		},
		get value() {
			return value;
		},
		get icon() {
			return icon;
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
		get variant() {
			return variant;
		},
		get animated() {
			return animated;
		},
		get numericValue() {
			return numericValue;
		},
		get classes() {
			return classes;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createStatCardState;

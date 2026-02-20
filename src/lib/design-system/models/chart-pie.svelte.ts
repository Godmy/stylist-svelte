import type {
	AnimatedNumberProps,
	ColorSwatchProps,
	NpmBadgeProps,
	NumberFlowProps,
	PieChartProps
} from '$stylist/design-system/props';
import { DataDisplayStyleManager } from '$stylist/design-system/styles/data-display';
import { BADGE_LABELS } from '$stylist/design-system/tokens';
function createAnimatedNumberState(props: AnimatedNumberProps) {
	const value = $derived(props.value);
	const prefix = $derived(props.prefix ?? '');
	const suffix = $derived(props.suffix ?? '');
	const separator = $derived(props.separator ?? ',');
	const decimals = $derived(props.decimals ?? 0);
	const classes = $derived(DataDisplayStyleManager.getAnimatedNumberClasses(props.class));

	const formattedValue = $derived(
		DataDisplayStyleManager.formatAnimatedValue(value, {
			format: props.format ?? 'number',
			separator,
			decimals
		})
	);

	return {
		get value() {
			return value;
		},
		get prefix() {
			return prefix;
		},
		get suffix() {
			return suffix;
		},
		get formattedValue() {
			return formattedValue;
		},
		get classes() {
			return classes;
		}
	};
}

export function createPieChartState(props: PieChartProps) {
	const containerClasses = $derived(DataDisplayStyleManager.getPieChartContainerClasses(props.class));
	const svgClasses = $derived(DataDisplayStyleManager.getPieChartSvgClasses());

	return {
		get containerClasses() {
			return containerClasses;
		},
		get svgClasses() {
			return svgClasses;
		}
	};
}
function createColorSwatchState(props: ColorSwatchProps) {
	const colorValue = props.color ?? '#0ea5e9';
	const color = $derived(colorValue);
	const size = $derived(props.size ?? 32);
	const classes = $derived(
		DataDisplayStyleManager.getColorSwatchClasses(colorValue, size, props.class)
	);

	return {
		get color() {
			return color;
		},
		get size() {
			return size;
		},
		get classes() {
			return classes;
		}
	};
}
function createNpmBadgeState(props: NpmBadgeProps) {
	const type = $derived(props.type);
	const label = $derived(props.label ?? BADGE_LABELS[type as keyof typeof BADGE_LABELS]);
	const classes = $derived(DataDisplayStyleManager.getNpmBadgeClasses(type, props.class));
	const linkClasses = $derived(DataDisplayStyleManager.getNpmBadgeLinkClasses());

	return {
		get type() {
			return type;
		},
		get label() {
			return label;
		},
		get classes() {
			return classes;
		},
		get linkClasses() {
			return linkClasses;
		}
	};
}
function createNumberFlowState(props: NumberFlowProps) {
	const value = $derived(props.value ?? 0);
	const locales = $derived(props.locales ?? 'en-US');
	const format = $derived(props.format);
	const prefix = $derived(props.prefix ?? '');
	const suffix = $derived(props.suffix ?? '');
	const containerClass = $derived(DataDisplayStyleManager.getNumberFlowContainerClasses(props.class));
	const classes = $derived(DataDisplayStyleManager.getNumberFlowClasses(containerClass));
	const formattedValue = $derived(DataDisplayStyleManager.formatNumberFlowValue(value, locales, format));

	return {
		get value() {
			return value;
		},
		get prefix() {
			return prefix;
		},
		get suffix() {
			return suffix;
		},
		get formattedValue() {
			return formattedValue;
		},
		get classes() {
			return classes;
		}
	};
}

export default createPieChartState;




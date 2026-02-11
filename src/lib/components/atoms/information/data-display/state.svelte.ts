import type {
	AnimatedNumberProps,
	ColorSwatchProps,
	NpmBadgeProps,
	NumberFlowProps,
	PieChartProps
} from '$stylist/design-system/props';
import { NPM_BADGE_BASE_CLASSES, NPM_BADGE_TYPE_CLASSES } from '$stylist/design-system/classes';
import { BADGE_LABELS } from '$stylist/design-system/tokens';
import { cn } from '$stylist/utils/classes';

const formatAnimatedValue = (
	value: number,
	options: { format?: AnimatedNumberProps['format']; separator?: string; decimals?: number } = {}
) => {
	const decimals = options.decimals ?? 0;
	const separator = options.separator ?? ',';
	return value
		.toLocaleString('en-US', {
			minimumFractionDigits: decimals,
			maximumFractionDigits: decimals
		})
		.replace(/,/g, separator);
};

export function createAnimatedNumberState(props: AnimatedNumberProps) {
	const value = $derived(props.value);
	const prefix = $derived(props.prefix ?? '');
	const suffix = $derived(props.suffix ?? '');
	const separator = $derived(props.separator ?? ',');
	const decimals = $derived(props.decimals ?? 0);
	const classes = $derived(cn(props.class, 'font-mono'));

	const formattedValue = $derived(
		formatAnimatedValue(value, {
			format: props.format,
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
	const containerClasses = $derived(
		cn('relative inline-flex items-center justify-center', props.class)
	);
	const svgClasses = $derived('block');

	return {
		get containerClasses() {
			return containerClasses;
		},
		get svgClasses() {
			return svgClasses;
		}
	};
}

export function createColorSwatchState(props: ColorSwatchProps) {
	const color = $derived(props.color ?? '#0ea5e9');
	const size = $derived(props.size ?? 32);
	const style = $derived(
		`background-color: ${color}; width: ${size}px; height: ${size}px;`
	);
	const classes = $derived(
		cn('inline-block rounded border border-[--color-border-secondary]', props.class)
	);

	return {
		get color() {
			return color;
		},
		get size() {
			return size;
		},
		get style() {
			return style;
		},
		get classes() {
			return classes;
		}
	};
}

export function createNpmBadgeState(props: NpmBadgeProps) {
	const type = $derived(props.type);
	const className = $derived(cn(props.class));
	const label = $derived(props.label ?? BADGE_LABELS[type]);
	const classes = $derived(
		cn(NPM_BADGE_BASE_CLASSES, NPM_BADGE_TYPE_CLASSES[type], className)
	);
	const linkClasses = $derived('inline-flex items-center gap-1 hover:opacity-80');

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

export function createNumberFlowState(props: NumberFlowProps) {
	const value = $derived(props.value ?? 0);
	const locales = $derived(props.locales ?? 'en-US');
	const format = $derived(props.format);
	const prefix = $derived(props.prefix ?? '');
	const suffix = $derived(props.suffix ?? '');
	const containerClass = $derived(cn('flex items-center', props.class));
	const classes = $derived({
		container: containerClass,
		prefix: 'mr-1',
		suffix: 'ml-1',
		srOnly: 'sr-only'
	});
	const formattedValue = $derived(new Intl.NumberFormat(locales, format).format(value));

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


import type {
	AnimatedNumberProps,
	NumberFlowProps,
	ColorSwatchProps,
	PieChartProps,
	TableBodyProps,
	TableCellProps,
	TableHeaderProps,
	TableProps,
	TableRowProps
} from '$stylist/design-system/attributes';
import {
	formatAnimatedValue,
	formatNumberFlowValue,
	getColorSwatchClasses,
	getColorSwatchStyle,
	getNpmBadgeClasses,
	getNpmBadgeLabel,
	getNpmBadgeLinkClasses,
	getNumberFlowClasses,
	getPieChartContainerClasses,
	getPieChartSvgClasses,
	getTableBodyClasses,
	getTableCaptionClasses,
	getTableCellClasses,
	getTableClasses,
	getTableHeaderClasses,
	getTableRowClasses
} from '$stylist/design-system/presets/information';
import { cn } from '$stylist/utils/classes';

interface NpmBadgeProps {
	type: Parameters<typeof getNpmBadgeLabel>[0];
	label?: string;
	class?: string;
}

export function createNpmBadgeState(props: NpmBadgeProps) {
	const type = $derived(props.type);
	const className = $derived(cn(props.class));
	const label = $derived(getNpmBadgeLabel(type, props.label));
	const classes = $derived(getNpmBadgeClasses(type, className));
	const linkClasses = $derived(getNpmBadgeLinkClasses());

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
	const classes = $derived(getNumberFlowClasses(cn(props.class)));
	const formattedValue = $derived(formatNumberFlowValue(value, locales, format));

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

export function createColorSwatchState(props: ColorSwatchProps) {
	const color = $derived(props.color ?? '#0ea5e9');
	const size = $derived(props.size ?? 32);
	const style = $derived(getColorSwatchStyle(color, size));
	const classes = $derived(getColorSwatchClasses(cn(props.class)));

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

export function createPieChartState(props: PieChartProps) {
	const containerClasses = $derived(getPieChartContainerClasses(cn(props.class)));
	const svgClasses = $derived(getPieChartSvgClasses());

	return {
		get containerClasses() {
			return containerClasses;
		},
		get svgClasses() {
			return svgClasses;
		}
	};
}

export function createTableState(props: TableProps) {
	const classes = $derived(getTableClasses(cn(props.class)));
	const captionClasses = $derived(getTableCaptionClasses());

	return {
		get classes() {
			return classes;
		},
		get captionClasses() {
			return captionClasses;
		}
	};
}

export function createTableHeaderState(props: TableHeaderProps) {
	const classes = $derived(getTableHeaderClasses(cn(props.class)));
	return {
		get classes() {
			return classes;
		}
	};
}

export function createTableBodyState(props: TableBodyProps) {
	const classes = $derived(getTableBodyClasses(cn(props.class)));
	return {
		get classes() {
			return classes;
		}
	};
}

export function createTableRowState(props: TableRowProps) {
	const striped = $derived(props.striped ?? false);
	const active = $derived(props.active ?? false);
	const classes = $derived(getTableRowClasses(striped, active, cn(props.class)));

	return {
		get classes() {
			return classes;
		}
	};
}

export function createTableCellState(props: TableCellProps) {
	const variant = $derived(props.variant ?? 'data');
	const align = $derived(props.align ?? 'left');
	const classes = $derived(getTableCellClasses(variant, align, cn(props.class)));

	return {
		get variant() {
			return variant;
		},
		get classes() {
			return classes;
		}
	};
}

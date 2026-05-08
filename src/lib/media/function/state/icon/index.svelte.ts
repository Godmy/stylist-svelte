import { IconStyleManager } from '$stylist/media/class/style-manager/icons';
import { TOKEN_ICON_REGISTRY } from '$stylist/media/const/record/icon-registry';
import type { IconProps } from '$stylist/media/interface/recipe/icon-icon-props';

function normalizeIconName(value: string): string {
	return value
		.trim()
		.replace(/[_\s]+/g, '-')
		.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
		.toLowerCase();
}

function joinClasses(...values: Array<string | false | null | undefined>) {
	return values.filter(Boolean).join(' ');
}

export function createIconState(props: IconProps) {
	const name = $derived(props.name ?? 'box');
	const svg = $derived(props.svg);
	const size = $derived(props.size ?? 'md');
	const strokeWidth = $derived(props.strokeWidth ?? 1.5);
	const variant = $derived(props.variant ?? 'default');
	const direction = $derived(props.direction);
	const isOpen = $derived(props.isOpen);
	const disabled = $derived(props.disabled ?? false);
	const className = $derived(props.class ?? '');
	const containerClass = $derived(props.containerClass ?? '');
	const container = $derived(props.container ?? 'none');
	const containerSize = $derived(props.containerSize ?? 'md');
	const shape = $derived(props.shape ?? 'circle');
	const color = $derived(props.color ?? 'default');
	const filled = $derived(props.filled ?? false);

	const effectiveName = $derived.by(() => {
		const normalizedName = normalizeIconName(name || 'box');
		const isChevronLike = normalizedName === 'chevron' || normalizedName.startsWith('chevron-');
		if (!isChevronLike || isOpen === undefined) {
			return normalizedName;
		}
		return isOpen ? 'chevron-up' : 'chevron-down';
	});

	const numericSize = $derived.by(() => (typeof size === 'number' ? size : undefined));

	const iconClasses = $derived.by(() =>
		IconStyleManager.getIconChevronClasses({
			size: typeof size === 'number' ? 'md' : size,
			direction,
			variant,
			disabled,
			className
		})
	);

	const containerClasses = $derived.by(() => {
		if (container === 'circle') {
			return IconStyleManager.getIconCircleClasses({
				variant: (color !== 'default' ? color : variant) as Parameters<typeof IconStyleManager.getIconCircleClasses>[0]['variant'],
				size: containerSize,
				filled,
				disabled,
				className: containerClass
			});
		}
		if (container === 'wrapper') {
			return IconStyleManager.getIconWrapperClasses({
				size: containerSize,
				variant,
				shape,
				color: color as Parameters<typeof IconStyleManager.getIconWrapperClasses>[0]['color'],
				disabled,
				className: containerClass
			});
		}
		return containerClass;
	});

	const ariaLabel = $derived.by(() =>
		typeof props['aria-label'] === 'string' ? String(props['aria-label']) : undefined
	);

	const localSvg = $derived.by(() => {
		if (svg) return svg;
		return TOKEN_ICON_REGISTRY[effectiveName as keyof typeof TOKEN_ICON_REGISTRY]
			?? TOKEN_ICON_REGISTRY.box
			?? '';
	});

	const restProps = $derived.by(() => {
		const { class: _class, containerClass: _containerClass, name: _name, svg: _svg, size: _size, strokeWidth: _strokeWidth, variant: _variant, direction: _direction, isOpen: _isOpen, disabled: _disabled, container: _container, containerSize: _containerSize, shape: _shape, color: _color, filled: _filled, ...rest } = props;
		return rest;
	});

	return {
		get name() { return name; },
		get svg() { return svg; },
		get size() { return size; },
		get strokeWidth() { return strokeWidth; },
		get variant() { return variant; },
		get direction() { return direction; },
		get isOpen() { return isOpen; },
		get disabled() { return disabled; },
		get className() { return className; },
		get containerClass() { return containerClass; },
		get container() { return container; },
		get containerSize() { return containerSize; },
		get shape() { return shape; },
		get color() { return color; },
		get filled() { return filled; },
		get effectiveName() { return effectiveName; },
		get numericSize() { return numericSize; },
		get iconClasses() { return iconClasses; },
		get containerClasses() { return containerClasses; },
		get ariaLabel() { return ariaLabel; },
		get localSvg() { return localSvg; },
		get restProps() { return restProps; },
		normalizeIconName,
		joinClasses
	};
}

export default createIconState;

import { ObjectManagerGesture } from '$stylist/interaction/class/object-manager/gesture';
import type { RecipeClickable as ClickProps } from '$stylist/interaction/interface/recipe/clickable';

export const createClickableState = (props: ClickProps) => {
	const normalizedProps = $derived(ObjectManagerGesture.normalizeClickContract(props));

	const classes = $derived.by(() => {
		const { variant = 'default', class: className = '' } = props;
		const { disabled = false, pressEffect = true, hoverEffect = true } = normalizedProps;

		if (disabled)
			return ['c-clickable', 'c-clickable--disabled', className].filter(Boolean).join(' ');

		return [
			'c-clickable',
			variant !== 'default' && `c-clickable--${variant}`,
			pressEffect && 'c-clickable--press',
			hoverEffect && 'c-clickable--hover',
			className
		]
			.filter(Boolean)
			.join(' ');
	});

	const restProps = $derived.by(() => {
		const {
			class: _class,
			onClick,
			onDblClick,
			onContextMenu,
			disabled,
			variant,
			pressEffect,
			hoverEffect,
			cursor,
			children,
			...rest
		} = props;
		return rest;
	});

	function handleClick(event: MouseEvent) {
		if (!normalizedProps.disabled && !props.loading && props.onClick) props.onClick(event);
	}

	function handleDblClick(event: MouseEvent) {
		if (!normalizedProps.disabled && !props.loading && props.onDblClick) props.onDblClick(event);
	}

	function handleContextMenu(event: MouseEvent) {
		if (!normalizedProps.disabled && !props.loading && props.onContextMenu)
			props.onContextMenu(event);
	}

	return {
		get disabled() {
			return normalizedProps.disabled || props.loading;
		},
		get cursor() {
			return normalizedProps.cursor;
		},
		get classes() {
			return classes;
		},
		get restProps() {
			return restProps;
		},
		handleClick,
		handleDblClick,
		handleContextMenu
	};
};

export default createClickableState;

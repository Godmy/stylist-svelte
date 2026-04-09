import { ClickableStyleManager } from '$stylist/interaction/class/style-manager/clickable';
import { ObjectManagerGesture } from '$stylist/interaction/class/object-manager/gesture';
import type { ClickProps } from '$stylist/interaction/interface/proto/clickable-props';

export const createClickableState = (props: ClickProps) => {
	// Нормализация props
	const normalizedProps = $derived(ObjectManagerGesture.normalizeClickContract(props));

	// Вычисляемые классы
	const classes = $derived.by(() =>
		ClickableStyleManager.getClasses({
			variant: props.variant,
			disabled: normalizedProps.disabled,
			pressEffect: normalizedProps.pressEffect,
			hoverEffect: normalizedProps.hoverEffect,
			class: props.class
		})
	);

	// Извлечение rest props
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

	// Обработчики
	function handleClick(event: MouseEvent) {
		if (!normalizedProps.disabled && !props.loading && props.onClick) {
			props.onClick(event);
		}
	}

	function handleDblClick(event: MouseEvent) {
		if (!normalizedProps.disabled && !props.loading && props.onDblClick) {
			props.onDblClick(event);
		}
	}

	function handleContextMenu(event: MouseEvent) {
		if (!normalizedProps.disabled && !props.loading && props.onContextMenu) {
			props.onContextMenu(event);
		}
	}

	return {
		// Getters
		get disabled() {
			return normalizedProps.disabled || props.loading;
		},
		get cursor() {
			return normalizedProps.cursor;
		},

		// State
		classes,
		restProps,

		// Handlers
		handleClick,
		handleDblClick,
		handleContextMenu
	};
};

export default createClickableState;

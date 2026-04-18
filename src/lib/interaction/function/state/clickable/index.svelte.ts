import { ClickableStyleManager } from '$stylist/interaction/class/style-manager/clickable';
import { ObjectManagerGesture } from '$stylist/interaction/class/object-manager/gesture';
import type { SlotClickable as ClickProps } from '$stylist/interaction/interface/slot/clickable';

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

		// SlotState
		get classes() { return classes; },
		get restProps() { return restProps; },

		// Handlers
		handleClick,
		handleDblClick,
		handleContextMenu
	};
};

export default createClickableState;

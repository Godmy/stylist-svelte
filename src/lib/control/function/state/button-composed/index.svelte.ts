import type { ButtonComposedRecipe } from '$stylist/control/interface/recipe/button-composed';
import { createClickableState } from '$stylist/interaction/function/state/clickable';
import { createFocusableState } from '$stylist/interaction/function/state/focusable';
import { createBackgroundState } from '$stylist/layout/function/state/background';
import { createBorderState } from '$stylist/layout/function/state/border';
import { createContainerState } from '$stylist/layout/function/state/container';

export function createButtonComposedState(props: ButtonComposedRecipe) {
	const clickable = createClickableState(props as Parameters<typeof createClickableState>[0]);
	const focusable = createFocusableState(props as Parameters<typeof createFocusableState>[0]);
	const container = createContainerState(props);
	const background = createBackgroundState(props);
	const border = createBorderState(props);

	const isLoading = $derived(props.loading ?? false);
	const isDisabled = $derived(Boolean(props.disabled || clickable.disabled || isLoading));
	const label = $derived(props.label ?? props.ariaLabel ?? props.title);
	const loadingLabel = $derived(props.loadingLabel ?? 'Loading...');
	const badgeText = $derived.by(() => {
		if (props.badge !== undefined) return String(props.badge);
		if (props.count !== undefined && (props.count > 0 || props.showBadge)) return String(props.count);
		return undefined;
	});
	const showDot = $derived(Boolean(props.dot && !badgeText));

	const classes = $derived.by(() => {
		const classList = [
			'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 font-medium transition-colors',
			'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
			props.block ? 'w-full' : undefined,
			isDisabled ? 'pointer-events-none opacity-60' : undefined,
			container.classes,
			background.classes,
			border.classes,
			clickable.classes,
			focusable.classes,
			props.class
		];

		return classList.filter(Boolean).join(' ');
	});

	const inlineStyle = $derived.by(() => {
		const styleParts = [
			background.inlineStyle,
			Object.entries(border.styles)
				.map(([key, value]) => `${key}: ${value}`)
				.join('; ')
		].filter(Boolean);

		return styleParts.length ? styleParts.join('; ') : undefined;
	});

	const restProps = $derived.by(() => {
		const {
			label: _label,
			placeholder: _placeholder,
			title: _title,
			ariaLabel: _ariaLabel,
			icon: _icon,
			iconLeft: _iconLeft,
			iconRight: _iconRight,
			iconSize: _iconSize,
			badge: _badge,
			count: _count,
			dot: _dot,
			showBadge: _showBadge,
			onClick: _onClick,
			onDblClick: _onDblClick,
			onContextMenu: _onContextMenu,
			onFocus: _onFocus,
			onBlur: _onBlur,
			focusEffect: _focusEffect,
			loading: _loading,
			loadingLabel: _loadingLabel,
			cursor: _cursor,
			size: _size,
			density: _density,
			shape: _shape,
			alignItems: _alignItems,
			justifyContent: _justifyContent,
			background: _background,
			backgroundColor: _backgroundColor,
			backgroundImage: _backgroundImage,
			backgroundPosition: _backgroundPosition,
			backgroundSize: _backgroundSize,
			backgroundRepeat: _backgroundRepeat,
			gradient: _gradient,
			opacity: _opacity,
			variant: _variant,
			borderStyle: _borderStyle,
			borderWidth: _borderWidth,
			borderColor: _borderColor,
			borderRadius: _borderRadius,
			borderTop: _borderTop,
			borderBottom: _borderBottom,
			borderLeft: _borderLeft,
			borderRight: _borderRight,
			animated: _animated,
			children: _children,
			class: _class,
			onclick: _onclick,
			ondblclick: _ondblclick,
			oncontextmenu: _oncontextmenu,
			onfocus: _onfocus,
			onblur: _onblur,
			...rest
		} = props;

		return rest;
	});

	function handleClick(event: MouseEvent) {
		if (isDisabled) {
			event.preventDefault();
			event.stopPropagation();
			return;
		}

		clickable.handleClick(event);
		props.onclick?.(event as Parameters<NonNullable<typeof props.onclick>>[0]);
	}

	function handleDblClick(event: MouseEvent) {
		if (isDisabled) return;
		clickable.handleDblClick(event);
		props.ondblclick?.(event as Parameters<NonNullable<typeof props.ondblclick>>[0]);
	}

	function handleContextMenu(event: MouseEvent) {
		if (isDisabled) return;
		clickable.handleContextMenu(event);
		props.oncontextmenu?.(event as Parameters<NonNullable<typeof props.oncontextmenu>>[0]);
	}

	function handleFocus(event: FocusEvent) {
		if (isDisabled) return;
		focusable.handleFocus(event);
		props.onfocus?.(event as Parameters<NonNullable<typeof props.onfocus>>[0]);
	}

	function handleBlur(event: FocusEvent) {
		focusable.handleBlur(event);
		props.onblur?.(event as Parameters<NonNullable<typeof props.onblur>>[0]);
	}

	return {
		clickable,
		focusable,
		container,
		background,
		border,
		get isLoading() {
			return isLoading;
		},
		get isDisabled() {
			return isDisabled;
		},
		get label() {
			return label;
		},
		get loadingLabel() {
			return loadingLabel;
		},
		get badgeText() {
			return badgeText;
		},
		get showDot() {
			return showDot;
		},
		get classes() {
			return classes;
		},
		get inlineStyle() {
			return inlineStyle;
		},
		get restProps() {
			return restProps;
		},
		handleClick,
		handleDblClick,
		handleContextMenu,
		handleFocus,
		handleBlur
	};
}

export default createButtonComposedState;

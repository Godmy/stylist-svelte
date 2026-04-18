import type { ButtonMouseEvent } from '$stylist/control/type/struct/button-mouse-event';
import type { ButtonPropsRecord } from '$stylist/control/type/struct/button-props-record';
import { createAtoms, mergeAtomClasses, mergeAtomStyles } from '$stylist/interaction/factory/atoms';
import type { ButtonMoleculeProps } from '$stylist/control/type/alias/button-molecule-props';

export function createButtonMoleculeState(props: ButtonMoleculeProps) {
	const atoms = $derived(createAtoms(['container', 'background', 'border', 'click'], props));
	const isLoading = $derived(props.loading ?? false);
	const loadingLabel = $derived(props.loadingLabel ?? 'Loading...');

	function resolveAtomClass(value: unknown): string | undefined {
		if (typeof value === 'function') {
			const resolved = value();
			return typeof resolved === 'string' ? resolved : undefined;
		}
		return typeof value === 'string' ? value : undefined;
	}

	function resolveAtomStyles(value: unknown): Record<string, string | number> | undefined {
		if (typeof value === 'function') {
			const resolved = value();
			return resolved && typeof resolved === 'object'
				? (resolved as Record<string, string | number>)
				: undefined;
		}
		return value && typeof value === 'object'
			? (value as Record<string, string | number>)
			: undefined;
	}

	function stringifyStyles(styles: Record<string, string | number>): string | undefined {
		const entries = Object.entries(styles);
		if (!entries.length) return undefined;
		return entries.map(([key, value]) => `${key}: ${value}`).join('; ');
	}

	const classes = $derived(
		mergeAtomClasses(
			resolveAtomClass(atoms.container?.state.classes),
			resolveAtomClass(atoms.background?.state.classes),
			resolveAtomClass(atoms.border?.state.classes),
			resolveAtomClass(atoms.click?.state.classes)
		)
	);

	const inlineStyles = $derived(
		stringifyStyles(
			mergeAtomStyles(
				resolveAtomStyles(atoms.background?.state.styles),
				resolveAtomStyles(atoms.border?.state.styles)
			)
		)
	);

	const restAttrs = $derived.by(() => {
		const {
			variant, size, disabled, loading, block, loadingLabel: _loadingLabel,
			children, class: className, background, backgroundColor, backgroundImage,
			backgroundPosition, backgroundSize, backgroundRepeat, gradient, opacity,
			borderStyle, borderWidth, borderColor, borderRadius, borderTop, borderBottom,
			borderLeft, borderRight, animated, onclick, ondblclick, oncontextmenu,
			onmousedown, onmouseup, onmouseenter, onmouseleave, pressEffect, hoverEffect,
			cursor, layoutLevel, layoutShape, layoutGravity, layoutMargin, layoutPadding,
			layoutElevation, layoutGutter, layoutAnchor, 'data-theme': dataTheme,
			'data-variant': dataVariant, 'data-tone': dataTone, 'data-state': dataState,
			'data-gradient': dataGradient, interactionIntent, interactionFeedback,
			interactionDelay, interactionDuration, interactionState, ...rest
		} = props as ButtonPropsRecord;
		return rest;
	});

	const isDisabled = $derived(atoms.click?.state.disabled ?? isLoading);

	const BASE_BUTTON_CLASSES = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
	const LOADER_CLASSES = 'w-4 h-4 mr-2 animate-spin';
	const SR_ONLY_CLASSES = 'sr-only';

	function isInteractionAllowed(): boolean {
		return !atoms.click?.state.disabled && !isLoading;
	}

	function handleClick(event: ButtonMouseEvent) {
		if (isInteractionAllowed() && props.onclick) {
			props.onclick(event);
		}
	}

	function handleDblClick(event: ButtonMouseEvent) {
		if (isInteractionAllowed() && props.ondblclick) {
			props.ondblclick(event);
		}
	}

	function handleContextMenu(event: ButtonMouseEvent) {
		if (isInteractionAllowed() && props.oncontextmenu) {
			props.oncontextmenu(event);
		}
	}

	function handleMouseDown(event: ButtonMouseEvent) {
		if (isInteractionAllowed() && props.onmousedown) {
			props.onmousedown(event);
		}
	}

	function handleMouseUp(event: ButtonMouseEvent) {
		if (isInteractionAllowed() && props.onmouseup) {
			props.onmouseup(event);
		}
	}

	function handleMouseEnter(event: ButtonMouseEvent) {
		if (isInteractionAllowed() && props.onmouseenter) {
			props.onmouseenter(event);
		}
	}

	function handleMouseLeave(event: ButtonMouseEvent) {
		if (isInteractionAllowed() && props.onmouseleave) {
			props.onmouseleave(event);
		}
	}

	return {
		get atoms() {
			return atoms;
		},
		get isLoading() {
			return isLoading;
		},
		get loadingLabel() {
			return loadingLabel;
		},
		get classes() {
			return classes;
		},
		get inlineStyles() {
			return inlineStyles;
		},
		get restAttrs() {
			return restAttrs;
		},
		get isDisabled() {
			return isDisabled;
		},
		BASE_BUTTON_CLASSES,
		LOADER_CLASSES,
		SR_ONLY_CLASSES,
		handleClick,
		handleDblClick,
		handleContextMenu,
		handleMouseDown,
		handleMouseUp,
		handleMouseEnter,
		handleMouseLeave,
		props
	};
}

export default createButtonMoleculeState;

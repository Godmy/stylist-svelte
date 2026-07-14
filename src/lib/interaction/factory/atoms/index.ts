import type { ContainerProps } from '$stylist/layout/type/struct/container/container-props';
import type { RecipeThemeBackground } from '$stylist/layout/interface/recipe/background';
import type { RecipeBorder } from '$stylist/layout/interface/recipe/border';
import type { SlotClick as ClickProps } from '$stylist/control/interface/slot/click';

import createContainerState from '$stylist/layout/function/state/container/index.svelte';
import createBackgroundState from '$stylist/layout/function/state/background/index.svelte';
import createBorderState from '$stylist/layout/function/state/border/index.svelte';
import createClickState from '$stylist/interaction/function/state/click/index.svelte';

type ContainerContract = ContainerProps;

export interface Atom<TContract, TState> {
	contract: TContract;
	state: TState;
}

export type AtomName = 'container' | 'background' | 'border' | 'click';

export interface AtomContracts {
	container: ContainerContract;
	background: RecipeThemeBackground;
	border: RecipeBorder;
	click: ClickProps;
}

export interface AtomStates {
	container: ReturnType<typeof createContainerState>;
	background: ReturnType<typeof createBackgroundState>;
	border: ReturnType<typeof createBorderState>;
	click: ReturnType<typeof createClickState>;
}

export interface AtomsMap {
	container: Atom<ContainerContract, ReturnType<typeof createContainerState>>;
	background: Atom<RecipeThemeBackground, ReturnType<typeof createBackgroundState>>;
	border: Atom<RecipeBorder, ReturnType<typeof createBorderState>>;
	click: Atom<ClickProps, ReturnType<typeof createClickState>>;
}

function extractContainerProps<T extends Record<string, any>>(props: T): ContainerContract {
	const {
		size,
		class: className,
		layoutLevel,
		layoutShape,
		layoutGravity,
		layoutMargin,
		layoutPadding,
		layoutElevation,
		layoutGutter,
		layoutAnchor,
		...rest
	} = props as any;

	return {
		size,
		class: className,
		layoutLevel,
		layoutShape,
		layoutGravity,
		layoutMargin,
		layoutPadding,
		layoutElevation,
		layoutGutter,
		layoutAnchor
	};
}

function extractThemeBackgroundRecipe<T extends Record<string, any>>(
	props: T
): RecipeThemeBackground {
	const {
		class: className,
		background,
		backgroundColor,
		backgroundImage,
		backgroundPosition,
		backgroundSize,
		backgroundRepeat,
		gradient,
		opacity,
		variant,
		...rest
	} = props as any;

	return {
		class: className,
		background,
		backgroundColor,
		backgroundImage,
		backgroundPosition,
		backgroundSize,
		backgroundRepeat,
		gradient,
		opacity,
		variant
	};
}

function extractBorderRecipe<T extends Record<string, any>>(props: T): RecipeBorder {
	const {
		class: className,
		borderStyle,
		borderWidth,
		borderColor,
		borderRadius,
		borderTop,
		borderBottom,
		borderLeft,
		borderRight,
		animated,
		...rest
	} = props as any;

	return {
		class: className,
		borderStyle,
		borderWidth,
		borderColor,
		borderRadius,
		borderTop,
		borderBottom,
		borderLeft,
		borderRight,
		animated
	};
}

function extractClickProps<T extends Record<string, any>>(props: T): ClickProps {
	const {
		class: className,
		onClick,
		onDblClick,
		onContextMenu,
		onMouseDown,
		onMouseUp,
		onMouseEnter,
		onMouseLeave,
		disabled,
		variant,
		pressEffect,
		hoverEffect,
		cursor,
		interactionIntent,
		interactionFeedback,
		interactionDelay,
		interactionDuration,
		interactionState,
		...rest
	} = props as any;

	return {
		class: className,
		onClick,
		onDblClick,
		onContextMenu,
		onMouseDown,
		onMouseUp,
		onMouseEnter,
		onMouseLeave,
		disabled,
		variant,
		pressEffect,
		hoverEffect,
		cursor,
		interactionIntent,
		interactionFeedback,
		interactionDelay,
		interactionDuration,
		interactionState
	};
}

export function createAtoms<Names extends AtomName[]>(
	atomNames: Names,
	props: Record<string, any>
): Pick<AtomsMap, Names[number]> {
	const atoms: Record<string, any> = {};

	for (const atomName of atomNames) {
		switch (atomName) {
			case 'container': {
				const contract = extractContainerProps(props);
				const state = createContainerState(contract);
				atoms.container = { contract, state };
				break;
			}
			case 'background': {
				const contract = extractThemeBackgroundRecipe(props);
				const state = createBackgroundState(contract);
				atoms.background = { contract, state };
				break;
			}
			case 'border': {
				const contract = extractBorderRecipe(props);
				const state = createBorderState(contract);
				atoms.border = { contract, state };
				break;
			}
			case 'click': {
				const contract = extractClickProps(props);
				const state = createClickState(contract);
				atoms.click = { contract, state };
				break;
			}
		}
	}

	return atoms as Pick<AtomsMap, Names[number]>;
}

export function mergeAtomClasses(...classes: Array<string | undefined | null>): string {
	return classes.filter(Boolean).join(' ');
}

export function mergeAtomStyles(
	...styles: Array<Record<string, string | number> | undefined | null>
): Record<string, string | number> {
	const merged: Record<string, string | number> = {};
	for (const style of styles) {
		if (style) {
			Object.assign(merged, style);
		}
	}
	return merged;
}

export function mergeAtomAttrs(
	...atoms: Array<Record<string, any> | undefined>
): Record<string, any> {
	const merged: Record<string, any> = {};
	for (const atom of atoms) {
		if (atom) {
			Object.assign(merged, atom);
		}
	}
	return merged;
}

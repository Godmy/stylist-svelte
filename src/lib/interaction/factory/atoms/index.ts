/**
 * Atom Factory — создаёт атомы из контрактов и моделей
 * 
 * Атом = контракт (props) + модель (state)
 * 
 * Пример использования:
 * ```typescript
 * const atoms = createAtoms(
 *   ['container', 'background', 'border', 'click'],
 *   props
 * );
 * 
 * // Возвращает:
 * // {
 * //   container: { contract: {...}, state: {...} },
 * //   background: { contract: {...}, state: {...} },
 * //   border: { contract: {...}, state: {...} },
 * //   click: { contract: {...}, state: {...} }
 * // }
 * ```
 */

import type { ArchitectureContractOfT } from '$stylist/architecture/type/contract';
import type { BackgroundProps } from '$stylist/information/interface/background';
import type { BorderProps } from '$stylist/information/interface/border';
import type { ClickProps } from '$stylist/interaction/interface/click';

import { createContainerState } from '$stylist/architecture/state/container';
import { createBackgroundState } from '$stylist/information/state/background';
import { createBorderState } from '$stylist/information/state/border';
import { createClickState } from '$stylist/interaction/state/click';

type ContainerContract = ArchitectureContractOfT<'Container'>;

// ============================================================================
// Типы атомов
// ============================================================================

/** Базовый интерфейс атома */
export interface Atom<TContract, TState> {
	contract: TContract;
	state: TState;
}

/** Типы поддерживаемых атомов */
export type AtomName = 'container' | 'background' | 'border' | 'click';

/** Контракты для всех атомов */
export interface AtomContracts {
	container: ContainerContract;
	background: BackgroundProps;
	border: BorderProps;
	click: ClickProps;
}

/** Состояния для всех атомов */
export interface AtomStates {
	container: ReturnType<typeof createContainerState>;
	background: ReturnType<typeof createBackgroundState>;
	border: ReturnType<typeof createBorderState>;
	click: ReturnType<typeof createClickState>;
}

/** Атомы по именам */
export interface AtomsMap {
	container: Atom<ContainerContract, ReturnType<typeof createContainerState>>;
	background: Atom<BackgroundProps, ReturnType<typeof createBackgroundState>>;
	border: Atom<BorderProps, ReturnType<typeof createBorderState>>;
	click: Atom<ClickProps, ReturnType<typeof createClickState>>;
}

// ============================================================================
// Маппер пропсов — распределяет props молекулы по контрактам атомов
// ============================================================================

/**
 * Извлекает props для атома container из общих props молекулы
 */
function extractContainerProps<T extends Record<string, any>>(
	props: T
): ContainerContract {
	const {
		size,
		class: className,
		// Architecture HTML attributes
		layoutLevel,
		layoutShape,
		layoutGravity,
		layoutMargin,
		layoutPadding,
		layoutElevation,
		layoutGutter,
		layoutAnchor,
		// Theme attributes
		'data-theme': dataTheme,
		'data-variant': dataVariant,
		'data-tone': dataTone,
		'data-state': dataState,
		'data-gradient': dataGradient,
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
		layoutAnchor,
		'data-theme': dataTheme,
		'data-variant': dataVariant,
		'data-tone': dataTone,
		'data-state': dataState,
		'data-gradient': dataGradient
	};
}

/**
 * Извлекает props для атома background из общих props молекулы
 */
function extractBackgroundProps<T extends Record<string, any>>(props: T): BackgroundProps {
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
		// Theme attributes
		'data-theme': dataTheme,
		'data-variant': dataVariant,
		'data-tone': dataTone,
		'data-state': dataState,
		'data-gradient': dataGradient,
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
		variant,
		'data-theme': dataTheme,
		'data-variant': dataVariant,
		'data-tone': dataTone,
		'data-state': dataState,
		'data-gradient': dataGradient
	};
}

/**
 * Извлекает props для атома border из общих props молекулы
 */
function extractBorderProps<T extends Record<string, any>>(props: T): BorderProps {
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
		// Theme attributes
		'data-theme': dataTheme,
		'data-variant': dataVariant,
		'data-tone': dataTone,
		'data-state': dataState,
		'data-gradient': dataGradient,
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
		animated,
		'data-theme': dataTheme,
		'data-variant': dataVariant,
		'data-tone': dataTone,
		'data-state': dataState,
		'data-gradient': dataGradient
	};
}

/**
 * Извлекает props для атома click из общих props молекулы
 */
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
		// Theme attributes
		'data-theme': dataTheme,
		'data-variant': dataVariant,
		'data-tone': dataTone,
		'data-state': dataState,
		'data-gradient': dataGradient,
		// Interaction attributes
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
		'data-theme': dataTheme,
		'data-variant': dataVariant,
		'data-tone': dataTone,
		'data-state': dataState,
		'data-gradient': dataGradient,
		interactionIntent,
		interactionFeedback,
		interactionDelay,
		interactionDuration,
		interactionState
	};
}

// ============================================================================
// Фабрика атомов
// ============================================================================

/**
 * Создаёт атомы по именам из общих props
 * 
 * @param atomNames - Массив имён атомов для создания
 * @param props - Общие props молекулы, которые будут распределены по атомам
 * @returns Объект с созданными атомами
 */
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
				const contract = extractBackgroundProps(props);
				const state = createBackgroundState(contract);
				atoms.background = { contract, state };
				break;
			}
			case 'border': {
				const contract = extractBorderProps(props);
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

// ============================================================================
// Утилиты для работы с атомами
// ============================================================================

/**
 * Объединяет классы из нескольких атомов
 */
export function mergeAtomClasses(...classes: Array<string | undefined | null>): string {
	return classes.filter(Boolean).join(' ');
}

/**
 * Объединяет стили из нескольких атомов
 */
export function mergeAtomStyles(...styles: Array<Record<string, string | number> | undefined | null>): Record<string, string | number> {
	const merged: Record<string, string | number> = {};
	for (const style of styles) {
		if (style) {
			Object.assign(merged, style);
		}
	}
	return merged;
}

/**
 * Объединяет атрибуты из нескольких атомов (последний приоритетнее)
 */
export function mergeAtomAttrs(...atoms: Array<Record<string, any> | undefined>): Record<string, any> {
	const merged: Record<string, any> = {};
	for (const atom of atoms) {
		if (atom) {
			Object.assign(merged, atom);
		}
	}
	return merged;
}


<script lang="ts">
	/**
	 * Button — молекула, собранная из атомов
	 * 
	 * Атомы:
	 * - container: архитектура (размер, layout)
	 * - background: информация (фон, градиент)
	 * - border: информация (граница, скругление)
	 * - click: интерактивность (клики, hover, disabled)
	 * 
	 * @param variant - Визуальный стиль ('primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link')
	 * @param size - Размер ('xs' | 'sm' | 'md' | 'lg' | 'xl')
	 * @param disabled - Отключена ли кнопка
	 * @param loading - Состояние загрузки
	 * @param block - Растянуть на полную ширину
	 * @param children - Содержимое кнопки
	 */

	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import type { ContainerProps } from '$stylist/layout/type/struct/container';
	import type { ThemeBackgroundRecipe } from '$stylist/layout/interface/recipe/background';
	import type { BorderRecipe } from '$stylist/layout/interface/recipe/border';
	import type { ClickProps } from '$stylist/control/interface/component/click/other';
	import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
	import type { TokenSize } from '$stylist/layout/type/enum/size';
	import { createAtoms, mergeAtomClasses, mergeAtomStyles } from '$stylist/interaction/factory/atoms';

	// ============================================================================
	// Типы
	// ============================================================================

	type ButtonMouseEvent = MouseEvent & { currentTarget: EventTarget & HTMLButtonElement };
	type ButtonPropsRecord = ButtonProps & Record<string, unknown>;

	export type ButtonProps = HTMLButtonAttributes &
		ContainerProps &
		ThemeBackgroundRecipe &
		BorderRecipe &
		ClickProps & {
		variant?: TokenAppearance;
		size?: TokenSize;
		loading?: boolean;
		block?: boolean;
		loadingLabel?: string;
		children?: Snippet;
		class?: string;
	};

	// ============================================================================
	// Props и атомы
	// ============================================================================

	let props: ButtonProps = $props();

	// Создаём атомы из props
	const atoms = createAtoms(['container', 'background', 'border', 'click'], props);

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
		if (!entries.length) {
			return undefined;
		}

		return entries.map(([key, value]) => `${key}: ${value}`).join('; ');
	}

	// ============================================================================
	// Вычисляемые значения
	// ============================================================================

	// Объединяем классы всех атомов
	const classes = $derived(
		mergeAtomClasses(
			resolveAtomClass(atoms.container?.state.classes),
			resolveAtomClass(atoms.background?.state.classes),
			resolveAtomClass(atoms.border?.state.classes),
			resolveAtomClass(atoms.click?.state.classes)
		)
	);

	// Объединяем стили всех атомов
	const inlineStyles = $derived(
		stringifyStyles(
			mergeAtomStyles(
				resolveAtomStyles(atoms.background?.state.styles),
				resolveAtomStyles(atoms.border?.state.styles)
			)
		)
	);

	// Извлекаем rest-атрибуты (исключаем обработанные атомами)
	const restAttrs = $derived(() => {
		const {
			variant,
			size,
			disabled,
			loading,
			block,
			loadingLabel,
			children,
			class: className,
			background,
			backgroundColor,
			backgroundImage,
			backgroundPosition,
			backgroundSize,
			backgroundRepeat,
			gradient,
			opacity,
			borderStyle,
			borderWidth,
			borderColor,
			borderRadius,
			borderTop,
			borderBottom,
			borderLeft,
			borderRight,
			animated,
			onclick,
			ondblclick,
			oncontextmenu,
			onmousedown,
			onmouseup,
			onmouseenter,
			onmouseleave,
			pressEffect,
			hoverEffect,
			cursor,
			// Architecture
			layoutLevel,
			layoutShape,
			layoutGravity,
			layoutMargin,
			layoutPadding,
			layoutElevation,
			layoutGutter,
			layoutAnchor,
			// Theme
			'data-theme': dataTheme,
			'data-variant': dataVariant,
			'data-tone': dataTone,
			'data-state': dataState,
			'data-gradient': dataGradient,
			// Interaction
			interactionIntent,
			interactionFeedback,
			interactionDelay,
			interactionDuration,
			interactionState,
			...rest
		} = props as ButtonPropsRecord;

		return rest;
	});

	// Состояние загрузки
	const isLoading = $derived(props.loading ?? false);

	// Label для загрузки
	const loadingLabel = $derived(props.loadingLabel ?? 'Loading...');

	// ============================================================================
	// Обработчики событий
	// ============================================================================

	function handleClick(event: ButtonMouseEvent) {
		if (!atoms.click?.state.disabled && !isLoading && props.onclick) {
			props.onclick(event);
		}
	}

	function handleDblClick(event: ButtonMouseEvent) {
		if (!atoms.click?.state.disabled && !isLoading && props.ondblclick) {
			props.ondblclick(event);
		}
	}

	function handleContextMenu(event: ButtonMouseEvent) {
		if (!atoms.click?.state.disabled && !isLoading && props.oncontextmenu) {
			props.oncontextmenu(event);
		}
	}

	function handleMouseDown(event: ButtonMouseEvent) {
		if (!atoms.click?.state.disabled && !isLoading && props.onmousedown) {
			props.onmousedown(event);
		}
	}

	function handleMouseUp(event: ButtonMouseEvent) {
		if (!atoms.click?.state.disabled && !isLoading && props.onmouseup) {
			props.onmouseup(event);
		}
	}

	function handleMouseEnter(event: ButtonMouseEvent) {
		if (!atoms.click?.state.disabled && !isLoading && props.onmouseenter) {
			props.onmouseenter(event);
		}
	}

	function handleMouseLeave(event: ButtonMouseEvent) {
		if (!atoms.click?.state.disabled && !isLoading && props.onmouseleave) {
			props.onmouseleave(event);
		}
	}

	// ============================================================================
	// Базовые классы кнопки
	// ============================================================================

	// Базовые классы для кнопки (общие для всех вариантов)
	const BASE_BUTTON_CLASSES = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

	// Классы для лоадера
	const LOADER_CLASSES = 'w-4 h-4 mr-2 animate-spin';

	// Классы для sr-only (screen reader only)
	const SR_ONLY_CLASSES = 'sr-only';
</script>

<button
	{...restAttrs}
	type={props.type ?? 'button'}
	class={BASE_BUTTON_CLASSES + ' ' + classes}
	style={inlineStyles}
	disabled={atoms.click?.state.disabled ?? isLoading}
	onclick={handleClick}
	ondblclick={handleDblClick}
	oncontextmenu={handleContextMenu}
	onmousedown={handleMouseDown}
	onmouseup={handleMouseUp}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
>
	{#if isLoading}
		<svg class={LOADER_CLASSES} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
			<path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			/>
		</svg>
		<span class={SR_ONLY_CLASSES}>{loadingLabel}</span>
	{/if}

	{#if props.children}
		{@render props.children()}
	{:else if isLoading}
		{loadingLabel}
	{/if}
</button>




import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { Alignment, Justification } from '../tokens';
import type { HorizontalGap } from '../classes/layout';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from './common';

/**
 * Размер для layout компонентов
 */
export type LayoutSize = '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4' | 'full';

/**
 * Базовые типы для layout компонентов
 */
export type LayoutDirection = 'vertical' | 'horizontal';

/**
 * Секция для layout с динамическими элементами
 */
export interface LayoutSection {
	id?: string;
	content: Snippet;
	size?: LayoutSize;
	className?: string;
}

/**
 * Вертикальный layout - базовый компонент для вертикального выравнивания
 */
export interface VerticalLayoutProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	children: Snippet;
	gap?: HorizontalGap;
	alignItems?: Alignment;
	justifyContent?: Justification;
	fillHeight?: boolean;
}

/**
 * Горизонтальный layout - универсальный компонент для горизонтального/вертикального выравнивания
 * Объединяет функциональность stacked-layout, side-by-side-layout и split-layout
 */
export interface HorizontalLayoutProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	children?: Snippet;
	sections?: LayoutSection[];
	direction?: LayoutDirection;
	gap?: HorizontalGap;
	alignItems?: Alignment;
	justifyContent?: Justification;
	responsive?: boolean;
	primarySize?: LayoutSize;
	secondarySize?: LayoutSize;
	wrap?: boolean;
}

/**
 * Grid layout - компонент для сеточной раскладки
 */
export interface GridLayoutExtendedProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	children: Snippet;
	cols?: number;
	gap?: HorizontalGap;
	responsive?: boolean;
	alignItems?: Alignment;
	justifyContent?: Justification;
}

/**
 * Устаревшие типы для обратной совместимости
 * @deprecated Используйте HorizontalLayoutProps
 */
export type StackedLayoutProps = HorizontalLayoutProps;

/**
 * Устаревшие типы для обратной совместимости
 * @deprecated Используйте HorizontalLayoutProps с sections=[primary, secondary]
 */
export type SplitLayoutProps = HorizontalLayoutProps;

/**
 * Устаревшие типы для обратной совместимости
 * @deprecated Используйте HorizontalLayoutProps с sections
 */
export type SideBySideLayoutProps = HorizontalLayoutProps;

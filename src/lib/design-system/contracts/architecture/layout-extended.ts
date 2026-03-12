import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { Alignment, Justification, Orientation, ComponentSize } from '../../tokens';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from '../information/common';

/**
 * Секция для layout с динамическими элементами
 */
export interface LayoutSection {
	id?: string;
	content: Snippet;
	size?: ComponentSize | 'xl' | '2xl' | 'full';
	className?: string;
}

/**
 * Вертикальный layout - базовый компонент для вертикального выравнивания
 */
export interface VerticalLayoutProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	children: Snippet;
	gap?: ComponentSize;
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
	direction?: Orientation;
	gap?: ComponentSize;
	alignItems?: Alignment;
	justifyContent?: Justification;
	responsive?: boolean;
	primarySize?: ComponentSize | 'xl' | '2xl' | 'full';
	secondarySize?: ComponentSize | 'xl' | '2xl' | 'full';
	wrap?: boolean;
}

/**
 * Grid layout - компонент для сеточной раскладки
 */
export interface GridLayoutExtendedProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	children: Snippet;
	cols?: number;
	gap?: ComponentSize;
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

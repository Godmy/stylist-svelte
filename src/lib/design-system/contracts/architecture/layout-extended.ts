import type { Snippet } from 'svelte';
import type { Alignment, Justification, Orientation, ComponentSize } from '$stylist/design-system/tokens';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from '$stylist/design-system/contracts/information/common';

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





import type { Snippet } from 'svelte';
import type { Alignment, Justification, Orientation, ComponentSize } from '$stylist/design-system/tokens';
import type { ArchitectureHTMLAttributes } from '$stylist/design-system/html/attributes/architecture';
import type { ChildrenHtmlAttributes } from '$stylist/design-system/html/attributes/children';

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
export interface VerticalLayoutProps
	extends ArchitectureHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement> {
	gap?: ComponentSize;
	alignItems?: Alignment;
	justifyContent?: Justification;
	fillHeight?: boolean;
}

/**
 * Горизонтальный layout - универсальный компонент для горизонтального/вертикального выравнивания
 * Объединяет функциональность stacked-layout, side-by-side-layout и split-layout
 */
export interface HorizontalLayoutProps
	extends ArchitectureHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement> {
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
export interface GridLayoutExtendedProps
	extends ArchitectureHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement> {
	cols?: number;
	gap?: ComponentSize;
	responsive?: boolean;
	alignItems?: Alignment;
	justifyContent?: Justification;
}




import type { Snippet } from 'svelte';
import type { HtmlAttributesBase } from '$stylist/design-system/contracts/information/common';
import type { GraphPortProps } from '$stylist/design-system/contracts/information/graph-port';
import type { GraphPortDirection } from '$stylist/design-system/tokens/information/graph-port';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';

/**
 * Свойства группы портов
 */
export interface PortGroupProps extends HtmlAttributesBase<HTMLDivElement> {
	/** Уникальный идентификатор группы */
	id: string;
	/** Направление портов */
	direction: GraphPortDirection;
	/** Порты */
	ports?: readonly GraphPortProps[];
	/** Размер портов */
	portSize?: ComponentSize;
	/** Показывать метки */
	showLabels?: boolean;
	/** Показывать иконки типов */
	showTypeIcons?: boolean;
	/** Компактный режим */
	compact?: boolean;
	/** Разделитель между портами */
	divider?: boolean;
	/** Заголовок группы */
	title?: string;
	/** Обработчик клика по порту */
	onPortClick?: (portId: string, event: MouseEvent) => void;
	/** Обработчик начала подключения */
	onConnectionStart?: (port: GraphPortProps, event: MouseEvent) => void;
	/** Обработчик завершения подключения */
	onConnectionEnd?: (port: GraphPortProps, event: MouseEvent) => void;
	/** Дочерний контент */
	children?: Snippet;
}





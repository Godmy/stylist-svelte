import type { Snippet } from 'svelte';
import type { HtmlAttributesBase } from '$stylist/design-system/contracts/information/common';
import type { GraphPortDataType, GraphPortDirection } from '$stylist/design-system/tokens/information/graph-port';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';

import type { LiteGraphNodeState, LiteGraphNodeType } from '$stylist/design-system/tokens/information/litegraph-node';
/**
 * Порт узла графа
 */
export interface LiteGraphPort {
	/** Уникальный идентификатор порта */
	id: string;
	/** Направление */
	direction: GraphPortDirection;
	/** Тип данных */
	dataType?: GraphPortDataType;
	/** Метка */
	label?: string;
	/** Размер */
	size?: ComponentSize;
	/** Подключён ли */
	connected?: boolean;
	/** Цвет */
	color?: string;
	/** CSS класс */
	class?: string;
}

/**
 * Свойство узла графа
 */
export interface LiteGraphNodeProperty {
	/** Уникальный идентификатор свойства */
	id: string;
	/** Имя свойства */
	name: string;
	/** Тип свойства */
	type?: 'string' | 'number' | 'boolean' | 'enum' | 'color' | 'vector2' | 'vector3';
	/** Значение */
	value?: unknown;
	/** Метка */
	label?: string;
	/** Описание */
	description?: string;
	/** Опции для enum */
	options?: readonly string[];
}

/**
 * Свойства узла графа LiteGraph
 */
export interface LiteGraphNodeProps extends HtmlAttributesBase<HTMLDivElement> {
	/** Уникальный идентификатор узла */
	id: string;
	/** Заголовок узла */
	title: string;
	/** Тип узла */
	type?: LiteGraphNodeType;
	/** Состояние узла */
	state?: LiteGraphNodeState;
	/** Позиция X */
	x: number;
	/** Позиция Y */
	y: number;
	/** Ширина узла */
	width?: number;
	/** Минимальная ширина */
	minWidth?: number;
	/** Высота (авто или фиксированная) */
	height?: number | 'auto';
	/** Цвет узла */
	color?: string;
	/** Цвет заголовка */
	headerColor?: string;
	/** Размер компонента */
	size?: ComponentSize;
	/** Входные порты */
	inputs?: readonly LiteGraphPort[];
	/** Выходные порты */
	outputs?: readonly LiteGraphPort[];
	/** Свойства узла */
	properties?: readonly LiteGraphNodeProperty[];
	/** Выделен ли узел */
	selected?: boolean;
	/** Можно ли перемещать */
	draggable?: boolean;
	/** Можно ли выделять */
	selectable?: boolean;
	/** Можно ли изменять размер */
	resizable?: boolean;
	/** Можно ли удалять */
	deletable?: boolean;
	/** Можно ли дублировать */
	duplicable?: boolean;
	/** Скрыть заголовок */
	hideHeader?: boolean;
	/** Скрыть порты */
	hidePorts?: boolean;
	/** Скрыть свойства */
	hideProperties?: boolean;
	/** Показывать кнопки действий */
	showActions?: boolean;
	/** Обработчик выделения (кастомное событие) */
	onNodeSelect?: (id: string) => void;
	/** Обработчик перемещения (кастомное событие) */
	onNodeDrag?: (id: string, position: { x: number; y: number }) => void;
	/** Обработчик изменения размера */
	onNodeResize?: (id: string, size: { width: number; height: number }) => void;
	/** Обработчик удаления */
	ondelete?: (id: string) => void;
	/** Обработчик дублирования */
	onduplicate?: (id: string) => void;
	/** Обработчик начала подключения */
	onConnectionStart?: (port: LiteGraphPort, event: MouseEvent) => void;
	/** Обработчик завершения подключения */
	onConnectionEnd?: (port: LiteGraphPort, event: MouseEvent) => void;
	/** Обработчик изменения свойства */
	onPropertyChange?: (propertyId: string, value: unknown) => void;
	/** Дочерний контент */
	children?: Snippet;
	/** Контент заголовка */
	headerContent?: Snippet;
	/** Контент тела */
	bodyContent?: Snippet;
}





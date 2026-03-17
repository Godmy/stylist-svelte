import type { Snippet } from 'svelte';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { PrimitiveRelationship } from '$stylist/design-system/tokens/architecture/primitives';

import type { GraphPortDataType, GraphPortDirection, GraphPortSize } from '$stylist/design-system/tokens/information/graph-port';
/**
 * Направление порта
 */
/**
 * Размер порта
 */
/**
 * Состояние порта
 */
export interface GraphPortState {
	connected?: boolean;
	hovered?: boolean;
	active?: boolean;
	error?: boolean;
}

/**
 * Свойства порта графа
 */
export interface GraphPortProps {
	/** Уникальный идентификатор порта */
	id: string;
	/** Направление порта */
	direction: GraphPortDirection;
	/** Тип данных */
	dataType?: GraphPortDataType;
	/** Метка порта */
	label?: string;
	/** Размер порта */
	size?: GraphPortSize;
	/** Индекс порта в списке */
	index?: number;
	/** Состояние подключения */
	connected?: boolean;
	/** Активное состояние (перетаскивание связи) */
	active?: boolean;
	/** Цвет порта */
	color?: string;
	/** Иконка порта */
	icon?: string | Snippet;
	/** Обработчик клика */
	onclick?: (event: MouseEvent) => void;
	/** Обработчик начала перетаскивания связи */
	onConnectionStart?: (event: MouseEvent) => void;
	/** Обработчик завершения перетаскивания связи */
	onConnectionEnd?: (event: MouseEvent) => void;
	/** Дочерний контент */
	children?: Snippet;
	/** CSS класс */
	class?: string;
}




import type { LayoutLevel, LayoutGravity } from '$stylist/layout/type/struct/item';

/** Управление позиционированием элемента в пространстве лэйаута */
export interface IPositionable {
	/** Уровень вложенности в иерархии лэйаута */
	layoutLevel?: LayoutLevel;
	/** Выравнивание внутри родителя */
	layoutGravity?: LayoutGravity;
	/** Якорная точка привязки (CSS anchor или id) */
	layoutAnchor?: string;
}

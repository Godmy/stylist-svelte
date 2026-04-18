import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/** Специфичные свойства для различных типов переключателей */
export interface ToggleSpecificProps extends StructIntersectAll<[]> {
	/** Тип переключателя */
	type?: 'toggle' | 'checkbox' | 'radio' | 'switch';

	/** Для SlotCheckbox: разрешить множественный выбор */
	multiple?: boolean;

	/** Для SlotRadio: имя группы */
	groupName?: string;

	/** Для Switch: описание под переключателем */
	description?: string;
}

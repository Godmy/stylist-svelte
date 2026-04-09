/** Специфичные свойства для различных типов переключателей */
export interface ToggleSpecificProps {
	/** Тип переключателя */
	type?: 'toggle' | 'checkbox' | 'radio' | 'switch';

	/** Для Checkbox: разрешить множественный выбор */
	multiple?: boolean;

	/** Для Radio: имя группы */
	groupName?: string;

	/** Для Switch: описание под переключателем */
	description?: string;
}

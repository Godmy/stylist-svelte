import type { Snippet } from 'svelte';
import type { HtmlAttributesBase } from '$stylist/information/type/attribute/common';
import type { TokenSize } from '$stylist/architecture/type/token/size';

/**
 * Свойства заголовка узла графа
 */
export interface NodeHeaderProps extends HtmlAttributesBase<HTMLDivElement> {
	/** Уникальный идентификатор заголовка */
	id: string;
	/** Заголовок */
	title: string;
	/** Цвет заголовка */
	color?: string;
	/** Размер компонента */
	size?: TokenSize;
	/** Выделен ли */
	selected?: boolean;
	/** Можно ли редактировать */
	editable?: boolean;
	/** Показывать кнопку закрытия */
	showClose?: boolean;
	/** Показывать кнопку настроек */
	showSettings?: boolean;
	/** Показывать кнопку дублирования */
	showDuplicate?: boolean;
	/** Показывать кнопку удаления */
	showDelete?: boolean;
	/** Пользовательские действия */
	actions?: Snippet;
	/** Обработчик изменения заголовка (кастомное событие) */
	onTitleChange?: (value: string) => void;
	/** Обработчик закрытия */
	onclose?: () => void;
	/** Обработчик настроек */
	onsettings?: () => void;
	/** Обработчик дублирования */
	onduplicate?: () => void;
	/** Обработчик удаления */
	ondelete?: () => void;
	/** Дочерний контент */
	children?: Snippet;
}






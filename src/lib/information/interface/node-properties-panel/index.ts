import type { Snippet } from 'svelte';
import type { HtmlAttributesBase } from '$stylist/information/type/attribute/common';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { LiteGraphNodeProperty } from '$stylist/information/interface/litegraph-node';

/**
 * Свойства панели свойств узла
 */
export interface NodePropertiesPanelProps extends HtmlAttributesBase<HTMLDivElement> {
	/** Уникальный идентификатор панели */
	id: string;
	/** ID узла, для которого показываем свойства */
	nodeId?: string;
	/** Заголовок панели */
	title?: string;
	/** Свойства для отображения */
	properties?: readonly LiteGraphNodeProperty[];
	/** Размер компонента */
	size?: TokenSize;
	/** Компактный режим */
	compact?: boolean;
	/** Показывать заголовок */
	showHeader?: boolean;
	/** Показывать кнопку закрытия */
	showClose?: boolean;
	/** Можно ли редактировать */
	editable?: boolean;
	/** Сгруппировать по типам */
	groupByType?: boolean;
	/** Обработчик изменения свойства */
	onPropertyChange?: (propertyId: string, value: unknown) => void;
	/** Обработчик закрытия */
	onclose?: () => void;
	/** Дочерний контент */
	children?: Snippet;
}






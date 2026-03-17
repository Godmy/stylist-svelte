import type { Snippet } from 'svelte';
import type { HtmlAttributesBase } from '$stylist/design-system/contracts/information/common';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { LiteGraphNodeProperty } from '$stylist/design-system/contracts/information/litegraph-node';

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
	size?: ComponentSize;
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





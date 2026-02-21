import {
	GRAPH_NODE_CARD_CONTAINER_BASE_CLASSES,
	GRAPH_NODE_CARD_SIZE_CLASSES,
	GRAPH_NODE_CARD_SELECTED_CLASSES,
	GRAPH_NODE_CARD_HIGHLIGHT_CLASSES,
	GRAPH_NODE_CARD_HEADER_CLASSES,
	GRAPH_NODE_CARD_TITLE_CLASSES,
	GRAPH_NODE_CARD_TYPE_COLORS,
	GRAPH_NODE_CARD_TYPE_CLASSES,
	GRAPH_NODE_CARD_CONTENT_CLASSES,
	GRAPH_NODE_CARD_DESCRIPTION_CLASSES,
	GRAPH_NODE_CARD_FIELDS_LIST_CLASSES,
	GRAPH_NODE_CARD_FIELD_ITEM_CLASSES,
	GRAPH_NODE_CARD_FIELD_NAME_CLASSES,
	GRAPH_NODE_CARD_FIELD_TYPE_CLASSES,
	GRAPH_NODE_CARD_FIELD_REQUIRED_CLASSES,
	GRAPH_NODE_CARD_ACTIONS_CLASSES,
	DEFAULT_GRAPH_NODE_CARD_SIZE
} from '../../classes/information/graph-node-card';
import { cn } from '../../utils/cn/index';

export interface GraphNodeCardStyleManagerInterface {
	getContainerClass: (variant: string, size: string, selected: boolean, highlight: boolean, className?: string) => string;
	getHeaderClass: () => string;
	getTitleClass: () => string;
	getTypeClass: (type: string) => string;
	getContentClass: () => string;
	getDescriptionClass: () => string;
	getFieldsListClass: () => string;
	getFieldItemClass: () => string;
	getFieldNameClass: () => string;
	getFieldTypeClass: () => string;
	getFieldRequiredClass: () => string;
	getActionsClass: () => string;
}

export class GraphNodeCardStyleManager implements GraphNodeCardStyleManagerInterface {
	static getContainerClass(variant: string, size: string, selected: boolean, highlight: boolean, className?: string): string {
		const sizeClasses = GRAPH_NODE_CARD_SIZE_CLASSES[size as keyof typeof GRAPH_NODE_CARD_SIZE_CLASSES] || GRAPH_NODE_CARD_SIZE_CLASSES[DEFAULT_GRAPH_NODE_CARD_SIZE];
		const stateClasses = [
			selected ? GRAPH_NODE_CARD_SELECTED_CLASSES : '',
			highlight ? GRAPH_NODE_CARD_HIGHLIGHT_CLASSES : ''
		].filter(Boolean).join(' ');

		return cn(GRAPH_NODE_CARD_CONTAINER_BASE_CLASSES, sizeClasses, stateClasses, className);
	}

	static getHeaderClass(): string {
		return GRAPH_NODE_CARD_HEADER_CLASSES;
	}

	static getTitleClass(): string {
		return GRAPH_NODE_CARD_TITLE_CLASSES;
	}

	static getTypeClass(type: string): string {
		const typeColor = GRAPH_NODE_CARD_TYPE_COLORS[type] || GRAPH_NODE_CARD_TYPE_COLORS.default;
		return cn(typeColor, GRAPH_NODE_CARD_TYPE_CLASSES);
	}

	static getContentClass(): string {
		return GRAPH_NODE_CARD_CONTENT_CLASSES;
	}

	static getDescriptionClass(): string {
		return GRAPH_NODE_CARD_DESCRIPTION_CLASSES;
	}

	static getFieldsListClass(): string {
		return GRAPH_NODE_CARD_FIELDS_LIST_CLASSES;
	}

	static getFieldItemClass(): string {
		return GRAPH_NODE_CARD_FIELD_ITEM_CLASSES;
	}

	static getFieldNameClass(): string {
		return GRAPH_NODE_CARD_FIELD_NAME_CLASSES;
	}

	static getFieldTypeClass(): string {
		return GRAPH_NODE_CARD_FIELD_TYPE_CLASSES;
	}

	static getFieldRequiredClass(): string {
		return GRAPH_NODE_CARD_FIELD_REQUIRED_CLASSES;
	}

	static getActionsClass(): string {
		return GRAPH_NODE_CARD_ACTIONS_CLASSES;
	}

	// Instance methods for interface implementation
	getContainerClass(variant: string, size: string, selected: boolean, highlight: boolean, className?: string): string {
		return GraphNodeCardStyleManager.getContainerClass(variant, size, selected, highlight, className);
	}

	getHeaderClass(): string {
		return GraphNodeCardStyleManager.getHeaderClass();
	}

	getTitleClass(): string {
		return GraphNodeCardStyleManager.getTitleClass();
	}

	getTypeClass(type: string): string {
		return GraphNodeCardStyleManager.getTypeClass(type);
	}

	getContentClass(): string {
		return GraphNodeCardStyleManager.getContentClass();
	}

	getDescriptionClass(): string {
		return GraphNodeCardStyleManager.getDescriptionClass();
	}

	getFieldsListClass(): string {
		return GraphNodeCardStyleManager.getFieldsListClass();
	}

	getFieldItemClass(): string {
		return GraphNodeCardStyleManager.getFieldItemClass();
	}

	getFieldNameClass(): string {
		return GraphNodeCardStyleManager.getFieldNameClass();
	}

	getFieldTypeClass(): string {
		return GraphNodeCardStyleManager.getFieldTypeClass();
	}

	getFieldRequiredClass(): string {
		return GraphNodeCardStyleManager.getFieldRequiredClass();
	}

	getActionsClass(): string {
		return GraphNodeCardStyleManager.getActionsClass();
	}
}
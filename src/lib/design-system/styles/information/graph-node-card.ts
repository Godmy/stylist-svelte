import { cn } from '../../utils/cn/index';

const GRAPH_NODE_CARD_SIZE_CLASSES = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg'
} as const;

const GRAPH_NODE_CARD_TYPE_COLORS: Record<string, string> = {
	object: 'bg-[--color-surface-accent] text-[--color-primary-600]',
	interface: 'bg-[--color-success-100] text-[--color-success-600]',
	union: 'bg-[--color-danger-100] text-[--color-danger-600]',
	enum: 'bg-[--color-accent-100] text-[--color-accent-600]',
	scalar: 'bg-[--color-warning-100] text-[--color-warning-600]',
	input: 'bg-[--color-info-100] text-[--color-info-600]',
	default: 'bg-[--color-surface-muted] text-[--color-text-secondary]'
};

const DEFAULT_GRAPH_NODE_CARD_SIZE: keyof typeof GRAPH_NODE_CARD_SIZE_CLASSES = 'md';

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
			selected ? 'ring-2 ring-[--color-primary-500]' : '',
			highlight ? 'ring-2 ring-[--color-warning-500]' : ''
		].filter(Boolean).join(' ');

		return cn('border rounded-lg overflow-hidden transition-all duration-200 bg-[--color-background-primary] border-[--color-border-default]', sizeClasses, stateClasses, className);
	}

	static getHeaderClass(): string {
		return 'flex items-center p-3 border-b border-[--color-border-default] cursor-pointer hover:bg-[--color-surface-hover]';
	}

	static getTitleClass(): string {
		return 'font-medium text-[--color-text-primary]';
	}

	static getTypeClass(type: string): string {
		const typeColor = GRAPH_NODE_CARD_TYPE_COLORS[type] || GRAPH_NODE_CARD_TYPE_COLORS.default;
		return cn(typeColor, 'text-xs uppercase px-2 py-1 rounded-full ml-auto');
	}

	static getContentClass(): string {
		return 'p-3';
	}

	static getDescriptionClass(): string {
		return 'text-sm text-[--color-text-secondary] mt-2';
	}

	static getFieldsListClass(): string {
		return 'space-y-2 mt-3';
	}

	static getFieldItemClass(): string {
		return 'flex items-center gap-2';
	}

	static getFieldNameClass(): string {
		return 'font-medium text-[--color-text-primary]';
	}

	static getFieldTypeClass(): string {
		return 'text-xs text-[--color-text-secondary]';
	}

	static getFieldRequiredClass(): string {
		return 'text-[--color-danger-500]';
	}

	static getActionsClass(): string {
		return 'flex gap-2 mt-3 pt-3 border-t border-[--color-border-default]';
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

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

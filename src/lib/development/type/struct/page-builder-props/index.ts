import type { PageBuilderElement } from '$stylist/development/type/struct/page-builder-element';

export type PageBuilderProps = {
	initialElements?: PageBuilderElement[];
	onSave?: (elements: PageBuilderElement[]) => void;
	showToolbar?: boolean;
	editable?: boolean;
	class?: string;
	toolbarClass?: string;
	canvasClass?: string;
	elementClass?: string;
};

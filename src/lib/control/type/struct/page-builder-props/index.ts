import type { PageBuilderElement } from '../page-builder-element';

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

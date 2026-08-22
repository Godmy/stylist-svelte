import type { PageBuilderElement as SlotPageBuilderElement } from '$stylist/development/interface/slot/page-builder-element';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipePageBuilder
	extends ComputeIntersectAll<
		[
			{
				initialElements?: SlotPageBuilderElement[];
				onSave?: (elements: SlotPageBuilderElement[]) => void;
				showToolbar?: boolean;
				editable?: boolean;
				class?: string;
				toolbarClass?: string;
				canvasClass?: string;
				elementClass?: string;
			}
		]
	> {}

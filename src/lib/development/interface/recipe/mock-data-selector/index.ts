import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { MockDataSelectorDataSelection } from '$stylist/development/type/object/mock-data-selector-data-selection';
export interface RecipeMockDataSelector extends ComputeIntersectAll<[SlotChildren]> {
	class?: string;
	options?: Array<{ value: string; label: string }>;
	value?: string;
	placeholder?: string;
	onValueInput?: (event: Event) => void;
	onValueChange?: (event: Event) => void;
	schemas?: ({
	id: string;
	name: string;
	description: string;
	fields: Array<{
		name: string;
		type: 'string' | 'number' | 'boolean' | 'date' | 'email' | 'id';
		required: boolean;
		example?: string;
	}>;
	sampleData: any[];
	tags: string[];
})[];
	initialSelections?: MockDataSelectorDataSelection[];
	title?: string;
	description?: string;
	allowMultipleSelections?: boolean;
	allowFieldSelection?: boolean;
	allowCustomCount?: boolean;
	showSearch?: boolean;
	showTagsFilter?: boolean;
	onSelectionChange?: (selections: MockDataSelectorDataSelection[]) => void;
	onLoadMockData?: (selections: MockDataSelectorDataSelection[]) => void;
	headerClass?: string;
	selectorClass?: string;
	previewClass?: string;
	footerClass?: string;
}
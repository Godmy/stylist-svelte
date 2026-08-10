import type { SlotChildren } from '$stylist/theme/interface/slot/children';

import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

import type { MockDataSelectorDataSelection } from '$stylist/development/type/struct/mock-data-selector-data-selection';
import type { MockDataSelectorMockDataSchema } from '$stylist/development/type/struct/mock-data-selector-mock-data-schema';
export interface RecipeMockDataSelector extends ComputeIntersectAll<[SlotChildren]> {
	class?: string;
	options?: Array<{ value: string; label: string }>;
	value?: string;
	placeholder?: string;
	onValueInput?: (event: Event) => void;
	onValueChange?: (event: Event) => void;
	schemas?: MockDataSelectorMockDataSchema[];
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
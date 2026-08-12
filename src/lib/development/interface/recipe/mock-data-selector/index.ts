import type { SlotMockDataSelectorSelection } from '$stylist/development/interface/slot/mock-data-selector-selection';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeMockDataSelector extends ComputeIntersectAll<[SlotChildren]> {
	class?: string;
	options?: Array<{ value: string; label: string }>;
	value?: string;
	placeholder?: string;
	onValueInput?: (event: Event) => void;
	onValueChange?: (event: Event) => void;
	schemas?: {
		id: string;
		name: string;
		description: string;
		fields: Array<{
			name: string;
			type: 'string' | 'number' | 'boolean' | 'date' | 'email' | 'id';
			required: boolean;
			example?: string;
		}>;
		sampleData: unknown[];
		tags: string[];
	}[];
	initialSelections?: SlotMockDataSelectorSelection[];
	title?: string;
	description?: string;
	allowMultipleSelections?: boolean;
	allowFieldSelection?: boolean;
	allowCustomCount?: boolean;
	showSearch?: boolean;
	showTagsFilter?: boolean;
	onSelectionChange?: (selections: SlotMockDataSelectorSelection[]) => void;
	onLoadMockData?: (selections: SlotMockDataSelectorSelection[]) => void;
	headerClass?: string;
	selectorClass?: string;
	previewClass?: string;
	footerClass?: string;
}

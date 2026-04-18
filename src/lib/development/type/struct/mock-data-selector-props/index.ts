import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { MockDataSelectorMockDataSchema } from '$stylist/development/type/struct/mock-data-selector-mock-data-schema';
import type { MockDataSelectorDataSelection } from '$stylist/development/type/struct/mock-data-selector-data-selection';

export type MockDataSelectorProps = {
  schemas: MockDataSelectorMockDataSchema[];
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
  class?: string;
  headerClass?: string;
  selectorClass?: string;
  previewClass?: string;
  footerClass?: string;
} & InteractionHTMLAttributes<HTMLDivElement>;

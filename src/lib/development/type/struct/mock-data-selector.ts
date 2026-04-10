import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export type MockDataSchema = {
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
};

export type DataSelection = {
  schemaId: string;
  count: number;
  selectedFields?: string[];
};

export type Props = {
  schemas: MockDataSchema[];
  initialSelections?: DataSelection[];
  title?: string;
  description?: string;
  allowMultipleSelections?: boolean;
  allowFieldSelection?: boolean;
  allowCustomCount?: boolean;
  showSearch?: boolean;
  showTagsFilter?: boolean;
  onSelectionChange?: (selections: DataSelection[]) => void;
  onLoadMockData?: (selections: DataSelection[]) => void;
  class?: string;
  headerClass?: string;
  selectorClass?: string;
  previewClass?: string;
  footerClass?: string;
} & InteractionHTMLAttributes<HTMLDivElement>;

export type MockDataSelectorMockDataSchema = {
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

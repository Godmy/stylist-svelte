<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';

  import MockDataSelector from './index.svelte';

  type MockDataSchema = {
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

  type DataSelection = {
    schemaId: string;
    count: number;
    selectedFields?: string[];
  };

  const schemas: MockDataSchema[] = [
    {
      id: 'users',
      name: 'User Data',
      description: 'Sample user data with profile information',
      fields: [
        { name: 'id', type: 'id', required: true, example: 'user_001' },
        { name: 'name', type: 'string', required: true, example: 'John Doe' },
        { name: 'email', type: 'email', required: true, example: 'john@example.com' },
        { name: 'age', type: 'number', required: false, example: '30' },
        { name: 'active', type: 'boolean', required: false, example: 'true' }
      ],
      sampleData: [],
      tags: ['user', 'profile', 'authentication']
    },
    {
      id: 'products',
      name: 'Product Data',
      description: 'Sample product data for e-commerce',
      fields: [
        { name: 'id', type: 'id', required: true, example: 'prod_001' },
        { name: 'name', type: 'string', required: true, example: 'Laptop' },
        { name: 'price', type: 'number', required: true, example: '999.99' },
        { name: 'category', type: 'string', required: false, example: 'Electronics' }
      ],
      sampleData: [],
      tags: ['product', 'ecommerce', 'inventory']
    },
    {
      id: 'orders',
      name: 'Order Data',
      description: 'Sample order data for transactions',
      fields: [
        { name: 'id', type: 'id', required: true, example: 'order_001' },
        { name: 'userId', type: 'id', required: true, example: 'user_001' },
        { name: 'total', type: 'number', required: true, example: '199.98' },
        { name: 'status', type: 'string', required: false, example: 'completed' }
      ],
      sampleData: [],
      tags: ['order', 'transaction', 'sales']
    }
  ];

  const onSelectionChange = (selections: DataSelection[]) => {
    console.log('Selections changed:', selections);
  };

  const onLoadMockData = (selections: DataSelection[]) => {
    console.log('Loading mock data for selections:', selections);
  };

  type Props = {
    title: string;
    description: string;
    allowMultipleSelections: boolean;
    allowFieldSelection: boolean;
    allowCustomCount: boolean;
    showSearch: boolean;
    showTagsFilter: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Mock Data Selector' },
    { name: 'description', type: 'text', defaultValue: 'Select mock data schemas to generate sample data' },
    { name: 'allowMultipleSelections', type: 'boolean', defaultValue: true },
    { name: 'allowFieldSelection', type: 'boolean', defaultValue: true },
    { name: 'allowCustomCount', type: 'boolean', defaultValue: true },
    { name: 'showSearch', type: 'boolean', defaultValue: true },
    { name: 'showTagsFilter', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="organisms-mock-data-selector"
  title="Organisms / Interaction / Development / MockDataSelector"
  component={MockDataSelector}
  category="Organisms/Interaction/Development"
  description="Selector for mock data schemas with filtering and preview capabilities."
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="sb-organisms-mock-data-selector p-4">
      <h1>MockDataSelector Story</h1>
      <MockDataSelector
        {schemas}
        {onSelectionChange}
        {onLoadMockData}
        title={values.title}
        description={values.description}
        allowMultipleSelections={values.allowMultipleSelections}
        allowFieldSelection={values.allowFieldSelection}
        allowCustomCount={values.allowCustomCount}
        showSearch={values.showSearch}
        showTagsFilter={values.showTagsFilter}
        class="my-2"
      />
    </div>
  {/snippet}
</Story>



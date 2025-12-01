<script lang="ts">
  import MockDataSelector from './MockDataSelector.svelte';

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
</script>

<div class="p-4">
  <h1>MockDataSelector Story</h1>
  <MockDataSelector
    {schemas}
    {onSelectionChange}
    {onLoadMockData}
    class="my-2"
  />
</div>
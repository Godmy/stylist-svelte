<script lang="ts">
  import ComparisonTable from './index.svelte';

  let features = [
    { id: 'storage', name: 'Storage', description: 'Amount of storage space' },
    { id: 'ram', name: 'RAM', description: 'Memory capacity' },
    { id: 'cpu', name: 'CPU', description: 'Processor performance' },
    { id: 'gpu', name: 'GPU', description: 'Graphics processing unit' },
    { id: 'os', name: 'Operating System', description: 'Pre-installed OS' },
    { id: 'warranty', name: 'Warranty', description: 'Standard warranty period' },
    { id: 'price', name: 'Price', description: 'List price' }
  ];

  let products = [
    {
      id: 'laptop1',
      name: 'Laptop A',
      description: 'Budget option',
      features: {
        storage: '256GB SSD',
        ram: '8GB',
        cpu: 'Intel i5',
        gpu: 'Integrated',
        os: 'Windows 11',
        warranty: '1 year',
        price: '$799'
      },
      primary: false
    },
    {
      id: 'laptop2',
      name: 'Laptop B',
      description: 'Mid-range option',
      features: {
        storage: '512GB SSD',
        ram: '16GB',
        cpu: 'Intel i7',
        gpu: 'NVIDIA RTX 3050',
        os: 'Windows 11',
        warranty: '2 years',
        price: '$1299'
      },
      primary: true
    },
    {
      id: 'laptop3',
      name: 'Laptop C',
      description: 'Premium option',
      features: {
        storage: '1TB SSD',
        ram: '32GB',
        cpu: 'Intel i9',
        gpu: 'NVIDIA RTX 4070',
        os: 'Windows 11',
        warranty: '3 years',
        price: '$2199'
      },
      primary: false
    }
  ];

  let showHeader: boolean = true;
  let showDescription: boolean = false;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">ComparisonTable Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive ComparisonTable</h2>
    <div class="overflow-x-auto">
      <ComparisonTable 
        {features}
        {products}
        {showHeader}
        {showDescription}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div class="flex items-end">
        <label for="show-header" class="flex items-center gap-1">
          <input id="show-header" type="checkbox" bind:checked={showHeader} />
          Show Header
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-descriptions" class="flex items-center gap-1">
          <input id="show-descriptions" type="checkbox" bind:checked={showDescription} />
          Show Descriptions
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">ComparisonTable Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">With Descriptions</h3>
        <div class="overflow-x-auto">
          <ComparisonTable 
            {features}
            {products}
            showHeader={true}
            showDescription={true}
          />
        </div>
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Different Feature Set</h3>
        <div class="overflow-x-auto">
          <ComparisonTable 
            features={[
              { id: 'feature1', name: 'Free Shipping', description: 'Does shipping cost extra?' },
              { id: 'feature2', name: 'Returns', description: 'Return policy' },
              { id: 'feature3', name: 'Support', description: 'Customer support available' },
              { id: 'feature4', name: 'Setup', description: 'Free setup included' }
            ]}
            products={[
              {
                id: 'service1',
                name: 'Service A',
                features: {
                  feature1: true,
                  feature2: '30 days',
                  feature3: 'Email',
                  feature4: false
                },
                primary: true
              },
              {
                id: 'service2',
                name: 'Service B',
                features: {
                  feature1: true,
                  feature2: '60 days',
                  feature3: 'Phone & Email',
                  feature4: true
                },
                primary: false
              }
            ]}
          />
        </div>
      </div>
    </div>
  </div>
</div>
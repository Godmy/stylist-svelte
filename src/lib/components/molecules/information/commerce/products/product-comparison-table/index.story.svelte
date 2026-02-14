<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ProductComparisonTable from './index.svelte';

  type Product = {
    id: string;
    name: string;
    price: number;
    currency: string;
    image: string;
    rating: number;
  };

  type Specification = {
    name: string;
    values: string[];
  };

  type Props = {
    // No direct controls for products or specifications for this story
  };

  const controls: ControlConfig[] = [
    // Add controls here if needed for dynamic manipulation in playground
  ];

  const sampleProducts: Product[] = [
    {
      id: '1',
      name: 'Laptop A',
      price: 999.99,
      currency: '$',
      image: 'https://via.placeholder.com/100x100?text=Laptop+A',
      rating: 4.5
    },
    {
      id: '2',
      name: 'Laptop B',
      price: 1199.99,
      currency: '$',
      image: 'https://via.placeholder.com/100x100?text=Laptop+B',
      rating: 4.7
    }
  ];

  const sampleSpecifications: Specification[] = [
    { name: 'Processor', values: ['Intel i5', 'Intel i7'] },
    { name: 'RAM', values: ['8GB', '16GB'] },
    { name: 'Storage', values: ['256GB SSD', '512GB SSD'] },
    { name: 'Screen Size', values: ['13.3"', '14"'] },
    { name: 'Weight', values: ['2.8 lbs', '3.1 lbs'] }
  ];
</script>

<Story
  id="molecules-product-comparison-table"
  title="ProductComparisonTable"
  component={ProductComparisonTable}
  category="Molecules"
  description="Displays a table comparing features of different products."
  tags={['product', 'comparison', 'table', 'ecommerce']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="sb-molecules-product-comparison-table p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductComparisonTable Story</h2>
      <ProductComparisonTable
        products={sampleProducts}
        specifications={sampleSpecifications}
      />
    </div>
  {/snippet}
</Story>


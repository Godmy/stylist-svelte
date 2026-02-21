<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import ProductComparisonTable from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'includeThirdProduct', type: 'boolean', defaultValue: false },
    { name: 'showExtendedSpecs', type: 'boolean', defaultValue: true }
  ];

  const products = [
    { id: '1', name: 'Laptop A', price: 999.99, currency: '$', image: 'https://placehold.co/120x120?text=A', rating: 4.5 },
    { id: '2', name: 'Laptop B', price: 1199.99, currency: '$', image: 'https://placehold.co/120x120?text=B', rating: 4.7 },
    { id: '3', name: 'Laptop C', price: 899.99, currency: '$', image: 'https://placehold.co/120x120?text=C', rating: 4.1 }
  ];

  function getSpecifications(extended: boolean) {
    const specs = [
      { name: 'Processor', values: ['Intel i5', 'Intel i7', 'Ryzen 7'] },
      { name: 'RAM', values: ['8GB', '16GB', '16GB'] },
      { name: 'Storage', values: ['256GB SSD', '512GB SSD', '1TB SSD'] }
    ];

    if (extended) {
      specs.push(
        { name: 'Screen', values: ['13.3"', '14"', '15.6"'] },
        { name: 'Weight', values: ['1.2kg', '1.4kg', '1.8kg'] }
      );
    }

    return specs;
  }
</script>

<Story
  id="molecules-product-comparison-table"
  title="Molecules / Information / Commerce / Products / ProductComparisonTable"
  component={ProductComparisonTable}
  category="Molecules/Information/Commerce/Products"
  description="Structured table for side-by-side product specifications."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-6 bg-gray-50 rounded-xl">
      <ProductComparisonTable
        products={args.includeThirdProduct ? products : products.slice(0, 2)}
        specifications={getSpecifications(args.showExtendedSpecs).map((spec) => ({
          ...spec,
          values: args.includeThirdProduct ? spec.values : spec.values.slice(0, 2)
        }))}
      />
    </div>
  {/snippet}
</Story>

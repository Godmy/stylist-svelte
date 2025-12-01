<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import ProductCatalog from './ProductCatalog.svelte';

  type Props = {
    layout: 'grid' | 'list';
  };

  const controls: ControlConfig[] = [
    {
      name: 'layout',
      type: 'select',
      options: ['grid', 'list'],
      defaultValue: 'grid'
    }
  ];

  const sampleProducts = [
    {
      id: '1',
      title: 'Wireless Headphones',
      price: 199.99,
      currency: '$',
      image: 'https://via.placeholder.com/200x200?text=Headphones',
      rating: 4.5
    },
    {
      id: '2',
      title: 'Smart Watch',
      price: 249.99,
      currency: '$',
      image: 'https://via.placeholder.com/200x200?text=Smartwatch',
      rating: 4.2
    },
    {
      id: '3',
      title: 'Bluetooth Speaker',
      price: 89.99,
      currency: '$',
      image: 'https://via.placeholder.com/200x200?text=Speaker',
      rating: 4.7
    }
  ];
</script>

<Story
  id="molecules-product-catalog"
  title="ProductCatalog"
  component={ProductCatalog}
  category="Molecules"
  description="A component for displaying a catalog of products."
  tags={['product', 'catalog', 'ecommerce', 'list', 'grid']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductCatalog Story</h2>
      <ProductCatalog
        layout={props.layout}
        products={sampleProducts}
      />
    </div>
  {/snippet}
</Story>

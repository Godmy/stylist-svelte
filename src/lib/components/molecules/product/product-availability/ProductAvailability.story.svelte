<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import ProductAvailability from './ProductAvailability.svelte';

  type Props = {
    available: boolean;
    stock: number;
    location: string;
    estimatedRestock: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'available',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'stock',
      type: 'number',
      defaultValue: 5,
      min: 0
    },
    {
      name: 'location',
      type: 'text',
      defaultValue: 'Warehouse A'
    },
    {
      name: 'estimatedRestock',
      type: 'text',
      defaultValue: '2024-01-01'
    }
  ];
</script>

<Story
  id="molecules-product-availability"
  title="ProductAvailability"
  component={ProductAvailability}
  category="Molecules"
  description="Displays product availability status and restock information."
  tags={['product', 'availability', 'stock', 'ecommerce']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductAvailability Story</h2>
      <ProductAvailability
        available={props.available}
        stock={props.stock}
        location={props.location}
        estimatedRestock={props.estimatedRestock}
        onNotifyMe={() => console.log('Notify Me clicked')}
      />
    </div>
  {/snippet}
</Story>

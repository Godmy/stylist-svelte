<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ProductAvailability from './index.svelte';

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
  title="Molecules / Information / Commerce / Products / ProductAvailability"
  component={ProductAvailability}
  category="Molecules/Information/Commerce/Products"
  description="Displays product availability status and restock information."
  controls={controls}
>
  {#snippet children(args: any)}
    <div class="sb-molecules-product-availability p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductAvailability Story</h2>
      <ProductAvailability
        available={args.available ?? true}
        stock={args.stock ?? 5}
        location={args.location ?? 'Warehouse A'}
        estimatedRestock={args.estimatedRestock ?? '2024-01-01'}
        onNotifyMe={() => console.log('Notify Me clicked')}
      />
    </div>
  {/snippet}
</Story>



<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import ProductAvailability from './index.svelte';

  let notified = $state(false);

  const controls: ControlConfig[] = [
    { name: 'available', type: 'boolean', defaultValue: true },
    { name: 'stock', type: 'number', defaultValue: 5, min: 0 },
    { name: 'location', type: 'text', defaultValue: 'Warehouse A' },
    { name: 'estimatedRestock', type: 'text', defaultValue: '2026-03-01' }
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
    <div class="p-8 bg-gray-50 rounded-lg">
      <ProductAvailability
        available={args.available}
        stock={args.stock}
        location={args.location}
        estimatedRestock={args.estimatedRestock}
        onNotifyMe={() => (notified = true)}
      />
      <p class="mt-3 text-sm text-gray-600">Notify status: {notified ? 'Requested' : 'Not requested'}</p>
    </div>
  {/snippet}
</Story>

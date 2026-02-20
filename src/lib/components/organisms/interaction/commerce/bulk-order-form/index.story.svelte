<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import BulkOrderForm from './index.svelte';

  type Props = {
    showTotal: boolean;
    showNotes: boolean;
    allowFileUpload: boolean;
    title: string;
    description: string;
  };

  const controls: ControlConfig[] = [
    { name: 'showTotal', type: 'boolean', defaultValue: true },
    { name: 'showNotes', type: 'boolean', defaultValue: true },
    { name: 'allowFileUpload', type: 'boolean', defaultValue: true },
    { name: 'title', type: 'text', defaultValue: 'Bulk Order' },
    { name: 'description', type: 'text', defaultValue: 'Add multiple products to your order' }
  ];

  // Sample products data
  const sampleProducts = [
    { id: '1', name: 'Wireless Headphones', price: 129.99, minOrder: 10, available: 100 },
    { id: '2', name: 'Bluetooth Speaker', price: 89.99, minOrder: 5, available: 50 },
    { id: '3', name: 'Smart Watch', price: 199.99, minOrder: 20, available: 200 },
    { id: '4', name: 'Laptop Stand', price: 49.99, minOrder: 5, available: 75 },
    { id: '5', name: 'USB-C Hub', price: 79.99, minOrder: 10, available: 30 }
  ];

  let orderItems = $state<any[]>([]);
  
  const handleOrderSubmit = (items: any[]) => {
    console.log('Order submitted with items:', items);
    orderItems = items;
  };

  const handleItemsChange = (items: any[]) => {
    console.log('Items changed:', items);
  };
</script>

<Story
  id="organisms-bulk-order-form"
  title="Organisms / Interaction / Commerce / BulkOrderForm"
  component={BulkOrderForm}
  category="Organisms/Interaction/Commerce"
  description="A form for placing bulk orders with multiple products."
  controls={controls}
>
  {#snippet children(args)}
    <section class="sb-organisms-bulk-order-form">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm max-w-4xl mx-auto">
        <BulkOrderForm
          products={sampleProducts}
          showTotal={args.showTotal as boolean}
          showNotes={args.showNotes as boolean}
          allowFileUpload={args.allowFileUpload as boolean}
          title={args.title as string}
          description={args.description as string}
          onOrderSubmit={handleOrderSubmit}
          onItemsChange={handleItemsChange}
        />
        
        {#if orderItems.length > 0}
          <div class="mt-6 p-4 bg-[--color-background-secondary] rounded-lg">
            <h3 class="font-medium text-[--color-text-primary]">Submitted Order Items:</h3>
            <ul class="mt-2 space-y-1">
              {#each orderItems as item}
                <li class="text-sm text-[--color-text-secondary]">
                  Product ID: {item.productId}, Quantity: {item.quantity}
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    </section>
  {/snippet}
</Story>



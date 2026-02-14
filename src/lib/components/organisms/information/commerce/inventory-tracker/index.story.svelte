<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import InventoryTracker from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showAlerts', type: 'boolean', defaultValue: true },
      { name: 'showFilters', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample inventory items
  const inventoryItems = [
    {
      id: 'item1',
      name: 'Wireless Headphones',
      sku: 'WH-12345',
      currentStock: 12,
      minStock: 5,
      maxStock: 100,
      reserved: 3,
      available: 9,
      category: 'Electronics',
      supplier: 'TechCorp',
      lastUpdated: new Date(),
      status: 'in-stock' as const,
      thumbnail: 'https://placehold.co/100x100?text=Headphones'
    },
    {
      id: 'item2',
      name: 'Bluetooth Speaker',
      sku: 'BS-67890',
      currentStock: 2,
      minStock: 5,
      maxStock: 50,
      reserved: 1,
      available: 1,
      category: 'Electronics',
      supplier: 'SoundInc',
      lastUpdated: new Date(),
      status: 'low-stock' as const,
      thumbnail: 'https://placehold.co/100x100?text=Speaker'
    },
    {
      id: 'item3',
      name: 'USB Cable',
      sku: 'UC-54321',
      currentStock: 0,
      minStock: 10,
      maxStock: 200,
      reserved: 0,
      available: 0,
      category: 'Accessories',
      supplier: 'CableCo',
      lastUpdated: new Date(),
      status: 'out-of-stock' as const,
      thumbnail: 'https://placehold.co/100x100?text=Cable'
    },
    {
      id: 'item4',
      name: 'Laptop Stand',
      sku: 'LS-98765',
      currentStock: 150,
      minStock: 20,
      maxStock: 100,
      reserved: 5,
      available: 145,
      category: 'Office',
      supplier: 'DeskGear',
      lastUpdated: new Date(),
      status: 'overstocked' as const,
      thumbnail: 'https://placehold.co/100x100?text=Stand'
    }
  ];

  // Sample alerts
  const alerts = [
    {
      id: 'alert1',
      itemId: 'item2',
      itemName: 'Bluetooth Speaker',
      threshold: 5,
      currentLevel: 2,
      date: new Date(),
      acknowledged: false
    },
    {
      id: 'alert2',
      itemId: 'item3',
      itemName: 'USB Cable',
      threshold: 10,
      currentLevel: 0,
      date: new Date(),
      acknowledged: false
    }
  ];
</script>

<Story
  {id}
  {title}
  {description}
  component={InventoryTracker}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props: { showAlerts?: boolean; showFilters?: boolean })}
    <section class="sb-organisms-inventory-tracker grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Inventory Tracker Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive inventory tracker with stock management.</p>

        <div class="mt-6">
          <InventoryTracker
            items={inventoryItems}
            alerts={alerts}
            showAlerts={props.showAlerts}
            showFilters={props.showFilters}
            showSearch={true}
            showStatusFilter={true}
            lowStockThreshold={5}
            onItemRestock={(item) => console.log(`Restocking item: ${item.name}`)}
            onItemEdit={(item) => console.log(`Editing item: ${item.name}`)}
            onAlertAcknowledge={(alertId) => console.log(`Acknowledging alert: ${alertId}`)}
            onInventoryExport={() => console.log('Exporting inventory report')}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Inventory Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different inventory configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Alerts</p>
            <div>
              <InventoryTracker
                items={inventoryItems.slice(0, 2)}
                alerts={[]}
                showAlerts={false}
                showFilters={true}
                showSearch={false}
                showStatusFilter={true}
                lowStockThreshold={5}
                onItemRestock={(item) => console.log(`Restocking item: ${item.name}`)}
                onItemEdit={(item) => console.log(`Editing item: ${item.name}`)}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Compact View</p>
            <div>
              <InventoryTracker
                items={inventoryItems.slice(0, 1)}
                alerts={alerts.slice(0, 1)}
                showAlerts={true}
                showFilters={false}
                showSearch={true}
                showStatusFilter={false}
                variant="compact"
                lowStockThreshold={5}
                onItemRestock={(item) => console.log(`Restocking item: ${item.name}`)}
                onItemEdit={(item) => console.log(`Editing item: ${item.name}`)}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>


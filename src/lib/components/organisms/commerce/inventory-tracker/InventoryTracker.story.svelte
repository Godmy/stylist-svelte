<script lang="ts">
  import InventoryTracker from './InventoryTracker.svelte';

  type InventoryItem = {
    id: string;
    name: string;
    sku: string;
    currentStock: number;
    minStock: number;
    maxStock?: number;
    reserved?: number;
    available: number;
    category?: string;
    supplier?: string;
    lastUpdated?: Date;
    status: 'in-stock' | 'low-stock' | 'out-of-stock' | 'overstocked';
    thumbnail?: string;
  };

  type LowStockAlert = {
    id: string;
    itemId: string;
    itemName: string;
    threshold: number;
    currentLevel: number;
    date: Date;
    acknowledged?: boolean;
  };

  let items: InventoryItem[] = [
    {
      id: '1',
      name: 'Wireless Headphones',
      sku: 'WH-001',
      currentStock: 12,
      minStock: 5,
      maxStock: 100,
      reserved: 3,
      available: 9,
      category: 'Electronics',
      supplier: 'TechCorp',
      lastUpdated: new Date(Date.now() - 86400000),
      status: 'in-stock',
      thumbnail: 'https://placehold.co/40x40'
    },
    {
      id: '2',
      name: 'Bluetooth Speaker',
      sku: 'BS-002',
      currentStock: 3,
      minStock: 10,
      maxStock: 50,
      reserved: 2,
      available: 1,
      category: 'Electronics',
      supplier: 'SoundTech',
      lastUpdated: new Date(Date.now() - 172800000),
      status: 'low-stock',
      thumbnail: 'https://placehold.co/40x40'
    },
    {
      id: '3',
      name: 'USB Cable',
      sku: 'UC-003',
      currentStock: 0,
      minStock: 20,
      maxStock: 200,
      reserved: 0,
      available: 0,
      category: 'Accessories',
      supplier: 'CableCo',
      lastUpdated: new Date(Date.now() - 259200000),
      status: 'out-of-stock',
      thumbnail: 'https://placehold.co/40x40'
    },
    {
      id: '4',
      name: 'Laptop Stand',
      sku: 'LS-004',
      currentStock: 150,
      minStock: 5,
      maxStock: 100,
      reserved: 5,
      available: 145,
      category: 'Office',
      supplier: 'DeskTech',
      lastUpdated: new Date(Date.now() - 345600000),
      status: 'overstocked',
      thumbnail: 'https://placehold.co/40x40'
    },
    {
      id: '5',
      name: 'Wireless Mouse',
      sku: 'WM-005',
      currentStock: 45,
      minStock: 10,
      maxStock: 100,
      reserved: 5,
      available: 40,
      category: 'Electronics',
      supplier: 'TechCorp',
      lastUpdated: new Date(Date.now() - 432000000),
      status: 'in-stock',
      thumbnail: 'https://placehold.co/40x40'
    }
  ];

  let alerts: LowStockAlert[] = [
    {
      id: 'alert-1',
      itemId: '2',
      itemName: 'Bluetooth Speaker',
      threshold: 10,
      currentLevel: 3,
      date: new Date(Date.now() - 3600000), // 1 hour ago
      acknowledged: false
    }
  ];

  let showAlerts: boolean = true;
  let showAlertBadges: boolean = true;
  let lowStockThreshold: number = 5;
  let overStockThreshold: number = 100;
  let showFilters: boolean = true;
  let showSearch: boolean = true;
  let showStatusFilter: boolean = true;
  let variant: 'compact' | 'expanded' | 'dashboard' = 'expanded';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">InventoryTracker Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive InventoryTracker</h2>
    <div class="h-[600px] overflow-y-auto">
      <InventoryTracker 
        {items}
        {alerts}
        {showAlerts}
        {showAlertBadges}
        {lowStockThreshold}
        {overStockThreshold}
        {showFilters}
        {showSearch}
        {showStatusFilter}
        {variant}
        onItemRestock={(item) => {
          console.log('Restocking item:', item.name);
        }}
        onItemEdit={(item) => {
          console.log('Editing item:', item.name);
        }}
        onAlertAcknowledge={(alertId) => {
          console.log('Acknowledging alert:', alertId);
          alerts = alerts.map(alert => 
            alert.id === alertId ? {...alert, acknowledged: true} : alert
          );
        }}
        onInventoryExport={() => {
          console.log('Exporting inventory report');
        }}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div class="flex items-end">
        <label for="show-alerts" class="flex items-center gap-1">
          <input id="show-alerts" type="checkbox" bind:checked={showAlerts} />
          Show Alerts
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-alert-badges" class="flex items-center gap-1">
          <input id="show-alert-badges" type="checkbox" bind:checked={showAlertBadges} />
          Show Alert Badges
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-filters" class="flex items-center gap-1">
          <input id="show-filters" type="checkbox" bind:checked={showFilters} />
          Show Filters
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-search" class="flex items-center gap-1">
          <input id="show-search" type="checkbox" bind:checked={showSearch} />
          Show Search
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-status-filter" class="flex items-center gap-1">
          <input id="show-status-filter" type="checkbox" bind:checked={showStatusFilter} />
          Show Status Filter
        </label>
      </div>

      <div>
        <label for="low-stock-threshold" class="block text-sm mb-1">Low Stock Threshold:</label>
        <input
          id="low-stock-threshold"
          type="number"
          bind:value={lowStockThreshold}
          class="border rounded p-1 w-20"
          min="1"
        />
      </div>

      <div>
        <label for="over-stock-threshold" class="block text-sm mb-1">Over Stock Threshold:</label>
        <input
          id="over-stock-threshold"
          type="number"
          bind:value={overStockThreshold}
          class="border rounded p-1 w-20"
          min="1"
        />
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">InventoryTracker Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Compact View</h3>
        <div class="h-[400px] overflow-y-auto">
          <InventoryTracker 
            {items}
            variant="compact"
            showAlerts={true}
            showFilters={false}
          />
        </div>
      </div>
    </div>
  </div>
</div>
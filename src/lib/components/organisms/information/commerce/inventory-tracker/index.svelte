<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Package, AlertTriangle, TrendingUp, TrendingDown, CheckCircle, XCircle, Search } from 'lucide-svelte';
  import { Button } from '$stylist/components/atoms';
  import ProgressBar from '$stylist/components/atoms/interaction/feedback/progress/progress-bar/index.svelte';

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

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    items: InventoryItem[];
    alerts?: LowStockAlert[];
    class?: string;
    itemClass?: string;
    headerClass?: string;
    showAlerts?: boolean;
    showAlertBadges?: boolean;
    lowStockThreshold?: number;
    overStockThreshold?: number;
    onItemRestock?: (item: InventoryItem) => void;
    onItemEdit?: (item: InventoryItem) => void;
    onAlertAcknowledge?: (alertId: string) => void;
    onInventoryExport?: () => void;
    showFilters?: boolean;
    showSearch?: boolean;
    showStatusFilter?: boolean;
    variant?: 'compact' | 'expanded' | 'dashboard';
  };

  let {
    items = [],
    alerts = [],
    class: hostClass = '',
    itemClass = '',
    headerClass = '',
    showAlerts = true,
    showAlertBadges = true,
    lowStockThreshold = 5,
    overStockThreshold = 100,
    onItemRestock,
    onItemEdit,
    onAlertAcknowledge,
    onInventoryExport,
    showFilters = true,
    showSearch = true,
    showStatusFilter = true,
    variant = 'expanded',
    ...restProps
  }: Props = $props();

  let searchTerm = $state('');
  let selectedStatus = $state<string>('all');

  function getFilteredItems(list: InventoryItem[], term: string, status: string) {
    let result = [...list];

    if (term) {
      const normalized = term.toLowerCase();
      result = result.filter((item) =>
        item.name.toLowerCase().includes(normalized) ||
        item.sku.toLowerCase().includes(normalized) ||
        (item.category && item.category.toLowerCase().includes(normalized)) ||
        (item.supplier && item.supplier.toLowerCase().includes(normalized))
      );
    }

    if (status !== 'all') {
      result = result.filter((item) => item.status === status);
    }

    return result;
  }

  let filteredItems = $derived(getFilteredItems(items, searchTerm, selectedStatus));

  function calculateInventoryStats(list: InventoryItem[]) {
    const totalItems = list.length;
    const inStockItems = list.filter(item => item.status === 'in-stock').length;
    const lowStockItems = list.filter(item => item.status === 'low-stock').length;
    const outOfStockItems = list.filter(item => item.status === 'out-of-stock').length;
    const overStockedItems = list.filter(item => item.status === 'overstocked').length;

    return {
      totalItems,
      inStockItems,
      lowStockItems,
      outOfStockItems,
      overStockedItems,
      stockPercentage: totalItems > 0 ? Math.round((inStockItems / totalItems) * 100) : 0
    };
  }

  let inventoryStats = $derived(calculateInventoryStats(items));

  let unacknowledgedAlerts = $derived(alerts.filter(alert => !alert.acknowledged));

  function handleRestock(item: InventoryItem) {
    onItemRestock?.(item);
  }

  function handleEdit(item: InventoryItem) {
    onItemEdit?.(item);
  }

  function handleAcknowledge(alertId: string) {
    onAlertAcknowledge?.(alertId);
  }

  function handleExport() {
    onInventoryExport?.();
  }

  function getStatusConfig(status: string) {
    const config: Record<string, { icon: any, color: string, bgColor: string, borderColor: string }> = {
      'in-stock': {
        icon: CheckCircle,
        color: 'text-green-600',
        bgColor: 'bg-green-100',
        borderColor: 'border-green-200'
      },
      'low-stock': {
        icon: AlertTriangle,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-100',
        borderColor: 'border-yellow-200'
      },
      'out-of-stock': {
        icon: XCircle,
        color: 'text-red-600',
        bgColor: 'bg-red-100',
        borderColor: 'border-red-200'
      },
      'overstocked': {
        icon: Package,
        color: 'text-blue-600',
        bgColor: 'bg-blue-100',
        borderColor: 'border-blue-200'
      }
    };

    return config[status] || config['in-stock'];
  }

  function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(date));
  }
</script>

<div class={`c-inventory-tracker ${hostClass}`} {...restProps}>
  <div class="mb-6">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 class="text-xl font-bold text-gray-900 flex items-center">
          <Package class="h-5 w-5 mr-2" />
          Inventory Tracker
        </h2>
        <p class="text-sm text-gray-500 mt-1">
          Manage and monitor your product inventory levels
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        {#if showSearch}
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search class="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search items..."
              value={searchTerm}
              oninput={(e) => searchTerm = (e.target as HTMLInputElement).value}
            />
          </div>
        {/if}

        {#if showStatusFilter}
          <select
            class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            value={selectedStatus}
            onchange={(e) => selectedStatus = (e.target as HTMLSelectElement).value}
          >
            <option value="all">All Statuses</option>
            <option value="in-stock">In Stock</option>
            <option value="low-stock">Low Stock</option>
            <option value="out-of-stock">Out of Stock</option>
            <option value="overstocked">Overstocked</option>
          </select>
        {/if}

        <Button variant="primary" onclick={handleExport}>
          Export Report
        </Button>
      </div>
    </div>

    <!-- Inventory stats -->
    <div class="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
      <div class="bg-white p-4 rounded-lg border border-gray-200">
        <div class="text-sm font-medium text-gray-500">Total Items</div>
        <div class="mt-1 text-2xl font-semibold text-gray-900">{inventoryStats.totalItems}</div>
      </div>

      <div class="bg-white p-4 rounded-lg border border-gray-200">
        <div class="text-sm font-medium text-gray-500">In Stock</div>
        <div class="mt-1 text-2xl font-semibold text-green-600">{inventoryStats.inStockItems}</div>
      </div>

      <div class="bg-white p-4 rounded-lg border border-gray-200">
        <div class="text-sm font-medium text-gray-500">Low Stock</div>
        <div class="mt-1 text-2xl font-semibold text-yellow-600">{inventoryStats.lowStockItems}</div>
      </div>

      <div class="bg-white p-4 rounded-lg border border-gray-200">
        <div class="text-sm font-medium text-gray-500">Out of Stock</div>
        <div class="mt-1 text-2xl font-semibold text-red-600">{inventoryStats.outOfStockItems}</div>
      </div>

      <div class="bg-white p-4 rounded-lg border border-gray-200">
        <div class="text-sm font-medium text-gray-500">Fill Rate</div>
        <div class="mt-1 text-2xl font-semibold text-blue-600">{inventoryStats.stockPercentage}%</div>
      </div>
    </div>

    <!-- Progress bar for overall inventory health -->
    <div class="mt-4">
      <div class="flex justify-between text-sm text-gray-600 mb-1">
        <span>Inventory Health</span>
        <span>{inventoryStats.stockPercentage}% in stock</span>
      </div>
      <ProgressBar
        value={inventoryStats.stockPercentage}
        max={100}
        showPercentage={false}
        size="md"
        variant={
          inventoryStats.stockPercentage > 75 ? 'success' :
          inventoryStats.stockPercentage > 50 ? 'warning' : 'danger'
        }
      />
    </div>
  </div>

  <!-- Low stock alerts -->
  {#if showAlerts && unacknowledgedAlerts.length > 0}
    <div class="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
      <h3 class="text-sm font-medium text-yellow-800 flex items-center">
        <AlertTriangle class="h-4 w-4 mr-2" />
        Low Stock Alerts ({unacknowledgedAlerts.length})
      </h3>
      <div class="mt-2 space-y-2">
        {#each unacknowledgedAlerts as alert}
          <div class="flex items-center justify-between p-3 bg-white rounded border border-yellow-100">
            <div>
              <p class="text-sm font-medium text-gray-900">{alert.itemName}</p>
              <p class="text-xs text-gray-500">
                Current: {alert.currentLevel}, Threshold: {alert.threshold}
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onclick={() => handleAcknowledge(alert.id)}
            >
              Acknowledge
            </Button>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Inventory items list -->
  <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
    <table class="min-w-full divide-y divide-gray-300">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Item</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">SKU</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Current Stock</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Reserved</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Available</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
          <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span class="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 bg-white">
        {#each filteredItems as item}
          {@const statusConfig = getStatusConfig(item.status)}
          <tr class={`${itemClass}`}>
            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
              <div class="flex items-center">
                {#if item.thumbnail}
                  <img class="h-10 w-10 rounded-md" src={item.thumbnail} alt={item.name} />
                {:else}
                  <div class="h-10 w-10 rounded-md bg-gray-200 flex items-center justify-center">
                    <Package class="h-5 w-5 text-gray-500" />
                  </div>
                {/if}
                <div class="ml-4">
                  <div class="font-medium">{item.name}</div>
                  {#if item.category}
                    <div class="text-gray-500 text-xs">{item.category}</div>
                  {/if}
                </div>
              </div>
            </td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.sku}</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <div class="flex items-center">
                <span>{item.currentStock}</span>
                {#if item.maxStock}
                  <span class="text-gray-400 ml-1">/ {item.maxStock}</span>
                {/if}
              </div>
            </td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {item.reserved || 0}
            </td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <span class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                item.available > item.minStock * 2 ? 'bg-green-100 text-green-800' :
                item.available <= 0 ? 'bg-red-100 text-red-800' :
                item.available <= item.minStock ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {item.available}
              </span>
            </td>
            <td class="whitespace-nowrap px-3 py-4 text-sm">
              <span class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.color}`}>
                {#if showAlertBadges && item.status === 'low-stock'}
                  <AlertTriangle class="h-3 w-3 mr-1" />
                {/if}
                {item.status.replace('-', ' ')}
              </span>
            </td>
            <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
              <div class="flex justify-end space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onclick={() => handleRestock(item)}
                  disabled={item.status !== 'low-stock' && item.status !== 'out-of-stock'}
                >
                  Restock
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onclick={() => handleEdit(item)}
                >
                  Edit
                </Button>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>

    {#if filteredItems.length === 0}
      <div class="text-center py-12">
        <Package class="h-12 w-12 text-gray-400 mx-auto" />
        <h3 class="mt-2 text-sm font-medium text-gray-900">No inventory items</h3>
        <p class="mt-1 text-sm text-gray-500">
          {searchTerm ? 'No items match your search.' : 'Get started by adding some inventory items.'}
        </p>
      </div>
    {/if}
  </div>
</div>



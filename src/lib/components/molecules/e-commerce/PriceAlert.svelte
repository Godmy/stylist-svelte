<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Bell, BellOff, AlertCircle, TrendingUp, TrendingDown, X, DollarSign, Trash2 } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  type AlertType = 'price_drop' | 'price_increase' | 'below_target' | 'above_target';

  type PriceAlert = {
    id: string;
    productId: string;
    productTitle: string;
    alertType: AlertType;
    currentValue: number;
    targetValue?: number;
    triggeredAt?: Date;
    isActive: boolean;
    threshold?: number; // Percentage threshold
    currency?: string;
    locale?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    alerts: PriceAlert[];
    showCreateForm?: boolean;
    showStatus?: boolean;
    showTriggeredAt?: boolean;
    enableToggle?: boolean;
    enableDelete?: boolean;
    onAlertToggle?: (alertId: string, active: boolean) => void;
    onAlertDelete?: (alertId: string) => void;
    onAlertCreate?: (alert: Omit<PriceAlert, 'id' | 'triggeredAt'>) => void;
    class?: string;
    alertClass?: string;
    headerClass?: string;
    createActionClass?: string;
    currency?: string;
    locale?: string;
  };

  let {
    alerts = [],
    showCreateForm = true,
    showStatus = true,
    showTriggeredAt = true,
    enableToggle = true,
    enableDelete = true,
    onAlertToggle,
    onAlertDelete,
    onAlertCreate,
    class: hostClass = '',
    alertClass = '',
    headerClass = '',
    createActionClass = '',
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let newAlert = $state({
    productId: '',
    productTitle: '',
    alertType: 'price_drop' as AlertType,
    currentValue: 0,
    targetValue: 0,
    isActive: true,
    threshold: 5
  });

  let showForm = $state(false);

  function formatPrice(price: number): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(price);
  }

  function handleToggle(alertId: string) {
    const alert = alerts.find(a => a.id === alertId);
    if (alert) {
      onAlertToggle?.(alertId, !alert.isActive);
    }
  }

  function handleDelete(alertId: string) {
    onAlertDelete?.(alertId);
  }

  function handleCreate() {
    if (newAlert.productTitle && newAlert.targetValue && newAlert.productId) {
      onAlertCreate?.({
        ...newAlert,
        productId: newAlert.productId,
        productTitle: newAlert.productTitle,
        alertType: newAlert.alertType,
        currentValue: newAlert.currentValue,
        targetValue: newAlert.targetValue,
        isActive: newAlert.isActive,
        threshold: newAlert.threshold,
        currency: currency
      });

      // Reset form
      newAlert = {
        productId: '',
        productTitle: '',
        alertType: 'price_drop',
        currentValue: 0,
        targetValue: 0,
        isActive: true,
        threshold: 5
      };
      showForm = false;
    }
  }

  function getAlertIcon(alertType: AlertType) {
    if (alertType === 'price_drop' || alertType === 'below_target') {
      return TrendingDown;
    } else {
      return TrendingUp;
    }
  }

  function getAlertTitle(alert: PriceAlert): string {
    const formattedCurrent = formatPrice(alert.currentValue);
    const formattedTarget = alert.targetValue ? formatPrice(alert.targetValue) : '';

    switch (alert.alertType) {
      case 'price_drop':
        return `Price dropped to ${formattedCurrent}`;
      case 'price_increase':
        return `Price increased to ${formattedCurrent}`;
      case 'below_target':
        return `Price below target ${formattedTarget}`;
      case 'above_target':
        return `Price above target ${formattedTarget}`;
      default:
        return `Price alert for ${alert.productTitle}`;
    }
  }

  function getAlertDescription(alert: PriceAlert): string {
    const formattedCurrent = formatPrice(alert.currentValue);
    const formattedTarget = alert.targetValue ? formatPrice(alert.targetValue) : '';

    switch (alert.alertType) {
      case 'price_drop':
        return `The price of ${alert.productTitle} has dropped to ${formattedCurrent}.`;
      case 'price_increase':
        return `The price of ${alert.productTitle} has increased to ${formattedCurrent}.`;
      case 'below_target':
        return `The price of ${alert.productTitle} is now below your target of ${formattedTarget}.`;
      case 'above_target':
        return `The price of ${alert.productTitle} is now above your target of ${formattedTarget}.`;
      default:
        return `Price alert for ${alert.productTitle}`;
    }
  }
</script>

<div class={`price-alerts ${hostClass}`} {...restProps}>
  <div class={`mb-6 ${headerClass}`}>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <Bell class="h-6 w-6 text-blue-500 mr-2" />
        <h2 class="text-xl font-bold text-gray-900">Price Alerts</h2>
      </div>

      <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
        {alerts.length} active
      </span>
    </div>

    <p class="mt-1 text-sm text-gray-600">
      Monitor price changes for products you're interested in
    </p>
  </div>

  {#if showCreateForm}
    {#if !showForm}
      <div class="mb-6">
        <Button
          variant="outline"
          class={`w-full ${createActionClass}`}
          onclick={() => showForm = true}
        >
          <Bell class="h-4 w-4 mr-2" />
          Create New Price Alert
        </Button>
      </div>
    {:else}
      <!-- Create alert form -->
      <div class={`border border-gray-200 rounded-lg p-6 mb-6 ${createActionClass}`}>
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-medium text-gray-900">Create New Price Alert</h3>
          <button
            type="button"
            class="text-gray-400 hover:text-gray-500"
            onclick={() => showForm = false}
          >
            <X class="h-5 w-5" />
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label for="product-title" class="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              id="product-title"
              class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter product name"
              value={newAlert.productTitle}
              oninput={(e) => newAlert = { ...newAlert, productTitle: (e.target as HTMLInputElement).value }}
            />
          </div>

          <div>
            <label for="product-id" class="block text-sm font-medium text-gray-700 mb-1">
              Product ID (optional)
            </label>
            <input
              type="text"
              id="product-id"
              class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter product ID"
              value={newAlert.productId}
              oninput={(e) => newAlert = { ...newAlert, productId: (e.target as HTMLInputElement).value }}
            />
          </div>

          <div>
            <label for="alert-type" class="block text-sm font-medium text-gray-700 mb-1">
              Alert Type
            </label>
            <select
              id="alert-type"
              class="block w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={newAlert.alertType}
              onchange={(e) => newAlert = { ...newAlert, alertType: (e.target as HTMLSelectElement).value as AlertType }}
            >
              <option value="price_drop">Price Drops Below Target</option>
              <option value="price_increase">Price Increases Above Target</option>
              <option value="below_target">Below Specified Price</option>
              <option value="above_target">Above Specified Price</option>
            </select>
          </div>

          <div>
            <label for="target-price" class="block text-sm font-medium text-gray-700 mb-1">
              Target Price
            </label>
            <div class="relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign class="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                id="target-price"
                class="block w-full pl-10 pr-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="0.00"
                min="0"
                step="0.01"
                value={newAlert.targetValue}
                oninput={(e) => newAlert = { ...newAlert, targetValue: parseFloat((e.target as HTMLInputElement).value) || 0 }}
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span class="text-gray-500 sm:text-sm">{currency}</span>
              </div>
            </div>
          </div>

          <div>
            <label for="threshold" class="block text-sm font-medium text-gray-700 mb-1">
              Threshold (%) - Optional
            </label>
            <input
              type="number"
              id="threshold"
              class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="5"
              min="0"
              max="100"
              value={newAlert.threshold}
              oninput={(e) => newAlert = { ...newAlert, threshold: parseFloat((e.target as HTMLInputElement).value) || 5 }}
            />
          </div>

          <div class="flex items-center">
            <input
              id="is-active"
              type="checkbox"
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              checked={newAlert.isActive}
              onchange={(e) => newAlert = { ...newAlert, isActive: (e.target as HTMLInputElement).checked }}
            />
            <label for="is-active" class="ml-2 block text-sm text-gray-900">
              Active
            </label>
          </div>

          <div class="flex space-x-3">
            <Button
              variant="primary"
              onclick={handleCreate}
              disabled={!newAlert.productTitle || !newAlert.targetValue}
            >
              Create Alert
            </Button>
            <Button
              variant="outline"
              onclick={() => {
                showForm = false;
                newAlert = {
                  productId: '',
                  productTitle: '',
                  alertType: 'price_drop',
                  currentValue: 0,
                  targetValue: 0,
                  isActive: true,
                  threshold: 5
                };
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    {/if}
  {/if}

  {#if alerts.length === 0}
    <div class="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
      <BellOff class="mx-auto h-12 w-12 text-gray-400" />
      <h3 class="mt-2 text-sm font-medium text-gray-900">No price alerts</h3>
      <p class="mt-1 text-sm text-gray-500">
        Get notified when prices change by creating a price alert.
      </p>
    </div>
  {:else}
    <div class="space-y-4">
      {#each alerts as alert}
        <div
          class={`border rounded-lg p-4 flex items-start ${
            alert.isActive ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-gray-50'
          } ${alertClass}`}
        >
          <div class="flex-shrink-0 mt-0.5">
            <AlertCircle class={`h-5 w-5 ${
              alert.alertType === 'price_drop' || alert.alertType === 'below_target'
                ? 'text-green-500'
                : 'text-red-500'
            }`} />
          </div>

          <div class="ml-3 flex-1 min-w-0">
            <div class="flex items-baseline justify-between">
              <div>
                <h3 class="text-sm font-medium text-gray-900">{getAlertTitle(alert)}</h3>
                <p class="text-sm text-gray-500 mt-1">{getAlertDescription(alert)}</p>
              </div>

              {#if showStatus}
                <span class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  alert.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {alert.isActive ? 'Active' : 'Inactive'}
                </span>
              {/if}
            </div>

            <div class="mt-2 flex items-center text-xs text-gray-500">
              <span>Product: {alert.productTitle}</span>
              {#if showTriggeredAt && alert.triggeredAt}
                <span class="mx-2">•</span>
                <span>Triggered: {new Date(alert.triggeredAt).toLocaleDateString()}</span>
              {/if}
            </div>
          </div>

          <div class="ml-4 flex items-center space-x-2">
            {#if enableToggle}
              <button
                type="button"
                class="text-gray-500 hover:text-gray-700"
                onclick={() => handleToggle(alert.id)}
                aria-label={alert.isActive ? "Disable alert" : "Enable alert"}
              >
                {#if alert.isActive}
                  <Bell class="h-5 w-5 text-gray-500" />
                {:else}
                  <BellOff class="h-5 w-5 text-gray-400" />
                {/if}
              </button>
            {/if}

            {#if enableDelete}
              <button
                type="button"
                class="text-gray-500 hover:text-red-500"
                onclick={() => handleDelete(alert.id)}
                aria-label="Delete alert"
              >
                <Trash2 class="h-5 w-5" />
              </button>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

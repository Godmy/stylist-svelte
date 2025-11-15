<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Package, Clock, MapPin, Calendar, AlertCircle, CheckCircle, Bell, Truck, Store } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  type StoreLocation = {
    id: string;
    name: string;
    address: string;
    phone: string;
    hours: string;
    stockLevel: 'high' | 'medium' | 'low' | 'out';
    distance?: number; // distance in km from customer
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    productName?: string;
    available?: boolean;
    stockLevel?: 'high' | 'medium' | 'low' | 'out';
    stockCount?: number;
    estimatedRestock?: Date;
    deliveryOptions?: string[]; // e.g., ['today', 'tomorrow', 'week']
    pickupAvailable?: boolean;
    stores?: StoreLocation[];
    showStockCount?: boolean;
    showDeliveryEstimate?: boolean;
    showPickupOptions?: boolean;
    showStoreAvailability?: boolean;
    class?: string;
    availabilityClass?: string;
    deliveryClass?: string;
    pickupClass?: string;
    storeClass?: string;
    onNotifyMe?: () => void;
    onFindInStore?: () => void;
    onCheckDelivery?: () => void;
    locale?: string;
    currency?: string;
  };

  let {
    productName = 'Product',
    available = true,
    stockLevel = 'high',
    stockCount,
    estimatedRestock,
    deliveryOptions = [],
    pickupAvailable = false,
    stores = [],
    showStockCount = true,
    showDeliveryEstimate = true,
    showPickupOptions = true,
    showStoreAvailability = true,
    class: hostClass = '',
    availabilityClass = '',
    deliveryClass = '',
    pickupClass = '',
    storeClass = '',
    onNotifyMe,
    onFindInStore,
    onCheckDelivery,
    locale = 'en-US',
    currency = 'USD',
    ...restProps
  }: Props = $props();

  let showNotifyMe = $state(!available && !estimatedRestock);

  function handleNotifyMe() {
    onNotifyMe?.();
    showNotifyMe = false;
  }

  function handleFindInStore() {
    onFindInStore?.();
  }

  function handleCheckDelivery() {
    onCheckDelivery?.();
  }

  function getAvailabilityInfo() {
    if (!available) {
      if (estimatedRestock) {
        return {
          status: 'Out of Stock',
          message: `Expected back ${new Date(estimatedRestock).toLocaleDateString(locale, { month: 'long', day: 'numeric' })}`,
          color: 'text-red-600 bg-red-100',
          icon: AlertCircle
        };
      }
      return {
        status: 'Out of Stock',
        message: 'Currently unavailable',
        color: 'text-red-600 bg-red-100',
        icon: AlertCircle
      };
    }

    if (stockLevel === 'low') {
      return {
        status: 'Low Stock',
        message: 'Only a few left!',
        color: 'text-yellow-600 bg-yellow-100',
        icon: AlertCircle
      };
    }

    if (pickupAvailable) {
      return {
        status: 'Available',
        message: 'Ready for pickup or delivery',
        color: 'text-green-600 bg-green-100',
        icon: CheckCircle
      };
    }

    return {
      status: 'In Stock',
      message: 'Ready for shipment',
      color: 'text-green-600 bg-green-100',
      icon: CheckCircle
    };
  }

  const availabilityInfo = $derived(getAvailabilityInfo());
  const AvailabilityIcon = $derived(availabilityInfo.icon);
</script>

<div class={`product-availability ${hostClass}`} {...restProps}>
  <div class={`p-4 rounded-lg border ${
    available ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
  } ${availabilityClass}`}>
    <div class="flex items-center">
      <AvailabilityIcon class={`h-5 w-5 mr-2 ${available ? 'text-green-500' : 'text-red-500'}`} />
      <div>
        <h3 class="text-sm font-medium">Availability</h3>
        <p class="text-lg font-semibold">{availabilityInfo.status}</p>
        <p class="text-sm text-gray-600">{availabilityInfo.message}</p>
      </div>
      
      {#if stockCount !== undefined && showStockCount}
        <div class="ml-auto text-right">
          <p class="text-sm font-medium text-gray-900">{stockCount} available</p>
          {#if stockLevel !== 'high'}
            <p class="text-xs text-gray-500">
              {stockLevel === 'low' ? 'Low stock' : stockLevel === 'medium' ? 'Medium stock' : 'High stock'}
            </p>
          {/if}
        </div>
      {/if}
    </div>
    
    {#if showNotifyMe && !available}
      <div class="mt-4">
        <Button 
          variant="outline" 
          onclick={handleNotifyMe}
          class="flex items-center"
        >
          <Bell class="h-4 w-4 mr-2" />
          Notify me when available
        </Button>
      </div>
    {/if}
  </div>
  
  {#if showDeliveryEstimate && available && deliveryOptions.length > 0}
    <!-- Delivery options -->
    <div class={`mt-4 border border-gray-200 rounded-lg p-4 ${deliveryClass}`}>
      <div class="flex items-center mb-3">
        <Truck class="h-5 w-5 text-blue-500 mr-2" />
        <h3 class="text-sm font-medium text-gray-900">Delivery Options</h3>
      </div>
      
      <div class="space-y-2">
        {#each deliveryOptions as option, index}
          <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 last:pb-0">
            <span class="capitalize">{option.replace('_', ' ')}</span>
            <span class="text-sm text-gray-500">
              {index === 0 ? 'Free' : option.includes('today') ? 'Fee applies' : 'Standard fee'}
            </span>
          </div>
        {/each}
      </div>
      
      <Button 
        variant="outline" 
        size="sm" 
        class="mt-3 w-full"
        onclick={handleCheckDelivery}
      >
        Check delivery options
      </Button>
    </div>
  {/if}
  
  {#if showPickupOptions && pickupAvailable}
    <!-- Pickup options -->
    <div class={`mt-4 border border-gray-200 rounded-lg p-4 ${pickupClass}`}>
      <div class="flex items-center mb-3">
        <Store class="h-5 w-5 text-blue-500 mr-2" />
        <h3 class="text-sm font-medium text-gray-900">Pickup Available</h3>
      </div>
      
      <p class="text-sm text-gray-600 mb-3">This product is available for pickup at our locations</p>
      
      <Button 
        variant="outline" 
        size="sm" 
        class="w-full"
        onclick={handleFindInStore}
      >
        Find in store
      </Button>
    </div>
  {/if}
  
  {#if showStoreAvailability && stores.length > 0}
    <!-- Store availability -->
    <div class={`mt-4 border border-gray-200 rounded-lg p-4 ${storeClass}`}>
      <div class="flex items-center mb-3">
        <MapPin class="h-5 w-5 text-blue-500 mr-2" />
        <h3 class="text-sm font-medium text-gray-900">Store Availability</h3>
      </div>
      
      <div class="space-y-3">
        {#each stores as store}
          <div class="flex items-center justify-between p-2 border border-gray-200 rounded">
            <div>
              <p class="text-sm font-medium text-gray-900">{store.name}</p>
              <p class="text-xs text-gray-500">{store.address}</p>
            </div>
            
            <div class={`px-2 py-1 rounded-full text-xs font-medium ${
              store.stockLevel === 'high' ? 'bg-green-100 text-green-800' :
              store.stockLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              store.stockLevel === 'low' ? 'bg-orange-100 text-orange-800' :
              'bg-red-100 text-red-800'
            }`}>
              {#if store.distance !== undefined}
                <span class="mr-1">{store.distance} km</span>
              {/if}
              {store.stockLevel === 'high' ? 'In Stock' : 
               store.stockLevel === 'medium' ? 'Medium' :
               store.stockLevel === 'low' ? 'Low Stock' : 'Out of Stock'}
            </div>
          </div>
        {/each}
      </div>
      
      <Button 
        variant="outline" 
        size="sm" 
        class="mt-3 w-full"
      >
        See all locations
      </Button>
    </div>
  {/if}
</div>

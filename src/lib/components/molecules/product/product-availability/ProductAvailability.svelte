<script lang="ts">
  let {
    available = true,
    stock = 0,
    location = '',
    estimatedRestock = '',
    onNotifyMe = () => {},
    className = ''
  } = $props<{
    available?: boolean;
    stock?: number;
    location?: string;
    estimatedRestock?: string;
    onNotifyMe?: () => void;
    className?: string;
  }>();

  let showNotificationForm = $state(false);
</script>

<div class={`p-4 rounded-lg border ${
  available ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
} ${className}`}>
  <div class="flex items-center justify-between mb-2">
    <h3 class="font-semibold">Availability</h3>
    <span class={`px-2 py-1 rounded-full text-xs font-medium ${
      available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
    }`}>
      {available ? 'In Stock' : 'Out of Stock'}
    </span>
  </div>
  
  <p class="mb-2">
    {#if available}
      {stock > 0 ? `${stock} item${stock !== 1 ? 's' : ''} available` : 'Available'}
      {#if location} at {location}{/if}
    {:else}
      Currently unavailable
      {#if estimatedRestock} (Expected {estimatedRestock}){/if}
    {/if}
  </p>
  
  {#if !available}
    <button
      onclick={() => (showNotificationForm = true)}
      class="text-blue-600 hover:text-blue-800 text-sm font-medium"
    >
      Notify me when available
    </button>

    {#if showNotificationForm}
      <div class="mt-3 p-3 bg-blue-50 rounded">
        <p class="mb-2">Enter your email to be notified when this product is back in stock.</p>
        <div class="flex">
          <input
            type="email"
            placeholder="Your email"
            class="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            onclick={onNotifyMe}
            class="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          >
            Notify
          </button>
        </div>
      </div>
    {/if}
  {/if}
</div>
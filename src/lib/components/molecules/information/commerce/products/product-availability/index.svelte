<script lang="ts">
  import { ProductAvailabilityStyleManager } from '$stylist/design-system/styles/product-availability';

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

  // Generate CSS classes using the style manager
  const containerClass = $derived(
    ProductAvailabilityStyleManager.getContainerClass(
      available 
        ? ProductAvailabilityStyleManager.getInStockClass() 
        : ProductAvailabilityStyleManager.getOutOfStockClass(),
      className
    )
  );
  const headerClass = $derived(ProductAvailabilityStyleManager.getHeaderClass());
  const titleClass = $derived(ProductAvailabilityStyleManager.getTitleClass());
  const statusBadgeClass = $derived(
    ProductAvailabilityStyleManager.getStatusBadgeClass(
      available 
        ? ProductAvailabilityStyleManager.getInStockBadgeClass() 
        : ProductAvailabilityStyleManager.getOutOfStockBadgeClass()
    )
  );
  const descriptionClass = $derived(ProductAvailabilityStyleManager.getDescriptionClass());
  const notifyButtonClass = $derived(ProductAvailabilityStyleManager.getNotifyButtonClass());
  const notificationFormClass = $derived(ProductAvailabilityStyleManager.getNotificationFormClass());
  const notificationTextClass = $derived(ProductAvailabilityStyleManager.getNotificationTextClass());
  const formContainerClass = $derived(ProductAvailabilityStyleManager.getFormContainerClass());
  const emailInputClass = $derived(ProductAvailabilityStyleManager.getEmailInputClass());
  const notifySubmitButtonClass = $derived(ProductAvailabilityStyleManager.getNotifySubmitButtonClass());
</script>

<div class={containerClass}>
  <div class={headerClass}>
    <h3 class={titleClass}>Availability</h3>
    <span class={statusBadgeClass}>
      {available ? 'In Stock' : 'Out of Stock'}
    </span>
  </div>

  <p class={descriptionClass}>
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
      class={notifyButtonClass}
    >
      Notify me when available
    </button>

    {#if showNotificationForm}
      <div class={notificationFormClass}>
        <p class={notificationTextClass}>Enter your email to be notified when this product is back in stock.</p>
        <div class={formContainerClass}>
          <input
            type="email"
            placeholder="Your email"
            class={emailInputClass}
          />
          <button
            onclick={onNotifyMe}
            class={notifySubmitButtonClass}
          >
            Notify
          </button>
        </div>
      </div>
    {/if}
  {/if}
</div>

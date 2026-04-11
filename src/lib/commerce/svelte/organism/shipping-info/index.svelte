<script lang="ts">
  import type { ShippingInfoContract } from '$stylist/commerce/interface/component/shipping-info';
  import { createShippingInfoState as stateFn } from '$stylist/commerce/function/state/shipping-info';

  let props: ShippingInfoContract = $props();
  const state = stateFn(props);
</script>

<div class={state.containerClasses}>
  <header class={state.headerClasses}>
    <h3 class={state.titleClasses}>Shipping Information</h3>
  </header>

  {#if props.showOptions !== false}
    <section class={state.optionsContainerClasses}>
      {#each state.options as option}
        <button
          type="button"
          class={`${state.optionClasses} ${state.selectedOptionId === option.id ? 'ring-2 ring-[var(--color-border-primary)]' : ''}`}
          disabled={option.disabled}
          onclick={() => state.handleOptionSelect(option)}
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class={state.optionNameClasses}>{option.name}</p>
              <p class={state.optionDescriptionClasses}>{option.description}</p>
            </div>
            <div class="text-right">
              <p class={state.optionPriceClasses}>{state.formatPrice(option.price)}</p>
              <p class={state.deliveryTimeClasses}>{state.formatDelivery(option.estimatedDays)}</p>
            </div>
          </div>
        </button>
      {/each}
    </section>
  {/if}

  {#if props.showRegions && state.regions.length}
    <section class={state.regionsContainerClasses}>
      <h4 class={state.regionNameClasses}>Regions</h4>
      {#each state.regions as region}
        <article class={state.regionItemClasses}>
          <p class={state.regionNameClasses}>{region.name}</p>
          <p class={state.countriesListClasses}>{region.countries.join(', ')}</p>
          {#if props.showRestrictions && region.restrictions?.length}
            <p class={state.shippingDetailValueClasses}>{region.restrictions.join(', ')}</p>
          {/if}
        </article>
      {/each}
    </section>
  {/if}

  <section class={state.shippingDetailsContainerClasses}>
    {#if props.showDeliveryEstimate && props.deliveryEstimate}
      <div class={state.shippingDetailItemClasses}>
        <span class={state.shippingDetailLabelClasses}>Estimated Delivery</span>
        <span class={state.shippingDetailValueClasses}>
          {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(props.deliveryEstimate)}
        </span>
      </div>
    {/if}

    {#if props.showFreeShipping && props.freeShippingThreshold !== undefined}
      <div class={state.shippingDetailItemClasses}>
        <span class={state.shippingDetailLabelClasses}>Free Shipping Threshold</span>
        <span class={state.shippingDetailValueClasses}>{state.formatPrice(props.freeShippingThreshold)}</span>
      </div>
    {/if}
  </section>
</div>

<script lang="ts">
  import type { RecipeSubscriptionManager as SubscriptionManagerContract } from '$stylist/commerce/interface/recipe/subscription-manager';
  import { createSubscriptionManagerState as stateFn } from '$stylist/commerce/function/state/subscription-manager';

  let props: SubscriptionManagerContract = $props();
  const state = stateFn(props);
</script>

<div class={state.containerClasses}>
  <header class={state.headerClasses}>
    <div>
      <h3 class={state.titleClasses}>{props.title ?? 'SlotSubscription Manager'}</h3>
      {#if props.subtitle}
        <p class={state.subtitleClasses}>{props.subtitle}</p>
      {/if}
    </div>
    <span class={state.getStatusBadgeClasses(state.subscription.status)}>{state.subscription.status}</span>
  </header>

  <section class={state.planContainerClasses}>
    <div class="flex items-start justify-between gap-4">
      <div>
        <h4 class={state.planNameClasses}>{state.subscription.plan.name}</h4>
        <p class={state.planDescriptionClasses}>{state.subscription.plan.description}</p>
      </div>
      <div class={state.planPriceClasses}>
        {state.formatPrice(state.subscription.plan.price, state.subscription.plan.currency)}
        <span class={state.planPricePeriodClasses}>/{state.subscription.plan.period}</span>
      </div>
    </div>

    <div class={state.featuresListClasses}>
      {#each state.subscription.plan.features as feature}
        <div class={state.featureItemClasses}>
          <span class={state.featureTextClasses}>{feature}</span>
        </div>
      {/each}
    </div>
  </section>

  {#if props.showBillingInfo !== false}
    <section class={state.billingInfoClasses}>
      <div class="flex items-center justify-between gap-4">
        <span class={state.billingInfoLabelClasses}>Started</span>
        <span class={state.billingInfoValueClasses}>{state.formatDate(state.subscription.startDate)}</span>
      </div>
      {#if state.subscription.nextBillingDate}
        <div class="flex items-center justify-between gap-4">
          <span class={state.billingInfoLabelClasses}>Next Billing</span>
          <span class={state.billingInfoValueClasses}>{state.formatDate(state.subscription.nextBillingDate)}</span>
        </div>
      {/if}
      {#if props.showPaymentMethod && state.subscription.paymentMethod}
        <div class="flex items-center justify-between gap-4">
          <span class={state.billingInfoLabelClasses}>Payment Method</span>
          <span class={state.billingInfoValueClasses}>{state.subscription.paymentMethod}</span>
        </div>
      {/if}
    </section>
  {/if}

  {#if props.showActions !== false}
    <div class={state.actionsContainerClasses}>
      <button type="button" class={state.getActionButtonClasses('primary')} onclick={props.onUpgrade}>Upgrade</button>
      <button type="button" class={state.getActionButtonClasses('secondary')} onclick={props.onPause}>Pause</button>
      <button type="button" class={state.getActionButtonClasses('danger')} onclick={props.onCancel}>Cancel</button>
    </div>
  {/if}
</div>

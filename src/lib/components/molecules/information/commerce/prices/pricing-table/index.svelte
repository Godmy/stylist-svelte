<script lang="ts">
  import { PricingTableStyleManager } from '$stylist/design-system/styles/information/pricing-table';

  let {
    plans = [],
    className = ''
  } = $props<{
    plans: Array<{
      name: string;
      price: string;
      period: string;
      features: string[];
      cta: string;
      highlighted?: boolean;
    }>;
    className?: string;
  }>();

  // Generate CSS classes using the style manager
  const containerClass = $derived(PricingTableStyleManager.getContainerClass(className));
  const planCardClass = (highlighted: boolean) => 
    PricingTableStyleManager.getPlanCardClass(highlighted ? PricingTableStyleManager.getHighlightedPlanClass() : PricingTableStyleManager.getDefaultPlanClass());
  const popularBadgeClass = $derived(PricingTableStyleManager.getPopularBadgeClass());
  const planTitleClass = $derived(PricingTableStyleManager.getPlanTitleClass());
  const priceContainerClass = $derived(PricingTableStyleManager.getPriceContainerClass());
  const priceClass = $derived(PricingTableStyleManager.getPriceClass());
  const periodClass = $derived(PricingTableStyleManager.getPeriodClass());
  const featuresListClass = $derived(PricingTableStyleManager.getFeaturesListClass());
  const featureItemClass = $derived(PricingTableStyleManager.getFeatureItemClass());
  const checkIconClass = $derived(PricingTableStyleManager.getCheckIconClass());
  const ctaButtonClass = (highlighted: boolean) => 
    PricingTableStyleManager.getCtaButtonClass(highlighted ? PricingTableStyleManager.getHighlightedButtonClass() : PricingTableStyleManager.getDefaultButtonClass());
</script>

<div class={containerClass}>
  {#each plans as plan, i}
    <div class={planCardClass(!!plan.highlighted)}>
      {#if plan.highlighted}
        <div class={popularBadgeClass}>
          MOST POPULAR
        </div>
      {/if}
      <h3 class={planTitleClass}>{plan.name}</h3>
      <div class={priceContainerClass}>
        <span class={priceClass}>{plan.price}</span>
        <span class={periodClass}>/{plan.period}</span>
      </div>
      <ul class={featuresListClass}>
        {#each plan.features as feature}
          <li class={featureItemClass}>
            <svg class={checkIconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {feature}
          </li>
        {/each}
      </ul>
      <button class={ctaButtonClass(!!plan.highlighted)}>
        {plan.cta}
      </button>
    </div>
  {/each}
</div>

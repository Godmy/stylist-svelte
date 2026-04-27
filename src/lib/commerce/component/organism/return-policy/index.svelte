<script lang="ts">
  import type { RecipeReturnPolicy as ReturnPolicyContract } from '$stylist/commerce/interface/recipe/return-policy';
  import { createReturnPolicyState as stateFn } from '$stylist/commerce/function/state/return-policy';

  let props: ReturnPolicyContract = $props();
  const state = stateFn(props);
</script>

<div class={state.containerClasses}>
  <header class={state.headerClasses}>
    <h3 class={state.titleClasses}>Return Policy</h3>
    <p class={state.policyDescriptionClasses}>
      {props.policyDescription ?? `Return eligible items within ${props.policyPeriod} days of delivery.`}
    </p>
    {#if props.policyEffectiveDate}
      <p class={state.shippingInfoValueClasses}>
        Effective {new Intl.DateTimeFormat(props.locale ?? 'en-US', { dateStyle: 'medium' }).format(props.policyEffectiveDate)}
      </p>
    {/if}
  </header>

  <div class={state.contentContainerClasses}>
    {#if props.showConditions !== false && props.conditions?.length}
      <section class={state.sectionClasses}>
        <h4 class={state.sectionTitleClasses}>Conditions</h4>
        <div class={state.conditionsListClasses}>
          {#each props.conditions as condition}
            <article class={state.conditionItemClasses}>
              <h5 class={state.conditionTitleClasses}>{condition.title}</h5>
              <p class={state.conditionDescriptionClasses}>{condition.description}</p>
            </article>
          {/each}
        </div>
      </section>
    {/if}

    {#if props.showSteps !== false && props.returnSteps?.length}
      <section class={state.sectionClasses}>
        <h4 class={state.sectionTitleClasses}>How Returns Work</h4>
        <div class={state.stepsListClasses}>
          {#each props.returnSteps as step, index}
            <article class={state.stepItemClasses}>
              <div class={state.stepNumberClasses}>{index + 1}</div>
              <div class={state.stepContentClasses}>
                <h5 class={state.stepTitleClasses}>{step.title}</h5>
                <p class={state.stepDescriptionClasses}>{step.description}</p>
              </div>
            </article>
          {/each}
        </div>
      </section>
    {/if}

    {#if props.showEligibility}
      <section class={state.sectionClasses}>
        <h4 class={state.sectionTitleClasses}>Eligibility</h4>
        <div class="space-y-3">
          {#if props.eligibleProducts?.length}
            <div>
              <p class={state.shippingInfoLabelClasses}>Eligible Products</p>
              <div class="mt-2 flex flex-wrap gap-2">
                {#each props.eligibleProducts as product}
                  <span class={state.badgeClasses}>{product}</span>
                {/each}
              </div>
            </div>
          {/if}

          {#if props.ineligibleProducts?.length}
            <div>
              <p class={state.shippingInfoLabelClasses}>Not Eligible</p>
              <div class="mt-2 flex flex-wrap gap-2">
                {#each props.ineligibleProducts as product}
                  <span class={state.badgeClasses}>{product}</span>
                {/each}
              </div>
            </div>
          {/if}
        </div>
      </section>
    {/if}

    {#if props.showShippingInfo}
      <section class={state.sectionClasses}>
        <h4 class={state.sectionTitleClasses}>Shipping & Fees</h4>
        <div class={state.shippingInfoClasses}>
          <div class={state.shippingInfoItemClasses}>
            <span class={state.shippingInfoLabelClasses}>Return Window</span>
            <span class={state.shippingInfoValueClasses}>{props.policyPeriod} days</span>
          </div>
          <div class={state.shippingInfoItemClasses}>
            <span class={state.shippingInfoLabelClasses}>Shipping Costs</span>
            <span class={state.shippingInfoValueClasses}>{props.shippingCosts ?? 'buyer'}</span>
          </div>
          <div class={state.shippingInfoItemClasses}>
            <span class={state.shippingInfoLabelClasses}>Restocking Fee</span>
            <span class={state.shippingInfoValueClasses}>{props.restockingFee ?? 0}%</span>
          </div>
        </div>
      </section>
    {/if}

    {#if props.showFAQ !== false && props.faqs?.length}
      <section class={state.sectionClasses}>
        <h4 class={state.sectionTitleClasses}>FAQ</h4>
        <div class={state.faqListClasses}>
          {#each props.faqs as faq}
            <article class={state.faqItemClasses}>
              <h5 class={state.faqQuestionClasses}>{faq.question}</h5>
              <p class={state.faqAnswerClasses}>{faq.answer}</p>
            </article>
          {/each}
        </div>
      </section>
    {/if}

    <div class="flex flex-wrap gap-3">
      <button type="button" class={state.getButtonClasses('primary')} onclick={props.onReturnInitiate}>
        Start Return
      </button>
      <button type="button" class={state.getButtonClasses('secondary')} onclick={props.onPolicyClick}>
        View Details
      </button>
    </div>
  </div>
</div>

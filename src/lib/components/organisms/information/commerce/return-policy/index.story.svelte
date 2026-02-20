<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import ReturnPolicy from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showConditions', type: 'boolean', defaultValue: true },
      { name: 'showSteps', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample return policy data
  const policyData = {
    policyPeriod: 30,
    policyDescription: 'Our return policy allows you to return most new, unopened items within {days} days of delivery for a full refund.',
    policyEffectiveDate: new Date(),
    conditions: [
      {
        id: 'condition-1',
        title: 'Time Limit',
        description: 'Returns must be initiated within 30 days of delivery',
        appliesTo: ['all']
      },
      {
        id: 'condition-2',
        title: 'Original Condition',
        description: 'Item must be in original condition, unused and in original packaging',
        appliesTo: ['all']
      },
      {
        id: 'condition-3',
        title: 'Proof of Purchase',
        description: 'Receipt or proof of purchase is required',
        appliesTo: ['all']
      }
    ],
    eligibleProducts: ['Clothing', 'Electronics', 'Home & Garden', 'Books'],
    ineligibleProducts: ['Food & Grocery', 'Personal Care', 'Gift Cards'],
    shippingCosts: 'buyer' as const,
    restockingFee: 5,
    faqs: [
      {
        question: "How long does the return process take?",
        answer: "The return process typically takes 5-7 business days from the time we receive your return."
      },
      {
        question: "Can I exchange an item instead of returning it?",
        answer: "Yes, we offer exchanges for items of equal or greater value. Just select the exchange option when initiating your return."
      },
      {
        question: "Will I be charged a restocking fee?",
        answer: "We charge a 5% restocking fee for certain items. This will be deducted from your refund."
      }
    ]
  };
</script>

<Story
  {id}
  {title}
  {description}
  component={ReturnPolicy}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-return-policy grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Return Policy Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Return policy with conditions and process steps.</p>

        <div class="mt-6">
          <ReturnPolicy
            {...policyData}
            showConditions={props.showConditions}
            showSteps={props.showSteps}
            showEligibility={true}
            showShippingInfo={true}
            showFAQ={true}
            onReturnInitiate={() => console.log('Initiating return')}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Policy Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different return policy configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Free Return Shipping</p>
            <div>
              <ReturnPolicy
                {...policyData}
                shippingCosts="seller"
                restockingFee={0}
                showConditions={true}
                showSteps={false}
                showEligibility={true}
                showShippingInfo={true}
                showFAQ={false}
                onReturnInitiate={() => console.log('Initiating return with free shipping')}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Strict Policy</p>
            <div>
              <ReturnPolicy
                {...policyData}
                policyPeriod={14}
                conditions={[
                  {
                    id: 'condition-1',
                    title: 'Time Limit',
                    description: 'Returns must be initiated within 14 days of delivery',
                    appliesTo: ['all']
                  },
                  {
                    id: 'condition-2',
                    title: 'Original Condition',
                    description: 'Item must be in original condition, unused and in original packaging',
                    appliesTo: ['all']
                  },
                  {
                    id: 'condition-3',
                    title: 'No Exceptions',
                    description: 'No returns accepted after 14 days under any circumstances',
                    appliesTo: ['all']
                  }
                ]}
                showConditions={true}
                showSteps={true}
                showEligibility={false}
                showShippingInfo={true}
                showFAQ={true}
                onReturnInitiate={() => console.log('Initiating return with strict policy')}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>



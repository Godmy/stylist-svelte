<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import SubscriptionManager from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showActions', type: 'boolean', defaultValue: true },
      { name: 'showPaymentMethod', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample subscription data
  const subscription = {
    id: 'sub-12345',
    plan: {
      id: 'premium',
      name: 'Premium Plan',
      description: 'Access to all premium features',
      price: 29.99,
      period: 'month',
      currency: 'USD',
      features: [
        'Unlimited projects',
        'Advanced analytics',
        'Priority support',
        'Custom domains',
        'Team collaboration'
      ]
    },
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
    endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year from now
    nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    status: 'active' as const,
    paymentMethod: 'Visa ending in 4242',
    autoRenew: true
  };
</script>

<Story
  {id}
  {title}
  {description}
  component={SubscriptionManager}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props: { showActions?: boolean; showPaymentMethod?: boolean })}
    <section class="sb-organisms-subscription-manager grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Subscription Manager Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Subscription manager with plan and billing details.</p>

        <div class="mt-6">
          <SubscriptionManager
            subscription={subscription}
            showActions={props.showActions}
            showPaymentMethod={props.showPaymentMethod}
            showBillingInfo={true}
            onUpgrade={() => console.log('Upgrading plan')}
            onDowngrade={() => console.log('Downgrading plan')}
            onCancel={() => console.log('Cancelling subscription')}
            onPause={() => console.log('Pausing subscription')}
            onResume={() => console.log('Resuming subscription')}
            onBillingChange={() => console.log('Changing billing details')}
            onPaymentMethodChange={() => console.log('Changing payment method')}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Subscription Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different subscription configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Paused Subscription</p>
            <div>
              <SubscriptionManager
                subscription={{
                  ...subscription,
                  status: 'paused' as const,
                  nextBillingDate: undefined
                }}
                showActions={true}
                showPaymentMethod={true}
                showBillingInfo={false}
                onResume={() => console.log('Resuming paused subscription')}
                onCancel={() => console.log('Cancelling paused subscription')}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Trial Subscription</p>
            <div>
              <SubscriptionManager
                subscription={{
                  ...subscription,
                  status: 'trialing' as const,
                  plan: {
                    ...subscription.plan,
                    name: 'Pro Trial',
                    description: '7-day trial of Pro features',
                    price: 0
                  }
                }}
                showActions={true}
                showPaymentMethod={false}
                showBillingInfo={true}
                onUpgrade={() => console.log('Upgrading from trial')}
                onCancel={() => console.log('Cancelling trial')}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

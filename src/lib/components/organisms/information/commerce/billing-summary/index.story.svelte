<script lang="ts">
  // @ts-nocheck
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';
  import BillingSummary from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      {
        name: 'title',
        type: 'text',
        defaultValue: 'Billing Summary'
      },
      {
        name: 'showDetails',
        type: 'boolean',
        defaultValue: true
      }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();
</script>

<Story
  {id}
  {title}
  {description}
  component={BillingSummary}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-billing-summary grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Billing Summary Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive billing summary with payment details.</p>

        <div class="mt-6">
          <BillingSummary
            items={[
              {
                id: '1',
                description: 'Subscription Fee',
                amount: 29.99,
                date: new Date(),
                currency: 'USD',
                status: 'pending'
              },
              {
                id: '2',
                description: 'Setup Fee',
                amount: 19.99,
                date: new Date(),
                currency: 'USD',
                status: 'pending'
              },
              {
                id: '3',
                description: 'Service Charge',
                amount: 5.99,
                date: new Date(),
                currency: 'USD',
                status: 'pending'
              }
            ]}
            showDetails={values.showDetails}
            title={values.title}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Billing Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different billing summary configurations with various statuses.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Paid Status</p>
            <div>
              <BillingSummary
                items={[
                  {
                    id: '1',
                    description: 'Premium Subscription',
                    amount: 99.99,
                    date: new Date(),
                    currency: 'USD',
                    status: 'paid'
                  }
                ]}
                status="paid"
                title="Paid Invoice"
                showDetails={true}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Overdue Status</p>
            <div>
              <BillingSummary
                items={[
                  {
                    id: '1',
                    description: 'Monthly Service',
                    amount: 49.99,
                    date: new Date(Date.now() - 86400000 * 10), // 10 days ago
                    currency: 'USD',
                    status: 'overdue'
                  }
                ]}
                status="overdue"
                title="Overdue Payment"
                showDetails={true}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>




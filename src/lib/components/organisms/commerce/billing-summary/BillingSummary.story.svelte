<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import BillingSummary from './BillingSummary.svelte';

  type Props = {
    title: string;
    showDetails: boolean;
  };

  const controls: ControlConfig[] = [
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
  ];
</script>

<Story
  id="molecules-billing-summary"
  title="BillingSummary"
  component={BillingSummary}
  category="Molecules"
  description="A component to display billing information and summary."
  tags={['billing', 'payment', 'summary']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6 max-w-md mx-auto">
      <h2 class="text-xl font-semibold mb-6">{props.title}</h2>
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
        showDetails={props.showDetails}
        title={props.title}
      />
    </div>
  {/snippet}
</Story>
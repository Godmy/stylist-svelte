<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import QuoteRequest from './index.svelte';
  import type { QuoteRequestValue } from '$stylist/design-system/props/interaction/interaction-input';

  type Props = {
    title: string;
    description: string;
    showCompanyFields: boolean;
    showShippingFields: boolean;
    showUrgentOption: boolean;
    showValidUntil: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Request a Quote'
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'Fill out the form below to request a quote'
    },
    {
      name: 'showCompanyFields',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'showShippingFields',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'showUrgentOption',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'showValidUntil',
      type: 'boolean',
      defaultValue: true
    }
  ];

  function handleSubmit(request: QuoteRequestValue) {
    console.log('Quote request submitted:', request);
    alert('Quote request submitted!');
  }

  function handleCancel() {
    console.log('Quote request cancelled');
  }
</script>

<Story
  id="organisms-quote-request"
  title="Organisms / Interaction / Input / Quote Request"
  component={QuoteRequest}
  category="Organisms/Interaction/Input"
  description="A quote request form component."
  tags={['form', 'quote', 'request']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="p-4 max-w-2xl">
      <QuoteRequest 
        title={values.title}
        description={values.description}
        showCompanyFields={values.showCompanyFields}
        showShippingFields={values.showShippingFields}
        showUrgentOption={values.showUrgentOption}
        showValidUntil={values.showValidUntil}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  {/snippet}
</Story>


<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import RecipeQuoteRequest from './index.svelte';
  import type { QuoteRequestValue } from '$stylist/input/type/struct/interaction-input/quote-request-value';

  type Props = {
    title: string;
    description: string;
    showCompanyFields: boolean;
    showShippingFields: boolean;
    showUrgentOption: boolean;
    showValidUntil: boolean;
  };

  const controls: InterfaceControllerSettings[] = [
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
  component={RecipeQuoteRequest}
  category="Organisms/Interaction/Input"
  description="A quote request form component."
  tags={['form', 'quote', 'request']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="p-4 max-w-2xl">
      <RecipeQuoteRequest 
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





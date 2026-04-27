<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import type { SlotAddressForm as AddressFormProps } from '$stylist/form/interface/slot/address-form';
  import type { AddressData } from '$stylist/form/type/struct/forms-address-data';
  import { FormStyleManager } from '$stylist';
  import AddressForm from './index.svelte';

  type Props = {
    showCountry: boolean;
    showState: boolean;
    showCity: boolean;
    showZipCode: boolean;
    showStreet: boolean;
    showApartment: boolean;
    showPhone: boolean;
    requireAll: boolean;
  };

  const controls: InterfaceControllerSettings[] = [
    { name: 'showCountry', type: 'boolean', defaultValue: true },
    { name: 'showState', type: 'boolean', defaultValue: true },
    { name: 'showCity', type: 'boolean', defaultValue: true },
    { name: 'showZipCode', type: 'boolean', defaultValue: true },
    { name: 'showStreet', type: 'boolean', defaultValue: true },
    { name: 'showApartment', type: 'boolean', defaultValue: true },
    { name: 'showPhone', type: 'boolean', defaultValue: true },
    { name: 'requireAll', type: 'boolean', defaultValue: false }
  ];

  function handleSubmit(address: AddressData) {
    console.log('Address submitted:', address);
    alert('Address submitted successfully!');
  }

  function handleValidationError(errors: any) {
    console.log('Validation errors:', errors);
  }
</script>

<Story
  id="organisms-address-form"
  title="Organisms / Interaction / Forms / Address Form"
  component={AddressForm}
  category="Organisms/Interaction/Forms"
  description="An address form component for collecting shipping or billing address information."
  tags={['form', 'address', 'shipping', 'billing']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class={FormStyleManager.container('sb-organisms-address-form p-4')}>
      <h1 class="text-lg font-semibold mb-4">AddressForm Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive AddressForm</h2>
        <div class="max-w-lg">
          <AddressForm
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>





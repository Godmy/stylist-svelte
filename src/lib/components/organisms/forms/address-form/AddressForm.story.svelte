<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import AddressForm from './AddressForm.svelte';

  type Props = {
    title: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Shipping Address'
    }
  ];
</script>

<Story
  id="molecules-address-form"
  title="AddressForm"
  component={AddressForm}
  category="Molecules"
  description="A form component for collecting address information."
  tags={['form', 'address', 'location']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6 max-w-md mx-auto">
      <div class="mb-6">
        <h2 class="text-xl font-semibold">{props.title}</h2>
        <p class="text-gray-500">Enter your address details</p>
      </div>
      <AddressForm />
    </div>
  {/snippet}
</Story>
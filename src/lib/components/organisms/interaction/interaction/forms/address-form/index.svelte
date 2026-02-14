<script lang="ts">
  import { InteractionFormsStyleManager } from '$stylist/design-system/styles/interaction-forms';
  import type { AddressFormProps } from '$stylist/design-system/props/interaction-forms';
  let { street='', city='', region='', postalCode='', country='', class: className='', ...restProps }: AddressFormProps = $props();
</script>
<form class={InteractionFormsStyleManager.root('c-address-form border rounded-lg p-4 space-y-2', className)} {...restProps}>
  <input class="w-full border rounded px-2 py-1" placeholder="Street" value={street} />
  <div class="grid grid-cols-2 gap-2">
    <input class="w-full border rounded px-2 py-1" placeholder="City" value={city} />
    <input class="w-full border rounded px-2 py-1" placeholder="Region" value={region} />
  </div>
  <div class="grid grid-cols-2 gap-2">
    <input class="w-full border rounded px-2 py-1" placeholder="Postal code" value={postalCode} />
    <input class="w-full border rounded px-2 py-1" placeholder="Country" value={country} />
  </div>
</form>

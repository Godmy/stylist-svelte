<script lang="ts">
  import { createAddressFormState } from '$stylist/form/function/state/address-form';

  const props = $props();
  const state = createAddressFormState(props);
</script>
<form class={state.rootClass} {...props}>
  <input class={state.inputClass} placeholder="Street" value={props.street} />
  <div class={state.gridClass}>
    <input class={state.gridItemClass} placeholder="City" value={props.city} />
    <input class={state.gridItemClass} placeholder="Region" value={props.region} />
  </div>
  <div class={state.gridClass}>
    <input class={state.gridItemClass} placeholder="Postal code" value={props.postalCode} />
    <input class={state.gridItemClass} placeholder="Country" value={props.country} />
  </div>
</form>







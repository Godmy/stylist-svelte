<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
const Lock = 'lock';

  import { createSecureFormState } from '$stylist/management/function/state/secure-form';
  import type { SecureFormProps } from '$stylist/form/interface/component/interaction-forms/other';

  let props: SecureFormProps = $props();
  const state = createSecureFormState(props);
</script>
<form class={state.containerClasses} {...state.restProps}>
  <div class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]"><BaseIcon name={Lock} class="h-4 w-4" /> Secure Form</div>
  <input class="w-full border rounded px-2 py-1" type="password" placeholder="Sensitive value" />
  <input type="hidden" value={state.token} />
  <button class="px-3 py-1 bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] rounded" type="submit">Submit securely</button>
</form>

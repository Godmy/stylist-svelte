<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const Lock = 'lock';

  import { InteractionFormsStyleManager } from '$stylist/design-system/styles/interaction/interaction-forms';
  import type { SecureFormProps } from '$stylist/design-system/contracts/interaction/interaction-forms';
  let { token='SECURE_TOKEN', class: className='', ...restProps }: SecureFormProps = $props();
</script>
<form class={InteractionFormsStyleManager.root('c-secure-form border rounded-lg p-4 space-y-2', className)} {...restProps}>
  <div class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]"><BaseIcon name={Lock} class="h-4 w-4" /> Secure Form</div>
  <input class="w-full border rounded px-2 py-1" type="password" placeholder="Sensitive value" />
  <input type="hidden" value={token} />
  <button class="px-3 py-1 bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] rounded" type="submit">Submit securely</button>
</form>






<script lang="ts">
  import { InteractionFormsStyleManager } from '$stylist/form/class/style-manager/interaction-forms';
  import type { FormWithValidationProps } from '$stylist/form/interface/component/interaction-forms/other';
  let { email='', password='', class: className='', ...restProps }: FormWithValidationProps = $props();
  const emailValid = $derived(email.includes('@'));
  const passwordValid = $derived(password.length >= 8);
</script>
<form class={InteractionFormsStyleManager.root('c-form-with-validation border rounded-lg p-4 space-y-2', className)} {...restProps}>
  <input class="w-full border rounded px-2 py-1" placeholder="Email" value={email} />
  <div class={`text-xs ${emailValid?'text-[var(--color-success-600)]':'text-[var(--color-danger-600)]'}`}>{emailValid?'Valid email':'Enter valid email'}</div>
  <input class="w-full border rounded px-2 py-1" type="password" placeholder="Password" value={password} />
  <div class={`text-xs ${passwordValid?'text-[var(--color-success-600)]':'text-[var(--color-danger-600)]'}`}>{passwordValid?'Strong enough':'Min 8 chars'}</div>
</form>








<script lang="ts">
  import { InteractionFormsStyleManager } from '$stylist/design-system/styles/interaction-forms';
  import type { FormWithValidationProps } from '$stylist/design-system/props/interaction-forms';
  let { email='', password='', class: className='', ...restProps }: FormWithValidationProps = $props();
  const emailValid = $derived(email.includes('@'));
  const passwordValid = $derived(password.length >= 8);
</script>
<form class={InteractionFormsStyleManager.root('c-form-with-validation border rounded-lg p-4 space-y-2', className)} {...restProps}>
  <input class="w-full border rounded px-2 py-1" placeholder="Email" value={email} />
  <div class={`text-xs ${emailValid?'text-green-600':'text-red-600'}`}>{emailValid?'Valid email':'Enter valid email'}</div>
  <input class="w-full border rounded px-2 py-1" type="password" placeholder="Password" value={password} />
  <div class={`text-xs ${passwordValid?'text-green-600':'text-red-600'}`}>{passwordValid?'Strong enough':'Min 8 chars'}</div>
</form>

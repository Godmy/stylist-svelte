<script lang="ts">
  import { InteractionFormsStyleManager } from '$stylist/design-system/styles/interaction-forms';
  import type { LoginFormProps } from '$stylist/design-system/props/interaction-forms';
  let { email='', rememberMe=false, class: className='', ...restProps }: LoginFormProps = $props();
</script>
<form class={InteractionFormsStyleManager.root('c-login-form border rounded-lg p-4 space-y-3', className)} {...restProps}>
  <input class="w-full border rounded px-2 py-1" placeholder="Email" value={email} />
  <input class="w-full border rounded px-2 py-1" type="password" placeholder="Password" />
  <label class="text-sm flex items-center gap-2"><input type="checkbox" checked={rememberMe} /> Remember me</label>
  <button class="px-3 py-1 bg-blue-600 text-white rounded" type="submit">Sign in</button>
</form>

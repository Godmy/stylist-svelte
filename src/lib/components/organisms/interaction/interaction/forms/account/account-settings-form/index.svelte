<script lang="ts">
  import type { AccountSettingsFormProps } from '$stylist/design-system/props/account-forms';
  import { AccountFormsStyleManager } from '$stylist/design-system/styles/account-forms';
  let { name='John Doe', email='john@example.com', locale='en-US', class: className='', ...restProps }: AccountSettingsFormProps = $props();
</script>
<form class={AccountFormsStyleManager.root('c-account-settings-form border rounded-lg p-4 space-y-3', className)} {...restProps}>
  <div><label class="text-sm">Name</label><input class="w-full border rounded px-2 py-1" value={name} /></div>
  <div><label class="text-sm">Email</label><input class="w-full border rounded px-2 py-1" value={email} /></div>
  <div><label class="text-sm">Locale</label><input class="w-full border rounded px-2 py-1" value={locale} /></div>
  <button type="submit" class="px-3 py-1 bg-blue-600 text-white rounded">Save</button>
</form>

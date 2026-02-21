<script lang="ts">
  import type { AccountSettingsFormProps } from '$stylist/design-system/props/interaction/account-forms';
  import { AccountFormsStyleManager } from '$stylist/design-system/styles/interaction/account-forms';
  let { name='John Doe', email='john@example.com', locale='en-US', class: className='', ...restProps }: AccountSettingsFormProps = $props();
  const nameId = 'account-settings-name';
  const emailId = 'account-settings-email';
  const localeId = 'account-settings-locale';
</script>
<form class={AccountFormsStyleManager.root('c-account-settings-form border rounded-lg p-4 space-y-3', className)} {...restProps}>
  <div><label class="text-sm" for={nameId}>Name</label><input id={nameId} class="w-full border rounded px-2 py-1" value={name} /></div>
  <div><label class="text-sm" for={emailId}>Email</label><input id={emailId} class="w-full border rounded px-2 py-1" value={email} /></div>
  <div><label class="text-sm" for={localeId}>Locale</label><input id={localeId} class="w-full border rounded px-2 py-1" value={locale} /></div>
  <button type="submit" class="px-3 py-1 bg-blue-600 text-white rounded">Save</button>
</form>

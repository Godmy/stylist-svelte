<script lang="ts">
  import { createAccountSettingsFormState } from '$stylist/management/function/state/account-settings-form';
  import type { AccountSettingsFormProps } from '$stylist/form/interface/component/account-forms/other';

  let props: AccountSettingsFormProps = $props();
  const state = createAccountSettingsFormState(props);
</script>
<form class={state.containerClasses} {...state.restProps}>
  <div><label class="text-sm" for={state.nameId}>Name</label><input id={state.nameId} class="w-full border rounded px-2 py-1" value={state.name} /></div>
  <div><label class="text-sm" for={state.emailId}>Email</label><input id={state.emailId} class="w-full border rounded px-2 py-1" value={state.email} /></div>
  <div><label class="text-sm" for={state.localeId}>Locale</label><input id={state.localeId} class="w-full border rounded px-2 py-1" value={state.locale} /></div>
  <button type="submit" class="px-3 py-1 bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] rounded">Save</button>
</form>

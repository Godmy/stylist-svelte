<script lang="ts">
  import { createNotificationPreferencesState } from '$stylist/management/function/state/notification-preferences';
  import type { NotificationPreferencesProps } from '$stylist/communication/interface/component/notifications/other';

  let props: NotificationPreferencesProps & { email?: boolean; push?: boolean; sms?: boolean } = $props();
  const state = createNotificationPreferencesState(props);
</script>
<div class={state.containerClasses} {...state.restProps}>
  <div class="font-semibold mb-2">Notification Preferences</div>
  <label class="block text-sm"><input type="checkbox" checked={state.email} /> Email</label>
  <label class="block text-sm"><input type="checkbox" checked={state.push} /> Push</label>
  <label class="block text-sm"><input type="checkbox" checked={state.sms} /> SMS</label>
</div>

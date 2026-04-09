<script lang="ts">
  import type { NotificationPreferencesProps } from '$stylist/communication/interface/component/notifications/other';
  import { InteractionFeedbackStyleManager } from '$stylist/notification/class/style-manager/interaction-feedback';
  let { email = true, push = true, sms = false, class: className, ...restProps }: NotificationPreferencesProps & { email?: boolean; push?: boolean; sms?: boolean } = $props();
</script>
<div class={InteractionFeedbackStyleManager.root('c-notification-preferences border rounded-lg p-4', className != null ? String(className) : '')} {...restProps}>
  <div class="font-semibold mb-2">Notification Preferences</div>
  <label class="block text-sm"><input type="checkbox" checked={email} /> Email</label>
  <label class="block text-sm"><input type="checkbox" checked={push} /> Push</label>
  <label class="block text-sm"><input type="checkbox" checked={sms} /> SMS</label>
</div>








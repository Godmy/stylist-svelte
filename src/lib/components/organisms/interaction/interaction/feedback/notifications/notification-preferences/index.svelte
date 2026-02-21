<script lang="ts">
  import type { NotificationPreferencesProps } from '$stylist/design-system/props/interaction/interaction-feedback';
  import { InteractionFeedbackStyleManager } from '$stylist/design-system/styles/interaction/interaction-feedback';
  let { email = true, push = true, sms = false, class: className='', ...restProps }: NotificationPreferencesProps & { email?: boolean; push?: boolean; sms?: boolean } = $props();
</script>
<div class={InteractionFeedbackStyleManager.root('c-notification-preferences border rounded-lg p-4', className)} {...restProps}>
  <div class="font-semibold mb-2">Notification Preferences</div>
  <label class="block text-sm"><input type="checkbox" checked={email} /> Email</label>
  <label class="block text-sm"><input type="checkbox" checked={push} /> Push</label>
  <label class="block text-sm"><input type="checkbox" checked={sms} /> SMS</label>
</div>

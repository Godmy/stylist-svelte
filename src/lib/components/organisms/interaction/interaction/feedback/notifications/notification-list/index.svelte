<script lang="ts">
  import type { NotificationListProps } from '$stylist/design-system/props/interaction/interaction-feedback';
  import { InteractionFeedbackStyleManager } from '$stylist/design-system/styles/interaction/interaction-feedback';
  let { notifications = [], class: className='', ...restProps }: NotificationListProps = $props();
</script>
<div class={InteractionFeedbackStyleManager.root('c-notification-list border rounded-lg p-4 space-y-2', className)} {...restProps}>
  {#each notifications as n}<div class="border rounded p-2"><div class="font-medium">{n.title}</div>{#if n.message}<div class="text-sm text-gray-600">{n.message}</div>{/if}</div>{/each}
</div>

<script lang="ts">
  import type { NotificationListProps } from '$stylist/communication/interface/component/notifications/other';
  import { InteractionFeedbackStyleManager } from '$stylist/notification/class/style-manager/interaction-feedback';
  import type { HTMLAttributes } from 'svelte/elements';
  
  let { notifications = [], class: className, ...restProps }: NotificationListProps = $props();
  
  const safeRestProps: Omit<typeof restProps, 'class'> = restProps;
</script>
<div class={InteractionFeedbackStyleManager.root('c-notification-list border rounded-lg p-4 space-y-2', className != null ? String(className) : '')} {...safeRestProps as HTMLAttributes<HTMLDivElement>}>
  {#each notifications as n}<div class="border rounded p-2"><div class="font-medium">{n.title}</div>{#if n.message}<div class="text-sm text-[var(--color-text-secondary)]">{n.message}</div>{/if}</div>{/each}
</div>









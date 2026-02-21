<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import MessageComposer from './index.svelte';

  let lastSent = $state('none');
  let attachmentClicks = $state(0);
  let voiceClicks = $state(0);

  const controls: ControlConfig[] = [
    { name: 'placeholder', type: 'text', defaultValue: 'Type a message...' },
    { name: 'disabled', type: 'boolean', defaultValue: false },
    { name: 'showAttachmentButton', type: 'boolean', defaultValue: true },
    { name: 'showVoiceButton', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="molecules-message-composer"
  title="Molecules / Information / Messages / MessageComposer"
  component={MessageComposer}
  category="Molecules/Information/Messages"
  description="Message input with send, attach and voice actions."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-6 rounded-xl bg-gray-50 space-y-3">
      <MessageComposer
        placeholder={args.placeholder}
        disabled={args.disabled}
        showAttachmentButton={args.showAttachmentButton}
        showVoiceButton={args.showVoiceButton}
        onSendMessage={(text: string) => (lastSent = text)}
        onAttachmentClick={() => (attachmentClicks += 1)}
        onVoiceClick={() => (voiceClicks += 1)}
      />
      <p class="text-sm text-gray-600">Last sent: {lastSent}</p>
      <p class="text-sm text-gray-600">Attachment: {attachmentClicks} | Voice: {voiceClicks}</p>
    </div>
  {/snippet}
</Story>
